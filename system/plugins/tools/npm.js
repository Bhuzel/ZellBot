class Command {
  constructor() {
    this.command = "npm";
    this.alias = ["npmjs", "package"];
    this.category = ["tools"];
    this.settings = {
      limit: true,
    };
    this.description = "🔍 Mencari Package dari NPM";
    this.loading = true;
  }

  run = async (m, { sock, Func, text, config }) => {
    if (!text) throw "*Masukkan Nama Package yang ingin dicari*";

    try {
      let data = await Func.fetchJson(
        `https://registry.npmjs.com/-/v1/search?text=${encodeURIComponent(text)}`,
      );

      if (!data.objects || data.objects.length === 0) {
        return m.reply(
          "*Package tidak ditemukan. Coba kata kunci lain atau periksa kembali nama package-nya!*",
        );
      }

      let cap = "*Hasil Pencarian NPMJS - Package Info*\n\n";
      for (let i of data.objects.slice(0, 20)) {
        cap += `*Nama Package:* ${i.package.name}@^${i.package.version}\n`;
        cap += `*Mingguan:* ${Func.h2k(i.downloads.weekly)} | *Bulanan:* ${Func.h2k(i.downloads.monthly)}\n`;
        cap += `*Pembuat:* ${i.package.publisher.username}\n`;
        cap += `*Diperbarui:* ${Func.ago(i.package.date)}\n`;
        cap += Object.entries(i.package.links)
          .map(([a, b]) => `*${a.capitalize()}:* ${b}`)
          .join("\n");
        cap += "\n\n";
      }

      cap += `> © ${config.name}\n*– 乂 Terimakasih telah menggunakan bot kami!*`;
      m.reply(cap);
    } catch (error) {
      console.error("Error fetching npm package:", error);
      m.reply(
        "*Terjadi kesalahan saat mencari package, coba lagi nanti.*",
      );
    }
  };
}

module.exports = new Command();
