// Register routes for the express app

import { Express } from "express";

// controller imports
import { AttendanceRecordController } from "../../adapter/AttendanceRecordController";
import { GroupController } from "../../adapter/GroupController";
import { StudentController } from "../../adapter/StudentController";

// repository imports
import { FakeStudentRepository } from "../database/repositories/FakeStudentRepository";

// register routes
const RegisterRoutes = (app: Express) => {
  const attendanceRecordController = new AttendanceRecordController();

  app.post("/attendance-record", attendanceRecordController.create);
  app.get("/attendance-record", attendanceRecordController.get);
  app.put("/attendance-record", attendanceRecordController.update);
  app.delete("/attendance-record", attendanceRecordController.delete);

  const groupController = new GroupController();

  app.post("/group", groupController.create);
  app.get("/group/:groupId", groupController.get);
  app.get("/groups", groupController.list);
  app.put("/group", groupController.update);
  app.delete("/group/:groupId", groupController.delete);

  const studentRepository = new FakeStudentRepository();
  const studentController = new StudentController(studentRepository);

  app.get("/students", (req, res) => studentController.list(req, res));
  app.post("/student", (req, res) => studentController.create(req, res));
  app.get("/student/:studentId", (req, res) => studentController.get(req, res));
  app.put("/student", (req, res) => studentController.update(req, res));
  app.delete("/student/:studentId", (req, res) =>
    studentController.delete(req, res)
  );
};

export { RegisterRoutes };
