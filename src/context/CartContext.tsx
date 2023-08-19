import { Product } from "@/components/Product";
import { ReactNode, createContext, useState } from "react";

interface Product { 
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description : string;
  defaultPriceId:string;
}

interface CartContextType {
  addProductAtCart : (product: Product) => void;
  removeProductAtCart : (id : string ) => void;
  listOfProduct : Product[]
}

interface CartContextProviderType {
  children : ReactNode
}

export const CartContext = createContext({} as CartContextType )

export function CartContextProvider({ children }: CartContextProviderType) {
  const [ products,setProducts ] = useState<Product[]>([])

  function isRepeatedItem(id:string) {
    const index = products.findIndex( item => item.id === id)
    console.log(index)
    return index !== -1
  }

  function addProductAtCart(product : Product) {
    if(!isRepeatedItem(product.id)) {
      setProducts(prev => [...prev,product])
    }
  }

  function removeProductAtCart(id : string) {
    const filteredArray = products.filter( item => item.id !== id)
    setProducts([...filteredArray])
  }

  return (
    <CartContext.Provider value={{ addProductAtCart,listOfProduct: products ,removeProductAtCart}}>
      { children }
    </CartContext.Provider>
  )
}