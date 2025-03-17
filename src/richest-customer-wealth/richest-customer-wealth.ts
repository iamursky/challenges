export default function main(accounts: number[][]): number {
  let max: number = 0;

  for (let i = 0; i < accounts.length; i++) {
    let sum: number = accounts[i][0];

    for (let j = 1; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }

    max = Math.max(max, sum);
  }

  return max;
}
