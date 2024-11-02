// students view component

import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

type Student = {
  id: string;
  name: string;
  photoAllowed: boolean;
  groupId: string;
};

type Group = {
  id: string;
  name: string;
  teacherId: string;
  color: string;
};

export const Students = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState("");
  const [photoAllowed, setPhotoAllowed] = useState(false);
  const [groupId, setGroupId] = useState("");
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const setTokenState = async () => {
      const token = await getAccessTokenSilently();
      setToken(token);
    };
    setTokenState();
  }, []);

  useEffect(() => {
    if (token !== "") {
      fetchStudents();
      fetchGroups();
    }
  }, [token]);

  const fetchStudents = async () => {
    const token = await getAccessTokenSilently();
    fetch(`${import.meta.env.VITE_SERVER_URL}/students`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  };

  const fetchGroups = async () => {
    const token = await getAccessTokenSilently();
    fetch(`${import.meta.env.VITE_SERVER_URL}/groups`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGroups(data);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_SERVER_URL}/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({ name, photoAllowed, groupId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStudents([...students, data]);
        setName("");
        setPhotoAllowed(false);
        setGroupId("");
      });
  };

  const handleDelete = (id: string) => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/student/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      setStudents(students.filter((student) => student.id !== id));
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Students</h1>
      <AddStudentForm
        name={name}
        setName={setName}
        photoAllowed={photoAllowed}
        setPhotoAllowed={setPhotoAllowed}
        groupId={groupId}
        setGroupId={setGroupId}
        groups={groups}
        handleSubmit={handleSubmit}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

const AddStudentForm = ({
  name,
  setName,
  photoAllowed,
  setPhotoAllowed,
  groupId,
  setGroupId,
  groups,
  handleSubmit,
}: {
  name: string;
  setName: (name: string) => void;
  photoAllowed: boolean;
  setPhotoAllowed: (photoAllowed: boolean) => void;
  groupId: string;
  setGroupId: (groupId: string) => void;
  groups: Group[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg my-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col">
        <label className="mb-2 text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Enter student's name"
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={photoAllowed}
          onChange={(e) => setPhotoAllowed(e.target.checked)}
        />
        <label className="text-gray-700">Photo Allowed</label>
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-gray-700">Group</label>
        <GroupSelect
          groups={groups}
          value={groupId}
          onChange={(value) => setGroupId(value)}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Student
      </button>
    </form>
  );
};

const GroupSelect = ({
  groups,
  value,
  onChange,
}: {
  groups: Group[];
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {groups.map((group) => (
        <option key={group.id} value={group.id}>
          {group.name}
        </option>
      ))}
    </select>
  );
};

const StudentCard = ({
  student,
  handleDelete,
}: {
  student: Student;
  handleDelete: (id: string) => void;
}) => {
  return (
    <div className="w-full p-4 mb-4 bg-white rounded-lg shadow-md flex items-center">
      <div className="flex-grow">
        <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
        <p className="text-gray-600">Group ID: {student.groupId}</p>
        <p className="text-gray-600">
          Photo Allowed: {student.photoAllowed ? "Yes" : "No"}
        </p>
      </div>
      <button
        className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => handleDelete(student.id)}
      >
        Delete
      </button>
    </div>
  );
};
