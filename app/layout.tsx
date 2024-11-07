import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import Navbar from "@/components/Navbar";
import Providers from "@/Providers";
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Union Digital Certificate System",
  description: "Kalikaccha, Sarail, Brahmanbaria",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="mx-auto text-2xl gap-2 mb-10">
            <Navbar />
            <Providers>
            {children}
            <Footer/>
            </Providers>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
