import { Request, Response } from "express";
import { IStudentRepository } from "../core/repositories/IStudentRepository";
import { ListStudentUsecase } from "../app/usecases/ListStudentUsecase";

// student controller
class StudentController {
  constructor(private studentRepository: IStudentRepository) {}

  // create student
  create(req: Request, res: Response) {
    try {
      // create student
      res.status(201).json({ message: "Student created" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // get student
  get(req: Request, res: Response) {
    try {
      // get student
      res.status(200).json({ message: "Student retrieved" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // list students
  async list(req: Request, res: Response) {
    try {
      // list students
      const listStudentUsecase = new ListStudentUsecase(this.studentRepository);
      const students = await listStudentUsecase.execute();
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // update student
  update(req: Request, res: Response) {
    try {
      // update student
      res.status(200).json({ message: "Student updated" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // delete student
  delete(req: Request, res: Response) {
    try {
      // delete student
      res.status(204).json({ message: "Student deleted" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }
}

export { StudentController };
