# Time Conversion

https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

## Example

- `s = "12:00:00AM"` return `"00:00:00"`
- `s = "12:01:00AM"` return `"00:01:00"`
- `s = "12:00:00PM"` return `"12:00:00"`
- `s = "12:01:00PM"` return `"12:01:00"`
- `s = "07:05:45PM"` return `"19:05:45"`

## Parameters

- `string s`: a time in 12-hour format

## Returns

- `string`: the time in 24-hour format

## Constraints

- All input times are valid
- `12:00:00AM` on a 12-hour clock is `00:00:00` on a 24-hour clock.
- `12:00:00PM` on a 12-hour clock is `12:00:00` on a 24-hour clock.
