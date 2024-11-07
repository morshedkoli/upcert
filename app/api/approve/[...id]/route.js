// app/api/certificates/[id]/route.js
import Certificate from "@/models/Certificate";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  await connect();

  const { id } = params;

  try {
    // Find and update the document with the specified ID
    const updatedCertificate = await Certificate.findByIdAndUpdate(
      id,
      { approval: true },
      { new: true } // returns the updated document
    );

    if (!updatedCertificate) {
      return NextResponse.json(
        { message: "Certificate not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: 200,
      message: "Certificate approval updated successfully",
      data: updatedCertificate,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating certificate approval", error },
      { status: 500 }
    );
  }
};
