export default function diagonalDifference(arr: number[][]): number {
  const arrSize: number = arr.length;

  let sum1: number = 0;
  let sum2: number = 0;

  for (let i = 0; i < arrSize; i++) {
    sum1 += arr[i][i];
    sum2 += arr[arrSize - 1 - i][i];
  }

  return Math.abs(sum1 - sum2);
}
