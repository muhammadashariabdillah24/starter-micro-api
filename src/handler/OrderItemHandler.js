const Items = require("../models/Item");

const OrderItemByName = async (req, h) => {
  try {
    const item = await Items.find();

    if (!item) {
      const response = h.response({
        status: "failed",
        message: "Terjadi kesalahan saat mengurutkan data, silahkan coba lagi",
      });
      response.code(500);
    }

    const resultRemoveDuplicate = item.filter(
      (items, index) =>
        index ===
        item.findIndex((other) => items.namaBarang === other.namaBarang)
    );

    const sortedList = resultRemoveDuplicate.sort((a, b) =>
      a.namaBarang.localeCompare(b.namaBarang)
    );

    const response = h.response({
      status: "success",
      data: sortedList,
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

const OrderItemByDate = async (req, h) => {
  try {
    const item = await Items.find();

    if (!item) {
      const response = h.response({
        status: "failed",
        message: "Terjadi kesalahan saat mengurutkan data, silahkan coba lagi",
      });
      response.code(500);
    }

    const resultRemoveDuplicate = item.filter(
      (items, index) =>
        index ===
        item.findIndex((other) => items.namaBarang === other.namaBarang)
    );

    const sortedList = resultRemoveDuplicate.sort(
      (a, b) => new Date(a.tglTransaksi) - new Date(b.tglTransaksi)
    );

    const response = h.response({
      status: "success",
      data: sortedList,
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

module.exports = {
  OrderItemByName,
  OrderItemByDate,
};
