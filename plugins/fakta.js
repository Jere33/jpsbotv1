let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.fakta)}”`, m)
}
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta)$/i
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

global.fakta = [
"Ikan hiu kehilangan gigi lebih dari 6000buah setiap tahun, dan gigi barunya tumbuh dalam waktu 24 jam",
"Semut dapat mengangkat Beban 50 kali tubuhnya.",
"Mulut menghasilkan 1 liter ludah setiap hari.",
"Mengunyah permen karet saat mengupas Bawang mencegah kita menangis",
"Siput bisa tidur selama 3 tahun",
"Memakai Headphone selama 1 jam dapat mengembangbiakan bakteri dalam kuping 700 kali lebih cepat.",
"Kecoak bisa hidup 9 hari tanpa kepala, dan akan mati karena kelaparan",
"Daya ingat ikan hanya 3 detik",
"Mata burung unta lebih besar dari otaknya",
"Berdiri lama tanpa menekuk lutut sama sekali akan membuat kita pingsan",
"Siapa yang tidak kenal dengan tokoh kartun Mickey dan Minnie, bahkan sejak orang tua kita berpacaran kedua tokoh ini sudah menemani mereka. Yang jarang orang ketahui, pengisi suara dari pasangan Mickey (Wayne Allwine) dan Minnie (Russi Taylor) ini ternyata mengalami cinta lokasi dan menikah selama hampir 2 dekade, sampai akhirnya Wayne Allwine meninggal pada usia 62 tahun.",
"Trailer film atau cuplikan film yang biasanya kita tonton sebelum kita menonton keseluruhan film pada awalnya diciptakan untuk ditampilkan setelah film berakhir, karena itu cuplikan film dinamai trailer yang dalam bahasa Indonesia artinya buntut",
"yawn GIF by New Hope ClubDi fakta ini terlihat perbedaan yang sangat signifikan antara pria dan wanita. Saat para wanita bisa menghabiskan waktu berjam-jam hanya di dalam satu toko atau department store, ternyata kebanyakan pria sudah merasa bosan setelah berbelanja lebih dari 26 menit. Jadi untuk para wanita, hargailah usaha para pria yang sabar menemanimu berbelanja berjam-jam.",
"Tahukah kamu kalau logo burung biru di twitter itu punya nama? Bukan cuma logo udang di Shopee yang punya nama Shebi dan Hebi, logo burung biru di twitter itu bernama Larry.",
"high five kitten GIFSeperti mamalia pada umumnya, kucing mempunyai 5 jari kaki pada kaki depan mereka, tapi di kaki belakang, mereka hanya mempunyai 4 jari kaki. Ilmuwan memperkirakan 4 jari kaki di bagian belakang membantu mereka untuk berlari lebih cepat. Kamu mengaku pecinta kucing? Sudahkah kamu tahu fakta ini?",
"Tidak semua bayi prematur harus masuk ke inkubator, karena hal ini sangat bergantung pada kondisi bayi saat dilahirkan. Inkubator memang bisa menjaga suhu bayi tetap hangat. Namun, jika kondisi bayi prematur cukup stabil, beberapa dokter kandungan lebih menyarankan metode kangguru (kangaroo mother care).",
"Follow @jeremypaskahsinaga",
]