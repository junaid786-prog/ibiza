'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingBag, X, Plus, Minus } from "lucide-react"

// This would typically come from your global state management
const initialCartItems = [
  { id: 1, name: "Handwoven Basket", price: 59.99, quantity: 1, image: "/dresses/dress-1.jpeg" },
  { id: 2, name: "Ceramic Vase", price: 89.99, quantity: 2, image: "/dresses/dress-2.jpeg" },
]

export default function CartSheet() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, increment: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + increment) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col flex-1 h-grow">
          <div className="flex-grow overflow-auto">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center py-4 border-b">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, -1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, -item.quantity)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Total</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}