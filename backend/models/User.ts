import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email: string) => email.endsWith('@alustudent.com'),
            message: 'Only ALU student emails allowed!'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

export default model('User', UserSchema);