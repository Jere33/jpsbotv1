let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.motivasi)}”`, m)
}
handler.help = ['motivasi']
handler.tags = ['quotes']
handler.command = /^(motivasi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.motivasi = [
"Saya tidak bisa memberimu rumus untuk sukses, tapi saya bisa memberi rumus untuk gagal, yaitu: cobalah untuk menyenangkan semua orang",
"Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.",
"Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat",
"Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan",
"Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan",
"Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras",
"Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya",
"Lakukan lebih banyak untuk dunia daripada untuk dirimu",
"Selalu ada kegelapan yang tergelap sebelum terbitnya fajar",
"Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa",
"Follow @jeremypaskahsinaga",
]