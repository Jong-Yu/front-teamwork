export const authQueryKeys = {
  isValid: 'isValid' as const,
  loginKakao: (code: string) => ['loginKakao', code] as const,
} as const;
