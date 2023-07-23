import styled from '@emotion/styled';
import { Tab } from '../../_shared/ui/Tab/Tab';
import { TabItem } from '../../_shared/ui/Tab/components/TabItem';
import { useTeamDetail } from './hooks/useTeamDetail';
import { Header } from './components/Header';

const Container = styled.div({
  height: 'calc(100vh - 60px)',
  padding: '0 30px',
});

export const TeamDetailPage = () => {
  // hooks
  const { team, tabId, onClickTab } = useTeamDetail();

  return (
    <Container>
      <Header title={team?.name || ''} />
      <Tab>
        <TabItem active={tabId === 'info'} onClick={() => onClickTab('info')}>
          팀 정보
        </TabItem>
        <TabItem
          active={tabId === 'schedule'}
          onClick={() => onClickTab('schedule')}
        >
          일정
        </TabItem>
        <TabItem
          active={tabId === 'member'}
          onClick={() => onClickTab('member')}
        >
          멤버
        </TabItem>
      </Tab>
    </Container>
  );
};
