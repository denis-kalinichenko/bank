import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const AccountSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    bankAccountName: String,
    bankAccountType: String,
    bankAccountNumber: Number,
    availableFunds: Number,
    currentBalance: Number,
    balance: Number,
    cardLocks: Number,
    currency: String,
    iban: String,
    codeBicSwift: String,
    commissions: Number,
    authorizedPersons: String,
    authorizedPersonsType: String,
    myBankAccountName: String,
    typeBankCard: String,
    limit: Number,
    visible: Boolean,
});