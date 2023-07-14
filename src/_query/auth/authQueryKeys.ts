export const authQueryKeys = {
  isValid: 'isValid',
  loginKakao: (code: string) => ['loginKakao', code],
} as const;
