/* By https://github.com/ALBERTO9883/NyanCatBot-MD */
import fetch from 'node-fetch';
import {sticker} from '../lib/sticker.js';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] يرجى إدخال رابط حزمة الملصقات ${usedPrefix + command}* https://getstickerpack.com/stickers/flork-memes-4-1`;
  try {
    const url = text;
    const res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`);
    const json = await res.json();
    for (const data of (json.result || json)) {
      const stikers = await sticker(false, data, global.packname, global.author);
      conn.sendFile(m.chat, stikers, null, {asSticker: true}, m, true, {contextInfo: {'forwardingScore': 200, 'isForwarded': true}}, {quoted: m});
      // await delay(1500)
    }
  } catch {
    await m.reply('*[❗] حدث خطأ، لا يمكن العثور على حزمة الملصقات*');
  }
};
handler.command = /^تنزيل-ستيكرات/i;
export default handler;
// const delay = time => new Promise(res => setTimeout(res, time))
