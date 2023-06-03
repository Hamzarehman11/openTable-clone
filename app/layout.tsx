import './globals.css'
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/restaurantCard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <main className={'bg-gray-200  min-h-screen '}>
          <main className={'bg-white max-w-screen-2xl m-auto'}>
              <Navbar />
              {children}
          </main>
      </main>
      </body>
    </html>
  )
}
