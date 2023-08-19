import { useCart } from "@/hooks/useCart";
import { Button } from "@/styles/pages/app";
import Image from "next/image";
import { ShoppingBag } from "phosphor-react";
import { Header as HeaderStyled } from '@/styles/pages/app'
import logoSvg from '@/assets/logo.svg'

interface Header {
  openDrawer : () => void
}

export function Header({ openDrawer }: Header) {
  
  const { listOfProduct } = useCart()
  const sizeOfCart = listOfProduct.length
  
  return (
    <HeaderStyled>
      <Image src={logoSvg} alt='' />
      <Button onClick={openDrawer}>
          <ShoppingBag size={24} color='#C4C4CC'/>
          <span>
            { sizeOfCart } 
          </span>
      </Button>
    </HeaderStyled>
  )
}