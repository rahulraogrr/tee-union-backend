import mongoose from 'mongoose';

/**
 * Asynchronously connects to the MongoDB database using the connection URI specified
 * in the environment variable `MONGO_URI`. Logs a success message with the connected
 * host on successful connection. If the connection fails, logs the error message and
 * terminates the Node.js process with exit code 1.
 *
 * @async
 * @function
 * @throws Will terminate the process if the connection to MongoDB fails.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;