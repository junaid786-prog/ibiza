import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Newsletter() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-[#333333]">Stay Connected</h2>
                    <p className="text-[#666666] mb-8">Join our community and be the first to know about new collections, exclusive offers, and Ibiza-inspired content.</p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <Input type="email" placeholder="Enter your email" className="flex-grow bg-white" />
                        <Button type="submit" className="bg-[#a0522d] text-white hover:bg-[#8b4513]">Subscribe</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}