import Link from "next/link"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import CartSheet from "@/components/sections/cart-sheet"
import {brand} from "@/constants/strings";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-4 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="flex flex-col gap-4">
                    <Link href="#" className="text-lg font-medium font-serif">
                      Shop
                    </Link>
                    <Link href="#" className="text-lg font-medium font-serif">
                      About
                    </Link>
                    <Link href="#" className="text-lg font-medium font-serif">
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </Button>
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold font-serif">{brand}</span>
            </Link>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <Link href="/collections" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-5 w-5" />
            </Button>
            <CartSheet />
          </div>
        </div>
      </div>
    </header>
  )
}