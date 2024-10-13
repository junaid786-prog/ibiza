import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link";

export default function CollectionCard({collection}) {
    return (
        <Card className="overflow-hidden">
            <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-2/5">
                    <img
                        alt="Summer Collection"
                        className="w-full h-48 sm:h-full object-cover"
                        height="200"
                        src={collection?.image}
                        style={{
                            aspectRatio: "300/200",
                            objectFit: "cover",
                        }}
                        width="300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <CardContent className="flex flex-col justify-between p-6 sm:w-3/5">
                    <div>


                    <div>
                        <h3 className="text-4xl font-semibold text-primary mb-2">{collection?.name}</h3>
                        <p className="text-xl text-muted-foreground mb-4">
                            {collection?.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                    {
                        collection?.products?.slice(0,2).map((product) => (
                            <div key={product?.id} className="flex rounded-lg items-center justify-between p-2 bg-gray-200">
                                {/*image*/}
                                <div className={"h-full p-2 flex flex-col justify-between"}>

                                <p className="text-xl font-semibold">{product?.name}</p>
                                <p className="text-lg font-semibold text-primary">${product?.price}</p>
                                </div>
                                <img
                                    alt={product?.name}
                                    className="w-24 h-32 object-cover rounded-lg"
                                    height="64"
                                    src={product?.image}
                                    width="64"
                                />
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