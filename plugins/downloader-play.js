import fetch from 'node-fetch';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fs from "fs";
import yts from 'yt-search';
let limit1 = 100;
let limit2 = 400;
let limit_a1 = 50;
let limit_a2 = 400;
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw `*[❗اشعار❗] يجب إدخال اسم أو عنوان الفيديو الذي ترغب في تشغيله من YouTube، مثال: ${usedPrefix + command} rewrite the stars - Edit zoro 4K*`;
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'اغنيه') {
      additionalText = 'audio 🔊';
    } else if (command === 'play2') {
      additionalText = 'فيديو 🎥';
    }
    const texto1 = `
*${yt_play[0].title}*
*⇄ㅤ     ◁   ㅤ  ❚❚ㅤ     ▷ㅤ     ↻*

*⏰ المدة:* ${secondString(yt_play[0].duration.seconds)}
*👉🏻 انتظر لحظة حتى أرسل ${additionalText}*
*انت مسؤل عن ذنوب اغانيك*
*𝑍𝑂𝑅𝑂⚡3𝑀𝐾*`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play') {
    try {   
    const audio = global.API('ApiEmpire', `/api/v1/ytmp3?url=${yt_play[0].url}`)
    const ttl = await yt_play[0].title
    const buff_aud = await getBuffer(audio);
    const fileSizeInBytes = buff_aud.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);       
    if (size >= limit_a2) {  
    await conn.sendMessage(m.chat, {text: `*[ ✔ ] تحميل الصوت في ${audio}*`}, {quoted: m});
    return;    
    }     
    if (size >= limit_a1 && size <= limit_a2) {  
    await conn.sendMessage(m.chat, {document: buff_aud, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {audio: buff_aud, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: m});   
    return;    
    }} catch {
    throw '*[❗] حدث خطأ، يرجى المحاولة مرة أخرى.*';    
    }}
    if (command == 'play2') {
    try {   
    const video = global.API('ApiEmpire', `/api/v1/ytmp4?url=${yt_play[0].url}`)
    const ttl2 = await yt_play[0].title
    const buff_vid = await getBuffer(video);
    const fileSizeInBytes2 = buff_vid.byteLength;
    const fileSizeInKB2 = fileSizeInBytes2 / 1024;
    const fileSizeInMB2 = fileSizeInKB2 / 1024;
    const size2 = fileSizeInMB2.toFixed(2);       
    if (size2 >= limit2) {  
    await conn.sendMessage(m.chat, {text: `*[ ✔ ] تحميل الفيديو في ${video}*`}, {quoted: m});
    return;    
    }     
    if (size2 >= limit1 && size2 <= limit2) {  
    await conn.sendMessage(m.chat, {document: buff_vid, mimetype: 'video/mp4', fileName: ttl2 + `.mp4`}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {video: buff_vid, mimetype: 'video/mp4', fileName: ttl2 + `.mp4`}, {quoted: m});   
    return;    
    }} catch {
    throw '*[❗] حدث خطأ، يرجى المحاولة مرة أخرى.*';    
    }
  }
};
handler.help = ['play', 'play2'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(اغنيه|فيديو)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'ar', gl: 'AR', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};
