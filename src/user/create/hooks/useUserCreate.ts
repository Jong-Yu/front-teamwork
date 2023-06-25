import { useAtom, useSetAtom } from 'jotai';
import {
  resetAtom,
  userAgeAtom,
  userEmailAtom,
  userNameAtom,
  userPhone2Atom,
  userPhone3Atom,
  userPhoneAtom,
} from '../UserCreate.atom';
import { useCreaetUser_Mutate } from '../../../_query/user/UserQuerys';

export function useUserCreate() {
  // atom
  const [userName, setUserName] = useAtom(userNameAtom);
  const [userEmail, setUserEmail] = useAtom(userEmailAtom);
  const [userPhone, setUserPhone] = useAtom(userPhoneAtom);
  const [userPhone2, setUserPhone2] = useAtom(userPhone2Atom);
  const [userPhone3, setUserPhone3] = useAtom(userPhone3Atom);
  const [userAge, setUserAge] = useAtom(userAgeAtom);
  const reset = useSetAtom(resetAtom);

  // hooks
  const { mutateAsync: createUser } = useCreaetUser_Mutate();

  // handle
  const onChangeName = (name: string) => {
    setUserName(name);
  };

  const onChangeEmail = (email: string) => {
    setUserEmail(email);
  };

  const onChangePhone = (phone: string) => {
    setUserPhone(phone);
  };

  const onChangePhone2 = (phone2: string) => {
    setUserPhone2(phone2.length > 4 ? phone2.substring(0, 4) : phone2);
  };

  const onChangePhone3 = (phone3: string) => {
    setUserPhone3(phone3.length > 4 ? phone3.substring(0, 4) : phone3);
  };

  const onChagneAge = (age: number) => {
    setUserAge(age);
  };

  const onClickReset = () => {
    reset();
  };

  const onClickCreate = async () => {
    try {
      await createUser({
        name: userName,
        email: userEmail,
        phone: `${userPhone}-${userPhone2}-${userPhone3}`,
        age: userAge,
      });
    } catch (e: any) {
      console.log(e.message);
      alert('오류 발생');
    }

    alert('생성 성공');
  };

  return {
    userName,
    userEmail,
    userPhone,
    userPhone2,
    userPhone3,
    userAge,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePhone2,
    onChangePhone3,
    onChagneAge,
    onClickReset,
    onClickCreate,
  };
}
