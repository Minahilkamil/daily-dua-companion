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
    keywords: ['sleep', 'sona', 'sote', 'bed', 'neend', 'sony'],
    category: 'Sony Se Pehle Ki Dua',
    arabic: 'بِاسْمِكَ اللّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: 'Bismika Allahumma amutu wa ahya',
    translationUrdu: 'Aey Allah, tere hi naam ke sath main marta hoon aur tere hi naam ke sath jeeta hoon (yani sota aur jagta hoon).',
    translationEnglish: 'In Your name, O Allah, I die and I live.',
    reference: 'Sahih al-Bukhari 6324',
  },
  {
    id: 'waking-up',
    keywords: ['wake up', 'jagna', 'jagny', 'morning wake', 'uthna', 'neend se bedar', 'bedaar'],
    category: 'Neend Se Jagny Ki Dua',
    arabic: 'الْحَمْدُ لِلّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    translationUrdu: 'Tamam tareefein Allah ke liye hain jisne humein maut (neend) ke baad zindagi ata ki, aur usi ki taraf dobara uthna hai.',
    translationEnglish: 'All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection.',
    reference: 'Sahih al-Bukhari 6312',
  },
  {
  id: 'before-eating',
  keywords: ['eating', 'khana', 'khaty', 'food', 'meal', 'khany se pehle', 'khany sy phly', 'khana khany se pehle', 'pehle ki dua', 'phly ki dua'],
    category: 'Khany Se Pehle Ki Dua',
    arabic: 'بِسْمِ اللّهِ',
    transliteration: 'Bismillah',
    translationUrdu: 'Allah ke naam se (shuru karta hoon).',
    translationEnglish: 'In the name of Allah.',
    reference: 'Sunan Abi Dawud 3767',
  },
  {
    id: 'after-eating',
    keywords: ['after eating', 'khany k baad', 'finish meal'],
    category: 'Khany Ke Baad Ki Dua',
    arabic: 'الْحَمْدُ لِلّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: "Alhamdu lillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlim minni wa la quwwah",
    translationUrdu: 'Tamam tareefein Allah ke liye hain jisne mujhe ye khana khilaya aur bina meri kisi taqat ya koshish ke mujhe rizq diya.',
    translationEnglish: 'All praise is for Allah who fed me this and provided it for me without any might or power on my part.',
    reference: 'Sunan Abi Dawud 4023',
  },
  {
    id: 'leaving-home',
    keywords: ['leaving home', 'ghar sy niklna', 'going out', 'bahir jana', 'ghar se nikalne', 'niklny'],
    category: 'Ghar Se Nikalny Ki Dua',
    arabic: 'بِسْمِ اللّهِ تَوَكَّلْتُ عَلَى اللّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّهِ',
    transliteration: "Bismillahi tawakkaltu 'alallahi wa la hawla wa la quwwata illa billah",
    translationUrdu: 'Allah ke naam se (ghar se nikalta hoon), maine Allah par bharosa kiya, aur koi taqat ya qudrat nahi magar Allah ke sath.',
    translationEnglish: 'In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.',
    reference: 'Sunan Abi Dawud 5095, Sunan at-Tirmidhi 3426',
  },
  {
    id: 'entering-home',
    keywords: ['entering home', 'ghar mein anty', 'ghar mein dakhil'],
    category: 'Ghar Mein Anay Ki Dua',
    arabic: 'بِسْمِ اللّهِ وَلَجْنَا وَبِسْمِ اللّهِ خَرَجْنَا وَعَلَى اللّهِ رَبِّنَا تَوَكَّلْنَا',
    transliteration: "Bismillahi walajna wa bismillahi kharajna wa 'ala Allahi rabbina tawakkalna",
    translationUrdu: 'Allah ke naam se hum andar aaye aur Allah ke naam se hum bahir gaye, aur apne Rab par hi humara bharosa hai.',
    translationEnglish: 'In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we place our trust.',
    reference: 'Sunan Abi Dawud 5096',
  },
  {
    id: 'distress',
    keywords: ['distress', 'pareshan', 'worried', 'anxiety', 'ghum', 'sad', 'stress'],
    category: 'Pareshani Ke Waqt Ki Dua',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ',
    transliteration: "La ilaha illallahul-'Azimul-Halim, la ilaha illallahu Rabbul-'Arshil-'Azim",
    translationUrdu: 'Allah ke siwa koi ibadat ke laiq nahi, jo bohot bara aur bardbaar hai. Allah ke siwa koi ibadat ke laiq nahi jo Arsh-e-Azeem ka Rab hai.',
    translationEnglish: 'There is no deity worthy of worship except Allah, the Mighty, the Forbearing.',
    reference: 'Sahih al-Bukhari 6345, Sahih Muslim 2730',
  },
  {
    id: 'forgiveness',
    keywords: ['forgiveness', 'maafi', 'gunah', 'astaghfirullah', 'sin', 'repent'],
    category: 'Maafi Mangny Ki Dua',
    arabic: 'أَسْتَغْفِرُ اللّهَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
    transliteration: "Astaghfirullahil-ladhi la ilaha illa huwal-Hayyul-Qayyumu wa atubu ilayh",
    translationUrdu: 'Main us Allah se maafi mangta hoon jiske siwa koi ibadat ke laiq nahi, jo zinda aur hamesha qaim rehny wala hai, aur main uski taraf tauba karta hoon.',
    translationEnglish: 'I seek the forgiveness of Allah, besides whom there is no deity, the Ever-Living, the Sustainer of existence, and I repent unto Him.',
    reference: 'Sunan Abi Dawud 1517, Sunan at-Tirmidhi 3577',
  },
  {
    id: 'travel',
    keywords: ['travel', 'safar', 'journey', 'safar par', 'sawari'],
    category: 'Safar/Sawari Par Baithny Ki Dua',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ',
    transliteration: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun",
    translationUrdu: 'Pak hai wo Zaat jisne is (sawari) ko humare qabu mein diya, warna hum khud isay qabu mein nahi la sakte thay, aur beshak hum apne Rab ki taraf lautny wale hain.',
    translationEnglish: 'Glory to Him who has subjected this to us, and we could never have accomplished this by ourselves, and to our Lord we will surely return.',
    reference: 'Sahih Muslim 1342, Quran 43:13-14',
  },
  {
    id: 'entering-masjid',
    keywords: ['masjid', 'mosque', 'entering mosque', 'masjid mein dakhil'],
    category: 'Masjid Mein Dakhil Hony Ki Dua',
    arabic: 'بِاسْمِ اللّهِ وَالسَّلَامُ عَلَىٰ رَسُولِ اللّهِ، اللّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: "Bismillahi was-salamu 'ala Rasulillah, Allahumma-ftah li abwaba rahmatik",
    translationUrdu: 'Allah ke naam se (daakhil hota hoon) aur Rasul Allah (SAW) par salam ho. Aey Allah, mere liye apni rehmat ke darwaze khol de.',
    translationEnglish: 'In the name of Allah, and peace be upon the Messenger of Allah. O Allah, open the doors of Your mercy for me.',
    reference: 'Sahih Muslim 713',
  },
];

export function extractDuaFromMessage(content: string): Dua | null {
  for (const dua of duas) {
    if (
      content.includes(dua.id) ||
      content.includes(dua.arabic) ||
      content.includes(dua.transliteration) ||
      content.includes(dua.reference)
    ) {
      return dua;
    }
  }
  return null;
}

export function findMatchingDua(userMessage: string): Dua | null {
  const lowerMessage = userMessage.toLowerCase();
  for (const dua of duas) {
    for (const keyword of dua.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return dua;
      }
    }
  }
  return null;
}
