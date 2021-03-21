       if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/animefanart?apikey=${LolHuman}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
				//AUTO RESP
}
}
handler.help = ['animefanart']
handler.tags = ['anims']
handler.command = /^(animefanart)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

