import CredentialsProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import mongoose from "mongoose";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from '../../../libs/mongoConnect'
import { useSession } from 'next-auth/react'
import { userAgent } from "next/server";
import NextAuth from "next-auth/next";

const authOptions = {
  secret: process.env.SECRET,
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id:'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
        admin: { label: "Admin", type: "boolean" },
      },
      async authorize(credentials, req) {
      // console.log('cred is :',credentials);
      
      const email = credentials?.email;
      const password = credentials?.password;
 
      

      mongoose.connect(process.env.MONGO_URL);
      const user = await User.findOne({email});
      const passwordOk = user && bcrypt.compareSync(password, user.password);
      
      if (passwordOk) {
        console.log(user);

        return user;
      }

      return null
    }
  })
]
}
const handler = NextAuth(authOptions);

export {handler as GET,handler as POST}


