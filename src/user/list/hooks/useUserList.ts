import { useGetUsers } from '../../../_query/user/UserQuerys';

export function useUserList() {
  const { data: users, isLoading } = useGetUsers();

  return {
    users: users || [],
    isLoading,
  };
}
