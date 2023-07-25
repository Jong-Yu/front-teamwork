import { ScheduleDto } from '../../../../_query/schedule/model/ScheduleDto';

interface ScheduleCardProps {
  schedule: ScheduleDto;
}

export const ScheduleCard = ({ schedule }: ScheduleCardProps) => {
  return <div>{schedule.id}</div>;
};
