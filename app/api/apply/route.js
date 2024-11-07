import Certificate from "@/models/Certificate";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {
    name,
    fatherName,
    motherName,
    mobileNumber,
    address1,
    address2,
    purpose,
  } = await request.json();

  await connect();

  const nocer = await Certificate.find();

  function makeSixDigits(number) {
    return String(number).padStart(6, "0");
  }

  const certificateNo = "1219428" + makeSixDigits(nocer);

  const newCertificate = new Certificate({
    name,
    fatherName,
    motherName,
    mobileNumber,
    address1,
    address2,
    purpose,
    certificateNo,
    approval: false,
  });

  try {
    await newCertificate.save();
    return new NextResponse("Application is submitted", { status: 200 });
  } catch (err) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
