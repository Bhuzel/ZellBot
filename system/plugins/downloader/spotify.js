const axios = require("axios");

module.exports = {
    command: "spotify", 
    alias: ["spotifydl"], 
    category: ["downloader"],
    loading: true,


async run(m, { sock, text, config }) {
    if (!text)
        return m.reply("link spotifynya mana yaa?");

    try {
    let { data } = await axios.get(`${config.apizell}/download/spotify?url=${text}&apikey=${config.zellkey}`);
    if (!data.result) 
        return m.reply("yah lagi ngga bisa kaa, coba lagi nanti yaa..");
        let caption = "ini yaa..";
        await sock.sendMessage(m.cht, { audio: { url: data.result.music }, caption: caption, mimetype: "audio/mpeg", ptt: false }, { quoted: m });//ptt: true bakal jadi vn
    }
    catch (error) {
      console.log('Error:', error)
    m.reply(`yah lagi error kaa, minta ownernya baikin dulu yaa..`);
    }
},
};