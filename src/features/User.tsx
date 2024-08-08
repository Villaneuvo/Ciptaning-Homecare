"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/features/userSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import Image from "next/image";
import { User } from "@/store/store";

export default function UserCard() {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const results = useSelector((state: User) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="mx-auto my-5 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-3">
          {results.map((user, index) => {
            return (
              <div className="card w-72 bg-base-100 shadow-xl" key={index}>
                <figure>
                  <Image
                    className="h-full w-full"
                    src={user?.picture?.large}
                    alt="Shoes"
                    height={200}
                    width={200}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{user?.name?.first}</h2>
                  <p className="text-sm opacity-50">
                    {user?.location?.city}, {user?.location?.country}
                  </p>
                  <p className="text-justify">
                    With over 15 years of experience in healthcare management
                    and a deep commitment to compassionate care, Prawiya founded
                    the company to bring exceptional homecare services to those
                    in need. She holds a Doctorate in Healthcare Administration
                    and is known for her strategic.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
