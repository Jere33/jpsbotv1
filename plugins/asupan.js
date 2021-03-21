if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(mess.wait)
                anu = await fetchJson(`https://api.shizukaa.xyz/api/asupan?apikey=itsmeiky633`)
                asup = await getBuffer(anu.result)
                itsmeiky.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: iky, caption: 'Asupannya Tuan:v'})
                await limitAdd(sender) 
                break
}
}
handler.help = ['babi']
handler.tags = ['fun']
handler.command = /^(babi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

