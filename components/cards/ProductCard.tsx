import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

export const ProductCard= ({product}: {product: any}) => {
    return (
        <div className="w-full mx-auto">
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 z-10 m-2">
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-100">New Arrival</Badge>
                </div>
                <Image src={product.image} alt="Elegant Summer Dress" width={400} height={800} layout="responsive" objectFit="cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{product.shortDescription}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-black font-bold text-xl">$79.99</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">$99.99</span>
                    </div>
                    <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
                    </div>
                    <div className="mt-4">
                        <Button className="w-full hover:bg-pink-700 text-white">
                            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}