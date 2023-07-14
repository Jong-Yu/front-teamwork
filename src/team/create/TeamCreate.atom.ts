import { atom } from 'jotai';

export const teamNameAtom = atom<string>('');

export const teamLogoAtom = atom<string>('');

export const teamDescAtom = atom<string>('');

export const resetAtom = atom(null, (_get, set) => {
  set(teamNameAtom, '');
  set(teamLogoAtom, '');
  set(teamDescAtom, '');
});
