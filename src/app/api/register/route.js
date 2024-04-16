
import  User  from "../../models/User.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  const body = await req.json();
  console.log(body);
  let { name, email, password } = body;
  if(email){
    const exist = await User.findOne({ email });
    if (exist) {
      console.log(1);
      return Response.json(
        { message: "user already exist !" },
        { status: 500 }
      );
    }
  }
console.log(2);
  const notHashedPassword = password;
  const salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(notHashedPassword, salt);

  const createdUser = await User.create({
    name,
    email,
    password,
  });
  if(createdUser){
    return Response.json(createdUser);
  }
}