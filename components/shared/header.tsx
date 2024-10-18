export default function Heading(
    { title, subtitle }: { title: string, subtitle?: string }
){
    return (
        <div className="text-center">
            <h3 className="lg:text-2xl md:text-2xl sm:text-xl text-start mb-2 sm:mb-1 capitalize">{subtitle}</h3>
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-normal text-start mb-8">{title}</h2>
        </div>
    )
}