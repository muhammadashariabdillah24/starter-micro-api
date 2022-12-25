const Items = require("../models/Item");

const GetItemHandler = async (req, h) => {
  try {
    const item = await Items.find();

    if (!item) {
      const response = h.response({
        status: "failed",
        message: "Gagal mengambil data, silahkan coba lagi",
      });
      response.code(500);
    }

    const resultRemoveDuplicate = [...new Set(item)];

    const response = h.response({
      status: "success",
      message: "Berhasil mengambil data",
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

module.exports = GetItemHandler;
