export default function main(ransomNote: string, magazine: string): boolean {
  const magazineCharactersMap: Record<string, number> = {};

  for (let i = 0; i < magazine.length; i++) {
    const charCount = magazineCharactersMap[magazine[i]] ?? 0;
    magazineCharactersMap[magazine[i]] = charCount + 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineCharactersMap[ransomNote[i]]) return false;
    magazineCharactersMap[ransomNote[i]] -= 1;
  }

  return true;
}
