import React from 'react'
import { TopHeroSectionI, HeroSectionI } from '@/interfaces'
import { PageMargin } from '@/components/layouts'
// import { ImageCompare } from '@/components/ImageCompare'
import Image from 'next/image'

export const TopHeroSection: React.FC<TopHeroSectionI> = ({
    title,
    body,
    image
}) => {
    // className="top-hero-section bg-bottom"
    return (
        <section className="bg-altYellow">
            <PageMargin>
                <section className="flex flex-col md:flex-row gap-5 md:mb-20 items-center">
                    <section className="md:w-11/12 mx-10">
                        <h1 className=" text-charcoal">{title}</h1>
                        <div className="w-3/4 text-2xl text-charcoal">{ body }</div>
                    </section>
                    <section>
                        <Image
                            src={image.image}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                        />
                    </section>
                </section>
            </PageMargin>
        </section>
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