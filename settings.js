const fs = require("node:fs");

const config = {
  owner: ["6282352052566"],
  name: "- ZellBot - Simple WhatsApp bot",
  sessions: "sessions",
  prefix: ["."], // Tambahkan prefix sesuai kebutuhan
  sticker: {
    packname: "Zell API", 
    author: "Instagram : @mrayhanar_", 
  },
  id: {
    newsletter: "120363384731264588@newsletter", 
    group: "120363383679736092@g.us" 
  },
  messages: {
    wait: "⏳ tunggu sebentar yaa..", 
    owner: "🧑‍💻 *Fitur ini hanya untuk pemilik bot*... Maaf, Anda tidak memiliki akses ke fitur ini.", 
    premium: "🥇 *Upgrade ke Premium* untuk mendapatkan akses ke fitur eksklusif, murah dan cepat! Hubungi admin untuk info lebih lanjut.", 
    group: "👥 *Fitur ini hanya tersedia di grup*... Pastikan Anda berada di grup WhatsApp untuk mengakses fitur ini.",
    botAdmin: "⚠️ *Anda harus menjadi admin grup* untuk menggunakan fitur ini, karena bot memerlukan hak akses admin.", 
    grootbotbup: "🛠️ *Jadikan NekoBot sebagai admin* grup untuk menggunakan fitur ini. Pastikan Anda memberikan hak admin kepada bot.", 
  },
  database: "zell-db",
  tz: "Asia/Jakarta",
  zellkey: "ZELL", // jangan lupa join ch Zell Api, tiap bulan update
  apizell: "https://key.zellray.my.id"
};

module.exports = config;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  delete require.cache[file];
});
