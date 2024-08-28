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
  title: "Peter A.O",
  description: "Peter's Portfolio",
  openGraph: {
    title: "Peter A.O",
    description: "Peter's portfolio",
    images: [
      {
        url: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/376266403_187352477705052_2218369533813198303_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=7k_OpXospQ0AX-d_aJZ&_nc_ht=scontent-los2-1.xx&oh=00_AfCtm6vG1pGzvvs6WSFjLuq1hrfyI_-fTnuyRHzb8A1NhQ&oe=6501A176",
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
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
