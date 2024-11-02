// react groups page

import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Groups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function getToken() {
      const token = await getAccessTokenSilently();
      return token;
    }

    getToken().then((token) => {
      fetch(import.meta.env.VITE_SERVER_URL + "/groups", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setGroups(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-10">Groups</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {groups.map((group) => (
            <li key={group.id}>{group.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
