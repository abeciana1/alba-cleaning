import React from 'react'
import { QuoteI } from '@/interfaces'

export const TipQuote: React.FC<QuoteI> = ({ quote }) => {

    return (
        <section className="bg-background mx-20 rounded-xl shadow-md">
            <blockquote className="text-xl p-10">
                { quote }
            </blockquote>
        </section>
    )
}