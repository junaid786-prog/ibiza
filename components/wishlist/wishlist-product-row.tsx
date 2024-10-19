// WishlistProductRow.tsx
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { TableCell, TableRow } from "@/components/ui/table"
import QuantitySelect from "./quantity-select"
import Image from "next/image"
interface Product {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface WishlistProductRowProps {
  product: Product
  // eslint-disable-next-line no-unused-vars
  removeProduct: (id: number) => void
  // eslint-disable-next-line no-unused-vars
  updateQuantity: (id: number, quantity: number) => void
}

export default function WishlistProductRow({ product, removeProduct, updateQuantity }: WishlistProductRowProps) {
  return (
    <TableRow>
      <TableCell className="lg:p-4 md:p-2 sm:p-0 p-2">
        <div className="w-12 h-12 bg-gray-200 rounded">
            <Image src={product.image} alt={product.name} width={48} height={48} />
        </div>
      </TableCell>
      <TableCell className="font-medium">{product.name}</TableCell>
      <TableCell className="lg:p-4 md:p-2 sm:p-0 p-2">${product.price.toFixed(2)}</TableCell>
      <TableCell className="lg:p-4 md:p-2 sm:p-0 p-2">
        <QuantitySelect
          value={product.quantity}
          onChange={(quantity) => updateQuantity(product.id, quantity)}
        />
      </TableCell>
      <TableCell className="lg:p-4 md:p-2 sm:p-0 p-2 sm:block hidden">${(product.price * product.quantity).toFixed(2)}</TableCell>
      <TableCell className="lg:p-4 md:p-2 sm:p-0 p-2">
        <Button variant="destructive" size="sm" onClick={() => removeProduct(product.id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  )
}
