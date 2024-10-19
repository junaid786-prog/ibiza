/* eslint-disable no-unused-vars */
// WishlistTable.tsx
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import WishlistProductRow from "./wishlist-product-row"

interface Product {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface WishlistTableProps {
  products: Product[]
  removeProduct: (id: number) => void // This function is passed to WishlistProductRow
  updateQuantity: (id: number, quantity: number) => void // This function is passed to WishlistProductRow
}

export default function WishlistTable({ products, removeProduct, updateQuantity }: WishlistTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="sm:block hidden py-3">Total</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(product => (
            <WishlistProductRow
              key={product.id}
              product={product}
              removeProduct={removeProduct}
              updateQuantity={updateQuantity}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
