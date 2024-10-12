"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CartSheet from '@/components/sections/cart-sheet';
import { brand } from '@/constants/strings';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar';
import { collections } from '@/data/dummy-data';
import SearchBar from './search-bar';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
      <header className="border-b">
        {/* Top sale status bar */}
        <div className="bg-yellow-200 text-black text-center py-1">
          <span>Free shipping on orders over $100</span>
        </div>
        {/* Sliding top search bar */}
        <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu */}
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
                <span className="text-4xl font-extrabold">{brand}</span>
              </Link>
            </div>
            {/* Main navbar */}
            <nav className="hidden lg:flex space-x-8">
              <Menubar>
                {/* ABOUT */}
                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-medium hover:text-gray-600 transition-colors">
                    <Link href="/about">About {brand}</Link>
                  </MenubarTrigger>
                </MenubarMenu>
                {/* COLLECTIONS */}
                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-medium hover:text-gray-600 transition-colors">
                    Collections
                  </MenubarTrigger>
                  <MenubarContent>
                    {collections.map((collection) => (
                        <MenubarItem key={collection.id}>
                          <Link href={`/collections/${collection.id}`}>{collection.name}</Link>
                        </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-medium hover:text-gray-600 transition-colors">
                    Clothes
                  </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-medium hover:text-gray-600 transition-colors">
                    Blazers
                  </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-medium hover:text-gray-600 transition-colors">
                    See all
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <Link href="/archive">ARCHIVE SALE</Link>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-medium hover:text-gray-600 transition-colors">
                    Custom Design
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </nav>
            {/* Right action buttons */}
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
              <CartSheet />
            </div>
          </div>
        </div>
      </header>
  );
}