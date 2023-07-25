import { useQuery } from 'react-query';
import { scheduleQueryKeys } from './ScheduleQueryKeys';
import { findScheduleById } from './api/ScheduleApi';

export function useFindScheduleById(teamId: string) {
  return useQuery(
    scheduleQueryKeys.findScheduleById(teamId),
    () => findScheduleById(teamId),
    {
      enabled: teamId !== '',
    },
  );
}
