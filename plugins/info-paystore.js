import fs from 'fs'
import fetch from 'node-fetch'


let handler = async (m, { conn, args, command }) => {
	let url = 'https://telegra.ph/file/4c87058d1b9fbb8f18c44.png'
	let text = ` 
═┅══ *SEWA* ══┅═
⫹⫺ *Hemat:* _5k/grup (1 minggu)_
⫹⫺ *Normal:* _15k/grup (1 bulan)_
⫹⫺ *Standar:* _30k/grup (2 bulan)_
⫹⫺ *Pro:* _35k/grup (4 bulan)_                                                      
⫹⫺ *Vip:* _65k/grup (6 bulan & 1 bulan *Premium*)_
═┅══ *PREMIUM* ══┅═
⫹⫺ *Hemat:* _5k (1 minggu)_
⫹⫺ *Normal:* _20k (1 bulan)_
⫹⫺ *Pro:* _40k (4 bulan)_
⫹⫺ *Vip:* _50k (8 bulan)_                                               
⫹⫺ *Permanent:* = _999k (Unlimited)_
═┅══ *INFO* ══┅═
 Ingin sewa BOT untuk Grup kalian? atau Upgrade Premium agar dapat akses ke semua fitur?
Kalian bisa Chat nomor Owner BOT dan konfirmasi pembayarannya
═┅══ *PAYMENT* ══┅═
• *Pulsa:* [085954184111]
• *Dana:* [085954184111]
═┅══ *OWNER* ══┅═
*ᴄᴏɴᴛᴀᴄᴛ ᴜꜱ*
╰►  • wa.me/6285954184111 `.trim()

 let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - UPGRADE - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'externalAdReply':{
'showAdAttribution':true,
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':botdate,
'thumbnail':await(await fetch('https://telegra.ph/file/d4919bc83320629db7444.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':wm,
'footer':text,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1},
{'buttonId':'.owner','buttonText':{'displayText':'Owner'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i
export default handler