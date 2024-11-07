"use client";
import Link from "next/link";
import toast from "react-hot-toast";

export default function AfterHero({ data }) {
  const updateApplication = async (id) => {
    try {
      const response = await fetch(`/api/approve/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setError("");
        toast.success("Application Approve successfully");
        router.push("/");
      }
    } catch (error) {
      toast.error("Error, try again");
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <section className="text-gray-600 body-font w-full">
      <div className=" px-5 w-full ">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Pending Applications
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Father
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Status
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Address
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Action
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br" />
              </tr>
            </thead>
            <tbody>
              {data?.map((certificate) => (
                <tr key={certificate.id}>
                  <td className="px-4 py-3">{certificate.name}</td>
                  <td className="px-4 py-3">{certificate.fatherName}</td>
                  <td
                    className={`px-4 py-3 ${
                      certificate.approval ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {certificate.approval ? "Approved" : "Pending"}
                  </td>
                  <td className="px-4 py-3 text-lg text-gray-900">
                    {certificate.address1}
                  </td>
                  <td className="px-4 py-3 text-lg text-gray-900">
                    {certificate.approval ? (
                      <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                        <Link href={`/printpage/${certificate._id}`}>
                          Print
                        </Link>
                      </button>
                    ) : (
                      <button
                        onClick={() => updateApplication(certificate._id)}
                        class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
