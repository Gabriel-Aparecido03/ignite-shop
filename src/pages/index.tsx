import { stripe } from "@/lib/stripe";
import { HomeContainer, Product } from "@/styles/pages/home";
import { priceFormat } from "@/utils/priceFormat";
import { useKeenSlider } from 'keen-slider/react'
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({products}:HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides : {
      perView : 3,
      spacing : 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
     <HomeContainer className="keen-slider" ref={sliderRef}>
      { products.map(item => (
        <Link href={`/product/${item.id}`} key={item.id} prefetch={false}>
        <Product  className="keen-slider__slide">
          <Image src={item.imageUrl} alt={item.name} width={520} height={480}/>
          <footer>
            <strong>{item.name}</strong>
            <span>{priceFormat.format(parseFloat(item.price))}</span>
          </footer>
        </Product>
        </Link>
      ))}
     </HomeContainer>
    </>
  )
}


export const getStaticProps : GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand : ['data.default_price']
  });
  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price
    const priceConvertCents = price.unit_amount as number

    return {
      id : product.id,
      name : product.name,
      imageUrl : product.images[0],
      price : priceConvertCents / 100
    }
  })
  return {
    props : {
      products
    },
    revalidate : 60 * 60 * 2
  }
}