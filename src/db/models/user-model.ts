import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  avatar: String
})

export const UserModel = model('User', userSchema);