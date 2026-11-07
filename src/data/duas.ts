import { Dua } from '../types';

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
    verified: true,
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
    verified: true,
  },
  {
    id: 'before-eating',
    keywords: ['eating', 'khana', 'khaty', 'food', 'meal', 'khany se pehle', 'khany sy phly', 'khana khany se pehle'],
    category: 'Before Eating · Khany Se Pehle Ki Dua',
    arabic: 'بِسْمِ اللّهِ',
    transliteration: "Bismillah. (If you forget at the start: Bismillahi awwalahu wa akhirahu)",
    translationUrdu: 'Allah ke naam se (shuru karta hoon). Agar shuru mein bhool jaye to kahe: "Bismillahi awwalahu wa akhirahu" (shuru mein bhi aur aakhir mein bhi Allah ke naam se).',
    translationEnglish: 'In the name of Allah. If you forget at the beginning, say: "In the name of Allah at the beginning and at the end of it."',
    reference: 'Sunan Abi Dawud 3767',
    verified: true,
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
    verified: true,
  },
  {
    id: 'leaving-home',
    keywords: ['leaving home', 'ghar sy niklna', 'going out', 'bahir jana', 'ghar se nikalne', 'niklny', 'ghar se nikalny', 'ghar se nikalna'],
    category: 'Leaving Home · Ghar Se Nikalny Ki Dua',
    arabic: 'بِسْمِ اللّهِ تَوَكَّلْتُ عَلَى اللّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّهِ',
    transliteration: "Bismillahi tawakkaltu 'alallahi wa la hawla wa la quwwata illa billah",
    translationUrdu: 'Allah ke naam se (ghar se nikalta hoon), maine Allah par bharosa kiya, aur koi taqat ya qudrat nahi magar Allah ke sath.',
    translationEnglish: 'In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.',
    reference: 'Sunan Abi Dawud 5095',
    verified: true,
  },
  {
    id: 'distress',
    keywords: ['distress', 'pareshan', 'worried', 'anxiety', 'ghum', 'sad', 'stress'],
    category: 'During Distress · Pareshani Ke Waqt Ki Dua',
    arabic: 'لاَ إِلَهَ إِلاَّ اللَّهُ الْعَظِيمُ الْحَلِيمُ، لاَ إِلَهَ إِلاَّ اللَّهُ رَبُّ السَّمَوَاتِ وَالأَرْضِ، رَبُّ الْعَرْشِ الْعَظِيمِ',
    transliteration: 'La ilaha illal-lahu Al-`Azim, al-Halim, La ilaha illal-lahu Rabbu-s-samawati wal-ard wa Rabbu-l-arsh il-azim',
    translationUrdu: 'Allah ke siwa koi ibadat ke laiq nahi, jo bohot bara aur bardbaar hai. Allah ke siwa koi ibadat ke laiq nahi jo aasmanon aur zameen ka Rab hai, jo Arsh-e-Azeem ka Rab hai.',
    translationEnglish: 'There is no deity but Allah, the Magnificent, the Forbearing. There is no deity but Allah, Lord of the heavens and the earth, Lord of the Mighty Throne.',
    reference: 'Sahih al-Bukhari 6345',
    verified: true,
  },
  {
    id: 'forgiveness',
    keywords: ['forgiveness', 'maafi', 'gunah', 'astaghfirullah', 'sin', 'repent'],
    category: 'Seeking Forgiveness · Maafi Mangny Ki Dua',
    arabic: 'أَسْتَغْفِرُ اللّهَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
    transliteration: "Astaghfirullahil-ladhi la ilaha illa huwal-Hayyul-Qayyumu wa atubu ilayh",
    translationUrdu: 'Main us Allah se maafi mangta hoon jiske siwa koi ibadat ke laiq nahi, jo zinda aur hamesha qaim rehny wala hai, aur main uski taraf tauba karta hoon.',
    translationEnglish: 'I seek the forgiveness of Allah, besides whom there is no deity, the Ever-Living, the Sustainer of existence, and I repent unto Him.',
    reference: 'Sunan Abi Dawud 1517',
    verified: true,
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
    verified: true,
  },
  {
    id: 'entering-masjid',
    keywords: ['masjid', 'mosque', 'entering mosque', 'masjid mein dakhil'],
    category: 'Entering Masjid · Masjid Mein Dakhil Hony Ki Dua',
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: 'Allahumma-ftah li abwaba rahmatik',
    translationUrdu: 'Aey Allah, mere liye apni rehmat ke darwaze khol de.',
    translationEnglish: 'O Allah! open for me the doors of Thy mercy',
    reference: 'Sahih Muslim 713',
    verified: true,
  },
  {
    id: 'after-wudu',
    keywords: ['wudu ke baad', 'wudu k baad', 'wudu ke bad', 'after wudu', 'ablution ke baad', 'wudu k bad'],
    category: 'After Wudu · Wudu Ke Baad Ki Dua',
    arabic: 'أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا عَبْدُ اللَّهِ وَرَسُولُهُ',
    transliteration: "Ashhadu an la ilaha illallah wa ashhadu anna Muhammadan 'abduhu wa rasuluh",
    translationUrdu: 'Main gawahi deta hoon ke Allah ke siwa koi ibadat ke laiq nahi, aur Muhammad (S.A.W) Allah ke bande aur uske Rasul hain.',
    translationEnglish: 'I testify that there is no god but Allah and that Muhammad is the servant of Allah and His Messenger.',
    reference: 'Sahih Muslim 234',
    verified: true,
  },
  {
    id: 'entering-toilet',
    keywords: ['toilet', 'bathroom', 'washroom', 'bait ul khala', 'toilet mein dakhil', 'toilet jane se pehle', 'bathroom mein jana'],
    category: 'Entering Toilet · Bathroom Mein Dakhil Hony Ki Dua',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
    transliteration: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith",
    translationUrdu: 'Aey Allah, main teri panah maangta hoon har khabees cheez aur khabees jinnat se.',
    translationEnglish: 'O Allah, I seek Refuge with You from all offensive and wicked things (evil deeds and evil spirits).',
    reference: 'Sahih al-Bukhari 142',
    verified: true,
  },
  {
    id: 'leaving-toilet',
    keywords: ['leaving toilet', 'toilet se bahir', 'toilet se bahar', 'toilet se nikalna', 'toilet se nikalny', 'bathroom se bahir', 'toilet ke baad'],
    category: 'Leaving Toilet · Toilet Se Bahir Nikalny Ki Dua',
    arabic: 'غُفْرَانَكَ',
    transliteration: 'Ghufranak',
    translationUrdu: 'Aey Allah, main teri maghfirat chahta hoon.',
    translationEnglish: 'Grant me Thy forgiveness.',
    reference: 'Sunan Abi Dawud 30',
    verified: true,
  },
  {
    id: 'wearing-clothes',
    keywords: ['wearing clothes', 'kapry pehnna', 'kapre pehanna', 'kapry pehnty', 'libas pehnna', 'clothes pehnna', 'kapry pehnne ki dua'],
    category: 'Wearing Clothes · Kapry Pehnny Ki Dua',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: 'Alhamdu lillahil-ladhi kasani hadha-th-thawba wa razaqanihi min ghayri hawlim minni wa la quwwah',
    translationUrdu: 'Tamam tareefein Allah ke liye hain jisne mujhe ye kapra pehnaya aur bina meri kisi taqat ya koshish ke mujhe ata kiya.',
    translationEnglish: 'Praise be to Allah Who has clothed me with this and provided me with it through no might and power on my part.',
    reference: 'Sunan Abi Dawud 4023',
    verified: true,
  },
  {
    id: 'after-adhan',
    keywords: ['adhan', 'azan', 'after adhan', 'adhan ke baad', 'adhan k baad', 'azan ke baad', 'azan sunne ke baad'],
    category: 'After Adhan · Azan Ke Baad Ki Dua',
    arabic: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ',
    transliteration: "Allahumma Rabba hadhihi-d-da'watit-tammah, was-salatil-qa'imah, ati Muhammadanil-wasilata wal-fadilah, wab'ath-hu maqaman mahmudanil-ladhi wa'adtah",
    translationUrdu: 'Aey Allah, is mukammal pukar aur qaim honay wali namaz ke Rab, Muhammad (S.A.W) ko waseela aur fazilat ata kar, aur unhe us tareef wale maqam tak pohncha jiska tu ne waada kiya hai.',
    translationEnglish: 'O Allah! Lord of this perfect call and of the regular prayer which is going to be established, give Muhammad the right of intercession and illustriousness, and resurrect him to the best and the highest place in Paradise that You promised him.',
    reference: 'Sahih al-Bukhari 614',
    verified: true,
  },
  {
    id: 'leaving-masjid',
    keywords: ['leaving masjid', 'masjid se nikalna', 'masjid se nikalny', 'masjid se bahir', 'masjid se bahar', 'masjid chhorna', 'mosque se bahir'],
    category: 'Leaving Masjid · Masjid Se Nikalny Ki Dua',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    transliteration: "Allahumma inni as'aluka min fadlik",
    translationUrdu: 'Aey Allah, main tera fazl aur karam maangta hoon.',
    translationEnglish: 'O Allah! I beg of Thee Thy Grace.',
    reference: 'Sahih Muslim 713',
    verified: true,
  },
  {
    id: 'rain',
    keywords: ['rain', 'barish', 'raining', 'barish ki dua', 'barsat', 'barish hoti hai', 'when it rains'],
    category: 'When It Rains · Barish Hony Ki Dua',
    arabic: 'صَيِّبًا نَافِعًا',
    transliteration: 'Sayyiban nafi’an',
    translationUrdu: 'Aey Allah, is barish ko khoob faidemand bana.',
    translationEnglish: 'Let it be a strong fruitful rain.',
    reference: 'Sahih al-Bukhari 1032',
    verified: true,
  },
  {
    id: 'visiting-sick',
    keywords: ['visiting sick', 'mareez ki iyadat', 'bimar ki iyadat', 'beemar ki iyadat', 'mareez ke paas', 'sick visit', 'iyadat karna'],
    category: 'Visiting the Sick · Mareez Ki Iyadat Ki Dua',
    arabic: 'لاَ بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ',
    transliteration: 'La ba’sa, tahurun in sha’ Allah',
    translationUrdu: 'Koi haraj nahi, ye (bimari) gunahon ka kaffara hai, agar Allah ne chaha.',
    translationEnglish: "Don't worry, if Allah will, it will be expiation (for your sins).",
    reference: 'Sahih al-Bukhari 5656',
    verified: true,
  },
  {
    id: 'wearing-new-clothes',
    keywords: ['wearing new clothes', 'naye kapry', 'naya kapra', 'naya libas', 'new dress', 'naye kapre'],
    category: 'Wearing New Clothes · Naye Kapry Pehnny Ki Dua',
    arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ',
    transliteration: "Allahumma laka-l-hamdu anta kasawtanihi, as'aluka min khayrihi wa khayri ma suni'a lahu, wa a'udhu bika min sharrihi wa sharri ma suni'a lahu",
    translationUrdu: 'Aey Allah, teri hi tamam tareefein hain, tu ne hi mujhe ye pehnaya. Main tujh se iski khair aur jis maqsad ke liye ye banaya gaya uski khair maangta hoon, aur iske shar aur us maqsad ke shar se teri panah chahta hoon.',
    translationEnglish: 'O Allah, praise be to Thee! as Thou hast clothed me with it, I ask Thee for its good and the good of that for which it was made, and I seek refuge in Thee from its evil and the evil of that for which it was made.',
    reference: 'Sunan Abi Dawud 4020',
    verified: false,
  },
  {
    id: 'sneezing',
    keywords: ['sneeze', 'sneezing', 'cheenk', 'chink', 'cheenk aana'],
    category: 'When Sneezing · Cheenk Marne Ki Dua',
    arabic: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'Alhamdu lillah',
    translationUrdu: 'Tamam tareefein Allah ke liye hain. (Sunne wala kahe: Yarhamukallah; aur cheenkne wala jawab mein kahe: Yahdikumullahu wa yuslihu balakum.)',
    translationEnglish: 'Praise be to Allah. (The listener says: May Allah bestow His Mercy on you; the sneezer replies: May Allah give you guidance and improve your condition.)',
    reference: 'Sahih al-Bukhari 6224',
    verified: false,
  },
  {
    id: 'breaking-fast',
    keywords: ['iftar', 'roza', 'breaking fast', 'fast', 'ramadan', 'ramzan', 'roza kholna'],
    category: 'Breaking Fast · Iftar Ke Waqt Ki Dua',
    arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ',
    transliteration: "Dhahaba-z-zama'u wabtallati-l-'uruqu wa thabata-l-ajru in sha' Allah",
    translationUrdu: 'Pyaas khatam ho gayi, ragein tar ho gayin, aur agar Allah ne chaha to ajr saabit ho gaya.',
    translationEnglish: 'Thirst has gone, the arteries are moist, and the reward is sure, if Allah wills.',
    reference: 'Sunan Abi Dawud 2357',
    verified: false,
  },
  {
    id: 'paying-debt',
    keywords: ['debt', 'qarz', 'karz', 'loan', 'udhar', 'qarz ki dua'],
    category: 'Debt Relief · Qarz Ki Adaigi Ki Dua',
    arabic: 'اللَّهُمَّ اكْفِنِي بِحَلاَلِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
    transliteration: "Allahumma-kfini bihalalika 'an haramika wa aghnini bifadlika 'amman siwak",
    translationUrdu: 'Aey Allah, mujhe apne halal se kaafi kar de aur haram se bacha, aur apne fazl se mujhe apne siwa sab se beniyaz kar de.',
    translationEnglish: 'O Allah, suffice me with Your lawful against Your prohibited, and make me independent of all those besides You.',
    reference: "Jami' at-Tirmidhi 3563",
    verified: false,
  },
  {
    id: 'anger',
    keywords: ['anger', 'gussa', 'angry', 'gusse mein', 'ghussa', 'gussa aana'],
    category: 'When Angry · Gusse Ke Waqt Ki Dua',
    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    transliteration: "A'udhu billahi minash-shaitanir-rajim",
    translationUrdu: 'Main Allah ki panah maangta hoon shaitan mardood se.',
    translationEnglish: 'I seek refuge with Allah from Satan, the outcast.',
    reference: 'Sahih al-Bukhari 6115',
    verified: false,
  },
  {
    id: 'entering-graveyard',
    keywords: ['graveyard', 'qabristan', 'qabr', 'qabar', 'grave', 'qabristan mein dakhil'],
    category: 'Entering Graveyard · Qabristan Mein Dakhil Hony Ki Dua',
    arabic: 'السَّلاَمُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ لَلَاحِقُونَ أَسْأَلُ اللَّهَ لَنَا وَلَكُمْ الْعَافِيَةَ',
    transliteration: "As-salamu 'alaykum ahlad-diyari minal-mu'minina wal-muslimin, wa inna in sha' Allahu lalahiqun, as'alullaha lana wa lakumul-'afiyah",
    translationUrdu: 'Tum par salamti ho aey is basti ke rehne walo jo momin aur musalman ho. Aur beshak hum bhi, agar Allah ne chaha, tum se milne wale hain. Main Allah se apne liye aur tumhare liye aafiyat maangta hoon.',
    translationEnglish: 'Peace be upon you, the inhabitants of the city, among the believers and Muslims, and God willing we shall join you. I beg of Allah peace for us and for you.',
    reference: 'Sahih Muslim 975',
    verified: false,
  },
  {
    id: 'drinking-milk',
    keywords: ['milk', 'doodh', 'drink milk', 'doodh peena', 'doodh peeny ke baad'],
    category: 'After Drinking Milk · Doodh Peeny Ke Baad Ki Dua',
    arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ',
    transliteration: 'Allahumma barik lana fihi wa zidna minhu',
    translationUrdu: 'Aey Allah, is (doodh) mein humare liye barkat de aur humein is se zyada ata farma.',
    translationEnglish: 'O Allah! bless us in it and give us more of it.',
    reference: 'Sunan Abi Dawud 3730',
    verified: false,
  },
  {
    id: 'morning-protection',
    keywords: ['morning dua', 'subah ki dua', 'subah', 'subha', 'morning protection', 'fajr ke baad'],
    category: 'Morning Supplication · Subah Ki Dua',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa huwas-Sami'ul-'Alim",
    translationUrdu: 'Allah ke naam se, jiske naam ke sath zameen aur aasman mein koi cheez nuksan nahi de sakti, aur wo sab sunne wala aur sab jaanne wala hai.',
    translationEnglish: 'In the name of Allah, when Whose name is mentioned nothing on Earth or in Heaven can cause harm, and He is the Hearer, the Knower.',
    reference: 'Sunan Abi Dawud 5088',
    verified: false,
  },
  {
    id: 'evening-protection',
    keywords: ['evening dua', 'shaam ki dua', 'sham ki dua', 'maghrib ke baad', 'shaam', 'evening'],
    category: 'Evening Supplication · Shaam Ki Dua',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: "A'udhu bi kalimatil-lahit-tammati min sharri ma khalaq",
    translationUrdu: 'Main Allah ke mukammal kalimaat ki panah maangta hoon har us cheez ke shar se jo usne paida ki.',
    translationEnglish: 'I seek refuge in the Perfect Word of Allah from the evil of what He has created.',
    reference: 'Sahih Muslim 2709a',
    verified: false,
  },
  {
    id: 'anxiety-lazy',
    keywords: ['anxiety and laziness', 'susti', 'laziness', 'lazy', 'fikr', 'gham', 'buzdili'],
    category: 'Against Anxiety & Laziness · Fikr Aur Susti Se Nijat Ki Dua',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal",
    translationUrdu: 'Aey Allah, main teri panah maangta hoon fikr aur gham se, be-bassi aur susti se, kanjoosi aur buzdili se, qarz ke bojh se aur mardon ke ghalbe se.',
    translationEnglish: 'O Allah! I seek refuge with You from distress and sorrow, from helplessness and laziness, from miserliness and cowardice, from being heavily in debt and from being overcome by men.',
    reference: 'Sahih al-Bukhari 2893',
    verified: false,
  },
  {
    id: 'increase-knowledge',
    keywords: ['knowledge', 'ilm', 'study', 'exam', 'padhai', 'parhai', 'ilm mein izafa'],
    category: 'Seeking Knowledge · Ilm Mein Izafay Ki Dua',
    arabic: 'رَبِّ زِدْنِي عِلْمًا',
    transliteration: "Rabbi zidni 'ilma",
    translationUrdu: 'Aey mere Rab, mere ilm mein izafa farma.',
    translationEnglish: 'My Lord, increase me in knowledge.',
    reference: 'Quran 20:114',
    verified: false,
  },
  {
    id: 'parents',
    keywords: ['parents', 'walidain', 'mother', 'father', 'maa baap', 'ammi abbu', 'walidain ki dua'],
    category: 'For Parents · Walidain Ki Maghfirat Ki Dua',
    arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    transliteration: 'Rabbir-hamhuma kama rabbayani saghira',
    translationUrdu: 'Aey mere Rab, mere walidain par reham farma jese unhone bachpan mein meri parwarish ki.',
    translationEnglish: 'My Lord, have mercy upon them as they brought me up when I was small.',
    reference: 'Quran 17:24',
    verified: false,
  },
  {
    id: 'good-dunya-akhirah',
    keywords: ['dunya akhirah', 'kamyabi', 'success', 'hasana', 'dunya aur akhirah', 'jannah ki dua'],
    category: 'Good in Both Worlds · Dunya Aur Akhirah Ki Kamyabi',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
    translationUrdu: 'Aey humare Rab, humein dunya mein bhi bhalai de aur akhirat mein bhi bhalai de, aur humein aag ke azab se bacha.',
    translationEnglish: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.',
    reference: 'Sahih al-Bukhari 4522, Quran 2:201',
    verified: false,
  },
  {
    id: 'steadfast-faith',
    keywords: ['iman', 'faith', 'steadfast', 'heart', 'dil', 'deen par qaim', 'ya muqallib'],
    category: 'Steadfast Faith · Iman Par Qaim Rehny Ki Dua',
    arabic: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',
    transliteration: "Ya Muqallibal-qulubi thabbit qalbi 'ala dinik",
    translationUrdu: 'Aey dilon ko pherne wale, mere dil ko apne deen par saabit rakh.',
    translationEnglish: 'O Changer of the Hearts! Strengthen my heart upon Your Religion.',
    reference: "Jami' at-Tirmidhi 2140",
    verified: false,
  },
  {
    id: 'leaving-gathering',
    keywords: ['majlis', 'gathering', 'meeting', 'baithak', 'majlis se uthna', 'kaffara majlis'],
    category: 'Leaving a Gathering · Majlis Se Uthny Ki Dua',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
    transliteration: 'Subhanaka Allahumma wa bihamdika, ashhadu an la ilaha illa Anta, astaghfiruka wa atubu ilayk',
    translationUrdu: 'Aey Allah, tu pak hai apni tareef ke sath, main gawahi deta hoon ke tere siwa koi ibadat ke laiq nahi, main teri maghfirat chahta hoon aur teri taraf tauba karta hoon.',
    translationEnglish: 'Glory is to You, O Allah, and praise, I bear witness that there is none worthy of worship except You, I seek Your forgiveness, and I repent to You.',
    reference: "Jami' at-Tirmidhi 3433",
    verified: false,
  },
  {
    id: 'protection-evil-eye',
    keywords: ['evil eye', 'nazar', 'nazar e bad', 'buri nazar', 'nazar se hifazat', 'children protection'],
    category: 'Protection from Evil Eye · Nazar e Bad Se Hifazat',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
    transliteration: "A'udhu bi kalimatil-lahit-tammati min kulli shaytanin wa hammah, wa min kulli 'aynin lammah",
    translationUrdu: 'Main Allah ke mukammal kalimaat ki panah maangta hoon har shaitan aur zahreele janwar se, aur har nuksan pohnchane wali buri nazar se.',
    translationEnglish: 'I seek Refuge with Your Perfect Words from every devil and from poisonous pests and from every evil, harmful, envious eye.',
    reference: 'Sahih al-Bukhari 3371',
    verified: false,
  },
  {
    id: 'hearing-adhan',
    keywords: ['adhan ka jawab', 'azan ka jawab', 'responding adhan', 'repeat after adhan', 'azan sunna', 'jawab e azan'],
    category: 'Responding to Adhan · Azan Ka Jawab Deny Ki Dua',
    arabic: 'لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ',
    transliteration: 'La hawla wa la quwwata illa billah',
    translationUrdu: 'Azan sunte waqt uske alfaaz dohraye jayein, magar "Hayya alas-salah" aur "Hayya alal-falah" par kahein: koi taqat aur qudrat nahi magar Allah ke sath.',
    translationEnglish: "While hearing the Adhan, repeat what the Mu'adhdhin says, but at \"Hayya 'alas-salah\" and \"Hayya 'alal-falah\", say: There is neither might nor any power except with Allah.",
    reference: 'Sahih al-Bukhari 613',
    verified: false,
  },
  {
    id: 'fast-breaking-host',
    keywords: ['mezban', 'host', 'guest', 'daawat', 'khana khilana', 'daawat ki dua'],
    category: 'Dua for the Host · Mezban Ke Liye Dua',
    arabic: 'أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ وَأَكَلَ طَعَامَكُمُ الأَبْرَارُ وَصَلَّتْ عَلَيْكُمُ الْمَلاَئِكَةُ',
    transliteration: "Aftara 'indakumus-sa'imuna, wa akala ta'amakumul-abraru, wa sallat 'alaykumul-mala'ikah",
    translationUrdu: 'Tumhare haan rozedar iftar karein, aur tumhara khana nek log khaein, aur farishte tumhare liye dua karein.',
    translationEnglish: 'May the fasting (men) break their fast with you, and the pious eat your food, and the angels pray for blessing on you.',
    reference: 'Sunan Abi Dawud 3854',
    verified: false,
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
  wuzu: 'wudu',
  wazu: 'wudu',
  wuzoo: 'wudu',
  wudhu: 'wudu',
  bad: 'baad',
  baat: 'baad',
  barsh: 'barish',
  baarish: 'barish',
  azaan: 'azan',
  adhaan: 'azan',
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
  for (const dua of duas.filter((d) => d.verified)) {
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
