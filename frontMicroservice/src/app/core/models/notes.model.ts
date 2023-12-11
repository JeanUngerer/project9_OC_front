export interface Notes {
  _id: number | null;

  patientId: number;

  dateTime: Date | null;

  note: string;
}
