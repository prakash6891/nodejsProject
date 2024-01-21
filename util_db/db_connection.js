import mongoose from "mongoose"

const connectDB = async (database_url) => {
    try {
        await mongoose.connect(database_url)
        console.log(`mongodb connect successfully at ${database_url}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB