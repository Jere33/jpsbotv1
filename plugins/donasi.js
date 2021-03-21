let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Asix [083191632340]
│ • Gopay [083191632340]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
