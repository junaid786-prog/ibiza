export const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center">
            <h3 className="text-2xl text-start mb-2 capitalize">{subtitle}</h3>
            <h2 className="text-6xl font-normal text-start mb-8">{title}</h2>
        </div>
    )
}