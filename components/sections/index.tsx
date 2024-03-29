import React from 'react'
import { TopHeroSectionI, HeroSectionI, PropChildI } from '@/interfaces'
import { PageMargin } from '@/components/layouts'
import Image from 'next/image'

export const TopHeroSection: React.FC<TopHeroSectionI> = ({
    title,
    body,
    image
}) => {

    return (
        <section className="bg-chineseviolet-100 h-fit">
            <PageMargin>
                <section className="flex flex-col md:flex-row pt-10 md:py-0 gap-5 items-center">
                    <section>
                        <h1 className="text-charcoal text-4xl lg:text-5xl">{title}</h1>
                        <div className="lg:w-3/4 text-2xl lg:text-3xl text-charcoal">{ body }</div>
                    </section>
                    <section className="h-10/12">
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
            <section className="grid grid-cols-1 md:grid-cols-2 pt-10 md:py-0 gap-5">
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

export const TwoColGrid: React.FC<PropChildI> = ({
    children
}) => {
    
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-20 md:py-0 gap-10 lg:gap-20 items-center">
            { children }
        </section>
    )
}

export const ThreeColGrid: React.FC<PropChildI> = ({
    children
}) => {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pt-20 md:py-0 gap-10 lg:gap-20 items-center">
            { children }
        </section>
    )
}

export const FourColGrid: React.FC<PropChildI> = ({
    children
}) => {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 md:py-20 md:py-0 gap-10 items-center">
            { children }
        </section>
    )
}