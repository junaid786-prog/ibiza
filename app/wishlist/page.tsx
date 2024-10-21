// WishlistPage.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import WishlistTable from "@/components/wishlist/wishlist-table"
import WishlistSummary from "@/components/wishlist/wishlist-summary"

// Sample product data
const initialProducts = [
  { id: 1, name: "Elegant dress", price: 79.99, image: "/dresses/dress-1.jpeg", quantity: 1 },
  { id: 2, name: "Beautiful Shirt", price: 199.99, image: "/dresses/dress-2.jpeg", quantity: 1 },
  { id: 3, name: "Wonderful Wear", price: 59.99, image: "/dresses/dress-3.jpeg", quantity: 1 },
]

export default function WishlistPage() {
  const [products, setProducts] = useState(initialProducts)

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity } : product
    ))
  }

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
  const taxRate = 0.1
  const taxes = subtotal * taxRate
  const grandTotal = subtotal + taxes

  return (
    <Card className="w-full max-w-4xl lg:mx-auto mx-2 sm:mx-4 xs:mx-2 my-2 lg:px-8 md:px-4 sm:px-2 xs:px-1">
      <CardHeader className="lg:p-8 md:p-4 sm:p-1 xs:p-0 p-3">
        <CardTitle className="text-2xl font-bold">Your Wishlist</CardTitle>
      </CardHeader>
      <CardContent>
        <WishlistTable products={products} removeProduct={removeProduct} updateQuantity={updateQuantity} />
      </CardContent>
      <CardFooter className="flex flex-col items-end space-y-4">
        <WishlistSummary subtotal={subtotal} taxes={taxes} grandTotal={grandTotal} />
        <Button size="lg" className="w-full sm:w-auto">
          Proceed to Checkout
        </Button>
      </CardFooter>
    </Card>
  )
}
