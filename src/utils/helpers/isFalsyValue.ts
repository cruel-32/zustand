// 0이 아닌 falsy인지 확인하는 함수
export const falsyValues = [false, null, undefined, NaN, ''];
export const isFalsyValue = (value: string | number | boolean | undefined | null) => {
  if (typeof value === 'string') {
    return falsyValues.includes(value.trim());
  }
  return falsyValues.includes(value);
};
