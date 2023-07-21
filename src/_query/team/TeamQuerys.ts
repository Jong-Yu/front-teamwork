import { useMutation, useQuery } from 'react-query';
import { teamQueryKeys } from './TeamQueryKeys';
import { createTeam, findMyTeam } from './api/TeamApi';
import { CreateTeamDto } from './model/CreateTeamDto';

export function useFindMyTeam() {
  return useQuery(teamQueryKeys.findMyTeam, findMyTeam);
}

export function useTeamCreate_Mutate() {
  return useMutation((cdo: CreateTeamDto) => createTeam(cdo));
}
