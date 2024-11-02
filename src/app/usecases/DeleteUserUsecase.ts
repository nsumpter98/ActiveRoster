import { IStudentRepository } from "../../core/repositories/IStudentRepository";
import { Student } from "../../core/entities/Student";

// delete student usecase
class DeleteStudentUsecase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}

export { DeleteStudentUsecase };
