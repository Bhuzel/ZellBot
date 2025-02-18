const axios = require("axios");

module.exports = {
    command: "ytmp4", 
    alias: ["youtubemp4"], 
    category: ["downloader"],
    loading: true,


async run(m, { sock, text, config }) {
    if (!text)
        return m.reply("link youtubenya mana yaa?");

    try {
    let { data } = await axios.get(`${config.apizell}/download/ytdl?url=${text}&apikey=${config.zellkey}`);
    if (!data.result) 
        return m.reply("yah lagi ngga bisa kaa, coba lagi nanti yaa..");
        await sock.sendMessage(m.cht, { video: { url: data.result.result.video }, caption: "ini yaa.." }, { quoted: m });
    }
    catch (error) {
    m.reply(`yah lagi error kaa, minta ownernya baikin dulu yaa..`);
    }
},
};
