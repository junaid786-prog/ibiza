import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Image from "next/image";

const products = [
    { id: '1', name: 'Product 1', description: 'Description for product 1', imageUrl: '/images/product1.jpg', label: 'New' },
    { id: '2', name: 'Product 2', description: 'Description for product 2', imageUrl: '/images/product2.jpg', label: 'Sale' },
    { id: '3', name: 'Product 3', description: 'Description for product 3', imageUrl: '/images/product3.jpg', label: 'Popular' },
];

const ProductsPage = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold font-serif text-center mb-12">Nuestros Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                            <Card>
                                <CardHeader>
                                    <Label>{product.label}</Label>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardDescription>{product.description}</CardDescription>
                                </CardContent>
                                <Image src={
                                    product.imageUrl
                                } alt={
                                    product.name
                                } width={
                                    300
                                } height={
                                    300
                                } className="object-cover w-full h-full rounded-md"/>
                            </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;