import Navbar from "./Navbar"
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main className={inter.className} >{children}</main>
      </>
    )
}

export default Layout;
