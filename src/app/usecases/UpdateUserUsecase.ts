import { IStudentRepository } from "../../core/repositories/IStudentRepository";
import { Student } from "../../core/entities/Student";

// update student usecase
class UpdateStudentUsecase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(
    id: string,
    name: string,
    photoAllowed: boolean,
    groupId: string
  ): Promise<Student | null> {
    const student = await this.studentRepository.findById(id);
    if (!student) {
      return null;
    }

    student.name = name;
    student.photoAllowed = photoAllowed;
    student.groupId = groupId;

    await this.studentRepository.save(student);

    return student;
  }
}

export { UpdateStudentUsecase };
