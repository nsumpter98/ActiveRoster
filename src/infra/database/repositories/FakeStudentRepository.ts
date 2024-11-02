import { IStudentRepository } from "../../../core/repositories/IStudentRepository";
import { Student } from "../../../core/entities/Student";

// student repository
class FakeStudentRepository implements IStudentRepository {
  private students: Map<string, Student> = new Map();

  constructor() {
    this.seed();
  }

  async save(student: Student): Promise<string> {
    this.students.set(student.getId(), student);
    return student.getId();
  }

  async findAll(): Promise<Student[]> {
    return Array.from(this.students.values());
  }

  async findById(id: string): Promise<Student | null> {
    return this.students.get(id) || null;
  }

  async delete(id: string): Promise<void> {
    this.students.delete(id);
  }

  //seed function to add some dummy data
  seed() {
    const student1 = new Student("John Doe", true, "1");
    student1.setId("1");
    this.save(student1);

    const student2 = new Student("Jane Doe", false, "1");
    student2.setId("2");
    this.save(student2);
  }
}

export { FakeStudentRepository };
