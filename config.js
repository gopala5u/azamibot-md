import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
	['6285954184111'],
	['6285954184111', 'GOPALASU', true]
	// [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
//global.prems = ['6285954184111','6285782540704'] // Premium user has unlimited limit
global.APIs = { // API Prefix
	// name: 'https://website'
	nrtm: 'https://nurutomo.herokuapp.com',
	bg: 'http://bochil.ddns.net',
	xteam: 'https://api.xteam.xyz',
	zahir: 'https://zahirr-web.herokuapp.com',
	zeks: 'https://api.zeks.xyz',
	pencarikode: 'https://pencarikode.xyz',
	LeysCoder: 'https://leyscoders-api.herokuapp.com',
	lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
	// 'https://website': 'apikey'
	'https://api.xteam.xyz': 'd90a9e986e18778b',
	'https://zahirr-web.herokuapp.com': 'zahirgans',
	'https://api.zeks.xyz': 'apivinz',
	'https://pencarikode.xyz': 'pais',
	'https://leyscoders-api.herokuapp.com': 'dappakntlll',
	'https://api.lolhuman.xyz': 'apikeylu'
}

global.sig = 'https://www.instagram.com/_lucxfvr'
global.sgh = 'https://github.com/VarrelKun'
global.sgc = 'https://chat.whatsapp.com/DRnWIXKf0VLH4KArdpH4IX'
global.sdc = " "global.snh = 'https://PentaPage.my.id' 

/*============== PAYMENT ==============*/
global.pdana = '085954184111'
global.povo = '_'
global.pgopay = '_'
global.ppulsa = '085954184111'
global.ppulsa2 = '085954184111'
global.psaweria = '_' 

/*============== NOMOR ==============*/
global.nomorbot = '17754764633'
global.nomorown = '6285954184111'
global.namebot = '𝐏𝐄𝐍𝐓𝐀𝐆𝐑𝐀𝐌'
global.nameown = 'SIJEMBOT' 

global.wm = '   「 𝐏𝐄𝐍𝐓𝐀𝐆𝐑𝐀𝐌 」' //Main Watermark
global.wm2 = '𝐏𝐄𝐍𝐓𝐀𝐆𝐑𝐀𝐌'
global.wm3 = '⛧𝐏𝐄𝐍𝐓𝐀𝐆𝐑𝐀𝐌'
global.botdate = `⫹⫺ 𝗗𝗮𝘁𝗲: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = '⛧┊ PENTAGRAM ʙᴏᴛ'
global.author = global.wm

global.thumb = 'https://telegra.ph/file/162d60896b53c2e885c40.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/162d60896b53c2e885c40.jpg'
global.thumbbc = 'https://telegra.ph/file/162d60896b53c2e885c40.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4' 

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

 /*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```' 

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'global.drtf = 'text/rtf' 
global.thumbdoc = 'https://telegra.ph/file/162d60896b53c2e885c40.jpg'

 /*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '❏═┅═━–〈' //top
global.dmenub = '┊𔔮' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer // COMMAND MENU
global.dashmenu = '┅━━━━━═┅═❏ *DASHBOARD* ❏═┅═━━━━━┅'
global.cmenut = '❏––––––『' //topglobal.cmenuh = '』––––––' 

//header
global.cmenub = '┊𖤐 ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n ' //after
global.pmenus = '┊' //pembatas menu selector 
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO FREE ON MENU.JS
global.htjava = '𔔮' //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*// Sticker WM
global.packname = ''
global.author = 'Bot V5'

//apikey
global.api = 'bukanitucuy14315195'
global.imgbb = '4fe0927d28af0d5ca44d6d9c0516bee5'*/

global.multiplier = 25 // The higher, The harder levelup

global.rpg = {
	emoticon(string) {
		string = string.toLowerCase()
		let emot = {
			level: '🧬',
			limit: '🌌',
			health: '❤️',
			exp: '✉️',
			money: '💵',
			potion: '🥤',
			diamond: '💎',
			common: '📦',
			uncommon: '🎁',
			mythic: '🗳️',
			legendary: '🗃️',
			pet: '🎁',
			trash: '🗑',
			armor: '🥼',
			sword: '⚔️',
			pickaxe: '⛏️',
			fishingrod: '🎣',
			bow: '🏹',
			wood: '🪵',
			rock: '🪨',
			string: '🕸️',
			horse: '🐎',
			cat: '🐈',
			dog: '🐕',
			fox: '🦊',
			wolf: '🐺',
			centaur: '🐎',
			phoenix: '🦜',
			dragon: '🐉',
			petfood: '🍖',
			iron: '⛓️',
			gold: '👑',
			emerald: '💚',
			bibitmangga: '🌾',
			bibitanggur: '🌾',
			bibitjeruk: '🌾',
			bibitpisang: '🌾',
			bibitapel: '🌾',
			mangga: '🥭',
			anggur: '🍇',
			jeruk: '🍊',
			pisang: '🍌',
			apel: '🍎',
			ayam: '🐔',
			kambing: '🐐',
			sapi: '🐄',
			kerbau: '🐃',
			babi: '🐖',
			harimau: '🐅',
			banteng: '🐂',
			monyet: '🐒',
			babihutan: '🐗',
			panda: '🐼',
			gajah: '🐘',
			buaya: '🐊',
			orca: '🐋',
			paus: '🐳',
			lumba: '🐬',
			hiu: '🦈',
			ikan: '🐟',
			lele: '🐟',
			bawal: '🐡',
			nila: '🐠',
			kepiting: '🦀',
			lobster: '🦞',
			gurita: '🐙',
			cumi: '🦑',
			udang: '🦐',
			steak: '🍝',
			sate: '🍢',
			rendang: '🍜',
			kornet: '🥣',
			nugget: '🍱',
			bluefin: '🍲',
			seafood: '🍛',
			sushi: '🍣',
			moluska: '🥘',
			squidprawm: '🍤',
			rumahsakit: '🏥',
			restoran: '🏭',
			pabrik: '🏯',
			tambang: '⚒️',
			pelabuhan: '🛳️'
		}
		let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
		if (!results.length) return ''
		else return emot[results[0][0]]
	}
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})
