"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";

const ApplyPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const fatherName = e.target[1].value;
    const motherName = e.target[2].value;
    const mobileNumber = e.target[3].value;
    const address1 = e.target[4].value;
    const address2 = e.target[5].value;
    const purpose = e.target[6].value;

    if (!mobileNumber || mobileNumber.length < 11) {
      setError("Mobile is invalid");
      toast.error("Mobile is invalid");
      return;
    }

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          fatherName,
          motherName,
          mobileNumber,
          address1,
          address2,
          purpose,
        }),
      });

      if (res.status === 200) {
        setError("");
        toast.success("Application successfully Submitted");
        router.push("/");
      }
    } catch (error) {
      toast.error("Error, try again");
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="flex justify-center flex-col items-center">
        <Image src="/logo 1.png" alt="star logo" width={50} height={50} />
        <h2 className="mt-6 text-center text-2xl leading-9 tracking-tight text-gray-900">
          Apply for new certificate
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  placeholder="Murshed Al Main"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="fatherName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Father Name
              </label>
              <div className="mt-2">
                <input
                  id="fatherName"
                  name="fatherName"
                  type="text"
                  required
                  placeholder="Manju Mia"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="motherName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mother Name
              </label>
              <div className="mt-2">
                <input
                  id="motherName"
                  name="motherName"
                  type="text"
                  required
                  placeholder="Nekjan Begum"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  required
                  placeholder="01781-981-486"
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address1"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address 1
              </label>
              <div className="mt-2">
                <input
                  id="address1"
                  name="address1"
                  type="text"
                  required
                  placeholder="Village, Word No, Post Office"
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address2"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address 2
              </label>
              <div className="mt-2">
                <input
                  id="address2"
                  name="address2"
                  type="text"
                  required
                  placeholder="Upazila, District"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="purpose"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Purpose
              </label>
              <div className="mt-2">
                <textarea
                  id="purpose"
                  name="purpose"
                  required
                  placeholder="As far as I know, his father is a financially insolvent, disabled helpless and a landless person"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Check all information are true
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full border border-black justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Apply
              </button>
              <p className="text-red-600 text-center text-[16px] my-4">
                {error && error}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
