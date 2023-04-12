import 'dotenv/config';
import app from './app';
import mongoose, { mongo } from 'mongoose';

const PORT = process.env.PORT || 3000;

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/lexart'

mongoose.connect(MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT} and connect to database`);
    })
}
).catch(()=> {
    process.exit(0)
})



