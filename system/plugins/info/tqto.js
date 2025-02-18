module.exports = {
  command: "tqto",
  alias: ["credit"],
  category: ["info"],
  description: "📜 Daftar Kontributor Bot Ini",
  async run(m) {
    let cap = `*Terima Kasih Kepada*\n\n`;
    cap += `*Bang_syaii*\n`;
    cap += `> *Peran:* Pembuat Script & Scraper Bot\n\n`;
    cap += `*AxellNetwork*\n`;
    cap += `> *Peran:* Pengembang Script & Scraper Bot\n\n`;
    cap += `*BhuzelRyhn*\n`;
    cap += `> *Peran:* Pengembang Script & Fitur Api Bot\n`;
    cap += `> *GitHub:* https://github.com/Bhuzel\n\n`;
    cap += `*Para Pengguna Script*\n`;
    cap += `> ❤️ Kalian semua yang sudah mendukung dan menggunakan script ini!\n\n`;
    cap += `📜 *Ucapan Terima Kasih*\n`;
    cap += `Terima kasih telah menggunakan script ini. Semoga bermanfaat bagi Anda, baik yang menggunakan maupun tidak menggunakan.\n\n`;
    cap += `🌟 *Dukung Proyek Lainnya:*\n`;
    cap += `🔗 [GitHub Bhuzel](https://github.com/Bhuzel)\n\n`;

    m.reply(cap);
  },
};
