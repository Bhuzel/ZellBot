module.exports = {
  command: "remini",
  alias: ["hdr", "hd"],
  category: ["tools"],
  settings: {
    limit: true,
  },
  description: "Jernihkan dan tingkatkan kualitas foto favoritmu dengan mudah!",
  loading: true,
  async run(m, { Scraper, Func }) {
    let target = m.quoted ? m.quoted : m;
    if (!/image/.test(target.msg.mimetype) || !target.isMedia)
      throw "*Oops!* Harap kirim atau balas sebuah foto yang ingin dijernihkan.";

    let buffer = await target.download();
    let enhancedImage = await Scraper.remini(buffer);
    let size = Func.formatSize(enhancedImage.length);

    m.reply({
      image: enhancedImage,
      caption: `*Remini - Photo Enhancer*\n\n*Foto telah berhasil dijernihkan!*\n*Ukuran file hasil:* ${size}\n\n*Tips:* Gunakan foto dengan kualitas dasar yang cukup baik untuk hasil terbaik.`,
    });
  },
};
