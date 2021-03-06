import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: String,
  email: String,
  first_name: String,
  last_name: String,
});

const User = mongoose.model("users", UserSchema);

export default User;
