// student entity
class Student {
  private id: string = '';

  constructor(
    public name: string,
    public photoAllowed: boolean,
    public groupId: string
  ) {}

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }
}

export { Student };
