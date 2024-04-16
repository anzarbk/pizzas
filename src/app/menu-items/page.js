"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import UserTabs from "../components/layout/UserTabs";

const page = () => {
  const { data: session, status } = useSession();
  const email = session?.user?.email;
  const username = session?.user?.name;

  const [admin, setAdmin] = useState(false);

  const fetchData = async () => {
    try {
      const Response = await axios.post("/api/profile/", { email });
      // Update state based on the response
      console.log(Response.data.data);
      if (Response.status == 200) {
        setAdmin(Response.data.data.isAdmin);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      // Handle errors
    }
  };

  fetchData();

  return (
    <section className="mt-8">
      {admin ? <UserTabs /> : ""}
      <h1 className="text-center text-primary py-4 m-6 text-4xl">Menu-items</h1>


      <div>
        <table class="w-full  mt-4 text-center ">
          <thead>

            <tr class="">
              <th class="border border-gray-300 px-4 py-2 ">Name</th>
              <th class="border border-gray-300 px-4 py-2 ">Image</th>
              <th class="border border-gray-300 px-4 py-2 ">description</th>
              <th class="border border-gray-300 px-4 py-2 ">price</th>
              <th class="border border-gray-300 px-4 py-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="border border-gray-300 px-4 py-2 ">pizza</td>
              <td class="border border-gray-300 px-4 py-2 ">img</td>
              <td class="border border-gray-300 px-4 py-2 ">desc</td>
              <td class="border border-gray-300 px-4 py-2 ">200</td>
              <td class="border border-gray-300 px-4 py-2 ">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2  rounded-full w-auto hover:bg-primary-dark"
                >
                  view
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      <h1 className="text-center text-primary py-4 m-6 text-4xl">Add items</h1>

        <form>
          <div className="flex justify-center gap-4 mt-6 border ">
            <div className="grid grid-cols-2 w-full ">
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-end items-end">
                  <label
                    htmlFor="categoryName"
                    className="block text-gray-700 font-semibold  p-4 "
                  >
                    Product name :
                  </label>
                  <label
                    htmlFor="categoryName"
                    className="block text-gray-700 font-semibold  p-4 "
                  >
                    Description :
                  </label>
                  <label
                    htmlFor="categoryName"
                    className="block text-gray-700 font-semibold  p-4 "
                  >
                    Price :
                  </label>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                  <input
                    type="text"
                    id="categoryName"
                    className="border border-gray-300 px-3 py-2 rounded-full w-auto focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    id="categoryName"
                    className="border border-gray-300 px-3 py-2 rounded-full w-auto focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    id="categoryName"
                    className="border border-gray-300 px-3 py-2 rounded-full w-auto focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="border mt-2 h-36 bg-black">asdasdasdasdad</div>
                <div>
                <span className="border bg-primary text-white font-semibold rounded-full  px-6 py-2 cursor-pointer p-4 ">
                <input type="file" className="hidden"></input>
                  image upload
                </span>
              </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 mt-4  rounded-full w-full hover:bg-primary-dark"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
{
  /* <div> */
}
{
  /* <input type='file' className='hidden' ></input>
<span className='border bg-primary text-white font-semibold rounded-full px-6 py-2 cursor-pointer p-4 ' >image upload</span>

</div>
<div className="flex flex-col items-center justify-center gap-4">
<div className='flex'>
<label htmlFor="categoryName" className="block text-gray-700 font-semibold  p-4 ">Product name :</label>
<input type="text" id="categoryName"  className="border border-gray-300 px-3 py-2 rounded-full w-auto focus:outline-none focus:border-primary" />
</div>
<div className='flex'>
<label htmlFor="categoryName" className="block text-gray-700 font-semibold  p-4 ">Description :</label>
<input type="text" id="categoryName"  className="border border-gray-300 px-3 py-2 rounded-full w-auto focus:outline-none focus:border-primary" />
</div>
<div className='flex'>
<label htmlFor="categoryName" className="block text-gray-700 font-semibold  p-4 ">Price :</label>
<input type="text" id="categoryName"  className="border border-gray-300 px-3 py-2 rounded-full w-auto focus:outline-none focus:border-primary" />
</div> */
}
{
  /* </div> */
}
