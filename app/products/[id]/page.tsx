"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetail() {
  const [mainImage, setMainImage] = useState("/dresses/dress-1.jpeg")
  const [selectedSize, setSelectedSize] = useState("m")

  const thumbnails = [
    "/dresses/dress-1.jpeg",
    "/dresses/dress-2.jpeg",
    "/dresses/dress-3.jpeg",
    "/dresses/dress-4.jpeg",
  ]

  return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                  src={mainImage}
                  alt="Main product image"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {thumbnails.map((thumb, index) => (
                  <button
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-md bg-gray-100"
                      onClick={() => setMainImage(thumb)}
                  >
                    <Image
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-center object-cover"
                    />
                  </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Elegant Summer Dress</h1>
              <div className="mt-2 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">(121 reviews)</span>
              </div>
            </div>

            <div className="text-2xl font-bold">$129.99</div>

            <p className="text-gray-600">
              A versatile and stylish dress perfect for summer occasions. Made from lightweight, breathable fabric with a
              flattering silhouette that suits all body types.
            </p>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="mt-2">
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-8 lg:grid-cols-4">
                  {["xs", "s", "m", "l", "xl"].map((size) => (
                      <Label
                          key={size}
                          className={`flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none ${
                              selectedSize === size
                                  ? "border-transparent bg-primary text-primary-foreground shadow-sm"
                                  : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                          }`}
                      >
                        <RadioGroupItem value={size} className="sr-only" />
                        {size}
                      </Label>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1">Add to Cart</Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="text-sm text-gray-600">
                This elegant summer dress is designed to keep you cool and stylish. The lightweight fabric drapes
                beautifully, creating a flattering silhouette for all body types. Perfect for beach outings, garden
                parties, or casual day wear.
              </TabsContent>
              <TabsContent value="features" className="text-sm text-gray-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Breathable, lightweight fabric</li>
                  <li>Adjustable waist tie</li>
                  <li>Side pockets</li>
                  <li>UV protection</li>
                  <li>Machine washable</li>
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="text-sm text-gray-600">
                Free standard shipping on orders over $100. Express and international shipping options available at
                checkout. Please allow 1-3 business days for processing.
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                        src={
                            item % 2 === 0
                                ? "/dresses/dress-2.jpeg"
                                : "/dresses/dress-3.jpeg"
                        }
                        alt={`Related product ${item}`}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Beautiful Dress
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$99.99</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}