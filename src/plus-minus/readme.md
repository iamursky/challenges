# Plus Minus

https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Return an array of decimal fractions representing the proportion of positive elements, negative elements, and zeros to the total elements. These values should be rounded to `6` decimal places.

## Example

```
arr = [1, 1, 0, -1, -1]
```

There are `n = 5` elements, two positive, two negative and one zero. Their ratios are $`\frac{2}{5} = 0.400000`$, $`\frac{2}{5} = 0.400000`$ and $`\frac{1}{5} = 0.200000`$. Results are returned as `["0.400000", "0.400000", "0.200000"]`.

## Parameters

- `int arr[n]`: an array of integers

## Constraints

- `0 < n <= 100`
- `-100 <= arr[i] <= 100`
