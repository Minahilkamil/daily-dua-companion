import { duas, findMatchingDua, extractDuaFromMessage } from '../duas';

describe('findMatchingDua', () => {
  test.each([
    ['sone se pehle ki dua', 'sleep'],
    ['sone sy phly ki dua', 'sleep'],
    ['khany ke baad ki dua', 'after-eating'],
    ['khany k baad', 'after-eating'],
    ['khane ki dua', 'before-eating'],
    ['pareshani ki dua', 'distress'],
    ['safar ki dua', 'travel'],
    ['masjid mein dakhil hone ki dua', 'entering-masjid'],
  ])('maps "%s" to %s', (message, expectedId) => {
    expect(findMatchingDua(message)?.id ?? null).toBe(expectedId);
  });

  test.each(['xyz random', ''])('returns null for "%s"', (message) => {
    expect(findMatchingDua(message)).toBeNull();
  });

  test('"khany ke baad" does not match before-eating (longest match wins)', () => {
    const matched = findMatchingDua('khany ke baad');
    expect(matched?.id).toBe('after-eating');
    expect(matched?.id).not.toBe('before-eating');
  });
});

describe('extractDuaFromMessage', () => {
  test('finds the sleep dua from its exact Arabic text', () => {
    const sleep = duas.find((dua) => dua.id === 'sleep')!;
    const message = `Can you explain this dua? ${sleep.arabic}`;
    expect(extractDuaFromMessage(message)?.id).toBe('sleep');
  });

  test('returns null when the message has no dua text', () => {
    expect(extractDuaFromMessage('hello, any tips for today?')).toBeNull();
  });
});

describe('dua data integrity', () => {
  test('every id is unique', () => {
    const ids = duas.map((dua) => dua.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('every dua has non-empty arabic, transliteration, translationEnglish, translationUrdu, reference and category', () => {
    const fields = [
      'arabic',
      'transliteration',
      'translationEnglish',
      'translationUrdu',
      'reference',
      'category',
    ] as const;

    for (const dua of duas) {
      for (const field of fields) {
        expect(dua[field].trim().length).toBeGreaterThan(0);
      }
    }
  });

  test('every reference matches a known source', () => {
    const pattern = /(Bukhari|Muslim|Abi Dawud|Tirmidhi|Quran)/i;
    for (const dua of duas) {
      expect(dua.reference).toMatch(pattern);
    }
  });

  test('every dua has at least 3 keywords', () => {
    for (const dua of duas) {
      expect(dua.keywords.length).toBeGreaterThanOrEqual(3);
    }
  });
});
