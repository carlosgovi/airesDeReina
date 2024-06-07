import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "flowbite";
import { Header } from "./components/header/header";
import Footer from "./components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aires de Reina",
  description:
    "Aires de Reina es un espacio único donde se cumplen los sueños de toda mujer. Contamos con atención personalizada y exclusiva. Confeccionamos a medida con pasión el vestido soñado, novias, madrinas, graduadas, madres, abuelas todas recibidas y asesoradas por la titular de la marca.También encontrarás un espacio donde te podrás capacitar para incursionar en el mundo de la moda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
