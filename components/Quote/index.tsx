import React from 'react'
import { QuoteI } from '@/interfaces'

export const TipQuote: React.FC<QuoteI> = ({ quote }) => {

    return (
        <section className="bg-background mx-20">
            <blockquote className="text-2xl py-20">
                { quote }
            </blockquote>
        </section>
    )
}