import React from "react";
import { jsPDF } from "jspdf"; // Import jsPDF for PDF creation

const Page = async ({ params }) => {
  const id = params.id;

  let certificate = null;

  // Fetch certificate data only if the user is authenticated
  try {
    const response = await fetch(`http://localhost:3000/api/certificate/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch certificates");
    }

    certificate = await response.json();
  } catch (error) {
    // console.error("Error fetching certificates:", error);
  }

  const {
    name,
    fatherName,
    motherName,
    address1,
    address2,
    purpose,
    certificateNo,
    updatedAt,
  } = certificate?.data;

  return (
    <div className="flex flex-col items-center">
      <div className="w-[595px] h-[842px] border-solid border-2 border-slate-600 p-10">
        <h2 className="text-center uppercase font-bold text-3xl text-green-600">
          Kalikaccha Union Parishad
        </h2>
        <h2 className="text-center text-2xl border-b-4">
          Upazila: Sarail, District: Brahmanbaria
        </h2>
        <div className="flex justify-end">
          <p className="text-sm">Date: {new Date(updatedAt).toDateString()}</p>
        </div>
        <div>
          <p className="text-lg">Certificate No: </p>
          <div style={{ display: "flex" }}>
            {certificateNo.split("").map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                style={{
                  width: "30px",
                  height: "40px",
                  textAlign: "center",
                  margin: "0 5px",
                  fontSize: "20px",
                  padding: "5px",
                  fontWeight: "bold",
                }}
              />
            ))}
          </div>
        </div>
        <br />
        <br />
        <h3 className="text-center">
          Certify to <span className="font-bold uppercase">{name}</span>
        </h3>{" "}
        <br />
        <p className="text-justify">
          This is to certify that <span className="font-bold">{name}</span> Son
          of <span className="font-bold">{fatherName}</span> and{" "}
          <span className="font-bold">{motherName}</span> having permanent
          Address: {address1}
          {address2}. {purpose}
        </p>
      </div>
    </div>
  );
};

export default Page;
