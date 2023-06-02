import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/restaurantCard";




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <main className={'bg-gray-200 w-screen min-h-screen '}>
            <main className={'bg-white max-w-screen-2xl m-auto'}>
                <Navbar />
                <Header />
                <RestaurantCard />
            </main>
        </main>
  )
}
