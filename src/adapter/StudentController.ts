import { Request, Response } from "express";
import { IStudentRepository } from "../core/repositories/IStudentRepository";
import {
  ListStudentUsecase,
  CreateStudentUsecase,
  GetStudentByIdUsecase,
  UpdateStudentUsecase,
  DeleteStudentUsecase,
} from "../app/usecases";

// student controller
class StudentController {
  constructor(private studentRepository: IStudentRepository) {}

  // create student
  async create(req: Request, res: Response) {
    try {
      // create student
      const createStudentUsecase = new CreateStudentUsecase(
        this.studentRepository
      );
      const { name, photoAllowed, groupId } = req.body;
      const result = await createStudentUsecase.execute(
        name,
        photoAllowed,
        groupId
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // get student
  get(req: Request, res: Response) {
    try {
      // get student
      const getStudentByIdUsecase = new GetStudentByIdUsecase(
        this.studentRepository
      );
      const studentId = req.params.studentId;
      const student = getStudentByIdUsecase.execute(studentId);
      res.status(200).json(student);
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
      const updateStudentUsecase = new UpdateStudentUsecase(
        this.studentRepository
      );
      const { studentId, name, photoAllowed, groupId } = req.body;
      const result = updateStudentUsecase.execute(
        studentId,
        name,
        photoAllowed,
        groupId
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // delete student
  delete(req: Request, res: Response) {
    try {
      // delete student
      const deleteStudentUsecase = new DeleteStudentUsecase(
        this.studentRepository
      );
      const studentId = req.params.studentId;
      deleteStudentUsecase.execute(studentId);
      res.status(204).json();
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }
}

export { StudentController };
