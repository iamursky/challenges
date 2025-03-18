export default function lonelyInteger(a: number[]): number {
  const seenOnce: Set<number> = new Set();
  const seenMore: Set<number> = new Set();

  for (const n of a) {
    // Seen the value multiple times before
    if (seenMore.has(n)) continue;

    // Seen the value once before
    if (seenOnce.has(n)) {
      seenOnce.delete(n);
      seenMore.add(n);
      continue;
    }

    // Seen the value for the first time
    seenOnce.add(n);
  }

  return Array.from(seenOnce.values())[0];
}
