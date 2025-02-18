const axios = require("axios");

module.exports = {
    command: "ytdl",
    alias: ["youtubedl", "yt"],
    category: ["downloader"],

    async run(m, { sock, text, config }) {
        if (!text) return m.reply("link youtubenya mana yaa?");

        try {
            await m.react("⏳");
            let videoUrl = `${config.apizell}/download/ytmp4r720?url=${text}&apikey=${config.zellkey}`;
            await sock.sendMessage(m.cht, { video: { url: videoUrl }, caption: "ini yaa.." }, { quoted: m });
            await m.react("✅");
        } catch (error) {
            console.log("🚨 Error Video:", error);
            m.reply("yah lagi error videonya kaa, minta ownernya baikin dulu yaa..");
        }

        try {
            let audioUrl = `${config.apizell}/download/ytmp3b128?url=${text}&apikey=${config.zellkey}`;
            await sock.sendMessage(m.cht, { audio: { url: audioUrl }, mimetype: "audio/mpeg", ptt: false }, { quoted: m });
        } catch (error) {
            console.log("🚨 Error Audio:", error);
            m.reply("yah lagi error audionya kaa, minta ownernya baikin dulu yaa..");
        }
    },
};
