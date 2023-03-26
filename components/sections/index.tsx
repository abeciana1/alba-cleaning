import React from 'react'
import { HeroSectionI } from '@/types'
import { PageMargin } from '@/components/layouts'

export const HeroSection: React.FC<HeroSectionI> = ({
    title,
    body
}) => {

    return (
        <PageMargin>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <section>
                    <h1 className="text-foreground">{title}</h1>
                    <div className="text-xl">{ body }</div>
                </section>
                <section></section>
            </section>
        </PageMargin>
    )
}