import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        default: "euro"
    },
    color: {
        type: String,
        default: "amber._200"
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
})

export const CategoryModel = mongoose.model("Category", categorySchema);