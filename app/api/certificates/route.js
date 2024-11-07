import Certificate from "@/models/Certificate";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  await connect();

  try {
    const certificates = await Certificate.find();

    return NextResponse.json({
      status: 200,
      data: certificates,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
