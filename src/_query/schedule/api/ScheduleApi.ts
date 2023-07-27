import { getAxios } from '../../../_shared/util/Axios/axios.util';
import { ScheduleDto } from '../model/ScheduleDto';

export function findScheduleById(teamId: string) {
  // hooks
  const { get, axiosReturn } = getAxios();

  return get<ScheduleDto[]>('/schedule/findScheduleById', {
    params: { teamId },
  }).then(axiosReturn);
}
