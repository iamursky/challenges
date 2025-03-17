export default function main(n: number): string[] {
  const answer: string[] = Array(n).fill("");

  for (let i = 0; i < n; i++) {
    const x = i + 1;
    const n3 = x % 3 === 0;
    const n5 = x % 5 === 0;

    if (n3 && n5) answer[i] = "FizzBuzz";
    else if (n3) answer[i] = "Fizz";
    else if (n5) answer[i] = "Buzz";
    else answer[i] = x.toString();
  }

  return answer;
}
