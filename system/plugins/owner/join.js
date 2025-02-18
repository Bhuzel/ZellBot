module.exports = {
  command: "join",
  alias: [],
  category: ["owner"],
  settings: {
    owner: true,
  },
  description: "Memasukkan bot ke dalam grup menggunakan tautan undangan.",
  async run(m, { sock, text, Func }) {
    const errorMsg = `link groupnya ngga valid`;
    if (!text || !Func.isUrl(text) || !/chat\.whatsapp\.com\/\S+/i.test(text)) {
      throw errorMsg;
    }
    const groupId = text.split("chat.whatsapp.com/")[1];
    if (!groupId) throw errorMsg;

    try {
      const result = await sock.groupAcceptInvite(groupId);
      const successMsg = `Okayy, Berhasill..`;
      const pendingMsg = `Okayy, Tunggu Dikonfirmasi Yaa..`;

      m.reply(result ? successMsg : pendingMsg);
    } catch (error) {
      const errorMsg = `Ngga bisa join tau..\n${error.message}`;
      m.reply(errorMsg);
    }
  },
};
