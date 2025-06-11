import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: 'member' | 'admin';
}

/**
 * Mongoose schema for the User model.
 *
 * Defines the structure of a user document in the database, including:
 * - `name`: The user's full name (required).
 * - `email`: The user's email address (required, unique).
 * - `password`: The user's hashed password (required).
 * - `role`: The user's role, either 'member' or 'admin' (defaults to 'member').
 *
 * Automatically manages `createdAt` and `updatedAt` timestamps.
 */
const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['member', 'admin'], default: 'member' },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', userSchema);
export default User;