const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*انت مشرف ب الفعل*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('*تم*');
  }
};
handler.command = /^autoadmin|adm$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
