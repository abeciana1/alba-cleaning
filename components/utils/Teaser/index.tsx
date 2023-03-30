import React from 'react'
import { TeaserI } from '@/interfaces'

export const Teaser: React.FC<TeaserI> = ({
    title,
    body
}) => {

    return (
        <div className="bg-background">
            <div className="">
                {title}
            </div>
            {body}
        </div>
    )
}