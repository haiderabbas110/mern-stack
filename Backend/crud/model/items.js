import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
});

// The alternative to the export model pattern is the export schema pattern.
const itemsDB = mongoose.model('users', itemSchema);

export { itemsDB }