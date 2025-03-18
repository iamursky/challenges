# Zig Zag Sequence

https://www.hackerrank.com/challenges/zig-zag-sequence/problem

Given an array of $`n`$ distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first $`k`$ elements in the sequence are in increasing order and the last $`k`$ elements are in decreasing order, where $`k = (n+1)/2`$. You need to find the lexicographically smallest zig zag sequence of the given array.

## Example

$`a = [2,3,5,1,4]`$

Now if we permute the array as $`[1,4,5,3,2]`$, the result is a zig zag sequence.

## Constraints

- $`1 \le t \le 20`$
- $`1 \le n \le 10000`$ ($`n`$ is always odd)
- $`1 \le a_{i} \le 10^{9}`$
