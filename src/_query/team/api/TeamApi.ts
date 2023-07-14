import { getAxios } from '../../../_shared/util/Axios/axios.util';
import { CreateTeamDto } from '../model/CreateTeamDto';
import { TeamDto } from '../model/TeamDto';

export function createTeam(createTeamDto: CreateTeamDto) {
  const { post, axiosReturn } = getAxios();

  return post<string>('/api/team/create', createTeamDto).then(axiosReturn);
}

export function findMyTeam() {
  const { get, axiosReturn } = getAxios();

  return get<TeamDto[]>('/api/team/findMyTeam').then(axiosReturn);
}
