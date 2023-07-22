import { atom } from 'jotai';

/**
 * @description 팀 생성 모달 오픈 여부
 */
export const openAtom = atom<boolean>(false);

/**
 * @description 팀 이름
 */
export const nameAtom = atom<string>('');

/**
 * @description 팀 이름 에러
 */
export const nameErrorAtom = atom<boolean>(false);

/**
 * @description 팀 로고
 */
export const logoAtom = atom<string>('');

/**
 * @description 팀 로고 에러
 */
export const logoErrorAtom = atom<boolean>(false);

/**
 * @description 팀 설명
 */
export const descAtom = atom<string>('');

/**
 * @description 팀 설명 에러
 */
export const descErrorAtom = atom<boolean>(false);

/**
 * @description 팀 생성 Reset
 */
export const resetAtom = atom(null, (_get, set) => {
  set(openAtom, false);
  set(nameAtom, '');
  set(nameErrorAtom, false);
  set(logoAtom, '');
  set(logoErrorAtom, false);
  set(descAtom, '');
  set(descErrorAtom, false);
});
