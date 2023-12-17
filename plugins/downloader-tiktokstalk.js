import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  if (!text) return conn.reply(m.chat, `*الرجاء إرسال اسم المستخدم لـ TikTok* "@"\nمثال\n*${usedPrefix + command} ox__zoro__ox*`, m);
  try {
    const res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=GataDios`);
    const res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=GataDios`;
    const json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    const thumb = await (await fetch(json.result.user_picture)).buffer();
    const Mystic = `
👤 *المستخدم:* ${json.result.username}\n\n`
`🚀 *الاسم:* ${json.result.nickname}\n`
`👥 *المتابعين:* ${json.result.followers}\n`
`👣 *المتابعين:* ${json.result.followings}\n`
`❤️ *الإعجابات:* ${json.result.likes}\n`
`🎥 *عدد الفيديوهات:* ${json.result.video}\n`
`💬 *الوصف:* ${json.result.bio}
`.trim();
    conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false);
  } catch (e) {
    throw '*[❗اشعار❗] لم يتم العثور على مستخدم TikTok*';
  }
};
handler.help = ['tiktokstalk'].map((v) => v + ' <username>');
handler.tags = ['stalk'];
handler.command = /^(تيك-معلومات|ttstalk)$/i;
export default handler;
