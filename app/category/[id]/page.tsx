"use client";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {Button} from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card"

const CategoryPage = () => {
    const router = useRouter()
    const { id } = router.query
    const [products, setProducts] = useState([])

    useEffect(() => {
        // Fetch products for the category (replace with actual data fetching)
        const fetchProducts = async () => {
            const response = await fetch(`/api/categories/${id}/products`)
            const data = await response.json()
            setProducts(data)
        }

        if (id) {
            fetchProducts()
        }
    }, [id])

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Ibiza's - Category {id}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Card key={product.id} className="shadow-lg">
                        <CardHeader>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </CardHeader>
                        {/*<CardBody>*/}
                        {/*    <h2 className="text-xl font-semibold">{product.name}</h2>*/}
                        {/*    <p className="text-lg font-medium text-gray-700">${product.price.toFixed(2)}</p>*/}
                        {/*</CardBody>*/}
                        <CardFooter>
                            <Button
                                className="w-full"
                                onClick={() => router.push(`/product/${product.id}`)}
                            >
                                View Details
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CategoryPage