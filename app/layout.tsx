"use client";
import "./globals.css";
import Navigation from "./(navigation)/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio Zeitlhofer Alex</title>
      </head>
      <body className="">
        <div className="-z-50 h-screen w-screen bg-gradient-to-tr from-purple-400 to-cyan-300   fixed bg-fixed "></div>

        <div className="p-8 ">
          <Navigation></Navigation>

          <div className="mt-20">{children}</div>
        </div>
      </body>
    </html>
  );
}
