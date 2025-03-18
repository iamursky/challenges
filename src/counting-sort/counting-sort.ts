const OUTPUT_ARRAY_LENGTH: number = 100;

export default function countingSort(arr: number[]): number[] {
  const output: number[] = Array(OUTPUT_ARRAY_LENGTH).fill(0);

  for (const n of arr) {
    output[n]++;
  }

  return output;
}
