import { useParams } from 'react-router-dom';
import { useFindScheduleById } from '../../../../_query/schedule/ScheduleQuerys';

export function useSchedule() {
  // hooks
  const params = useParams<{ teamId: string }>();

  const { data: schedules } = useFindScheduleById(params.teamId || '');

  return {
    schedules,
  };
}
