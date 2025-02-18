## ZellBot | 1.0.0 Version | Create By Bhuzel Ryhn (ZellAPI), Base From NekoBot

![Logo](https://i.ibb.co.com/JVvpqjd/Logo-Zell-API.jpg)

```> Simple WhatsApp bot Using Library Baileys Axell```


## ⚙️ Settings Bot ( settings.js )

```javascript
const fs = require('node:fs');

const config = {
    owner: ["6282352052566"], // Ganti jadi nomor kamu
    name: "- ZellBot - Simple WhatsApp bot",
    sessions: "sessions", // Jangan diganti deh kalo ini
    sticker: {
      packname: "Made by ",
      author: "ZellBot" // Nama untuk hasil sticker nanti
    },
   messages: {
      wait: "⏳ tunggu sebentar yaa..",
      owner: "🧑‍💻 fitur untuk owner bot aja kaa..",
      premium: "🥇 fitur khusus premium kaa..",
      group: "👥 fiturnya cuman bisa dipake dalam grup kaa..",
      botAdmin: "⚠️ cuman admin grup yang bisa pake fiturnya kaa..", 
      grootbotbup: "🛠️ ZellBot belum jadi admin nih jadi gabisa pake fiturnya, hehe", 
   },
   database: "zell-db",
   tz: "Asia/Jakarta"
   zellkey: "zellapi", // jangan lupa join ch Zell API, tiap bulan update apikey free (dengan limit)
}

module.exports = config
```


## How to install and run in panel Pterodactyl 

```bash
$ npm install
$ npm start
```


## Example Add Features Plugins and Case
## 1. Plugins

```javascript

module.exports = {
    command: "tes", // Command botnya
    alias: ["tesbot", "testing"], // Command lainnya
    category: ["main"], // Kategori fiturnya mau apa?
    settings: {
        owner: false, // Jadiin true kalo mau hanya owner yang bisa pake
        group: false, // Jadiin true kalo mau hanya group yang bisa pake
     },
    description: "Tes bot saja", // Deskripsi fiturnya
    loading: true, // Untuk mengaktifkan wait message (didalam setting.js)
 async run(m, { sock, Func, Scraper, text, config }) {
    m.reply("Bot Online ✓")
  }
}
```
## 2. Case

```javascript
case "tes" : {
     m.reply("Bot Online ✓")
   }
break
```
## 📢 Discussion 
Info mengenai apikey dan fitur yang di update? jangan lupa follow ch ini yaa

[![WhatsApp channel](https://img.shields.io/badge/WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com/channel/0029Vb5oEUq4dTnIhbSu080e)

