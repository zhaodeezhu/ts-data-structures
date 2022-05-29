/**
 * 检验括号是否有效
 * ([{}])
 * ()[]{}
 * (([]{}))
 * (]
 * ([[])
 */
export function isValid(s: string): boolean {
  const stark = [];
  const map: {[key: string]: string} = {
    ")": "(",
    "]": "[",
    "}": "{"
  }
  for (const key of s) {
    const value = map[key];
    if (!value) {
      stark.push(key);
    } else {
      const peek = stark[stark.length - 1];
      if (value === peek) {
        stark.pop();
      } else {
        return false;
      }
    }
  }
  if(stark.length > 0) {
    return false;
  } else {
    return true;
  }
}