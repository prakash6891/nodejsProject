import mongoose from 'mongoose'
// import isEmail from 'validator/es/lib/isEmail'

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: {
        type: String, required: true 
    },
    address: [{ street: { type: String }, suite: { type: String }, city: { type: String }, zipcode: { type: String } }],
    geo: [{ lat: { type: Number }, lng: { type: Number } }],
    phone: { type: String, required: true },
    website: { type: String },
    company: [{ name: { type: String, required: true }, catchPhrase: { type: String }, bs: { type: String } }]
})

const userModal = mongoose.model("userCollection", userSchema)

export default userModal