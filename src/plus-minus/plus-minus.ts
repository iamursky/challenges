const OUTPUT_PRECISION: number = 6;

export default function plusMinus(arr: number[]): void {
  const numberOfLines: number = arr.length;

  let numberOfPositive: number = 0;
  let numberOfNegative: number = 0;
  let numberOfZeros: number = 0;

  // Count the number of positive, negative, and zero numbers
  for (let i = 0; i < numberOfLines; i++) {
    const num = arr[i];

    if (num > 0) numberOfPositive++;
    else if (num < 0) numberOfNegative++;
    else numberOfZeros++;
  }

  // Calculate the ratios
  const ratioOfPositive = numberOfPositive / numberOfLines;
  const ratioOfNegative = numberOfNegative / numberOfLines;
  const ratioOfZeros = numberOfZeros / numberOfLines;

  // Output the ratios with the desired precision
  console.log(ratioOfPositive.toPrecision(OUTPUT_PRECISION));
  console.log(ratioOfNegative.toPrecision(OUTPUT_PRECISION));
  console.log(ratioOfZeros.toPrecision(OUTPUT_PRECISION));
}
