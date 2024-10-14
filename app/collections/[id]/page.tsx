'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import {collections} from "@/data/dummy-data";

const CollectionDetail = () => {
  const params = useParams();
    const collection = collections.find((collection) => collection.id === Number(params?.id));

  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{collection?.name}</h1>
        <p className="mb-8">{collection?.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection?.products?.map((product) => (
              <Card key={product.id} className="shadow-lg">
                <CardHeader>
                  <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full rounded-md"
                  />
                </CardHeader>
                <div className="px-6 py-2">
                    <CardTitle>{product.name}</CardTitle>
                    <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                </div>
                <CardFooter>
                  <Link href={`/products/${product.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
          ))}
        </div>
      </div>
  );
};

export default CollectionDetail;