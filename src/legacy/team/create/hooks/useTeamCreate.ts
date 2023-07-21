import { useAtom, useSetAtom } from 'jotai';
import {
  resetAtom,
  teamDescAtom,
  teamLogoAtom,
  teamNameAtom,
} from '../TeamCreate.atom';
import { useTeamCreate_Mutate } from '../../../../_query/team/TeamQuerys';

export function useTeamCreate() {
  // atom
  const [name, setName] = useAtom(teamNameAtom);
  const [logo, setLogo] = useAtom(teamLogoAtom);
  const [desc, setDesc] = useAtom(teamDescAtom);
  const reset = useSetAtom(resetAtom);

  // hooks
  const { mutateAsync: createTeam } = useTeamCreate_Mutate();

  // handle
  const onChangeName = (name: string) => {
    setName(name);
  };

  const onChangeLogo = (logo: string) => {
    setLogo(logo);
  };

  const onChangeDesc = (desc: string) => {
    setDesc(desc);
  };

  const onClickReset = () => {
    reset();
  };

  const onClickCreate = async () => {
    try {
      await createTeam({
        name,
        logo,
        desc,
      });
    } catch (e: any) {
      console.log(e.message);
      alert('오류 발생');

      return;
    }

    alert('생성 성공');
    reset();
  };

  return {
    name,
    logo,
    desc,
    onChangeName,
    onChangeLogo,
    onChangeDesc,
    onClickReset,
    onClickCreate,
  };
}
