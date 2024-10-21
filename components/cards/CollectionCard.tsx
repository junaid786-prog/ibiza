"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link";
import Image from "next/image";
import {brand} from "@/constants/strings";

export default function CollectionCard({ collection }: { collection: any }) {
    return (
        <Card className="overflow-hidden">
            <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-2/5">
                    <Image src={collection?.image} alt={collection?.name} width={300} height={200} className="object-cover w-full h-48 sm:h-full"/>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <CardContent className="flex flex-col justify-between p-6 sm:w-3/5">
                    <div>
                    <div>
                        <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-primary mb-2">{collection?.name}</h3>
                        <p className="text-xl text-muted-foreground mb-4">
                            {collection?.description}
                        </p>
                    </div>
                    {/*  any section of your choice  */}
                    <div className="flex items-center justify-between">
                        <p className="text-lg mb-4">{brand} has the best collection of {collection?.name} for you.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 lg:space-x-2 md:grid-cols-1 my-2">
                    {
                        collection?.products?.slice(0,2)?.map((product: {
                            image: string;
                            price: any;
                            name: any;
                            id: React.Key | null | undefined;
                            product:any}) => (
                            <div key={product?.id} className="flex rounded-lg items-center justify-between p-2 bg-gray-200 m-1">
                                {/*image*/}
                                <div className={"h-full p-2 flex flex-col justify-between"}>

                                <p className="text-xl font-semibold">{product?.name}</p>
                                <p className="text-lg font-semibold text-primary">${product?.price}</p>
                                </div>
                                <Image src={product?.image} alt={product?.name} width={64} height={64} className=" w-24 h-32 rounded-lg"/>
                            </div>
                        ))
                    }
                    </div>
                    </div>
                    <Button className="w-full sm:w-auto" variant="outline">
                        <Link href={`/collections/${collection?.id}`} className={"flex items-center"}>
                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        </Button>
                </CardContent>
            </div>
        </Card>
    )
}