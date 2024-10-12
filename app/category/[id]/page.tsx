'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardFooter } from '@/components/ui/card';

const CollectionDetail = () => {
    const { id } = useParams();
    const router = useRouter();
    // dummy data
    const [collection, setCollection] = useState({
        name: 'Summer Collection',
        description: 'Exclusive summer collection featuring handmade designs.',
        products: [
            {
                id: 1,
                name: 'Blusa Bolena Naranja',
                price: 890,
                image: '/collection-1.jpeg?height=600&width=600',
            },
            {
                id: 2,
                name: 'Vestido Ibiza',
                price: 1200,
                image: '/collection-2.jpeg?height=600&width=600',
            },
        ],

    });

    return (
        <div className="container mx-auto px-8 py-8">
            <h1 className="text-4xl font-bold mb-8">{collection.name}</h1>
            <p className="mb-8">{collection.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collection.products.map((product) => (
                    <Card key={product.id} className="shadow-lg">
                        <CardHeader>
                            {/* NAME */}
                            <div className="flex justify-between items-center my-2">

                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            {/* PRICE */}
                            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                            </div>

                                {/* IMAGE */}
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </CardHeader>
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
    );
};

export default CollectionDetail;