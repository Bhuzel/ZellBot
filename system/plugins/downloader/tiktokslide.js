const axios = require("axios");

module.exports = {
    command: "tiktokslide", 
    alias: ["ttslide", "tiktokimage", "ttimage"], 
    category: ["downloader"],
    loading: true,


async run(m, { sock, text, config }) {
    if (!text)
        return m.reply("link tiktoknya mana yaa?");

    try {
    let { data } = await axios.get(`${config.apizell}/download/tiktokdl?url=${text}&apikey=${config.zellkey}`);
    if (!data.result) 
        return m.reply("yah lagi ngga bisa kaa, coba lagi nanti yaa..");
        
        let first = true; // Flag untuk slide pertama
        for (let image of data.result.images) {
        let caption = "ini yaa..";
        await sock.sendMessage(m.cht, { image: { url: image.url }, caption: caption }, { quoted: m });
        first = false; // Setelah slide pertama, set jadi false
    }
    }
    catch (error) {
        console.log('Error:', error)
    m.reply(`yah lagi error kaa, minta ownernya baikin dulu yaa..`);
    }
},
};

/*misal mau caption cuman di slide pertama
let first = true; // Flag untuk slide pertama

            for (let image of data.result.images) {
                await sock.sendMessage(m.cht, { 
                    image: { url: image.url }, 
                    caption: first ? caption : "", // Caption hanya di slide pertama
                }, { quoted: m });

                first = false; // Setelah slide pertama, set jadi false

*/
