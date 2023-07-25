import { atom } from 'jotai';

export const userNameAtom = atom<string>('');

export const userEmailAtom = atom<string>('');

export const userPhoneAtom = atom<string>('010');

export const userPhone2Atom = atom<string>('');

export const userPhone3Atom = atom<string>('');

export const userAgeAtom = atom<number>(0);

export const resetAtom = atom(null, (_, set) => {
  set(userNameAtom, '');
  set(userEmailAtom, '');
  set(userPhoneAtom, '010');
  set(userPhone2Atom, '');
  set(userPhone3Atom, '');
  set(userAgeAtom, 0);
});
