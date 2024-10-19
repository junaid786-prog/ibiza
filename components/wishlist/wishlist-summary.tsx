// WishlistSummary.tsx
interface WishlistSummaryProps {
    subtotal: number
    taxes: number
    grandTotal: number
  }
  
  export default function WishlistSummary({ subtotal, taxes, grandTotal }: WishlistSummaryProps) {
    return (
      <div className="text-right space-y-2">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Taxes (10%): ${taxes.toFixed(2)}</p>
        <p className="font-bold text-lg">Grand Total: ${grandTotal.toFixed(2)}</p>
      </div>
    )
  }
  