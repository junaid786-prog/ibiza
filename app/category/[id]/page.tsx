'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardFooter } from '@/components/ui/card';
import {categories} from "@/data/dummy-data";

const CategoryDetail = () => {
    const { id } = useParams();
    const router = useRouter();

    let category = categories.find((category) => category.id === parseInt(
        id
    ));

    return (
        <div className="container mx-auto px-8 py-8">
            <h1 className="text-4xl font-bold mb-8">{category?.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category?.products?.map((product) => (
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

export default CategoryDetail;