export type Dua = {
  id: string;
  keywords: string[];
  category: string;
  arabic: string;
  transliteration: string;
  translationUrdu: string;
  translationEnglish: string;
  reference: string;
};

export const duas: Dua[] = [
  // ---------- Already existing (from earlier database) ----------
  {
    id: 'sleep',
    keywords: ['sleep', 'sona', 'sote', 'bed', 'neend', 'sony', 'sone', 'soney', 'sone se pehle'],
    category: 'Before Sleeping · Sone Se Pehle Ki Dua',
    arabic: 'بِاسْمِكَ اللّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: 'Bismika Allahumma amutu wa ahya',
    translationUrdu: 'Aey Allah, tere hi naam ke sath main marta hoon aur tere hi naam ke sath jeeta hoon (yani sota aur jagta hoon).',
    translationEnglish: 'In Your name, O Allah, I die and I live.',
    reference: 'Sahih al-Bukhari 6324',
  },
  {
    id: 'waking-up',
    keywords: ['wake up', 'jagna', 'jagny', 'morning wake', 'uthna', 'neend se bedar', 'bedaar', 'neend se jagny', 'neend se jagna'],
    category: 'After Waking Up · Neend Se Jagny Ki Dua',
    arabic: 'الْحَمْدُ لِلّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    translationUrdu: 'Tamam tareefein Allah ke liye hain jisne humein maut (neend) ke baad zindagi ata ki, aur usi ki taraf dobara uthna hai.',
    translationEnglish: 'All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection.',
    reference: 'Sahih al-Bukhari 6312',
  },
  {
  id: 'before-eating',
  keywords: ['eating', 'khana', 'khaty', 'food', 'meal', 'khany se pehle', 'khany sy phly', 'khana khany se pehle'],
    category: 'Before Eating · Khany Se Pehle Ki Dua',
    arabic: 'بِسْمِ اللّهِ',
    transliteration: 'Bismillah',
    translationUrdu: 'Allah ke naam se (shuru karta hoon).',
    translationEnglish: 'In the name of Allah.',
    reference: 'Sunan Abi Dawud 3767',
  },
  {
    id: 'after-eating',
    keywords: ['after eating', 'khany k baad', 'finish meal', 'khany ke baad', 'khane ke baad'],
    category: 'After Eating · Khany Ke Baad Ki Dua',
    arabic: 'الْحَمْدُ لِلّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: "Alhamdu lillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlim minni wa la quwwah",
    translationUrdu: 'Tamam tareefein Allah ke liye hain jisne mujhe ye khana khilaya aur bina meri kisi taqat ya koshish ke mujhe rizq diya.',
    translationEnglish: 'All praise is for Allah who fed me this and provided it for me without any might or power on my part.',
    reference: 'Sunan Abi Dawud 4023',
  },
  {
    id: 'leaving-home',
    keywords: ['leaving home', 'ghar sy niklna', 'going out', 'bahir jana', 'ghar se nikalne', 'niklny', 'ghar se nikalny', 'ghar se nikalna'],
    category: 'Leaving Home · Ghar Se Nikalny Ki Dua',
    arabic: 'بِسْمِ اللّهِ تَوَكَّلْتُ عَلَى اللّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّهِ',
    transliteration: "Bismillahi tawakkaltu 'alallahi wa la hawla wa la quwwata illa billah",
    translationUrdu: 'Allah ke naam se (ghar se nikalta hoon), maine Allah par bharosa kiya, aur koi taqat ya qudrat nahi magar Allah ke sath.',
    translationEnglish: 'In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.',
    reference: 'Sunan Abi Dawud 5095, Sunan at-Tirmidhi 3426',
  },
  {
    id: 'entering-home',
    keywords: ['entering home', 'ghar mein anty', 'ghar mein dakhil', 'ghar mein anay', 'ghar mein aane', 'entering house'],
    category: 'Entering Home · Ghar Mein Anay Ki Dua',
    arabic: 'بِسْمِ اللّهِ وَلَجْنَا وَبِسْمِ اللّهِ خَرَجْنَا وَعَلَى اللّهِ رَبِّنَا تَوَكَّلْنَا',
    transliteration: "Bismillahi walajna wa bismillahi kharajna wa 'ala Allahi rabbina tawakkalna",
    translationUrdu: 'Allah ke naam se hum andar aaye aur Allah ke naam se hum bahir gaye, aur apne Rab par hi humara bharosa hai.',
    translationEnglish: 'In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we place our trust.',
    reference: 'Sunan Abi Dawud 5096',
  },
  {
    id: 'distress',
    keywords: ['distress', 'pareshan', 'worried', 'anxiety', 'ghum', 'sad', 'stress'],
    category: 'During Distress · Pareshani Ke Waqt Ki Dua',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ',
    transliteration: "La ilaha illallahul-'Azimul-Halim, la ilaha illallahu Rabbul-'Arshil-'Azim",
    translationUrdu: 'Allah ke siwa koi ibadat ke laiq nahi, jo bohot bara aur bardbaar hai. Allah ke siwa koi ibadat ke laiq nahi jo Arsh-e-Azeem ka Rab hai.',
    translationEnglish: 'There is no deity worthy of worship except Allah, the Mighty, the Forbearing.',
    reference: 'Sahih al-Bukhari 6345, Sahih Muslim 2730',
  },
  {
    id: 'forgiveness',
    keywords: ['forgiveness', 'maafi', 'gunah', 'astaghfirullah', 'sin', 'repent'],
    category: 'Seeking Forgiveness · Maafi Mangny Ki Dua',
    arabic: 'أَسْتَغْفِرُ اللّهَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
    transliteration: "Astaghfirullahil-ladhi la ilaha illa huwal-Hayyul-Qayyumu wa atubu ilayh",
    translationUrdu: 'Main us Allah se maafi mangta hoon jiske siwa koi ibadat ke laiq nahi, jo zinda aur hamesha qaim rehny wala hai, aur main uski taraf tauba karta hoon.',
    translationEnglish: 'I seek the forgiveness of Allah, besides whom there is no deity, the Ever-Living, the Sustainer of existence, and I repent unto Him.',
    reference: 'Sunan Abi Dawud 1517, Sunan at-Tirmidhi 3577',
  },
  {
    id: 'travel',
    keywords: ['travel', 'safar', 'journey', 'safar par', 'sawari'],
    category: 'During Travel · Safar/Sawari Par Baithny Ki Dua',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ',
    transliteration: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun",
    translationUrdu: 'Pak hai wo Zaat jisne is (sawari) ko humare qabu mein diya, warna hum khud isay qabu mein nahi la sakte thay, aur beshak hum apne Rab ki taraf lautny wale hain.',
    translationEnglish: 'Glory to Him who has subjected this to us, and we could never have accomplished this by ourselves, and to our Lord we will surely return.',
    reference: 'Sahih Muslim 1342, Quran 43:13-14',
  },
  {
    id: 'entering-masjid',
    keywords: ['masjid', 'mosque', 'entering mosque', 'masjid mein dakhil'],
    category: 'Entering Masjid · Masjid Mein Dakhil Hony Ki Dua',
    arabic: 'بِاسْمِ اللّهِ وَالسَّلَامُ عَلَىٰ رَسُولِ اللّهِ، اللّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: "Bismillahi was-salamu 'ala Rasulillah, Allahumma-ftah li abwaba rahmatik",
    translationUrdu: 'Allah ke naam se (daakhil hota hoon) aur Rasul Allah (SAW) par salam ho. Aey Allah, mere liye apni rehmat ke darwaze khol de.',
    translationEnglish: 'In the name of Allah, and peace be upon the Messenger of Allah. O Allah, open the doors of Your mercy for me.',
    reference: 'Sahih Muslim 713',
  },
];

export function extractDuaFromMessage(content: string): Dua | null {
  let best: Dua | null = null;
  let bestLength = 0;
  for (const dua of duas) {
    for (const needle of [dua.arabic, dua.transliteration, dua.reference]) {
      if (content.includes(needle) && needle.length > bestLength) {
        best = dua;
        bestLength = needle.length;
      }
    }
  }
  return best;
}

// Common Roman Urdu spelling variants, mapped to one form.
const TOKEN_ALIASES: Record<string, string> = {
  sy: 'se',
  sey: 'se',
  say: 'se',
  k: 'ke',
  phly: 'pehle',
  phyl: 'pehle',
  phle: 'pehle',
  phyle: 'pehle',
  pehly: 'pehle',
};

function normalize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => TOKEN_ALIASES[token] ?? token);
}

// Edit distance where swapping two neighbouring letters counts as one change.
function editDistance(a: string, b: string): number {
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}

// Short words must match exactly; longer words may have one typo.
function tokenMatches(messageToken: string, keywordToken: string): boolean {
  if (messageToken === keywordToken) return true;
  if (Math.min(messageToken.length, keywordToken.length) < 5) return false;
  return editDistance(messageToken, keywordToken) <= 1;
}

// A keyword matches when all its words are in the message. The keyword with
// the most words wins, so "khany ke baad" beats a single word like "khana".
export function findMatchingDua(userMessage: string): Dua | null {
  const messageTokens = normalize(userMessage);
  if (messageTokens.length === 0) return null;

  let best: { dua: Dua; words: number; chars: number } | null = null;
  for (const dua of duas) {
    for (const keyword of dua.keywords) {
      const keywordTokens = normalize(keyword);
      if (keywordTokens.length === 0) continue;
      const allFound = keywordTokens.every((kt) =>
        messageTokens.some((mt) => tokenMatches(mt, kt)),
      );
      if (!allFound) continue;
      const words = keywordTokens.length;
      const chars = keywordTokens.join('').length;
      if (!best || words > best.words || (words === best.words && chars > best.chars)) {
        best = { dua, words, chars };
      }
    }
  }
  return best ? best.dua : null;
}
