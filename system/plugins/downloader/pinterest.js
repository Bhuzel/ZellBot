const axios = require("axios");

module.exports = {
    command: "pin", 
    alias: ["pinterest"], 
    category: ["downloader"],
    loading: true,


async run(m, { sock, text, config }) {
    if (!text)
        return m.reply("mau cari foto apa?");

    try {
    let { data } = await axios.get(`${config.apizell}/download/pinterest?query=${text}&apikey=${config.zellkey}`);
    if (!data.result) 
        return m.reply("yah lagi ngga bisa kaa, coba lagi nanti yaa..");
 
        let caption = "ini yaa..";{
        await sock.sendMessage(m.cht, { image: { url: data.result }, caption: caption }, { quoted: m });
    }
    }
    catch (error) {
        console.log('Error:', error)
    m.reply(`yah lagi error kaa, minta ownernya baikin dulu yaa..`);
    }
},
};