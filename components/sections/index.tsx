import React from 'react'
import { HeroSectionWithComparisonI, HeroSectionI } from '@/interfaces'
import { PageMargin } from '@/components/layouts'
// import { ImageCompare } from '@/components/ImageCompare'
import Image from 'next/image'

export const HeroSectionWithComparison: React.FC<HeroSectionWithComparisonI> = ({
    title,
    body
}) => {
    // className="top-hero-section bg-bottom"
    return (
        <section>
            <PageMargin>
                <section className="flex flex-col md:flex-row gap-5 md:mb-20 items-center">
                    <section className="md:w-11/12 mx-10">
                        <h1 className=" text-dishycoral">{title}</h1>
                        <div className="w-3/4 text-2xl text-dishycoral">{ body }</div>
                    </section>
                    <section className="w-4/5">
                        <Image
                            src="/cleaner-person.png"
                            alt="Cleaning person"
                            width={1146}
                            height={1333}
                        />
                        {/* <Image
                            src="/cleaning-person-products.jpg"
                            alt="Cleaning person with products"
                            width={2000}
                            height={1333}
                            className="w-5/6 mx-auto box-shadow-2xl shadow-altPink mb-5 rounded-3xl"
                        /> */}
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