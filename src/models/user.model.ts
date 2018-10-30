import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Enter a username',
        unique: 'Username should be unique',
        index: true,
    },
    activated: {
        type: Boolean,
        default: false
    },
    age: String,
    basicData: {
        firstName: {
            type: String,
            required: 'Enter a first name'
        },
        lastName: {
            type: String,
            required: 'Enter a last name'
        },
        nationality: String,
        country: {
            flag: String,
            name: String,
            alpha2Code: String,
        },
    },
    idCard: {
        pesel: Number,
        idCard: String,
        releaseDate: Date,
        termDate: Date,
    },
    contactData: {
        numberPhone: Number,
        email: String,
    },
    addressData: {
        street: String,
        houseNumber: Number,
        apartamentNumber: Number,
        city: String,
        zipcode: String,
        country: String,
    },
    sameCorrespondenceAddress: Boolean,
    corespondenceData: {
        street: String,
        city: String,
        houseNumber: Number,
        zipcode: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});