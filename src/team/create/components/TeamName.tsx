import { SubTitle } from './SubTitle';
import { Input } from '../../../_shared/ui/Input/Input';
import { useTeamName } from '../hooks/useTeamName';

export const TeamName = () => {
  // hooks
  const { ref, name, error, onChangeName } = useTeamName();

  return (
    <>
      <SubTitle subTitle={`팀 이름을 \n입력해 주세요.`} />
      <Input ref={ref} value={name} onChange={onChangeName} error={error} />
    </>
  );
};
