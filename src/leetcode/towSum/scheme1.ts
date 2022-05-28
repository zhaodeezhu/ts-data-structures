function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map();
  for(let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const result = target - value;
    const exist = hashMap.has(result);
    if(exist) {
      return [hashMap.get(result), i];
    } else {
      hashMap.set(value, i);
    }
  }
  return [];
}