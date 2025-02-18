const axios = require("axios");

module.exports = {
    command: "gdrive",
    alias: ["googledrive", "gdrivedl"],
    category: ["downloader"],
    loading: true,

    async run(m, { sock, text, config }) {
        if (!text) return m.reply("link google drivenya mana yaa?");

        try {
            let { data } = await axios.get(`${config.apizell}/download/gdrive?url=${text}&apikey=${config.zellkey}`);

            if (!data.result) return m.reply("yahh, lagi nggak bisa kaa. Coba lagi nanti yaa..");

            let fileType = data.result.mimetype || "unknown";
            let caption = `📁 *Google Drive - Downloader*\n\n📜 *Nama File:* ${data.result.fileName}\n📂 *Tipe:* ${fileType}\n📏 *Ukuran:* ${data.result.fileSize || "Unknown"}`;

            // Mengirim file sesuai dengan jenisnya
            if (fileType.startsWith("image/")) {
                await sock.sendMessage(m.cht, { image: { url: data.result.downloadUrl }, caption }, { quoted: m });
            } else if (fileType.startsWith("video/")) {
                await sock.sendMessage(m.cht, { video: { url: data.result.downloadUrl }, caption, mimetype: fileType }, { quoted: m });
            } else if (fileType.startsWith("audio/")) {
                await sock.sendMessage(m.cht, { audio: { url: data.result.downloadUrl }, caption, mimetype: fileType, ptt: false }, { quoted: m });
            } else if (fileType === "application/") {
                await sock.sendMessage(m.cht, { document: { url: data.result.downloadUrl }, mimetype: fileType, fileName: data.result.fileName }, { quoted: m });
            } else {
                await sock.sendMessage(m.cht, { document: { url: data.result.downloadUrl }, mimetype: fileType, fileName: data.result.fileName }, { quoted: m });
            }

        } catch (error) {
            console.log("🚨 Error:", error);
            m.reply(`❌ yahh, lagi error kaa. minta ownernya baikin dulu yaa..`);
        }
    },
};
