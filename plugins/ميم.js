let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] افصل النص بـ *+*\n\n *مـثــال* :\n*${usedPrefix + command}* زورو معانا+زورو ضايع`

  if (!text) throw too
  if (!text.includes('+')) throw too  
  let [a, b] = text.split`+`   
  let lr = (`https://api.popcat.xyz/drake?text1=${a}&text2=${b}`)
  conn.sendFile(m.chat, lr, 'drake.png', `تست`, m)
}
handler.help = ['drake']
handler.tags = ['maker']
handler.command = ['ميم','meme']

export default handler
