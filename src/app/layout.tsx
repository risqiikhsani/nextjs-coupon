import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
import "./globals.css";
import "@uploadthing/react/styles.css";
import { Toaster, toast } from 'sonner'
import SessionWrapper from "@/components/session-provider";
import CheckAuth from "@/components/check-auth";
import Appbar from "@/components/appbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >

        <SessionWrapper>
          <CheckAuth>


            <Toaster richColors={true} />
            <div className="flex-col">
              <Appbar />
              <div className="flex md:container">
                <div className="pt-24 flex-1 md:mx-64 pb-8 md:px-8 min-h-screen">
                  {children}
                </div>
              </div>


            </div>


          </CheckAuth>
        </SessionWrapper>

      </body>
    </html>
  );
}
