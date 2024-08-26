import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL || 'mongodb://devamir2_amir:amir.h.j@localhost:27017/devamir2_source'
console.log(MONGO_URL)
const connectToDB = async () => {

    if (!MONGO_URL) return console.log('MONGO URL NOT VALID');

    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(MONGO_URL);
        }
        console.log('CONNECT TO DB');
    } catch (error) {
        console.log('ERROR TO CONNECT TO DB');
    }
}

export default connectToDB;