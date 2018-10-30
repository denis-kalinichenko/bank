import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const TransactionSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: String,
    amount: Number,
    currency: String,
    date: {
        type: Date,
        default: Date.now,
    },
    accountSender: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
    },
    accountRecipient: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    type: String,
    description: String,
});