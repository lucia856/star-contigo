import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import RRSS from './components/RRSS'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Star Contigo | Regalos',
  description: 'Tienda de regalos personalizados para cada momento unico y especial',
  keywords: 'regalos, romanticos, regalos romanticos, cuadros, cuadros personalizados, llaveros, amor, regalos de amor, ideas de regalos, polaroids, polaroid, personalizados, novios, amistad, regalos unicos, love, regalos unicos, regalos con diseño personalizado, mapas estelares'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <RRSS />
      </body>
    </html>
  )
}
