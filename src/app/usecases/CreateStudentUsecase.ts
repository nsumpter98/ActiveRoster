import { IStudentRepository } from "../../core/repositories/IStudentRepository";
import { Student } from "../../core/entities/Student";

// create student usecase
class CreateStudentUsecase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(name: string, photoAllowed: boolean, groupId: string): Promise<Student> {
    const student = new Student(name, photoAllowed, groupId);
    const newId = await this.studentRepository.save(student);
    student.setId(newId);

    return student;
  }
}

export { CreateStudentUsecase };