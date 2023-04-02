import Image from 'next/image'
import { PageMargin } from '@/components/layouts'
import { Dropdown } from '@/components/utils/Dropdown'

export const NavBar = () => {

    return (
        <nav className="bg-chineseviolet-100 px-5 md:px-12 flex flex-row items-center">
            <Image
                src="/Logo without byline.webp"
                alt="Alba Cleaning Services logo"
                width={1186}
                height={438}
                className="w-32 lg:w-44"
            />
            <Dropdown/>
        </nav>
    )
}