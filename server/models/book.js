const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    authorId: Schema.Types.ObjectId,
    title: String,
    genre: String,
});

module.exports = mongoose.model("Book", bookSchema);
