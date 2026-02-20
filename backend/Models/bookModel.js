import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

// Change this line:
export default Book;