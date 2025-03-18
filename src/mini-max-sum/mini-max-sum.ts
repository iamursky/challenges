const NUMBER_OF_VALUES_TO_SUM: number = 4;

export default function miniMaxSum(arr: number[]): [number, number] {
  const arrSortedAsc = arr.sort((left, right) => left - right);
  const arrLength: number = arrSortedAsc.length;

  let minSum: number = 0;
  let maxSum: number = 0;

  for (let i = 0; i < NUMBER_OF_VALUES_TO_SUM; i++) {
    minSum += arrSortedAsc[i];
    maxSum += arrSortedAsc[arrLength - 1 - i];
  }

  return [minSum, maxSum];
}
