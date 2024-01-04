import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../component/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Citizen Project",
  description: "Generated by create next app",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}