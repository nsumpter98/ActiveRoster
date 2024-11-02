// student repository interface
import { Student } from "../entities/Student";

export interface IStudentRepository {
  save(student: Student): Promise<string>;
  findAll(): Promise<Student[]>;
  findById(id: string): Promise<Student | null>;
  delete(id: string): Promise<void>;
}
