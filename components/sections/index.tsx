import React from 'react'
import { HeroSectionWithComparisonI, HeroSectionI } from '@/interfaces'
import { PageMargin } from '@/components/layouts'
import { ImageCompare } from '@/components/ImageCompare'
import Image from 'next/image'

export const HeroSectionWithComparison: React.FC<HeroSectionWithComparisonI> = ({
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

export const HeroSection: React.FC<HeroSectionI> = ({
    title,
    body,
    image
}) => {

    return (
        <PageMargin>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 my-20">
                <section className="md:w-11/12">
                    <h3 className="text-foreground">{title}</h3>
                    <div className="text-xl">{ body }</div>
                </section>
                <section>
                    <Image
                        src={image.image}
                        alt={image.alt}
                        height={image.height}
                        width={image.width}
                    />
                </section>
            </section>
        </PageMargin>
    )
}

export const HeroSectionReverse: React.FC<HeroSectionI> = ({
    title,
    body,
    image
}) => {

    return (
        <PageMargin>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 my-20">
                <section>
                    <Image
                        src={image.image}
                        alt={image.alt}
                        height={image.height}
                        width={image.width}
                    />
                </section>
                <section className="md:w-11/12">
                    <h3 className="text-foreground">{title}</h3>
                    <div className="text-xl">{ body }</div>
                </section>
            </section>
        </PageMargin>
    )
}