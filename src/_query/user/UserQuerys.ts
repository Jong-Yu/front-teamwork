import { useMutation, useQuery } from 'react-query';
import { userQueryKeys } from './UserQueryKeys';
import { createUesr, getUsers } from './apis/UserApi';
import { CreateUserDTO } from './models/CreateUserDTO';

export function useGetUsers() {
  return useQuery(userQueryKeys.getUsers, () => getUsers());
}

export function useCreaetUser_Mutate() {
  return useMutation((dto: CreateUserDTO) => createUesr(dto));
}
