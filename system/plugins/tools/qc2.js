const axios = require("axios");

exports.routes = {
  name: "QC (Color Quote)",
  category: "maker",
  path: "/maker/qc",
  parameter: ["q", "name"], // Menambahkan 'name' sebagai parameter tambahan
  example: {
    q: "blue Halo Semua", // Warna dan teks digabung
    name: "John Doe", // Nama pengguna
  },
  method: "get",
  execution: async (req, res, next) => {
    try {
      const { q, name } = req.query;

      if (!q) return res.error("Contoh: blue Halo semuanya");

      // Split q menjadi warna dan pesan
      let [color, ...message] = q.split(" ");
      message = message.join(" ");

      let backgroundColor;
      switch (color) {
        case "pink":
          backgroundColor = "#f68ac9";
          break;
        case "blue":
          backgroundColor = "#6cace4";
          break;
        case "red":
          backgroundColor = "#f44336";
          break;
        case "green":
          backgroundColor = "#4caf50";
          break;
        case "yellow":
          backgroundColor = "#ffeb3b";
          break;
        case "purple":
          backgroundColor = "#9c27b0";
          break;
        case "darkblue":
          backgroundColor = "#0d47a1";
          break;
        case "lightblue":
          backgroundColor = "#03a9f4";
          break;
        case "ash":
          backgroundColor = "#9e9e9e";
          break;
        case "orange":
          backgroundColor = "#ff9800";
          break;
        case "black":
          backgroundColor = "#000000";
          break;
        case "white":
          backgroundColor = "#ffffff";
          break;
        default:
          return res.error(
            "Warna Tidak Ditemukan*\n*Contoh : blue Bhuzel*\nGunakan Huruf Kecil Yaa Pada Kode Warna"
          );
      }

      // Jika tidak ada nama, pakai default 'Zell API'
      const displayName = name || "Zell API";
      const avatarUrl = "https://telegra.ph/file/6880771a42bad09dd6087.jpg"; // Bisa dinamis kalau perlu

      let obj = {
        type: "quote",
        format: "png",
        backgroundColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [
          {
            entities: [],
            avatar: true,
            from: {
              id: 1,
              name: displayName, // Nama bisa diinput dari parameter
              photo: {
                url: avatarUrl, // Avatar bisa dibuat dinamis
              },
            },
            text: message, // Ini adalah teks yang dikirimkan
            replyMessage: {},
          },
        ],
      };

      let response = await axios.post(
        "https://quotly.netorare.codes/generate",
        obj,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.data.ok || !response.data.result.image) {
        return res.error("Gagal mendapatkan gambar dari API.");
      }

      let imageBase64 = response.data.result.image;
      let buffer = Buffer.from(imageBase64, "base64");

      res.setHeader("Content-Type", "image/png");
      res.send(buffer);
    } catch (error) {
      console.error("Error creating quote image:", error);
      res.error("Terjadi kesalahan saat membuat gambar, coba lagi.");
    }
  },
  error: false,
};
