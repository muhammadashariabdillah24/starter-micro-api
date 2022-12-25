const Items = require("../models/Item");

const DeleteItemHandler = async (req, h) => {
  try {
    const { id } = req.params;

    const item = await Items.findById(id);

    if (!item) {
      const response = h.response({
        status: "failed",
        message: "Gagal menghapus item, silahkan coba lagi",
      });
      response.code(404);
      return response;
    }

    await item.remove();

    const response = h.response({
      status: "success",
      message: "Berhasil menghapus item",
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

module.exports = DeleteItemHandler;
