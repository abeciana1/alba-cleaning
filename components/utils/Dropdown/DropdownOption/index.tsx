import React from 'react'

export const DropdownOption = () => {

    return (
        <a
            key={item.name}
            href={item.href}
            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
            <item.icon aria-hidden="true" />
            </div>
            <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">
                {item.name}
            </p>
            <p className="text-sm text-gray-500">
                {item.description}
            </p>
            </div>
        </a>
    )
}