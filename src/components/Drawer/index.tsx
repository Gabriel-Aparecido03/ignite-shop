import { X } from "phosphor-react";
import { DrawerContainer, FinalPriceContainer, PriceContainer, ProductsContainer, SummaryContainer } from "./style";
import { Product } from "../Product";
import { useCart } from "@/hooks/useCart";
import axios from "axios";
import { priceFormat } from "@/utils/priceFormat";

interface DrawerPropsType {
  isOpen : boolean;
  onClose : () => void;
}

interface PriceProps {
  price : string
  quantity : number
}

export function Drawer({isOpen,onClose }:DrawerPropsType) {

  const { listOfProduct } = useCart()
  const sizeOfCart = listOfProduct.length

  async function handleBuyProduct() {
    const listOfPrices:PriceProps[] = []
    listOfProduct.map( item => listOfPrices.push({price : item.defaultPriceId,quantity : 1}))
    try {
      const response = await axios.post('/api/checkout',{
        listOfPricesIds : [...listOfPrices]
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      console.log(error)
    }
  }


  const sumPrices = listOfProduct.reduce((accumulator,currentValue)=> accumulator + parseInt(currentValue.price),0)

  return (
     isOpen && <DrawerContainer>
      <div> 
        <header>
          <div><X size={24} color="#8D8D99" onClick={onClose} /></div>
          <span>Sacola de compras</span>
        </header>
        <ProductsContainer>
          { listOfProduct.map((item)=> 
          <Product 
            id={item.id} 
            imageUrl={item.imageUrl}
            name={item.name}
            price={priceFormat.format(parseFloat(item.price))}
            key={item.id}
          />
          )}
        </ProductsContainer>
      </div>
      <SummaryContainer>
        <div>
          <PriceContainer>
            <span>Quantidade</span>
            <p>{ sizeOfCart } itens</p>
          </PriceContainer>
          <FinalPriceContainer>
            <span>Valor total</span>
            <p>{ priceFormat.format(sumPrices)} </p>
          </FinalPriceContainer>
        </div>
        <button onClick={handleBuyProduct}>Finalizar compra</button>
      </SummaryContainer>
    </DrawerContainer>
  )
}