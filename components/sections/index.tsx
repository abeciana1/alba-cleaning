import React from 'react'
import { HeroSectionI } from '@/interfaces'
import { PageMargin } from '@/components/layouts'

export const HeroSection: React.FC<HeroSectionI> = ({
    title,
    body,
    images
}) => {

    return (
        <PageMargin>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <section>
                    <h1 className="text-foreground">{title}</h1>
                    <div className="text-xl">{ body }</div>
                </section>
            </section>
        </PageMargin>
    )
}