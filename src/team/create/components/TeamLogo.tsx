import { Input } from '../../../_shared/ui/Input/Input';
import { useTeamLogo } from '../hooks/useTeamLogo';
import { SubTitle } from './SubTitle';

export const TeamLogo = () => {
  // hooks
  const { ref, logo, error, onChangeLogo } = useTeamLogo();

  return (
    <>
      <SubTitle subTitle="팀 로고 (개발중)" />
      <Input ref={ref} value={logo} onChange={onChangeLogo} error={error} />
    </>
  );
};
