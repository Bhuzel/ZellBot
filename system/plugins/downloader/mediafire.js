const axios = require("axios");

module.exports = {
    command: "mediafire",
    alias: ["mf", "mfdl"],
    category: ["downloader"],
    loading: true,

    async run(m, { sock, text, config }) {
        if (!text) return m.reply("🔗 Link Mediafire-nya mana yaa?");

        try {
            let { data } = await axios.get(`${config.apizell}/download/mediafire?url=${text}&apikey=${config.zellkey}`);

            if (!data.result || data.result.length === 0) {
                return m.reply("⚠️ Yahh, lagi nggak bisa kaa. Coba lagi nanti yaa..");
            }

            const file = data.result[0];  // Ambil item pertama dari array result
            let fileType = file.mime || "unknown";
            let caption = `📁 *Mediafire - Downloader*\n\n📜 *Nama File:* ${file.nama}\n📂 *Tipe:* ${fileType}\n📏 *Ukuran:* ${file.size || "Unknown"}`;

            // Mengirim file sesuai dengan jenisnya
            if (fileType.startsWith("image")) {
                await sock.sendMessage(m.cht, { image: { url: file.link }, caption }, { quoted: m });
            } else if (fileType.startsWith("video")) {
                await sock.sendMessage(m.cht, { video: { url: file.link }, caption, mimetype: fileType }, { quoted: m });
            } else if (fileType.startsWith("audio")) {
                await sock.sendMessage(m.cht, { audio: { url: file.link }, caption, mimetype: fileType, ptt: false }, { quoted: m });
            } else if (fileType === "application") {
                await sock.sendMessage(m.cht, { document: { url: file.link }, mimetype: fileType, fileName: file.nama }, { quoted: m });
            } else {
                await sock.sendMessage(m.cht, { document: { url: file.link }, mimetype: fileType, fileName: file.nama }, { quoted: m });
            }

        } catch (error) {
            console.log("🚨 Error:", error);
            m.reply(`❌ Yahh, lagi error kaa. Minta ownernya baikin dulu yaa..`);
        }
    },
};
