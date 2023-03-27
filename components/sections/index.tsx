import React from 'react'
import { HeroSectionI } from '@/interfaces'
import { SliderImage } from '@/types'
import { PageMargin } from '@/components/layouts'
import ImageSlider from "react-image-comparison-slider";

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