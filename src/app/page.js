'use client'
import { useSession } from "next-auth/react";

import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <>
   
    <Hero />
    <HomeMenu/>
    <section className="py-12">
      <SectionHeaders subHeader={'Our Story'} mainHeader={'AboutUs'}/>
      <div className="text-grey-500 flex flex-col gap-4 max-w-md mx-auto mt-8">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam
        </p>
      </div>
    </section>
    <section className="text-center py-12">
    <SectionHeaders subHeader={'Dont Hesitate to contact us'} mainHeader={'Contact Us'}/>
    <a className="text-2xl underline mt-6" href="tel:0521231234">+971 12 123 1234</a>
    </section>
    
    </>
  );
}
