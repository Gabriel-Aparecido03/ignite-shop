import { stripe } from "@/lib/stripe";
import { ImageContainer, ImagesContainer, SuccessContainer, WrapperImageContaier } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; 
import Stripe from "stripe";

interface Product {
  name : string;
  imageUrl: string;
}
interface SuccessProps {
    customerName : string
    products : Product[]
}

export default function Success({customerName,products}: SuccessProps) {
  return (  
    <>
      <Head>
        <title>Success | Ignite Shop</title>
        <meta name="robots" content="noindex"/> 
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {/* <WrapperImageContaier >
            <ImageContainer>
              <Image 
                src={product.imageUrl}
                width={130}
                height={145}
                alt="" />
            </ImageContainer>
          </WrapperImageContaier> */}
          {/* <WrapperImageContaier>
            <ImageContainer>
              <Image 
                src={product.imageUrl}
                width={130}
                height={145}
                alt="" />
            </ImageContainer>
          </WrapperImageContaier> */}
          {
            products.map( (item,key) => (
              <WrapperImageContaier key={key}>
                <ImageContainer>
                  <Image
                     src={item.imageUrl}
                     width={130}
                     height={145}
                     alt="" 
                    />
                </ImageContainer>
              </WrapperImageContaier>
            ))
          }
        </ImagesContainer>
        <h1>Compra efetuada !</h1>
        <p>Uhuul { customerName }, sua compra de { products.length } camisetas já está a caminho da sua casa. </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}


export const getServerSideProps : GetServerSideProps = async ({query}) => {
  interface Product {
    name : string;
    imageUrl: string;
  }

  if(!query.session_id) {
    return {
      redirect : {
        destination : '/',
        permanent : false
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId,{
    expand : ['line_items','line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const list = session.line_items?.data as Stripe.LineItem[]
  const products : Product[] = []

  list.map( (_,key) => {
    const product = session.line_items?.data[key].price?.product as Stripe.Product
    products.push({ name : product.name,imageUrl : product.images[0]})
  })
  return {
    props : {
      customerName,
      products
    }
  }
}