import React from 'react'
import { HeroSectionI } from '@/interfaces'
import { PageMargin } from '@/components/layouts'
import { ImageCompare } from '@/components/ImageCompare'

export const HeroSection: React.FC<HeroSectionI> = ({
    title,
    body,
    images
}) => {

    return (
        <PageMargin>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 my-20">
                <section className="md:w-11/12">
                    <h1 className="text-foreground">{title}</h1>
                    <div className="text-xl">{ body }</div>
                </section>
                <section>
                    <ImageCompare
                        images={images}
                    />
                </section>
            </section>
        </PageMargin>
    )
}