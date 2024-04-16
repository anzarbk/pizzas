import mongoose from "mongoose";
import User from "../../models/User";
import { getServerSession } from "next-auth";
import {authOptions} from "../auth/[...nextauth]/route";



export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    console.log(1);
    const body = await req.json();
  console.log(body);
  let { name,email,address,city,pin,mobile} = body;
  if(email){
    const user = await User.findOne({ email });
    if (user) {
        // console.log(2);
        const updatedUser = await User.findOneAndUpdate({email},{ name,address:address,mobile:mobile,city:city,pin:pin},{ new: true });
        if(updatedUser){
            return Response.json({ message: "User updated", data:updatedUser }, { status: 200 });
        }
    }
}

}

export async function POST(req) {
    try {
      mongoose.connect(process.env.MONGO_URL);
      const body = await req.json();
      const { email } = body;
  
      if (!email) {
        return Response.json({ message: "Email not found" }, { status: 400 });
      }
  
      const user = await User.findOne({ email }).lean();
      if (user) {
        return Response.json({ message: "User details found", data: user }, { status: 200 });
      } else {
        return Response.json({ message: "User not found" }, { status: 404 });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return Response.json({ message: "Internal server error" }, { status: 500 });
    }
  }