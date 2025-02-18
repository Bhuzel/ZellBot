module.exports = {
  command: "self",
  alias: [],
  category: ["owner"],
  settings: {
    owner: true,
  },
  description: "🔇 Ubah bot menjadi mode senyap (Self Mode)",
  async run(m, { sock, text }) {
    if (!text)
      return m.reply(
        `*Cara Penggunaan Fitur Self Mode*\n\n` +
        `> *\`on\`* - Untuk menghidupkan fitur self mode\n` +
        `> *\`off\`* - Untuk mematikan fitur self mode`
      );

    let settings = db.list().settings;
    if (text.toLowerCase() === "on" && settings.self) {
      return m.reply("⚠️ Self Mode sudah aktif sebelumnya!");
    }
    if (text.toLowerCase() === "off" && !settings.self) {
      return m.reply("⚠️ Self Mode sudah nonaktif sebelumnya!");
    }

    settings.self = text.toLowerCase() === "on";
    m.reply(
      `> ✅ Fitur *Self Mode* berhasil ${
        text.toLowerCase() === "on" ? "diaktifkan" : "dimatikan"
      }. Bot akan ${
        text.toLowerCase() === "on"
          ? "hanya dapat digunakan pribadi"
          : "kembali bergabung ke grup"
      }.`
    );    
  },
};