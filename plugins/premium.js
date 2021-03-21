let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│• Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│• Harga :
│• 10K / Minggu (1 Minggu)
│• 25K / Bulan (4 Minggu)
│• 50K / Permanent (Permanen)
│
│• Pembayaran :
│• ASIX : 083191632340
│• https://wa.me/6283191632340
│• [!]Jika Sudah Bayar,Harap Chat Nomor Yg Diatas!
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^(premium)$/i

module.exports = handler
