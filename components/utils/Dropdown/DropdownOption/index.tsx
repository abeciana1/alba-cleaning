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
            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
            <div className="shrink-0 items-center justify-center">
            <Icon
                aria-hidden="true"
                addClass={iconClass}
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