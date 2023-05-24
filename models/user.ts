import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname: {
        type:String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }]
})

export const UserModel = mongoose.model("User", userSchema);