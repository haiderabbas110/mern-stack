import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    published: {
        type: String
    }
});

// The alternative to the export model pattern is the export schema pattern.
const booksDB = mongoose.model('books', itemSchema);

export { booksDB }