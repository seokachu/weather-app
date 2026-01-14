export const TOAST_MESSAGES = {
  FAVORITE: {
    ADD: (name: string) => `${name}이(가) 추가되었습니다`,
    REMOVE: '즐겨찾기 목록에서 제거되었습니다.',
    LIMIT: '최대 6개까지만 가능합니다.',
    UPDATE: '이름이 변경되었습니다.',
  },
} as const;
