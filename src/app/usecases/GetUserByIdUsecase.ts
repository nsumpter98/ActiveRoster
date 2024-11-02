import { IStudentRepository } from "../../core/repositories/IStudentRepository";
import { Student } from "../../core/entities/Student";

// find student by id usecase
class GetStudentByIdUsecase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(id: string): Promise<Student | null> {
    return this.studentRepository.findById(id);
  }
}

export { GetStudentByIdUsecase };
