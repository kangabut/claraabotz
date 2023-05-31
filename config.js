/**
    * Created By AdrianTzy
    * Mau Recode? Simpen Nama Gw!!!!
    * Hapus Credit Masuk Neraka Paling Bawah
*/
const fs = require('fs')
const chalk = require('chalk')

// Gak Usah Di Ganti
global.apikey = 'APOLOZEA' // https://api.lolhuman.xyz
global.rosekey = 'cba86fac49e37d63f9bd4561' // https://api.itsrose.site

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Claraa'
global.namaowner = 'Owner'

//—————「 Setting Owner 」—————//
global.owner = '6285173132006'
global.nomerowner = ["6285173132006"]
global.premium = ['6285173132006']

//—————「 Set Wm 」—————//
global.packname = 'Claraa'
global.author = 'V0.1'
global.isLink = ''
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Ngab',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 20,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/Hu-Tao-05-31'
global.thumb = 'https://telegra.ph/Hu-Tao-05-31'
//global.thumb = fs.readFileSync('./media/thumb.jpg')//

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
