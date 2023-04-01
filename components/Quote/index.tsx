import React from 'react'
import { QuoteI } from '@/interfaces'

export const TipQuote: React.FC<QuoteI> = ({ quote }) => {

    return (
        <section className="bg-background rounded-xl shadow-md">
            <blockquote className="text-xl p-10 text-center">
                { quote }
            </blockquote>
        </section>
    )
}