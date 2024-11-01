import { Student } from "./Student";

// gym group entity
class Group {
  constructor(
    public id: string,
    public name: string,
    public teacherId: string,
    public color: string,
    public students: Student[]
  ) {}
}

export { Group };
