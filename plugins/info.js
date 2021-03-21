let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Jere Ganz
Script: @Nurotomo
Github: 
*PRIVATE BY OWNER!!*

• SOSMED
➥ Instagram:
@jeremypaskahsinaga

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Toby
Farhan
Itsmeiky
RendyCraft047
Mr King Panutanku
Dan kawan yang lain :)
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

