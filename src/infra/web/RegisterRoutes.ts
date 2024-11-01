// Register routes for the express app

import { Express } from "express";

// controller imports
import { AttendanceRecordController } from "../../adapter/AttendanceRecordController";

// register routes
const RegisterRoutes = (app: Express) => {
  const attendanceRecordController = new AttendanceRecordController();

  app.post("/attendance-record", attendanceRecordController.create);
  app.get("/attendance-record", attendanceRecordController.get);
  app.put("/attendance-record", attendanceRecordController.update);
  app.delete("/attendance-record", attendanceRecordController.delete);
};

export { RegisterRoutes };
