import getPathFromTitle from '#utils/notion/getPathFromTitle';

describe('getPathFromTitle 기능 테스트', () => {
  it('공백을 "-"로 대체체한다.', () => {
    expect(getPathFromTitle('this is test')).toBe('this-is-test');
  });
  it('알파벳, 숫자, 한글, "-" 를 제외한 모든 문자를 제거한다.', () => {
    expect(getPathFromTitle('this!@#is$%^test')).toBe('thisistest');
  });
  it('두 개 이상의 연속된 "-"를 하나의 "-"로 대체한다.', () => {
    expect(getPathFromTitle('this--is--test')).toBe('this-is-test');
  });
  it('문자열 끝에 있는 "-"를 제거한다.', () => {
    expect(getPathFromTitle('this-is-test-')).toBe('this-is-test');
  });
  it('문자열 시작에 있는 "-"를 제거한다.', () => {
    expect(getPathFromTitle('-this-is-test')).toBe('this-is-test');
  });
  it('모든 알파벳 대문자를 소문자로 교체한다.', () => {
    expect(getPathFromTitle('This-is-Test')).toBe('this-is-test');
  });
});
