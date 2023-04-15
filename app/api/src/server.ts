import 'dotenv/config';
import app from './app';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;

const MONGO_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/lexart'

mongoose.connect(MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT} and connected to database`);
    })
}
).catch(()=> {
    console.log(PORT,MONGO_URL)
    console.error('error on server starting or database connection');
    process.exit(0);
})
