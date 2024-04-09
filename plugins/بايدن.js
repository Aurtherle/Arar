let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] افصل النص بـ *+*\n\n *مـثــال* :\n*${usedPrefix + command}* زورو خلك ورانا+زورو ضاع` 

  if (!text) throw too
  let lr = (`https://api.popcat.xyz/biden?text=${encodeURIComponent(text)}`)
  conn.sendFile(m.chat, lr, 'drake.png', `تست`, m)
}
handler.help = ['drake']
handler.tags = ['maker']
handler.command = ['بايدن','meme']

export default handler
