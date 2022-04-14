import { Queue } from './Queue';
import { Deque } from './Deque';

/** 击鼓传花 */
export function hotPotato<T>(list: T[], num: number) {
  const queueList = new Queue<T>();
  const lowser: T[] = [];
  // 将数据压入队列
  list.forEach(item => {
    queueList.enqueue(item);
  })
  while(queueList.size() > 1) {
    for(let i = 0; i < num; i++) {
      queueList.enqueue(queueList.dequeue() as T);
    }
    
    lowser.push(queueList.dequeue() as T);
  }
  return {
    lowser,
    win: queueList.dequeue()
  }
}

export function palindromeCheck(str: string) {
  if(!str) {
    return false;
  }
  const que = new Deque<string>();
  for(let i = 0; i < str.length; i++) {
    que.addBack(str[i])
  }
  let isEqual = true;
  while(que.size() > 1 && isEqual) {
    let frontChar = que.removeFront();
    let backChar = que.removeBack();

    if (frontChar !== backChar) {
      isEqual = false;
    }
  }
  return isEqual;
}