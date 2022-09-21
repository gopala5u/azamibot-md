import axios from "axios"
let handler = async (m, {command, conn}) => {
	
	let tekk = `\`\`\`➩ Nih Ngabss\`\`\` `
	
if (command == 'satan') {
let haha = await conn.getFile(`https://gopala5u.up.railway.app/api/nsfw/pussy?apikey=APIKEY`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	
if (command == 'qtd') {
let haha = await conn.getFile(`https://gopala5u.up.railway.app/api/nsfw/ass?apikey=APIKEY`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'crtn') {
let haha = await conn.getFile(`https://gopala5u.up.railway.app/api/nsfw/bdsm?apikey=APIKEY`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'aes') {
let haha = await conn.getFile(`https://gopala5u.up.railway.app/api/nsfw/blowjob?apikey=APIKEY`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

}
handler.command = /^(satan|qtd|crtn|aes)/i

handler.limit = true
export default handler
