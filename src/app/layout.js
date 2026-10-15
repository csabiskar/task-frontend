import { Poppins, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata = {
  title: "Construction 2 – Building and Maintenance WordPress Theme",
  description:
    "Recreated pixel-perfect UI of Construction 2 WordPress Theme with Next.js, Tailwind CSS, and JavaScript.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${robotoSlab.variable} scroll-smooth`}
    >
      <body className="font-poppins text-[#54595F] bg-[#ffffff] antialiased overflow-x-hidden selection:bg-[#f4c03b] selection:text-[#243344]">
        {children}
      </body>
    </html>
  );
}
