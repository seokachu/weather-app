/**
 * Date 객체를 YYYYMMDD 형식의 문자열로 포맷팅 하는 유틸 함수
 */

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(date)
    .replace(/\. /g, '')
    .replace(/\./g, '');
};
