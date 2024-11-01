import { Request, Response } from "express";

// attendance record controller
class AttendanceRecordController {
  // create attendance record
  create(req: Request, res: Response) {
    try {
      // create attendance record
      res.status(201).json({ message: "Attendance record created" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // get attendance record
  get(req: Request, res: Response) {
    try {
      // get attendance record
      res.status(200).json({ message: "Attendance record retrieved" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // update attendance record
  update(req: Request, res: Response) {
    try {
      // update attendance record
      res.status(200).json({ message: "Attendance record updated" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // delete attendance record
  delete(req: Request, res: Response) {
    try {
      // delete attendance record
      res.status(204).json({ message: "Attendance record deleted" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }
}

export { AttendanceRecordController };
