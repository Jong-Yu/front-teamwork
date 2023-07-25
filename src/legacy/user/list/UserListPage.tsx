import { Container } from '../../_shared/ui/Container/Container';
import { Table } from '../../_shared/ui/Table';
import { useUserList } from './hooks/useUserList';

export const UserListPage = () => {
  // hooks
  const { users } = useUserList();

  return (
    <Container>
      <div className="container--inner">
        <h1>User 목록</h1>

        <Table style={{ width: '100%', border: '1px solid #000' }}>
          <colgroup>
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
          </colgroup>
          <Table.Head>
            <Table.Row>
              <Table.Header>이름</Table.Header>
              <Table.Header>이메일</Table.Header>
              <Table.Header>전화번호</Table.Header>
              <Table.Header>나이</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {users.length > 0 ? (
              <>
                {users.map(user => (
                  <Table.Row>
                    <Table.Data>{user.name || ''}</Table.Data>
                    <Table.Data>{user.email}</Table.Data>
                    <Table.Data>{user.phone || '-'}</Table.Data>
                    <Table.Data>{user.age}</Table.Data>
                  </Table.Row>
                ))}
              </>
            ) : (
              <>
                <Table.Row>
                  <Table.Data
                    colSpan={4}
                    style={{ height: '300px', textAlign: 'center' }}
                  >
                    검색결과 없음.
                  </Table.Data>
                </Table.Row>
              </>
            )}
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
};
