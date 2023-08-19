import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import { Roboto_Flex } from 'next/font/google'
import Image from 'next/image'
const roboto = Roboto_Flex({ subsets: ['latin'],weight:['400','700'] })

import logoSvg from '@/assets/logo.svg'
import { Button, Container } from '@/styles/pages/app'
import { ShoppingBag } from 'phosphor-react'
import { Drawer } from '@/components/Drawer'
import { CartContextProvider } from '@/context/CartContext'
import { useCart } from '@/hooks/useCart'
import { Header } from '@/components/Header'
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const [isOpened,setIsOpened] = useState(false)

  return (
    <Container className={roboto.className}>
      <CartContextProvider>
        <Header openDrawer={()=>{setIsOpened(true)}}/>
        <Component {...pageProps} />
        <Drawer isOpen={isOpened} onClose={()=>{setIsOpened(false)}}/>
      </CartContextProvider>
    </Container>
  )
}
