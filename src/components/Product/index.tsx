import { useCart } from "@/hooks/useCart";
import { ProductContaner, ProductContainerImage, ProductContainerInfos } from "./style";
import Image from "next/image";

interface ProductType {
  imageUrl : string;
  price : string;
  id : string;
  name : string
}

export function Product({ imageUrl,id,name,price }:ProductType) {

  const { removeProductAtCart } = useCart()
  
  return (
    <ProductContaner>
      <ProductContainerImage>
        <Image height={95} width={95} src={imageUrl} alt=""/>
      </ProductContainerImage>
      <ProductContainerInfos>
        <p>{ name } </p>
        <span>{ price }</span>
        <button onClick={()=>{removeProductAtCart(id)}}>Remover</button>
      </ProductContainerInfos>
    </ProductContaner>
  )
}