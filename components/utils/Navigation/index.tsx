import Image from 'next/image'
import { PageMargin } from '@/components/layouts'

export const NavBar = () => {

    return (
        <nav className="bg-chineseviolet-100 px-2 md:px-12">
            <Image
                src="/Logo without byline.webp"
                alt="Alba Cleaning Services logo"
                width={1186}
                height={438}
                className="w-44"
            />
        </nav>
    )
}