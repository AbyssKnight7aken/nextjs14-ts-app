import mongoose from 'mongoose';

const dbName = 'nextjs14-ts-app';

const uri = `${process.env.DATABASEURI}/${dbName}`;
//const uri  = `mongodb+srv://7aken:aLffW6wCs7HByLB@cluster0.otu3fel.mongodb.net/?retryWrites=true&w=majority`;

const connection: any = {};

export default async function dbConnect() {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(uri);
        //const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log('DB error: ', error);
        //throw new Error(error);
    }
}

module.exports = dbConnect;

// import mongoose from "mongoose"

// const connection = {};

// export const connectToDb = async () => {
//   try {
//     if(connection.isConnected) {
//       console.log("Using existing connection");
//       return;
//     }
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };