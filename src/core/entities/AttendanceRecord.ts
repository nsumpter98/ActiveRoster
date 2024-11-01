//status enum
enum AttendanceStatus {
  PRESENT = "present",
  ABSENT = "absent",
  LATE = "late",
}

// attendance record entity
class AttendanceRecord {
  constructor(
    public id: string,
    public studentId: string,
    public groupId: string,
    public date: string,
    public status: AttendanceStatus
  ) {}

  // get status of record
  getStatus(): string {
    return this.status;
  }
}

export { AttendanceRecord, AttendanceStatus };
