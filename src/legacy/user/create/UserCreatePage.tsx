import { useUserCreate } from './hooks/useUserCreate';

export const UserCreatePage = () => {
  // hooks
  const {
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
  } = useUserCreate();

  return (
    <>
      <h1>유저 생성</h1>
      <label htmlFor="name">이름 : </label>
      <input
        type="text"
        name="name"
        value={userName}
        onChange={e => onChangeName(e.target.value)}
      />
      <br />
      <label htmlFor="email">이메일 : </label>
      <input
        type="text"
        name="email"
        value={userEmail}
        onChange={e => onChangeEmail(e.target.value)}
      />
      <br />
      <label htmlFor="phone">전화번호 : </label>
      <select
        name="phone"
        value={userPhone}
        onChange={e => onChangePhone(e.target.value)}
      >
        <option value="010">010</option>
        <option value="011">011</option>
      </select>
      -
      <input
        type="text"
        value={userPhone2}
        onChange={e => onChangePhone2(e.target.value)}
      />
      -
      <input
        type="text"
        value={userPhone3}
        onChange={e => onChangePhone3(e.target.value)}
      />
      <br />
      <label htmlFor="age">나이 : </label>
      <input
        type="number"
        name="age"
        min={0}
        max={120}
        value={userAge}
        onChange={e => onChagneAge(parseInt(e.target.value, 10))}
      />
      <br />
      <br />
      <button type="button" onClick={onClickReset}>
        초기화
      </button>
      <button type="button" onClick={onClickCreate}>
        생성
      </button>
    </>
  );
};
