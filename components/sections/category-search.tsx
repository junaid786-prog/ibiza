import Link from "next/link"

const categories = [
  { name: "Home Decor", image: "/dresses/dress-1.jpeg?height=300&width=300", link: "/category/home-decor" },
  { name: "Textiles", image: "/dresses/dress-2.jpeg?height=300&width=300", link: "/category/textiles" },
  { name: "Ceramics", image: "/dresses/dress-3.jpeg?height=300&width=300", link: "/category/ceramics" },
  { name: "Jewelry", image: "/dresses/dress-4.jpeg?height=300&width=300", link: "/category/jewelry" },
]

export default function CategorySearch() {
  return (
    <section className="py-16 bg-gray-50 font-serif">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Search for Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.link} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-50">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}