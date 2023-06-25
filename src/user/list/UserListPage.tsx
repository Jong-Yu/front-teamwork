import { useUserList } from './hooks/useUserList';

export const UserListPage = () => {
  // hooks
  const { users } = useUserList();

  return (
    <>
      <h1>User 목록</h1>

      <table style={{ minWidth: '800px', border: '1px solid #000' }}>
        <colgroup>
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
        </colgroup>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>전화번호</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody>
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
                <td
                  colSpan={4}
                  style={{ height: '300px', textAlign: 'center' }}
                >
                  검색결과 없음.
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};
