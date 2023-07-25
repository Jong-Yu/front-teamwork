import { TextArea } from '../../../_shared/ui/TextArea/TextArea';
import { useTeamDesc } from '../hooks/useTeamDesc';
import { SubTitle } from './SubTitle';

export const TeamDesc = () => {
  // hooks
  const { ref, desc, error, onChangeDesc } = useTeamDesc();

  return (
    <>
      <SubTitle subTitle="팀 설명" />
      <TextArea
        ref={ref}
        rows={5}
        value={desc}
        error={error}
        onChange={onChangeDesc}
      />
    </>
  );
};
