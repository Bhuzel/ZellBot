const axios = require("axios");

module.exports = {
  command: "Instagram",
  alias: ["igdl", "ig", "igvideo", "igreel"],
  category: ["downloader"],
  loading: true,

  async run(m, { sock, text, config }) {
    if (!text)
      return m.reply("link instagramnya mana yaa?");

    try {
      let { data } = await axios.get(`${config.apizell}/download/instagram?url=${text}&apikey=${config.zellkey}`);

      if (!data.result) 
        return m.reply("yah lagi ngga bisa kaa, coba lagi nanti yaa..");

      let media = data.result; // Ambil daftar media dari API

      let first = true; // Flag untuk slide pertama
      for (let item of media) {
        let caption = first ? "ini yaa.." : ""; // Caption hanya di slide pertama

        if (item.type === "video") {
          await sock.sendMessage(m.cht, { 
            video: { url: item.url }, 
            caption: caption 
          }, { quoted: m });

        } else if (item.type === "image") {
          await sock.sendMessage(m.cht, { 
            image: { url: item.url }, 
            caption: caption 
          }, { quoted: m });
        }

        first = false; // Hanya caption di slide pertama
      }

    } catch (error) {
      console.log('Error:', error)
      m.reply("yah lagi error kaa, minta ownernya baikin dulu yaa..");
    }
  },
};