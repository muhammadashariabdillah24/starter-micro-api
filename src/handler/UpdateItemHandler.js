const Items = require("../models/Item");

const UpdateItemHandler = async (req, h) => {
  try {
    const { id } = req.params;
    const { nama_barang, stok, jumlah_terjual, tglTransaksi, jenis_barang } =
      req.payload;

    const item = await Items.findById(id);

    if (!item) {
      const response = h.response({
        status: "failed",
        message: "Gagal memperbarui item, silahkan coba lagi",
      });
      response.code(404);
      return response;
    }

    item.namaBarang = nama_barang;
    item.stok = stok;
    item.jumTerjual = jumlah_terjual;
    item.tglTransaksi = tglTransaksi;
    item.jenisBarang = jenis_barang;
  } catch (error) {
    const response = h.response({
      status: "failed",
      message: `Terjadi kesalahan karena ${error.message} , silahkan coba lagi`,
    });
    response.code(500);
    return response;
  }
};

module.exports = UpdateItemHandler;
