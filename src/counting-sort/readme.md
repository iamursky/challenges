# Counting Sort

## Comparison Sorting

Quicksort usually has a running time of $`n \times log(n)`$, but is there an algorithm that can sort even faster? In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. A comparison sort algorithm cannot beat $`n \times log(n)`$ (worst-case) running time, since $`n \times log(n)`$ represents the minimum number of comparisons needed to know where to place each element. For more details, you can see [these notes](http://www.cs.cmu.edu/~avrim/451f11/lectures/lect0913.pdf) (PDF).

## Alternative Sorting

Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

## Example

```
arr = [1, 1, 3, 2, 1]
```

All of the values are in the range $`[0...3]`$, so create an array of zeroes, $`result = [0, 0, 0, 0]`$. The results of each iteration follow:

| i   | arr[i] | result       |
| --- | ------ | ------------ |
| 0   | 1      | [0, 1, 0, 0] |
| 1   | 1      | [0, 2, 0, 0] |
| 2   | 3      | [0, 2, 0, 1] |
| 3   | 2      | [0, 2, 1, 1] |
| 4   | 1      | [0, 3, 1, 1] |

The frequency array is $`[0, 3, 1, 1]`$, so the original array is $`[1, 1, 1, 2, 3]`$.

## Parameters

- `arr[n]`: an array of integers

## Returns

- `int[100]`: a frequency array

## Constraints

- For this exercise, always return a frequency array with 100 elements
- $`100 \le n \le 10^{6}`$
- $`0 \le arr[i] \lt 100`$
