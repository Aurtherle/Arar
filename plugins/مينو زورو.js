import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Africa/Egypt').format('HH')
let wib = moment.tz('Africa/Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات`
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let {money, joincount} = global.db.data.users[m.sender];
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let rtotal = Object.entries(global.db.data.users).length || '0'
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
global.fcontact = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    const str = `
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊${taguser}⌉*
┃🐉✬⃝ *
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +201032389641*
*🐉✬⃝╿ باي بال:* paypal.me/Yosef160
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
┏━💼 مـعلـومـات المستخدم:💼━┓
┃ 🎩  *الاسـم:* ${name} 
┃ 💎  *الألـماس:* ${diamond} 
┃ 🏆  *الـرتبة:* ${role}
┃ 🎮  *الخبـرة:* ${exp}
┃ 🪙  *زورو كوينز:* ${money}
┃ 🎟️  *الرموز:* ${joincount}
┗━━━━━━━━━━━┛

┏━━⏰ _الـتـاريـخ والـوقـت!_ ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* ${date} 
┃ ⏲️  *الـوقـت الـحالـي:* ${wib} 
┗━━━━━━━━━━━━━┛

┏━━🤖 _مـعلـومـات البـوت:_🤖━━┓
┃ ✨  *اسـم البـوت:* ${botname} 
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 🕓  *وقـت الـتـشغيـل:* ${uptime}
┃ 📚  *إجـمالـي المـستخـدميـن:* ${rtotal} 
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*☰ وامـر البـوت↯°*
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥🌐│الـجـروب│🌐⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
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
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥🧎🏽‍♂️│الــديــن│🕋⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🌃❯ .اذكار المساء
│✮ ⃟☀❯ .اذكار الصباح
│✮ ⃟🧎🏽‍♂️❯ .الله
│✮ ⃟📖❯ .قران
│✮ ⃟📺❯ .قران2
│✮ ⃟📿❯ .اذكار
│✮ ⃟📄❯ .اية
│✮ ⃟🕋❯ .ايه-الكرسي
│✮ ⃟📙❯ .سور
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
          ⩥⚙️│التحويلات│🧰⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🎈❯ .ملصق
│✮ ⃟©️❯ .سرقه
│✮ ⃟🏞️❯ .لصورة
│✮ ⃟🎞️❯ .لفيديو
│✮ ⃟🔊❯ .لصوت
│✮ ⃟🔗❯ .تليجراق
│✮ ⃟🎭❯ .دمج
│✮ ⃟🎲❯ .نرد
│✮ ⃟🎙️❯ .انطق
│✮ ⃟🎙️❯ .انطق2
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥🎮│الـترفـيه│🎮⩤
⟣┈┈┈┈┈┈⟢┈┈┈ـ⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🎐❯ .مطلوب
│✮ ⃟🍀❯ .ميم
│✮ ⃟🚔❯ .سجن
│✮ ⃟❌❯ .اكس_او
│✮ ⃟📛 .حذف
│✮ ⃟🍢❯ .قرعه
│✮ ⃟🧮❯ .رياضيات
│✮ ⃟🕹️❯ .رهان
│✮ ⃟💁🏻‍♂️❯ .شخصية
│✮ ⃟🧩❯ .تحدي
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥⚙️│الـأداوات│🧮⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟💬❯ .تعليق
│✮ ⃟💭❯ .اكتب
│✮ ⃟🪚❯ .قص
│✮ ⃟🌠❯ .جوده
│✮ ⃟✍🏻❯ .زخرفه
│✮ ⃟🎟️❯ .باركود
│✮ ⃟🏹❯ .ترجمة
│✮ ⃟🀄❯ .لوجو
│✮ ⃟〰️❯ .وهمي 
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
          ⩥🎙️│الـتـنزيـلات│📽️⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟📻❯ .شغل
│✮ ⃟📽️❯ .فيديو
│✮ ⃟🎥❯ .يوتيوبب
│✮ ⃟🧸❯ .انستا
│✮ ⃟📱❯ .بلاي
│✮ ⃟Ⓜ️❯ .فيس
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥⚙️│الـبـحـث│📊⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🔍❯ .فيديو
│✮ ⃟🔍❯ .ويكيبيديا
│✮ ⃟🖨️❯ .مانجا
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
     ⩥🏞️│الاديـت و الـصـوره│📹⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟📹❯ .ايديت
│✮ ⃟🎴❯ .خلفيه
│✮ ⃟👩🏻‍❤️‍👨🏻❯ .تطقيم
│✮ ⃟🙋🏻‍♂️❯ .طقم-اولاد
│✮ ⃟🙋🏻‍♀️❯ .طقم-بنات
│✮ ⃟⚽❯ .كريستيانو
│✮ ⃟🐏❯ .ميسي
│✮ ⃟🦮❯ .كلب
│✮ ⃟🐈❯ .قط
│✮ ⃟🕵🏻‍♂️❯ .هكر
│✮ ⃟🪐❯ .كوكب
│✮ ⃟🍄❯ .درايمون
│✮ ⃟🪅❯ .كرتون
│✮ ⃟🔀❯ .عشوائي
│✮ ⃟🐪❯ .جبل 
│✮ ⃟🎮❯ .جيمينج
│✮ ⃟🕹️❯ .ببجي 
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥📌│الاعضـاء│📌⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟👨🏻‍💻❯ .المطور
│✮ ⃟✴️❯ .تسجيل
│✮ ⃟📍❯ .اقتباس
│✮ ⃟🔖❯ .بروفايل
│✮ ⃟🍁❯ .الدعم
│✮ ⃟🚀❯ .بنج
│✮ ⃟👾❯ .بوت
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`
    const { result, key, timeout } = await conn.sendMessage(m.chat, { video: { url: menuvid }, caption: str.trim(),  gifPlayback: true,
  gifAttribution: 0}, { quoted: fcontact })
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['الاوامر', 'المهام','اوامر','الأوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Africa/Egypt').format('HH')
      let res = "صباح الفل ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء النور 🌇"
      }
      if (time >= 18) {
        res = "تصبح على خير 🌙"
      }
      return res
    }
