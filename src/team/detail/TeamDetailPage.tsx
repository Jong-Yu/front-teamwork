import styled from '@emotion/styled';
import { Tab } from '../../_shared/ui/Tab/Tab';
import { TabItem } from '../../_shared/ui/Tab/components/TabItem';
import { useTeamDetail } from './hooks/useTeamDetail';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { Schedule } from './components/Schedule';
import { Member } from './components/Member';

const Container = styled.div({
  height: 'calc(100vh - 105px)',
});

const Contents = styled.div({
  marginTop: '15px',
});

export const TeamDetailPage = () => {
  // hooks
  const { team, tabId, onClickTab } = useTeamDetail();

  return (
    <>
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
      <Container className="container container--default">
        <Contents>
          {tabId === 'info' && <Info team={team} />}
          {tabId === 'schedule' && <Schedule />}
          {tabId === 'member' && <Member />}
        </Contents>
      </Container>
    </>
  );
};
