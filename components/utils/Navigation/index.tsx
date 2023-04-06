import Image from 'next/image'
import { PageMargin } from '@/components/layouts'
import { Dropdown } from '@/components/utils/Dropdown'
import { DropdownOption } from '@/components/utils/Dropdown/DropdownOption'
import callIcon from '@/public/call'
import emailIcon from '@/public/email'

export const NavBar = () => {

    return (
        <nav className="bg-chineseviolet-100 px-5 md:px-12 flex flex-row items-center justify-between">
            <Image
                src="/Logo without byline.webp"
                alt="Alba Cleaning Services logo"
                width={1186}
                height={438}
                className="w-32 lg:w-44"
            />
            <Dropdown>
                <DropdownOption
                    name="Call us"
                    href="tel:123-456-7890"
                    icon={callIcon}
                    iconClass="w-14 h-14 bg-dishycoral p-3 rounded-xl"
                    description="Give us a call during normal business hours and make an appointment or ask questions!"
                />
                <DropdownOption
                    name="Email us"
                    href="tel:123-456-7890"
                    icon={emailIcon}
                    iconClass="w-14 h-14 bg-shadowblue p-3 rounded-xl"
                    description="Send us any questions you may have or make an appointment!"
                />
            </Dropdown>
        </nav>
    )
}