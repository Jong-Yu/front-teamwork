import { getAxios } from '../../../_shared/util/Axios/axios.util';
import { CreateTeamDto } from '../model/CreateTeamDto';
import { TeamDto } from '../model/TeamDto';

export function createTeam(createTeamDto: CreateTeamDto) {
  const { post, axiosReturn } = getAxios();

  return post<string>('/team/create', createTeamDto).then(axiosReturn);
}

export function findMyTeam() {
  const { get, axiosReturn } = getAxios();

  return get<TeamDto[]>('/team/findMyTeam').then(axiosReturn);
}

export function findTeamById(teamId: string) {
  const { get, axiosReturn } = getAxios();

  return get<TeamDto>('/team/findTeamById', {
    params: { id: teamId },
  }).then(axiosReturn);
}
