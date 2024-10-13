import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const ProductCard = ({ product }) => {
    return (
        <Card key={product.id} className="shadow-lg">
            <CardHeader>
                <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg object-cover lg:h-[600px] md:h-[500px] sm:h-[400px] w-full"
                />
                <div className="flex flex-col items-center w-full rounded-lg bg-transparent">
                <Link href={`/products/${product.id}`} className="-top-6 relative w-fit shadow-md shadow-white rounded-lg">
                    <Button className="w-full">Show Options</Button>
                </Link>
                </div>
            </CardHeader>
            <CardFooter>
                <div className="w-full flex justify-between items-center -mt-6">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <p className="text-lg font-semibold">{product.price} €</p>
                </div>
            </CardFooter>
        </Card>
    );
}