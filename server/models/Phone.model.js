const { Schema, model } = require("mongoose");

const phoneSchema = new Schema(
    {
        id: Number,
        name: String,
        manufacture: String,
        description: String,
        color: String,
        price: Number,
        imageFileName: String,
        screen: String,
        processor: String,
        ram: Number,
    },
    { timestamps: true, }
)

const Phone = model('Phone', phoneSchema);

module.exports = Phone;