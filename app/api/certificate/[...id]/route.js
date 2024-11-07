import Certificate from "@/models/Certificate";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  await connect();

  const { id } = params;

  try {
    const certificate = await Certificate.findById(id);

    return NextResponse.json({
      status: 200,
      data: certificate,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
