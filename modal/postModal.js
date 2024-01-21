import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    id: { type: Number, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true }
})

const postModal = mongoose.model("postCollection", postSchema)

export default postModal