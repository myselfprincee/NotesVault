import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './.env' });

mongoose.set('strictQuery', true);

const connectToMongo = () => {
    mongoose.connect(process.env.mongoURI, 
    ).then(() => {
        console.log("connection successful")
    }).catch((err) => console.log(err));
};

export default connectToMongo;
