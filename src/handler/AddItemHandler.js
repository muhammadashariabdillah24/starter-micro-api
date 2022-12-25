const Items = require("../models/Item");

const AddItemHandler = async (req, h) => {
  try {
    const { nama_barang, stok, jumlah_terjual, tglTransaksi, jenis_barang } =
      req.payload;

    const saveItem = new Items({
      namaBarang: nama_barang,
      stok: stok,
      jumTerjual: jumlah_terjual,
      tglTransaksi: tglTransaksi,
      jenisBarang: jenis_barang,
    });

    await saveItem.save();

    const response = h.response({
      status: "success",
      message: "Item berhasil ditambahkan",
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: "failed",
      message: `Terjadi kesalahan karena ${error.message} , silahkan coba lagi`,
    });
    response.code(400);
    return response;
  }
};

module.exports = AddItemHandler;
