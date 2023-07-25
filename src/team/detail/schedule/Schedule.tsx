import styled from '@emotion/styled';
import { FixedCreateButton } from './components/FixedCreateButton';
import { useSchedule } from './hooks/useSchedule';
import { ScheduleEmpty } from './components/ScheduleEmpty';
import { ScheduleCard } from './components/ScheduleCard';
import { ScheduleCreateModal } from './create/ScheduleCreateModal';

const Container = styled.div({});

export const Schedule = () => {
  // hooks
  const { schedules } = useSchedule();

  return (
    <Container>
      {(!schedules || schedules.length === 0) && <ScheduleEmpty />}

      {schedules && schedules.length > 0 && (
        <>
          <span>TODO : 일정 Filter</span>

          {schedules?.map(schedule => (
            <ScheduleCard key={schedule.id} schedule={schedule} />
          ))}

          <FixedCreateButton />
        </>
      )}

      <ScheduleCreateModal />
    </Container>
  );
};
