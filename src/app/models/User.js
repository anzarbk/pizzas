import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  mobile: { type: String },
  city: { type: String },
  pin: { type: String },
  isAdmin: { type: Boolean, default: false },
  isBlock: { type: Boolean, default: false },
}, { timestamps: true });

// Export the model directly, without assigning it to a variable
export default models?.User || model('User', UserSchema);