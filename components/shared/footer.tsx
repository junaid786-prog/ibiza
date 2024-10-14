'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {brand} from "@/constants/strings";
import {categories} from "@/data/dummy-data";

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter signup
    setEmail('')
    alert('Thank you for signing up!')
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About {brand}</h3>
            <p className="text-sm text-gray-400">
              {brand} Collection brings you handcrafted artisanal goods from around the world,
              supporting fair trade and sustainable practices.
            </p>
          </div>
          <div>
            <Accordion type="single" className="w-full">
              <AccordionItem value="quick-links">
                <AccordionTrigger>Quick Links</AccordionTrigger>
                <AccordionContent>
                  <nav className="flex flex-col space-y-2">
                    <Link href="/shop" className="hover:text-gray-300 transition-colors">Shop All</Link>
                    <Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
                    <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                    <Link href="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
                  </nav>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" className="w-full">
              <AccordionItem value="categories">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  <nav className="flex flex-col space-y-2">
                    {
                      categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.id}`} className="hover:text-gray-300 transition-colors">{category.name}</Link>
                      ))
                    }
                  </nav>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full">
                Subscribe to Newsletter
              </Button>
            </form>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Twitter />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {brand} Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}