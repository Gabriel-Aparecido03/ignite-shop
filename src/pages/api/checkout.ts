import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,res : NextApiResponse) {

  const { listOfPricesIds } =req.body
  if(req.method !== "POST") {
    return res.status(405).json({error :'Method not allowed'})
  }

  if(!listOfPricesIds) {
    return res.status(400).json({error :'Price not found'})
  }

  const successURL = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelURL = `${process.env.NEXT_PUBLIC_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode : 'payment',
    success_url : successURL,
    cancel_url : cancelURL,
    line_items : listOfPricesIds
  })

  return res.status(201).json({
    checkoutUrl : checkoutSession.url
  })
}