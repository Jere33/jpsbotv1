if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randomloli?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
}
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

