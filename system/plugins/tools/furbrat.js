const { writeExif } = require(process.cwd() + "/lib/sticker.js");

module.exports = {
  command: "furbrat",
  alias: ["hikagen"],
  category: ["tools"],
  settings: {
    limit: true,
  },
  async run(m, { sock, text, Func, config }) {
    if (!text)
      throw "teksnya mana yaa?";
      
    let API = `${config.apizell}/maker/furbrat?q=${text}&apikey=${config.zellkey}`;

    try {
      let buffer = await Func.fetchBuffer(API);
      let sticker = await writeExif(
        { mimetype: "image", data: buffer },
        { packName: config.sticker.packname, packPublish: config.sticker.author },
      );

      m.reply({ sticker, });
      m.reply ("Ini yaa..");
    } catch (error) {
      console.error("Error fetching furry brat:", error);
      m.reply("Yahh gagal, coba lagi nanti yaa..");
    }
  },
};
