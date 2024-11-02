import { IStudentRepository } from "../../core/repositories/IStudentRepository";
import { Student } from "../../core/entities/Student";

// list student usecase
class ListStudentUsecase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(): Promise<Student[]> {
    return this.studentRepository.findAll();
  }
}

export { ListStudentUsecase };