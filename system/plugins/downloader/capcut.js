const axios = require("axios");

module.exports = {
    command: "capcut", 
    alias: ["capcutdl"], 
    category: ["downloader"],
    loading: true,


async run(m, { sock, text, config }) {
    if (!text)
        return m.reply("link capcutnya mana yaa?");

    try {
    let { data } = await axios.get(`${config.apizell}/download/capcut?url=${text}&apikey=${config.zellkey}`);
    if (!data.result) 
        return m.reply("yah lagi ngga bisa kaa, coba lagi nanti yaa..");
        await sock.sendMessage(m.cht, { video: { url: data.result.url }, caption: "ini yaa.." }, { quoted: m });
    }
    catch (error) {
        console.log('Error:', error)
    m.reply(`yah lagi error kaa, minta ownernya baikin dulu yaa..`);
    }
},
};
