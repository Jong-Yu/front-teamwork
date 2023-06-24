import { useUserList } from './hooks/useUserList';

export const UserListPage = () => {
  // hooks
  const { users } = useUserList();

  return (
    <>
      <h1>User 목록</h1>

      {users.length > 0 ? (
        <>
          {users.map(user => (
            <tr>
              <td>{user.name || ''}</td>
              <td>{user.email}</td>
              <td>{user.phone || '-'}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </>
      ) : (
        <>
          <tr>
            <td colSpan={4}>검색결과 없음.</td>
          </tr>
        </>
      )}
    </>
  );
};
