const handler = async (m, {conn}) => {
  conn.reply(m.chat, `*❃ ──────⊰ ❀ ⊱────── ❃*n*“${pickRandom(global.bucin)}”*\n*❃ ──────⊰ ❀ ⊱────── ❃*`, m);
};
handler.help = ['reto'];
handler.tags = ['fun'];
handler.command = /^تحداني/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.bucin = [
  'أرسل لي صورة طبيعية.',
  'قم بمشاركة شيء ممتع عنك.',
  'ارفع صورة لديك وأنت تقوم بنشاط إبداعي.',
  'اخترع قصة قصيرة ومشاركتها مع الجميع.',
  'ارفع صورة من يوم جميل قضيته.',
  'قدم توصية لفيلم أو كتاب تحبه.',
  'أكمل الجملة: \'شيء جميل في حياتي هو...\'',
  'اكتب رسالة إيجابية لأحد أفراد المجموعة.',
  'ارفع صورة لوجبة صحية أو لحظة رياضية.',
  'اختر أغنية تحبها وشارك السبب.',
  'اكتب نصيحة إيجابية للأعضاء في المجموعة.',
  'شارك مقولة مفضلة تلهم الآخرين.',
  'اطلب من الأعضاء مشاركة هدف صغير يرغبون في تحقيقه.',
  'أخبر الأعضاء عن إنجاز صغير حققته في الفترة الأخيرة.',
  'اختر أمنية إيجابية للجميع.',
  'اشارك بفكرة لفعالية إيجابية يمكن تنظيمها في المستقبل.',
  'اكتب رسالة تحفيزية لأحد الأعضاء في المجموعة.',
  'اشترك في نشاط جديد وشارك الصورة.',
  'اختر أغنية مفضلة وشارك السبب في اختيارك.',
  'اختر كتابًا تحبه وشارك توصيتك به.',
  'شارك قائمة بأهدافك للشهر القادم.',
  'اختر تحديًا صحيًا وحاول تحقيقه هذا الأسبوع.',
  'أخبر الأعضاء بفعل إيجابي قام به شخص في حياتك.',
  'قم بمشاركة مقولة تلهمك وتأثر إيجابيًا عليك.',
  'اكتب نصًا قصيرًا عن موقف إيجابي تعرضت له.',
  'اختر صديقًا وقدم له شكرًا عن شيء قام به لك.',
  'شارك صورة لطبيعة أو منظر جميل تحبه.',
  'أخبر الأعضاء بفعل صغير قامت به يوم أمس.',
  'اختر هدفًا صغيرًا وشارك الخطوات لتحقيقه.',
  'شارك نكتة أو موقف مضحك لرفع المعنويات.',
  'اختر وجبة صحية وشارك الصورة والوصف.',
  'قدم توجيهًا إيجابيًا لمن يحتاجه في المجموعة.',
  'اختر تحديًا إبداعيًا وشارك النتيجة.',
  'اشترك في فعالية خيرية وشارك تجربتك.',
  'قم بمشاركة تجربة إيجابية شهدتها في العمل أو الدراسة.',
  'شارك روتين صحي يومي يساعد في التركيز والنجاح.',
  'قم بإرسال تحية إيجابية لأي عضو في المجموعة.',
  'شارك صورة تعبر عن شعورك بالسعادة.',
  'قدم توصيات لمشاهدة فيلم أو مسلسل يساعد على الاسترخاء.',
  'اختر تحديًا رياضيًا وشارك تقدمك.',
  'قم بمشاركة فكرة لتحسين المزاج في الأيام الصعبة.',
  'شارك نصيحة صحية أو غذائية مفيدة.',
  'قم بتحدي رياضي صعب وشارك فيديو للتمرين.',
    'اختر لغة جديدة وحاول كتابة جملة معقدة بها.',
    'حاول حلاً للغاز رياضي معقد وشارك الإجابة.',
    'اقرأ كتابًا في مجال غير مألوف وشارك ملخصك للكتاب.',
    'قم بتحدي الذهن باستخدام ألعاب ذكاء صعبة.',
    'حدد هدفًا كبيرًا وشارك الخطط لتحقيقه.',
    'حاول تعلم مهارة فنية جديدة وشارك نتائجك.',
    'قم بتحدي في مجال البرمجة وشارك الكود الصعب.',
    'حاول حلاً للغاز رياضي معقد وشارك الإجابة.',
    'اختر موضوعًا فلسفيًا وشارك وجهة نظرك حوله.',
    'قم بتحدي صعب في لعبة فيديو وشارك فيديو للمستوى الصعب.',
    'حدد هدفًا شخصيًا صعبًا وشارك كيف ستتحدى نفسك.',
    'اختر ألعاب ذكاء تحتاج إلى استراتيجية وحاول الفوز.',
    'حاول إعداد وجبة صعبة وشارك صورة النتيجة.',
    'قم بتحدي في رياضة مائية صعبة وشارك الفيديو.',
    'حاول تحقيق رقم قياسي شخصي في هواية تحبها.',
    'قم بحل ألغاز ذهنية تحتاج إلى تفكير عميق.',
    'اختر موضوعًا علميًا وشارك ملخصًا لأحدث الأبحاث.',
    'حاول ركوب حيوان ذو ظهر صعب وشارك التجربة.',
    'قم بتحدي في لعبة استراتيجية ذكاء عالي.',
    'حاول تحقيق رقم قياسي في رياضة تحبها.',
    'اختر مهارة فنية تحتاج إلى تدريب مكثف وشارك تقدمك.',
    'قم بتحدي في تسلق الجبال وشارك الصور.',
    'حاول إعداد حلوى معقدة وشارك صورة النتيجة.',
    'اختر تحديًا في لعبة ألغاز ذكاء شديدة.',
    'حدد هدفًا مهنيًا صعبًا وشارك خطط تحقيقه.',
    'قم بحل ألغاز رياضية معقدة وشارك الإجابات.',
];
