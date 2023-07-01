import AppLayout from "layout/app-layout";
import "./globals.css";
import { Inter } from "next/font/google";
import AppProvider from "providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <AppProvider> */}
        <body className="relative">
          <div id="modal"></div>
          <AppLayout>{children}</AppLayout>
        </body>
      {/* </AppProvider> */}
    </html>
  );
}
