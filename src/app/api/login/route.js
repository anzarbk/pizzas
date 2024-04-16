import  User  from "../../models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function POST(req) {
    mongoose.connect(process.env.MONGO_URL);
    console.log(1);
    const body = await req.json();
  console.log(body);
  let { email, password } = body;
  if(email){
    const user = await User.findOne({ email });
    console.log(2);
    if (user) {
        // User exists, compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(isPasswordValid){
            return Response.json({ message: "Login successful" }, { status: 200 });
        } else {
            // Passwords do not match, login failed
            return Response.json({ message: "Invalid password" }, { status: 401 });
            
        }
    } else {
        // User not found, login failed
        return Response.json({ message: "User not found" }, { status: 404 });
    }
  }
}