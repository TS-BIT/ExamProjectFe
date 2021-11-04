interface IRecord {
  id: number;
  from_town: string;
  airline: string;
  arrival_time: string;
  // arrival_time: date;
  is_late: number;
}

export { IRecord }
