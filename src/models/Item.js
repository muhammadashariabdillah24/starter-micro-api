const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  namaBarang: String,
  stok: Number,
  jumTerjual: Number,
  tglTransaksi: {
    type: Date,
    default: Date.now,
  },
  jenisBarang: String,
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
