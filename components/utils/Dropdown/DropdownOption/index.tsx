import React from 'react'
import { DropdownOptionI } from '@/interfaces'

export const DropdownOption: React.FC<DropdownOptionI> = ({
    name,
    href,
    icon,
    iconClass,
    description
}) => {

    const Icon = icon as React.ElementType

    return (
        <a
            key={name}
            href={href}
            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
            <Icon
                aria-hidden="true"
                iconClass={iconClass}
            />
            </div>
            <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">
                {name}
            </p>
            <p className="text-sm text-gray-500">
                {description}
            </p>
            </div>
        </a>
    )
}