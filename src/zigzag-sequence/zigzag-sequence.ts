export default function zigzagSequence(arr: number[]): number[] {
  const result: number[] = Array(arr.length);

  arr.sort((a, b) => a - b);

  if (arr.length % 2 !== 0) {
    result[0] = arr.shift()!;
  }

  const k: number = arr.length / 2;

  for (let i = 0; i < arr.length; i++) {
    const [left, right] = arr.splice(0, 2);

    if (i % 2 === 0) {
      result[result.length - i - 2] = right;
      result[result.length - i - 1] = left;
    } else {
      result[i] = left;
      result[i + 1] = right;
    }
  }

  if (arr.length === 2) {
    const [left, right] = arr.splice(0, 2);
    result[k] = right;
    result[k + 1] = left;
  }

  if (arr.length === 1) {
    result[k] = arr[0];
  }

  return result;
}
