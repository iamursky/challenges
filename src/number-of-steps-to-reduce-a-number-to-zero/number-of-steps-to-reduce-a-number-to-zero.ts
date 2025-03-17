export default function main(num: number): number {
  let steps = 0;

  while (num !== 0) {
    const even = num % 2 === 0;
    num = even ? num / 2 : num - 1;
    steps++;
  }

  return steps;
}
