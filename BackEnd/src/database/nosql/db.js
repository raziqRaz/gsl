import mongoose from 'mongoose';
import sanitizedConfig from '../config.js';

const connectDb = async () => {
  try {
    mongoose.connection
      .on("connecting", () => {
        console.log(" [ MongoDB ] connecting...".yellow.dim);
      })
      .on("connected", () => {
        console.log(" [ MongoDB ] connected".green);
      })
      .on("disconnecting", () => {
        console.log(" [ MongoDB ] disconnecting...".red.dim);
      })
      .on("disconnected", () => {
        console.log(" [ MongoDB ] disconnected".red.dim);
      })
      .on("error", (err) => {
        console.log(" [ MongoDB ] error".red);
        console.error(err);
      });

      await mongoose.connect(sanitizedConfig.MONGO_URI);
      console.log(`🟢 Mongo db connected:`, connection.connection.host);
  } catch (error) {
    console.log("Mongo is error :", error);
  }
};
export default connectDb;