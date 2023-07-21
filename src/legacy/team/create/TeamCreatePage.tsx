import { useTeamCreate } from './hooks/useTeamCreate';

export const TeamCreatePage = () => {
  // hooks
  const {
    name,
    logo,
    desc,
    onChangeName,
    onChangeLogo,
    onChangeDesc,
    onClickReset,
    onClickCreate,
  } = useTeamCreate();

  return (
    <div>
      <h1>팀 생성</h1>
      <label htmlFor="name">이름 : </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => onChangeName(e.target.value)}
      />
      <br />
      <label htmlFor="logo">logo : </label>
      <input
        type="text"
        name="logo"
        value={logo}
        onChange={e => onChangeLogo(e.target.value)}
      />
      <br />
      <label htmlFor="desc">팀 설명 : </label>
      <input
        type="text"
        name=""
        value={desc}
        onChange={e => onChangeDesc(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={onClickReset}>
        초기화
      </button>
      <button type="button" onClick={onClickCreate}>
        생성
      </button>
    </div>
  );
};
