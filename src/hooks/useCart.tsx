import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export function useCart() {
  const res = useContext(CartContext)
  return res
}