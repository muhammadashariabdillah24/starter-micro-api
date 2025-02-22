const Items = require("../models/Item");

const SearchItemHandler = async (req, h) => {
  try {
    const { name } = req.params;
    const item = await Items.find({ namaBarang: name });

    if (!item) {
      const response = h.response({
        status: "failed",
        message: "Nama item tidak ditemukan, silahkan coba lagi",
      });
      response.code(404);
    }

    const resultRemoveDuplicate = item.filter(
      (items, index) =>
        index ===
        item.findIndex((other) => items.namaBarang === other.namaBarang)
    );

    const response = h.response({
      status: "success",
      data: resultRemoveDuplicate,
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: "failed",
      message: `Terjadi kesalahan karena ${error.message} , silahkan coba lagi`,
    });
    response.code(500);
    return response;
  }
};

module.exports = SearchItemHandler;
