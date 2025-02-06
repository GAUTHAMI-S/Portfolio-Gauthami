import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// const Outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const Ovo = Ovo({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export const metadata = {
  title: "Portfolio - Gauthami",
  description: "Coder Girl",
};
// className={`${Outfit.className} ${Ovo.className} antialiased leading-8 overflow-x-hidden`}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
