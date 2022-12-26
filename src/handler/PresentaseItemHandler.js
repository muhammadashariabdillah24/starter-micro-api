const Items = require("../models/Item");

const PresentaseItemHandler = async (req, h) => {
  try {
    const item = await Items.find();

    if (!item) {
      const response = h.response({
        status: "failed",
        message: "Nama item tidak ditemukan, silahkan coba lagi",
      });
      response.code(404);
    }

    const searchDuplicate = [...new Set(item.map((a) => a.namaBarang))];

    const response = h.response({
      status: "success",
      data: searchDuplicate,
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

module.exports = PresentaseItemHandler;
