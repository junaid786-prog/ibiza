import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuantitySelectProps {
  value: number
  // eslint-disable-next-line no-unused-vars
  onChange: (value: number) => void
}

export default function QuantitySelect({ value, onChange }: QuantitySelectProps) {
  return (
    <Select value={value.toString()} onValueChange={(val) => onChange(parseInt(val))}>
      <SelectTrigger className="w-[80px]">
        <SelectValue>{value}</SelectValue> {/* Use 'value' here */}
      </SelectTrigger>
      <SelectContent>
        {[1, 2, 3, 4, 5].map((num) => (
          <SelectItem key={num} value={num.toString()}>
            {num}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
