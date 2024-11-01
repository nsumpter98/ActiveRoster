// student entity
class Student {
  constructor(
    public id: string,
    public name: string,
    public photoAllowed: boolean,
    public groupId: string
  ) {}
}

export { Student };
