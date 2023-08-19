import { useCart } from "@/hooks/useCart"
import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { priceFormat } from "@/utils/priceFormat"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description : string;
    defaultPriceId:string;
  }
}


export default function Product({ product }:ProductProps) {

  /* const [isRedirectingToCheckoutSession,setisRedirectingToCheckoutSession] = useState(false) */
  const { addProductAtCart } = useCart()
    const router = useRouter()

  function handleAddProduct() {
    addProductAtCart(product)
    router.push('/')
  }

  return (
    <>
      <Head>
        <title> {product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            height={520} 
            width={480}
            alt=""
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{ product.name }</h1>
          <span>{ priceFormat.format(parseFloat(product.price)) }</span>

          <p>{ product.description } </p>

          <button 
            onClick={handleAddProduct}
          > 
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths : [],
    fallback : 'blocking'
  }
}

export const getStaticProps : GetStaticProps<any,{ id : string}> =  async ({ params }) => {
  const productId = params?.id;
  
  const product = await stripe.products.retrieve(String(productId),{
    expand : ['default_price']
  });
  const price = product.default_price as Stripe.Price
  const priceConvertCents = price.unit_amount as number
  return {
    props : {
      product : {
        id : product.id,
        name : product.name,
        imageUrl : product.images[0],
        price : priceConvertCents / 100,
        description : product.description,
        defaultPriceId : price.id
      }
    },
    revalidate : 60 * 60 * 1,
  }
}