import React from 'react'
import { TeaserI, IconI } from '@/interfaces'

export const Teaser: React.FC<TeaserI> = ({
    title,
    body,
    icon,
    iconClass
}) => {

    const Icon = icon as React.ElementType

    return (
        <div className="bg-background p-3 text-charcoal">
            <div className="flex items-center">
                <Icon
                    fill="background"
                    addClass={iconClass}
                />
                <span className="pl-5 text-lg font-medium">{title}</span>
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}