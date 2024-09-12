import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lato, Nunito_Sans } from "next/font/google";
import Header from "@/components/header/header";
import portfolioImg from "../public/images/portfolioImg.png";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Webbro-Consults",
  description: "Website Bro Consults",
  openGraph: {
    title: "Webbro-Consults",
    description: "Website Bro Consults",
    images: [
      {
        url: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="max-w-[1920px] 2xl:flex 2xl:mx-auto 2xl:justify-center bg-gray-950 w-full px-5 lg:px-10"
    >
      <head>
        <meta
          name="google-site-verification"
          content="zdAi3ZmQ8CH2x8IGKKmLG1nxxeR4_NcxLE--P-8d0TE"
        />
      </head>
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
