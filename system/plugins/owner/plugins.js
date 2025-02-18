const fs = require("fs");
const jsBeautify = require("js-beautify");

module.exports = {
  command: "plugins",
  alias: ["plugin"],
  category: ["owner"],
  settings: {
    owner: true,
  },
  async run(m, { text }) {
    let src = pg.plugins;

    if (!text)
      throw `
Panduan Penggunaan Plugins\n
> Pake *\`--get\`* untuk mengambil plugins\n
> Pake *\`--add\`* untuk menambahkan plugins\n
> Pake *\`--delete\`* untuk menghapus plugins\n\n
*Daftar Plugin yang Tersedia :*\n
${Object.keys(src)
.map((a, i) => `> *${i + 1}.* ${a.split("/plugins/")[1]}`)
.join("\n")}`;

    if (text.includes("--get")) {
      let input = text.replace("--get", "").trim();
      if (!input)
        throw `Pilih nama plugins/nomor pluginsnya yaa..`;

      let list = Object.keys(src).map((a) => a.split("/plugins/")[1]);
      let file = isNaN(input)
        ? `${pg.directory}/${input}.js`
        : `${pg.directory}/${list[parseInt(input) - 1]}`;

      try {
        m.reply(fs.readFileSync(file.trim()).toString());
      } catch (e) {
        m.reply(
          ` *Plugins ${input} ngga ada, coba cek lagi yaa..`,
        );
      }
    } else if (text.includes("--add")) {
      if (!m.quoted || !m.quoted.body)
        throw `Reply pesan plugins yang mau kamu simpan yaa..`;

      let input = text.replace("--add", "").trim();
      if (!input) throw `Jangan lupa Masukkan nama plugins yang mau kamu simpan yaa..`;

      try {
        let file = `${pg.directory}/${input}.js`;
        fs.writeFileSync(file.trim(), jsBeautify(m.quoted.body));
        m.reply(`🎉 *Plugins ${input} berhasil disimpan!*`);
      } catch (e) {
        m.reply(
          `Terjadi kesalahan saat menyimpan plugins, coba cek kode plugins atau coba lagi nanti yaa..`,
        );
      }
    } else if (text.includes("--delete")) {
      let input = text.replace("--delete", "").trim();
      if (!input)
        throw `Silakan masukkan nama atau nomor plugins yang mau kamu hapus yaa..`;

      let list = Object.keys(src).map((a) => a.split("/plugins/")[1]);
      let file = isNaN(input)
        ? `${pg.directory}/${input}.js`
        : `${pg.directory}/${list[parseInt(input) - 1]}`;

      try {
        fs.unlinkSync(file.trim());
        m.reply(`🗑️ *Plugins ${input} berhasil dihapus dari daftar plugins.*`);
      } catch (e) {
        m.reply(
          `Plugins ${input} tidak ditemukan, Pastikan nama plugins yang kamu masukkan benar yaa..`,
        );
      }
    } else {
      throw `
Panduan Penggunaan Plugins\n
> Pake *\`--get\`* untuk mengambil plugins\n
> Pake *\`--add\`* untuk menambahkan plugins\n
> Pake *\`--delete\`* untuk menghapus plugins\n\n
*Daftar Plugin yang Tersedia :*\n
${Object.keys(src)
.map((a, i) => `> *${i + 1}.* ${a.split("/plugins/")[1]}`)
.join("\n")}`;
    }
  },
};
