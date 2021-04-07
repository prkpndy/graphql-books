const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    authorId: Schema.Types.ObjectId,
    name: String,
    genre: String,
});

module.exports = mongoose.model("Book", bookSchema);
