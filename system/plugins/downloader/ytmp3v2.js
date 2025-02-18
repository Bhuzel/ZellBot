const axios = require("axios");

module.exports = {
    command: "ytmp3v2", 
    alias: ["youtubemp3v2"], 
    category: ["downloader"],


async run(m, { sock, text, config }) {
    if (!text)
        return m.reply("link youtubenya mana yaa?");

    try {
        await sock.sendMessage(m.cht, { video: { url: `${config.apizell}/download/ytmp3b128?url=${text}&apikey=${config.zellkey}` }, caption: "ini yaa.." }, { quoted: m });
    }
    catch (error) {
    m.reply(`yah lagi error kaa, minta ownernya baikin dulu yaa..`);
    }
},
};
