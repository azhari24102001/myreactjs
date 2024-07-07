const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let categorySchema = Schema({
    name: {
        type: String,
        minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
        maxlength: [3, 'Panjang nama kategori minimal 3 karakter'],
        
    }
})