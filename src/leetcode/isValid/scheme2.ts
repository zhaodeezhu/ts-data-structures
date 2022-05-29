/**
 * 检验括号是否有效
 * ([{}])
 * ()[]{}
 * (([]{}))
 * (]
 * ([[])
 */
export function isValid(s: string): boolean {
  let len = 0;
  do {
    len = s.length;
    s = s.replace('()', '').replace('[]', '').replace('{}', '');
  } while(len !== s.length);
  return s.length === 0;
}