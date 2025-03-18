export default function flippingTheMatrix(matrix: number[][]): number {
  const n: number = matrix.length / 2;
  let sum: number = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += Math.max(
        matrix[i][j],
        matrix[i][2 * n - j - 1],
        matrix[2 * n - i - 1][j],
        matrix[2 * n - i - 1][2 * n - j - 1],
      );
    }
  }

  return sum;
}
