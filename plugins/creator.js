let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let tag = `@${m.sender.split('@')[0]}`
 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;๐ธ๐๐๐๐๐โธ;;;\nFN:๐ธ๐๐๐๐๐โธ\nORG:๐ธ๐๐๐๐๐โธ\nTITLE:\nitem1.TEL;waid=6285332039348:+62 853-3203-9348\nitem1.X-ABLabel:๐ธ๐๐๐๐๐โธ\nX-WA-BIZ-DESCRIPTION:${htjava} Tแดแด แดแดษดแดสษชแดแด sแดแด แด แดแดษดแดแดแด!!\nX-WA-BIZ-NAME:๐ธ๐๐๐๐๐โธ\nEND:VCARD`
//------- NOMOR
 const pp = fs.readFileSync('./media/own.jpg')
  let nowner1 = `${nomorown1.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${nomorown2.split`@`[0]}@s.whatsapp.net`
let teksnomor = (
`โณ โโ โธ *Mส Oแดกษดแดส* โน โโ โณ
โฃโฎ *${nameown1}* โฏโข
โฌ @${nomorown1.split`@`[0]} โญ
โ
โฃโฎ *${nameown2}* โฏโข
โฌ @${nomorown2.split`@`[0]} โญ
โ`
)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `โโซนโซบ ๐ Nama : Murias
โโซนโซบ โ๏ธ Nama RL : HAMBA ALLAH
โโซนโซบ โ๏ธ Gender : Pria
โโซนโซบ ๐ Agama : Islam
โโซนโซบ โฐ Tanggal lahir : 08 - 08 - 2004
โโซนโซบ ๐จ Umur : 18
โโซนโซบ ๐งฎ Kelas : Sdh lulus
โโซนโซบ ๐งฉ Hobby : ๐ผ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐
โโซนโซบ ๐ฌ Sifat : ASIK,BAIK,RAMAH
โโซนโซบ ๐บ๏ธ Tinggal : Indonesia, Kalimantan Timur
โโโโโโโโโโโโโยทโข
`
let ppown2 = await conn.profilePictureUrl(nomorown2 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `โโซนโซบ ๐ Nama : Laxir
โโซนโซบ โ๏ธ Nama RL : HAMBA ALLAH
โโซนโซบ โ๏ธ Gender : Pria
โโซนโซบ ๐ Agama : Islam
โโซนโซบ โฐ Tanggal lahir : 08 - 08 - 2004
โโซนโซบ ๐จ Umur : 18
โโซนโซบ ๐งฎ Kelas : Sdh lulus
โโซนโซบ ๐งฉ Hobby : ๐ผ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐
โโซนโซบ ๐ฌ Sifat : ASIK,BAIK,RAMAH
โโซนโซบ ๐บ๏ธ Tinggal : Indonesia, Kalimantan Timur
โโโโโโโโโโโโโยทโข
`

  let tek = `โฃโโโ ใจโฃ *Nแดแดแด* โคใจ โโโโข
โ
๐ Oแดกษดแดส Tษชแดแดแด Rแดsแดแดษดแด Cสแดแด Aษดแดส
๐ Oแดกษดแดส Bแดสสแดแด Bสแดแดแด Sษชแดแดแด Sแดแดแด
๐ Gแดแด Rแดsแดแดษดแด Kแดสแด Mษชษดแดแด Sแด
๐ Eแดษชแดแดษดสแด Dษชแดแดแดแด
๐ Cสแดแด Cแดแดกแด Gแดก Aษดแดส Aษดแดส Gแดก Bแดแดแด Tษชแดแดส Lแด
๐ Cสแดแด Aษดแดส Gแดแด Jแดสแดs Bแดษด/Bสแดแดแด
๐ Cแดสส Bสแดแดแด\nโซน Kแดแดษช *.rules* Uษดแดแดแด Mแดสษชสแดแด Rแดสแดs Sแดสแดษดษขแดแดแดษดส โซบ`
const sections = 
[{
title: `โซนโซบ Oแดสแดส โซนโซบ`,
rows: [
{title: "โธ Kontak", rowId: ".owner kontak"},
{title: "โธ Nomor", rowId: ".owner nomor"},
{title: "โธ Biodata Murias", rowId: ".owner bio"},
{title: "โธ Biodata Laxir", rowId: ".owner bio2"},
{title: "โธ Script", rowId: ".sc"},
]}, {
title: `โฌ Sแดแดแดแดสแด Mแด โฌ`,
rows: [
{title: "ใ  Donasi", rowId: ".owner nomor"},
{title: "ใ  Sewa", rowId: ".sewa"},
{title: "ใ  Buy Premium", rowId: ".premium"},
]},]
const listMessage = {
  text: tek,
  footer: wm,
  title: null,
  buttonText: "Cสษชแดแด",
  sections
}
  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {


        case 'kontak': 
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
        break
          case 'nomor':
         /* conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 /*  conn.sendButton(m.chat, teksnomor, null, pp, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 conn.send2ButtonImg(m.chat, fs.readFileSync('./media/own.jpg').buffer, teksnomor, `Halo ${tag}\nIแดแด Oแดกษดแดส Kแดโซบโซฐโซน\n` + botdate, `Sewa Bot`, `.sewa`, 'Menu', `.menu`, ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/drizasri',
    mediaType: 2, 
    description: sgc,
    title: "Join Sini Juga Cuy!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)

   conn.sendButton(m.chat, 'โโเผบ *๐ฑ๐๐๐ณ๐๐๐  Murias* เผป', teksbio, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
                        case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, 'โโเผบ *๐ฑ๐๐๐ณ๐๐๐ Laxir* เผป', teksbio2, ppown2, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
           return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler