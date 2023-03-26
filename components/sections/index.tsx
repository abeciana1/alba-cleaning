import React from 'react'
import { HeroSectionI } from '@/types'

export const HeroSection: React.FC<HeroSectionI> = ({
    title,
    body
}) => {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <section>
                <h1 className="text-foreground">{title}</h1>
                <div className="text-xl">{ body }</div>
            </section>
            <section></section>
        </section>
    )
}