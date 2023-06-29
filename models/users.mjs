import mongoose from 'mongoose';
const { Schema } = mongoose

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        date: { type: Date, default: Date.now },
        hidden: Boolean ,
        // _someId: {Schema.Types.ObjectId},
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        firstTime: {
            type: Boolean,
            default: false
        }
    }
)

const userModel = mongoose.model('Users', userSchema);

export default userModel;