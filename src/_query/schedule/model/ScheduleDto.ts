export interface ScheduleDto {
  id: string;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  location_detail: string;
  min_attend?: number;
  registred_date: Date;
}
