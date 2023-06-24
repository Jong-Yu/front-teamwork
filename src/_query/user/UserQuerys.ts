import { useQuery } from 'react-query';
import { userQueryKeys } from './UserQueryKeys';
import { getUsers } from './apis/UserApi';

export function useGetUsers() {
  //
  return useQuery(userQueryKeys.getUsers, () => getUsers());
}
