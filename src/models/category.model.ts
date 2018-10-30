import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const CategorySchema = new Schema({
    name: String,
    description: String,
    code: String,
});