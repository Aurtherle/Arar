import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Riyadh).format('HH')
let wib = moment.tz('Riyadh).format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/5c07b3268b81043a02ad3.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
let {money, joincount} = global.db.data.users[m.sender];
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `
*❃ ──────⊰ ❀ ⊱────── ❃*
*✬⃝╿↵ مرحــبـا ⌊${taguser}⌉*
*❃ ──────⊰ ❀ ⊱────── ❃*
┏━━━━━━━━━━━━━━━━┓
┃ *< إعدادات البوت >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣➤ الرسائل في الانتظار
┣ ඬ⃟ ⚡ *.صلح*
┗━━━━━━━━━━━━━━━━┛
┏━💼 مـعلـومـات المستخدم:_ 💼━┓
┃ 🎩  *الاسـم:* ${name} 
┃ 💎  *الألـماس:* ${diamond} 
┃ 🏆  *الـرتبة:* ${role}
┃ 🎮  *الخبـرة:* ${exp}
┃ 🪙  *عملات:* ${money}
┃ 🎟️  *الرموز:* ${joincount}
┗━━━━━━━━━━━┛

┏━━⏰ _الـتـاريـخ والـوقـت!_ ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* ${date} 
┃ ⏲️  *الـوقـت الـحالـي:* ${wib} 
┗━━━━━━━━━━━━━┛

┏━━🤖 _مـعلـومـات البـوت:_🤖━━┓
┃ ✨  *اسـم البـوت:* ${botname} 
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼 
┃ 🕓  *وقـت الـتـشغيـل:* ${uptime}
┃ 📚  *إجـمالـي المـستخـدميـن:* ${rtotal} 
┗━━━━━━━━━━━━━┛
*❃ ──────⊰ ❀ ⊱────── ❃*
*☰ وامـر البـوت↯°*
*❃ ──────⊰ ❀ ⊱────── ❃*
           ⩥🌐│الـجـروب│🌐⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟🚫❯ .انذار
│✮ ⃟⭕❯ .رفع-انذار
│✮ ⃟🚷❯ .الانذارات
│✮ ⃟➕❯ .دعوه
│✮ ⃟📧❯ .منشن
│✮ ⃟👽❯ .مخفي
│✮ ⃟👨🏽‍✈️❯ .المشرفين
│✮ ⃟🛋️❯ .جروب
│✮ ⃟🚸❯ .طرد
│✮ ⃟♻️❯ .رستر
│✮ ⃟🗑️❯ .حذف
│✮ ⃟🤿❯ .واتس
│✮ ⃟🪀❯ .لينك
│✮ ⃟📰❯ .جروبي
│✮ ⃟📇❯ .فحص
│✮ ⃟📢❯ .تغيرالترحيب 
│✮ ⃟☠️❯ .تغيرالوداع
│✮ ⃟↗️❯ .رفع 
│✮ ⃟↘️❯ .خفض
│✮ ⃟📝❯ .تغير-الاسم 
│✮ ⃟🗒️❯ .تغيرالوصف 
│✮ ⃟📸❯ .تغيرالصوره
*❃ ──────⊰ ❀ ⊱────── ❃*
           ⩥🧎🏽‍♂️│الــديــن│🕋⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟🌃❯ .اذكار المساء
│✮ ⃟☀❯ .اذكار الصباح
│✮ ⃟🧎🏽‍♂️❯ .الله
│✮ ⃟📖❯ .قران
│✮ ⃟📺❯ .قران2
│✮ ⃟📿❯ .اذكار
│✮ ⃟📄❯ .اية
│✮ ⃟🕋❯ .ايه-الكرسي
│✮ ⃟📙❯ .سور
*❃ ──────⊰ ❀ ⊱────── ❃*
          ⩥⚙️│التحويلات│🧰⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟🎈❯ .ملصق
│✮ ⃟😂❯ .ميم
│✮ ⃟📝❯ .كود
│✮ ⃟🃏❯ .فضح
│✮ ⃟©️❯ .سرقه
│✮ ⃟🏞️❯ .لصورة
│✮ ⃟🎪❯ .لانمي
│✮ ⃟✨❯ .لكرتون
│✮ ⃟🎞️❯ .لفيديو
│✮ ⃟🔊❯ .لصوت
│✮ ⃟🔗❯ .تليجراف
│✮ ⃟🎭❯ .دمج
│✮ ⃟🎲❯ .نرد
│✮ ⃟🎙️❯ .انطق
│✮ ⃟🎙️❯ .انطق2
│✮ ⃟🎐❯ .مطلوب
*❃ ──────⊰ ❀ ⊱────── ❃*
           ⩥🎮│العاب│🎮⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟🎭❯ .فعاليه
│✮ ⃟❓❯ .انمي
│✮ ⃟⚽❯ .كوره
│✮ ⃟🎵❯ .تخمين
│✮ ⃟🎈❯ .العاب
│✮ ⃟⚽❯ .رياضه
│✮ ⃟❌❯ .اكس_او
│✮ ⃟📛 .امسح
│✮ ⃟🍢❯ .قرعه
│✮ ⃟🧮❯ .رياضيات
│✮ ⃟🎰❯ .رهان
│✮ ⃟💁🏻‍♂️❯ .شخصية
│✮ ⃟❓❯ .احزر
│✮ ⃟👀❯ .عين
│✮ ⃟🎈❯ .ايموجي
│✮ ⃟⚡❯ .سؤال
│✮ ⃟🎮❯ .كت
│✮ ⃟🔤❯ .احرف
│✮ ⃟🇪🇬❯ .علم
│✮ ⃟🤔❯ .خمن
│✮ ⃟🔠❯ .فكك
│✮ ⃟🔡❯ .رتب
│✮ ⃟❔❯ .اجابه
│✮ ⃟❔❯ .دين
*❃ ──────⊰ ❀ ⊱────── ❃*
           ⩥🎮│الترفيه│🎮⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟❓❯ .هل
│✮ ⃟❓❯ .لو
│✮ ⃟💡❯ .نصيحه
│✮ ⃟🤐❯ .صراحه
│✮ ⃟👑❯ .تاج
│✮ ⃟💍❯ .زواج
│✮ ⃟💔❯ .طلاق
│✮ ⃟👬❯ .صديق
│✮ ⃟👬❯ .رفيق
│✮ ⃟🙋‍♂️❯ .تحداني
│✮ ⃟🏆❯ .توب
│✮ ⃟😂❯ .ميمز
│✮ ⃟🗣❯ .مقولات
│✮ ⃟💕❯ .الحب
│✮ ⃟🎞❯ .افلام
│✮ ⃟💀❯ .فيلم-رعب
│✮ ⃟📽❯ .فيلم-اكشن
│✮ ⃟🎭❯ .فيلم-غموض
│✮ ⃟✨❯ .فيلم-دراما
│✮ ⃟🐱‍👤❯ .شخصيه
│✮ ⃟👽❯ .ذكاء
│✮ ⃟🤡❯ .غباء
│✮ ⃟☠❯ .اختراق
│✮ ⃟🤙❯ .بوست
│✮ ⃟🌟❯ .اقتباس
*❃ ──────⊰ ❀ ⊱────── ❃*
           ⩥⚙️│الـأداوات│🧮⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟💬❯ .تعليق
│✮ ⃟👀❯ .شوف
│✮ ⃟🤖❯ .زورو
│✮ ⃟🌠❯ .جوده
│✮ ⃟✍🏻❯ .زخرفه
│✮ ⃟🎟️❯ .باركود
│✮ ⃟🏹❯ .ترجمة
│✮ ⃟🀄❯ .لوجو
│✮ ⃟〰️❯ .وهمي 
*❃ ──────⊰ ❀ ⊱────── ❃*
          ⩥🎙️│الـتـنزيـلات│📽️⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟📻❯ .اغنيه
│✮ ⃟📽️❯ .فيديو
│✮ ⃟🎥❯ .يوتيوب
│✮ ⃟🧸❯ .انستجرام
│✮ ⃟📱❯ .ابك-مود
│✮ ⃟📱❯ .تطبيق
│✮ ⃟📷❯ .صوره
│✮ ⃟🌅❯ .خلفيه
│✮ ⃟🎵❯ .تيك
│✮ ⃟🖼❯ .صورتيك
│✮ ⃟Ⓜ️❯ .فيس
│✮ ⃟🎧❯ .استوري
*❃ ──────⊰ ❀ ⊱────── ❃*
           ⩥⚙️│الـبـحـث│📊⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟🔍❯ .فيديو
│✮ ⃟🔍❯ .ويكيبيديا
│✮ ⃟🖨️❯ .مانجا
│✮ ⃟☁❯ .الطقس
*❃ ──────⊰ ❀ ⊱────── ❃*
     ⩥🏞️│الاديـت و الـصـوره│📹⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟📹❯ .ايديت
│✮ ⃟📹❯ .ايديت2
│✮ ⃟🎴❯ .خلفيات
│✮ ⃟👩🏻‍❤️‍👨🏻❯ .تطقيم
│✮ ⃟🙋🏻‍♂️❯ .طقم-اولاد
│✮ ⃟🙋🏻‍♀️❯ .طقم-بنات
│✮ ⃟⚽❯ .كريستيانو
│✮ ⃟🐏❯ .ميسي
│✮ ⃟🦮❯ .كلب
│✮ ⃟🐈❯ .قط
*❃ ──────⊰ ❀ ⊱────── ❃*
           ⩥📌│الاعضـاء│📌⩤
*❃ ──────⊰ ❀ ⊱────── ❃*
│✮ ⃟👨🏻‍💻❯ .المطور
│✮ ⃟✴️❯ .تسجيل
│✮ ⃟📍❯ .اقتباس
│✮ ⃟🔖❯ .بروفايل
│✮ ⃟🍁❯ .الدعم
│✮ ⃟🚀❯ .بنج
│✮ ⃟👾❯ .بوت
*❃ ──────⊰ ❀ ⊱────── ❃*`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
    }
