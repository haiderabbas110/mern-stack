import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    published: {
        type: String
    },
    users: [{ type: Schema.Types.ObjectId, ref: 'users' }]

});

// The alternative to the export model pattern is the export schema pattern.
const booksDB = mongoose.model('books', itemSchema);

export { booksDB }