/* ============================================================
   بيانات أكاديمية فقه المسلم
   عدّل هنا فقط عشان تضيف أو تعدّل المحتوى — الموقع هيتحدث تلقائي.

   كل مستوى (level) فيه:
   - id: رقم المستوى (1 إلى 4) — ما تغيرهوش
   - name / arabicOrdinal / subtitle / duration
   - subjects: مصفوفة المواد (زي القرآن، التجويد، الفقه...)

   كل مادة (subject) فيه:
   - id: معرف فريد (ما يتكررش في كل الموقع)
   - name: اسم المادة
   - teacher: اسم الشيخ (أو "قريبًا" لو لسه ماتحددش)
   - teacherNote: وصف قصير اختياري عن مصدر الشرح
   - goal: هدف المادة في هذا المستوى
   - reference: (اختياري) اسم المتن أو الكتاب المرجعي
   - lessons: مصفوفة الدروس بالترتيب، كل درس فيه:
     { id, title, youtubeId }
     - id: معرف فريد (متولّد تلقائي، ما تغيرهوش)
     - title: عنوان الدرس (الموضوع)
     - youtubeId: الجزء اللي بعد v= في رابط اليوتيوب — لو لسه معندكش
       الفيديو، سيبه null وهيظهر تلقائي بعلامة "قريبًا" في الموقع
   ============================================================ */

const SITE_DATA = {
  levels: [
    {
      id: 1,
      name: "المستوى الأول — التأسيس",
      arabicOrdinal: "الأولى",
      subtitle: "أن تخرج فاهمًا أساسيات الإسلام، قادرًا على قراءة القرآن قراءة صحيحة، وعندك أساس في العقيدة والفقه والحديث والسيرة والعربية.",
      duration: "المدة المقترحة: ٥–٦ أشهر",
      subjects: [
        {
          id: "l1-quran",
          name: "القرآن الكريم",
          teacher: "الشيخ أيمن سويد",
          teacherNote: "القناة الرسمية للدكتور أيمن سويد — التلاوة المنهجية وشرح الجزرية",
          goal: "لا يُجعل الحفظ منفصلًا عن التجويد — يسيران معًا خطوة بخطوة.",
          lessons: [
            { id: "l1-quran-1", title: "تصحيح الفاتحة وقصار السور", youtubeId: null },
            { id: "l1-quran-2", title: "القراءة الصحيحة", youtubeId: null },
            { id: "l1-quran-3", title: "بداية الحفظ المنهجي", youtubeId: null },
            { id: "l1-quran-4", title: "جزء عمّ", youtubeId: null },
            { id: "l1-quran-5", title: "جزء تبارك تدريجيًا", youtubeId: null },
            { id: "l1-quran-6", title: "مراجعة يومية", youtubeId: null },
          ],
        },
        {
          id: "l1-tajweed",
          name: "التجويد",
          teacher: "الشيخ أيمن سويد",
          teacherNote: "شرح كامل لـ«التجويد المصوَّر» و«منظومة المفيد في التجويد»",
          goal: "إتقان مخارج الحروف وأحكامها قبل الانتقال لمرحلة القراءات.",
          lessons: [
            { id: "l1-tajweed-1", title: "مخارج الحروف وصفاتها", youtubeId: null },
            { id: "l1-tajweed-2", title: "النون الساكنة والتنوين", youtubeId: null },
            { id: "l1-tajweed-3", title: "الميم الساكنة", youtubeId: null },
            { id: "l1-tajweed-4", title: "المدود", youtubeId: null },
            { id: "l1-tajweed-5", title: "القلقلة", youtubeId: null },
            { id: "l1-tajweed-6", title: "التفخيم والترقيق", youtubeId: null },
            { id: "l1-tajweed-7", title: "أحكام الراء", youtubeId: null },
            { id: "l1-tajweed-8", title: "الوقف والابتداء", youtubeId: null },
          ],
          reference: "المرجع: التجويد المصوَّر، ثم تحفة الأطفال",
        },
        {
          id: "l1-aqeedah",
          name: "العقيدة",
          teacher: "الشيخ محمد حسان",
          teacherNote: "شيخ مصري — سلسلة كاملة لشرح الأصول الثلاثة",
          goal: "بناء تصوّر صحيح للتوحيد والإيمان من مصدر أصيل.",
          lessons: [
            { id: "l1-aqeedah-1", title: "الدرس الأول", youtubeId: "E55-TCGNcX8" },
            { id: "l1-aqeedah-2", title: "الدرس الثاني", youtubeId: "DKjKJ1VVUsw" },
            { id: "l1-aqeedah-3", title: "الدرس الثالث", youtubeId: "qXbOKyNhVd0" },
            { id: "l1-aqeedah-4", title: "الدرس الرابع", youtubeId: "DBZCroY0CRY" },
            { id: "l1-aqeedah-5", title: "الدرس الخامس", youtubeId: "czE3k0NG21U" },
            { id: "l1-aqeedah-6", title: "الدرس السادس", youtubeId: "HVoKKd7V1Tc" },
            { id: "l1-aqeedah-7", title: "الدرس السابع", youtubeId: "Z6NFxZvHEdM" },
            { id: "l1-aqeedah-8", title: "الدرس الثامن", youtubeId: "3MoR7Qcn2W0" },
            { id: "l1-aqeedah-9", title: "الدرس التاسع", youtubeId: "uoTcWAT3JVs" },
            { id: "l1-aqeedah-10", title: "الدرس العاشر", youtubeId: "M1ub7s4GuFE" },
            { id: "l1-aqeedah-11", title: "الدرس الحادي عشر", youtubeId: "wCMZSnSLHU0" },
            { id: "l1-aqeedah-12", title: "الدرس الثاني عشر", youtubeId: "a5yT7RcMRlI" },
          ],
          reference: "المتن: الأصول الثلاثة — السلسلة كاملة ١٢ من ١٢ ✅",
        },
        {
          id: "l1-fiqh",
          name: "الفقه",
          teacher: "الدكتور عامر بهجت",
          teacherNote: "سلسلة فقه العبادات - التأهيل الفقهي، كاملة ومرقّمة",
          goal: "أن تعرف كيف تعبد الله بطريقة صحيحة — دون الدخول في الخلافات الفقهية بعد.",
          lessons: [
            { id: "l1-fiqh-1", title: "١. مقدمة", youtubeId: "sJZbb7PLsU4" },
            { id: "l1-fiqh-2", title: "٢. شروط المصلي", youtubeId: "IDmSMLQE02U" },
            { id: "l1-fiqh-3", title: "٣. المياه", youtubeId: "kGeH3cN5Khc" },
            { id: "l1-fiqh-4", title: "٤. الآنية", youtubeId: "OXkn0l-6Sug" },
            { id: "l1-fiqh-5", title: "٥. الوضوء", youtubeId: "Mf591XJEy_Q" },
            { id: "l1-fiqh-6", title: "٦. آداب قضاء الحاجة", youtubeId: "_3Ye3Uy9CtU" },
            { id: "l1-fiqh-7", title: "٧. المسح على الحوائل", youtubeId: "XZsgBVHyRXc" },
            { id: "l1-fiqh-8", title: "٨. الغسل", youtubeId: "VLakZCB3ZfQ" },
            { id: "l1-fiqh-9", title: "٩. الدرس التاسع", youtubeId: "3VCr-DtmKyQ" },
            { id: "l1-fiqh-10", title: "١٠. الدرس العاشر", youtubeId: "O-ikDHLwR3M" },
            { id: "l1-fiqh-11", title: "١١. الدرس الحادي عشر", youtubeId: "vBMavKToB9U" },
            { id: "l1-fiqh-12", title: "١٢. الدرس الثاني عشر", youtubeId: "1rI0u3foQYc" },
            { id: "l1-fiqh-13", title: "١٣. الدرس الثالث عشر", youtubeId: "Tt2-2fUYn-g" },
            { id: "l1-fiqh-14", title: "١٤. الدرس الرابع عشر", youtubeId: "avaEWmEqA_g" },
            { id: "l1-fiqh-15", title: "١٥. تتمة شروط الصلاة", youtubeId: "C_IMeOcnHhI" },
            { id: "l1-fiqh-16", title: "١٦. أركان الصلاة", youtubeId: "u44PyajM8Uo" },
            { id: "l1-fiqh-17", title: "١٧. واجبات الصلاة", youtubeId: "JVc6BVjed8E" },
            { id: "l1-fiqh-18", title: "١٨. سنن الصلاة", youtubeId: "CeD7t-Yh4f4" },
            { id: "l1-fiqh-19", title: "١٩. مباحات الصلاة ومكروهاتها ومبطلاتها", youtubeId: "eL8DC2ntF_w" },
            { id: "l1-fiqh-20", title: "٢٠. تمارين الصلاة (١)", youtubeId: "8_KBhBbVs9U" },
            { id: "l1-fiqh-21", title: "٢١. صلاة الجمعة", youtubeId: "2rYUMVH-5Xg" },
            { id: "l1-fiqh-22", title: "٢٢. صلاة الجماعة", youtubeId: "YAdsSOt5tik" },
            { id: "l1-fiqh-23", title: "٢٣. صلاة أهل الأعذار", youtubeId: "J--TQBZ9cU0" },
            { id: "l1-fiqh-24", title: "٢٤. الجنازة والنوافل", youtubeId: "-051DlanJwI" },
            { id: "l1-fiqh-25", title: "٢٥. النوافل المقيدة", youtubeId: "lHidWdGxfws" },
            { id: "l1-fiqh-26", title: "٢٦. الخطأ في الصلاة", youtubeId: "H75HbqRqTIw" },
            { id: "l1-fiqh-27", title: "٢٧. تمارين الصلاة (٢)", youtubeId: "KriQ3aP4un0" },
            { id: "l1-fiqh-28", title: "٢٨. الزكاة", youtubeId: "ul8eOk85hiU" },
            { id: "l1-fiqh-29", title: "٢٩. الأثمان وبهيمة الأنعام", youtubeId: "tmWP1cuhapc" },
            { id: "l1-fiqh-30", title: "٣٠. الخارج من الأرض وعروض التجارة", youtubeId: "5JHZ8LUDEoM" },
            { id: "l1-fiqh-31", title: "٣١. زكاة الفطر", youtubeId: "WWP-35Nh5Vo" },
            { id: "l1-fiqh-32", title: "٣٢. أهل الزكاة", youtubeId: "Yfly7vHcqqQ" },
            { id: "l1-fiqh-33", title: "٣٣. تمارين الزكاة", youtubeId: "CUwLZi1x1BU" },
            { id: "l1-fiqh-34", title: "٣٤. الصوم", youtubeId: "JyFLCFxAliY" },
            { id: "l1-fiqh-35", title: "٣٥. صوم رمضان والمفطرات", youtubeId: "jiCqHLzfqHc" },
            { id: "l1-fiqh-36", title: "٣٦. الأفعال في الصوم", youtubeId: "4dfIGy3nmRs" },
            { id: "l1-fiqh-37", title: "٣٧. مقدمة في المناسك وشرط وجوب الحج وأفعال الحج", youtubeId: "SSm3_HgzG04" },
            { id: "l1-fiqh-38", title: "٣٨. العمرة والذبائح", youtubeId: "NtRmGXR-7Uo" },
            { id: "l1-fiqh-39", title: "٣٩. الدرس التاسع والثلاثون", youtubeId: "5tMuIvb3xV4" },
          ],
          reference: "المتن: فقه العبادات - التأهيل الفقهي (٣٩ من ٣٩ رابطًا — عناوين ٩ إلى ١٤ و٣٩ عامة لحد ما تأكدلي التفاصيل)",
        },
        {
          id: "l1-hadith",
          name: "الحديث",
          teacher: "الشيخ محمد بن صالح العثيمين",
          teacherNote: "سلسلة كاملة ومرفوعة بانتظام (١-٤٢) بنفس التنسيق من قناة واحدة",
          goal: "أن تتعلم كيف تستخرج الفائدة من الحديث لا حفظه فقط.",
          lessons: [
            { id: "l1-hadith-1", title: "الحديث الأول: إنما الأعمال بالنيات", youtubeId: "LS3DsGsNQ-Q" },
            { id: "l1-hadith-2", title: "الحديث الثاني: سؤال جبريل عن الإسلام والإيمان والإحسان", youtubeId: "emcdkcWhAk8" },
            { id: "l1-hadith-3", title: "الحديث الثالث: بُني الإسلام على خمس", youtubeId: "QnSAwo1t1to" },
            { id: "l1-hadith-4", title: "الحديث الرابع: إن أحدكم يُجمع خلقه في بطن أمه", youtubeId: "iKK6344AWPU" },
            { id: "l1-hadith-5", title: "الحديث الخامس: من أحدث في أمرنا هذا ما ليس منه فهو رد", youtubeId: "hChYM9ELVtE" },
            { id: "l1-hadith-6", title: "الحديث السادس: إن الحلال بيّن وإن الحرام بيّن", youtubeId: "rUOOqxg7Wkc" },
            { id: "l1-hadith-7", title: "الحديث السابع: الدين النصيحة", youtubeId: "xA0tdbtRIto" },
            { id: "l1-hadith-8", title: "الحديث الثامن: أُمرت أن أقاتل الناس حتى يشهدوا أن لا إله إلا الله", youtubeId: "O_G4GGEo9q0" },
            { id: "l1-hadith-9", title: "الحديث التاسع: ما نهيتكم عنه فاجتنبوه", youtubeId: "DQYmGgyxiKI" },
            { id: "l1-hadith-10", title: "الحديث العاشر: إن الله طيب لا يقبل إلا طيبًا", youtubeId: "_f_5hPDKFQA" },
            { id: "l1-hadith-11", title: "الحديث الحادي عشر: دع ما يريبك إلى ما لا يريبك", youtubeId: "9_JfVO-6-w8" },
            { id: "l1-hadith-12", title: "الحديث الثاني عشر: من حسن إسلام المرء تركه ما لا يعنيه", youtubeId: "36xzvgLyAaE" },
            { id: "l1-hadith-13", title: "الحديث الثالث عشر: لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه", youtubeId: "FNCqARJoXhY" },
            { id: "l1-hadith-14", title: "الحديث الرابع عشر: لا يحل دم امرئ مسلم إلا بإحدى ثلاث", youtubeId: "LDRlTFoZS6Y" },
            { id: "l1-hadith-15", title: "الحديث الخامس عشر: فليقل خيرًا أو ليصمت", youtubeId: "M6st_z1rpbo" },
            { id: "l1-hadith-16", title: "الحديث السادس عشر: لا تغضب", youtubeId: "cbyjsqQ3_Ik" },
            { id: "l1-hadith-17", title: "الحديث السابع عشر: إن الله كتب الإحسان على كل شيء", youtubeId: "NTLWT95N2Rc" },
            { id: "l1-hadith-18", title: "الحديث الثامن عشر: اتق الله حيثما كنت", youtubeId: "05sba0WHgqk" },
            { id: "l1-hadith-19", title: "الحديث التاسع عشر: احفظ الله يحفظك", youtubeId: "_bpFC5TV4Ak" },
            { id: "l1-hadith-20", title: "الحديث العشرون: إذا لم تستحِ فاصنع ما شئت", youtubeId: "3e3PP6B5HLQ" },
            { id: "l1-hadith-21", title: "الحديث الحادي والعشرون: قل آمنت بالله ثم استقم", youtubeId: "yt1s1t6ZlEk" },
            { id: "l1-hadith-22", title: "الحديث الثاني والعشرون: أرأيت إذا صليت المكتوبات وصمت رمضان", youtubeId: "yD-4pNbXJEU" },
            { id: "l1-hadith-23", title: "الحديث الثالث والعشرون: الطهور شطر الإيمان", youtubeId: "_1EazDEBoCI" },
            { id: "l1-hadith-24", title: "الحديث الرابع والعشرون: يا عبادي إني حرمت الظلم على نفسي", youtubeId: "SaIZoeFc7qY" },
            { id: "l1-hadith-25", title: "الحديث الخامس والعشرون: عجب أصحاب رسول الله ﷺ من أهل الدثور بالأجور", youtubeId: "esbfNVKLDPs" },
            { id: "l1-hadith-26", title: "الحديث السادس والعشرون: كل سُلامى من الناس عليه صدقة", youtubeId: "iHn0Yy5aJog" },
            { id: "l1-hadith-27", title: "الحديث السابع والعشرون: البر حسن الخلق والإثم ما حاك في نفسك", youtubeId: "isTInN64-1Q" },
            { id: "l1-hadith-28", title: "الحديث الثامن والعشرون: أوصيكم بتقوى الله والسمع والطاعة", youtubeId: "knbCbBLkNw8" },
            { id: "l1-hadith-29", title: "الحديث التاسع والعشرون: ألا أدلك على أبواب الخير؟", youtubeId: "djbxieA2Xiw" },
            { id: "l1-hadith-30", title: "الحديث الثلاثون: إن الله تعالى فرض فرائض فلا تضيعوها", youtubeId: "RW11BSf9WzE" },
            { id: "l1-hadith-31", title: "الحديث الحادي والثلاثون: ازهد في الدنيا يحبك الله", youtubeId: "me17wA4OZrw" },
            { id: "l1-hadith-32", title: "الحديث الثاني والثلاثون: لا ضرر ولا ضرار", youtubeId: "zf7Z9Pf-i3E" },
            { id: "l1-hadith-33", title: "الحديث الثالث والثلاثون: لو يُعطى الناس بدعواهم", youtubeId: "sBKG-87OZqc" },
            { id: "l1-hadith-34", title: "الحديث الرابع والثلاثون: من رأى منكم منكرًا فليغيره بيده", youtubeId: "hDEzs_ydO88" },
            { id: "l1-hadith-35", title: "الحديث الخامس والثلاثون: لا تحاسدوا ولا تناجشوا", youtubeId: "Wij2CAW9_yg" },
            { id: "l1-hadith-36", title: "الحديث السادس والثلاثون: من نفّس عن مؤمن كربة", youtubeId: "gHK69HGlCTA" },
            { id: "l1-hadith-37", title: "الحديث السابع والثلاثون: إن الله كتب الحسنات والسيئات", youtubeId: "N6Ju8WDtjGU" },
            { id: "l1-hadith-38", title: "الحديث الثامن والثلاثون: من عادى لي وليًا فقد آذنته بالحرب", youtubeId: "48gCELxfmqo" },
            { id: "l1-hadith-39", title: "الحديث التاسع والثلاثون: إن الله تجاوز عن أمتي الخطأ والنسيان", youtubeId: "WwZTNp2yx-0" },
            { id: "l1-hadith-40", title: "الحديث الأربعون: كن في الدنيا كأنك غريب", youtubeId: "gTFHzpY0QHg" },
            { id: "l1-hadith-41", title: "الحديث الحادي والأربعون: لا يؤمن أحدكم حتى يكون هواه تبعًا لما جئت به", youtubeId: "OahK7OsK5wg" },
            { id: "l1-hadith-42", title: "الحديث الثاني والأربعون: يا ابن آدم إنك ما دعوتني ورجوتني غفرت لك", youtubeId: "5L2zoqeeoP8" },
          ],
          reference: "المتن: الأربعون النووية — السلسلة كاملة ٤٢ من ٤٢ حديثًا ✅",
        },
        {
          id: "l1-mustalah",
          name: "مصطلح الحديث",
          teacher: "قريبًا",
          goal: "أساسيات علم المصطلح فقط — دون الدخول في علم الرجال بالتفصيل الآن.",
          lessons: [
            { id: "l1-mustalah-1", title: "الحديث الصحيح، الحسن، الضعيف", youtubeId: null },
            { id: "l1-mustalah-2", title: "المتواتر والآحاد", youtubeId: null },
            { id: "l1-mustalah-3", title: "المرفوع، الموقوف، المقطوع", youtubeId: null },
            { id: "l1-mustalah-4", title: "الإسناد", youtubeId: null },
          ],
        },
        {
          id: "l1-seerah",
          name: "السيرة",
          teacher: "قريبًا",
          goal: "أن تعيش التسلسل الزمني للسيرة، لا مجرد حفظ أسماء الغزوات.",
          lessons: [
            { id: "l1-seerah-1", title: "المولد والنسب والنشأة", youtubeId: null },
            { id: "l1-seerah-2", title: "البعثة والدعوة السرية ثم الجهرية", youtubeId: null },
            { id: "l1-seerah-3", title: "الهجرة إلى المدينة", youtubeId: null },
            { id: "l1-seerah-4", title: "بدر، أحد، الخندق", youtubeId: null },
            { id: "l1-seerah-5", title: "الحديبية وفتح مكة", youtubeId: null },
            { id: "l1-seerah-6", title: "حجة الوداع ووفاته ﷺ", youtubeId: null },
          ],
        },
        {
          id: "l1-tafsir",
          name: "التفسير",
          teacher: "الشيخ محمد بن صالح العثيمين",
          teacherNote: "تفسير جزء عمّ بصوت الشيخ مباشرة، من مشروع كبار العلماء",
          goal: "فهم معاني جزء عمّ آية بآية بأسلوب واضح ومباشر.",
          lessons: [
            { id: "l1-tafsir-1", title: "الدرس ١", youtubeId: "9GiVd6G038M" },
            { id: "l1-tafsir-2", title: "الدرس ٢", youtubeId: "mImA2Q38YBw" },
            { id: "l1-tafsir-3", title: "الدرس ٣", youtubeId: "B43lrRpbe-A" },
            { id: "l1-tafsir-4", title: "الدرس ٤", youtubeId: "_DfWw3lc63Y" },
            { id: "l1-tafsir-5", title: "الدرس ٥", youtubeId: "3n51xXjQn5I" },
            { id: "l1-tafsir-6", title: "الدرس ٦", youtubeId: "KZgEtLpBFyc" },
            { id: "l1-tafsir-7", title: "الدرس ٧", youtubeId: "FHDeTB9KMQQ" },
            { id: "l1-tafsir-8", title: "الدرس ٨", youtubeId: "vJdC8GlmBxs" },
            { id: "l1-tafsir-9", title: "الدرس ٩", youtubeId: "0ktvHotnoxs" },
            { id: "l1-tafsir-10", title: "الدرس ١٠", youtubeId: "tvogO-LFCJQ" },
            { id: "l1-tafsir-11", title: "الدرس ١١", youtubeId: "5zmvN_Bius4" },
            { id: "l1-tafsir-12", title: "الدرس ١٢", youtubeId: "_Be4Zm-8LvY" },
            { id: "l1-tafsir-13", title: "الدرس ١٣", youtubeId: "WwaAZkUbjTI" },
            { id: "l1-tafsir-14", title: "الدرس ١٤", youtubeId: "mm9TSeDZz2Y" },
            { id: "l1-tafsir-15", title: "الدرس ١٥", youtubeId: "5_QdaH82Rjc" },
            { id: "l1-tafsir-16", title: "الدرس ١٦", youtubeId: "h2Cpavc_4Gs" },
            { id: "l1-tafsir-17", title: "الدرس ١٧", youtubeId: "XsdvIbhMCv4" },
            { id: "l1-tafsir-18", title: "الدرس ١٨", youtubeId: "MenKPs8MnyU" },
            { id: "l1-tafsir-19", title: "الدرس ١٩", youtubeId: "4wXtNPpiAo8" },
            { id: "l1-tafsir-20", title: "الدرس ٢٠", youtubeId: "1c5yzN9MI70" },
            { id: "l1-tafsir-21", title: "الدرس ٢١", youtubeId: "aFPYiKRJM5c" },
            { id: "l1-tafsir-22", title: "الدرس ٢٢", youtubeId: "6BFmcjZhbFE" },
            { id: "l1-tafsir-23", title: "الدرس ٢٣", youtubeId: "gtOpLKE-6Io" },
            { id: "l1-tafsir-24", title: "الدرس ٢٤", youtubeId: "R6UaOJTA1YM" },
            { id: "l1-tafsir-25", title: "الدرس ٢٥", youtubeId: "-S5G5i3xlPM" },
            { id: "l1-tafsir-26", title: "الدرس ٢٦", youtubeId: "6A4UL6DS9yc" },
          ],
          reference: "تفسير جزء عمّ كاملًا — ٢٦ من ٢٦ ✅ (عناوين السور لكل درس محتاجة تأكيد لاحقًا)",
        },
        {
          id: "l1-arabic",
          name: "اللغة العربية",
          teacher: "قريبًا",
          goal: "فهم أساس النحو قبل الانتقال لكتب اللغة الكبيرة.",
          lessons: [
            { id: "l1-arabic-1", title: "الكلام، الاسم، الفعل، الحرف", youtubeId: null },
            { id: "l1-arabic-2", title: "الإعراب", youtubeId: null },
            { id: "l1-arabic-3", title: "المرفوعات، المنصوبات، المجرورات", youtubeId: null },
            { id: "l1-arabic-4", title: "الجملة الاسمية والفعلية", youtubeId: null },
          ],
          reference: "المتن: الآجرومية",
        },
        {
          id: "l1-usul",
          name: "أصول الفقه",
          teacher: "قريبًا",
          goal: "فهم المفاهيم الأساسية أولًا، ثم البدء بمتن «الورقات» في نهاية المستوى.",
          lessons: [
            { id: "l1-usul-1", title: "ما هو الفقه؟ وما أصول الفقه؟", youtubeId: null },
            { id: "l1-usul-2", title: "الحكم الشرعي: الواجب، المندوب، الحرام، المكروه، المباح", youtubeId: null },
            { id: "l1-usul-3", title: "الدليل: القرآن، السنة، الإجماع، القياس (ابتدائيًا)", youtubeId: null },
            { id: "l1-usul-4", title: "في ختام المستوى: بداية متن الورقات", youtubeId: null },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "المستوى الثاني",
      arabicOrdinal: "الثانية",
      subtitle: "المنهج قيد الإعداد — هيُضاف قريبًا بنفس ترتيب المستوى الأول",
      duration: "",
      subjects: [],
    },
    {
      id: 3,
      name: "المستوى الثالث",
      arabicOrdinal: "الثالثة",
      subtitle: "المنهج قيد الإعداد — هيُضاف قريبًا بنفس ترتيب المستوى الأول",
      duration: "",
      subjects: [],
    },
    {
      id: 4,
      name: "المستوى الرابع",
      arabicOrdinal: "الرابعة",
      subtitle: "المنهج قيد الإعداد — هيُضاف قريبًا بنفس ترتيب المستوى الأول",
      duration: "",
      subjects: [],
    },
  ],
};

/* دوال مساعدة للوصول للبيانات — لا تحتاج تعديل */
function getLevel(id) {
  return SITE_DATA.levels.find((lv) => lv.id === Number(id));
}
function getSubject(id) {
  for (const level of SITE_DATA.levels) {
    const found = (level.subjects || []).find((s) => s.id === id);
    if (found) return { subject: found, level };
  }
  return null;
}
/* الدوال دي هتُستخدم لاحقًا لما نضيف فيديوهات فعلية لكل موضوع داخل المادة */
function getLesson(id) {
  for (const level of SITE_DATA.levels) {
    for (const subject of level.subjects || []) {
      const found = (subject.lessons || []).find((ls) => ls.id === id);
      if (found) return { lesson: found, level, subject };
    }
  }
  return null;
}
function getAdjacentLesson(currentId, direction) {
  const found = getLesson(currentId);
  if (!found) return null;
  const { subject } = found;
  const list = subject.lessons || [];
  const idx = list.findIndex((ls) => ls.id === currentId);
  const nextIdx = direction === "next" ? idx + 1 : idx - 1;
  if (nextIdx >= 0 && nextIdx < list.length) {
    return { lesson: list[nextIdx], level: found.level, subject };
  }
  return null;
}
