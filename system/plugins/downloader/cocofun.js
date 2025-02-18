const axios = require("axios");

module.exports = {
    command: "cocofun", 
    alias: ["cocofundl"], 
    category: ["downloader"],
    loading: true,


async run(m, { sock, text, config }) {
    if (!text)
        return m.reply("link cocofun nya mana yaa?");

    try {
    let { data } = await axios.get(`${config.apizell}/download/cocofun?url=${text}&apikey=${config.zellkey}`);
    if (!data.result) 
        return m.reply("yah lagi ngga bisa kaa, coba lagi nanti yaa..");
        await sock.sendMessage(m.cht, { video: { url: data.result.no_watermark }, caption: "ini yaa.." }, { quoted: m });
    }
    catch (error) {
        console.log('Error:', error)
    m.reply(`yah lagi error kaa, minta ownernya baikin dulu yaa..`);
    }
},
};
