"use client";

import Image from "next/image";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import User from "@/features/User";
import Jumbotron from "@/components/Jumbotron";

export default function TeamsPage() {
  const jumbotronTeam = (
    <>
      <div className="wrapper-text mx-auto lg:mx-[170px] lg:pt-4">
        <h1 className="mt-10 w-full text-3xl font-extrabold leading-relaxed text-textPrimary drop-shadow-lg lg:mt-0 lg:w-5/6 xl:w-[600px]">
          Meet Our Dedicated Team
        </h1>
        <p className="my-5 w-full text-justify text-sm font-normal leading-loose text-white lg:w-[570px]">
          At Ciptaning Homecare, our team is the foundation of our exceptional
          care and services. Each member brings a unique blend of expertise,
          compassion, and dedication, ensuring that our clients receive the
          highest quality of care. From our visionary leaders to our
          compassionate caregivers, every individual plays a crucial role in
          fulfilling our mission of enhancing the well-being and quality of life
          for those we serve. Get to know the people who make Ciptaning Homecare
          a trusted and beloved provider in the community.
        </p>
      </div>
      <div className="h-fit w-fit">
        <Image
          src="/nurse-hd.png"
          alt="a doctor and a nurse"
          width={1000}
          height={1000}
          className="h-full w-full"
        />
      </div>
    </>
  );

  return (
    <Provider store={store}>
      {/* Jumbotron */}
      <Jumbotron content={jumbotronTeam} />
      <User />
      {/* <div className="container mx-auto">
        <h1 className="my-4 text-center text-3xl font-bold">Teams</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <div className="flex justify-center">
              <img
                src="https://randomuser
                .me/api/portraits/m
                en/1.jpg"
                alt="team"
                className="h-32 w-32 rounded-full"
              />
            </div>
            <h2 className="mt-4 text-center text-xl font-semibold">John Doe</h2>
            <p className="mt-2 text-center text-sm">CEO</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-md">
            <div className="flex justify-center">
              <img
                src="https://randomuser
                .me/api/portraits/m
                en/2.jpg"
                alt="team"
                className="h-32 w-32 rounded-full"
              />
            </div>
            <h2 className="mt-4 text-center text-xl font-semibold">Jane Doe</h2>
            <p className="mt-2 text-center text-sm">CTO</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-md">
            <div className="flex justify-center">
              <img
                src="https://randomuser
                .me/api/portraits/m
                en/3.jpg"
                alt="team"
                className="h-32 w-32 rounded-full"
              />
            </div>
            <h2 className="mt-4 text-center text-xl font-semibold">
              John Smith
            </h2>
            <p className="mt-2 text-center text-sm">COO</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-md">
            <div className="flex justify-center">
              <img
                src="https://randomuser
                .me/api/portraits/m
                en/4.jpg"
                alt="team"
                className="h-32 w-32 rounded-full"
              />
            </div>
            <h2 className="mt-4 text-center text-xl font-semibold">
              Jane Smith
            </h2>
            <p className="mt-2 text-center text-sm">CMO</p>
          </div>
        </div>
      </div> */}
    </Provider>
  );
}
