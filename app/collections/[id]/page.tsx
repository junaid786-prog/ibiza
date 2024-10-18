'use client';

import { useParams } from 'next/navigation';
import {collections} from "@/data/dummy-data";
import ProductCard from '@/components/cards/ProductCard';

const CollectionDetail = () => {
  const params = useParams();
    const collection = collections.find((collection) => collection.id === Number(params?.id));

  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{collection?.name}</h1>
        <p className="mb-8">{collection?.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
  );
};

export default CollectionDetail;