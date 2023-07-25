import { atom } from 'jotai';

/**
 * @description 일정 생성 모달 오픈 여부
 */
export const openAtom = atom<boolean>(false);

/**
 * @description 일정 생성 Reset
 */
export const resetAtom = atom(null, (_get, set) => {
  set(openAtom, false);
});
