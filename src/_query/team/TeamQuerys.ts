import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSetAtom } from 'jotai';
import { createTeam, findMyTeam } from './api/TeamApi';
import { CreateTeamDto } from './model/CreateTeamDto';
import { teamQueryKeys } from './TeamQueryKeys';
import { resetAtom } from '../../team/create/TeamCreateModal.atom';

export function useFindMyTeam() {
  return useQuery(teamQueryKeys.findMyTeam, findMyTeam);
}

export function useTeamCreate_Mutate() {
  // atom
  const reset = useSetAtom(resetAtom);
  // hooks
  const queryClient = useQueryClient();

  return useMutation((cdo: CreateTeamDto) => createTeam(cdo), {
    onSuccess: () => {
      queryClient.invalidateQueries(teamQueryKeys.findMyTeam);
      reset();
    },
    onError: () => {
      alert('error');
    },
  });
}
