import React from 'react'
import { TeaserI, IconI } from '@/interfaces'

export const Teaser: React.FC<TeaserI> = ({
    title,
    body,
    icon
}) => {

    const Icon = icon as React.ElementType

    return (
        <div className="bg-background">
            <div className="">
                <Icon
                    fill="bg-background"
                    addClass="bg-transparent"
                />
                {title}
            </div>
            {body}
        </div>
    )
}