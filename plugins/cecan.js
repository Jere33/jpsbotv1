if (!isRegistered) return reply(ind.noregis())
		            if (isLimit(sender)) return reply(ind.limitend(pusname))
                    query = args.join("cewecantik")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apiKey}&query=cewecantik`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break
}
}
handler.help = ['cecan']
handler.tags = ['fun']
handler.command = /^(cecan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

