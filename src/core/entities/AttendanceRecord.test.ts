import { AttendanceRecord, AttendanceStatus } from "./AttendanceRecord";

// test cases
describe("AttendanceRecord", () => {
  it("should create an instance of AttendanceRecord", () => {
    const record = new AttendanceRecord(
      "1",
      "1",
      "1",
      "2021-01-01",
      AttendanceStatus.PRESENT
    );
    expect(record).toBeInstanceOf(AttendanceRecord);
  });

  it("should get status of record", () => {
    const record = new AttendanceRecord(
      "1",
      "1",
      "1",
      "2021-01-01",
      AttendanceStatus.PRESENT
    );
    expect(record.getStatus()).toBe(AttendanceStatus.PRESENT);
  });

  it("should get a string status of record", () => {
    const record = new AttendanceRecord(
      "1",
      "1",
      "1",
      "2021-01-01",
      AttendanceStatus.PRESENT
    );
    expect(record.getStatus()).toBe("present");
  });
});
