import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AfterHero from "@/components/AfterHero";

const Dashboard = async () => {
  const session = await getServerSession();

  // Redirect if the user is not authenticated
  if (!session) {
    redirect("/");
  }

  let certificates = null;

  // Fetch certificate data only if the user is authenticated
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/certificates`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch certificates");
    }

    certificates = await response.json();
  } catch (error) {
    console.error("Error fetching certificates:", error);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {certificates?.data?.map((certificate) => (
        <p key={certificate.id}>{certificate?.name}</p>
      ))} */}

      <AfterHero data={certificates?.data} />

      <h1 className="text-5xl max-[500px]:text-2xl">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
