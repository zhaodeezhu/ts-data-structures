import { Stack } from './index';

interface BaseConverterFunction {
  (num: number, base: number): string;
}

const baseConverter: BaseConverterFunction = (num, base) => {
  if (base < 2 || base > 36) {
    return '';
  }
  const digits = '0123456789ABCDEFGHIGKLMNOPQRSTUVWXUZ';
  const remStack = new Stack<number>();
  let result = '';
  while (num > 0) {
    const rem = Math.floor(num % base);
    remStack.push(rem);
    num = Math.floor(num / base);
  }

  while (!remStack.isEmpty()) {
    result += digits[remStack.pop() as number];
  }

  return result;
}

const result = baseConverter(255, 16);

console.log(result);