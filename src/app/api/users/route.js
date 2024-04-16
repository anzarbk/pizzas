import mongoose from "mongoose";
import User from "../../models/User";

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);
  const users = await User.find();
  if (users) {
    return Response.json(users, { status: 200 });
  }
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const body = await req.json();
  const { id } = body;
  console.log(id);
  try {
    const user = await User.findOne({ _id: id }).lean();
    console.log(user);
    console.log(user.isBlock);

  
    if (user.isBlock === true) {

      const newUser = await User.findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set:{isBlock: false}
        },
        { new: true }
      );
      return Response.json(newUser, { status: 200 });
    } else if(user.isBlock === false) {
      const newUser = await User.findOneAndUpdate(
        {
          _id: id,
        },
        {
            $set:{isBlock: true}
          },
        { new: true }
      );
      
      return Response.json(newUser, { status: 200 });
    }

    
  } catch (error) {
    console.error(error);
    return Response.json({ status: 500 });
  }
}
