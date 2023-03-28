import React from 'react'
import { QuoteI } from '@/interfaces'

export const TipQuote: React.FC<QuoteI> = ({ quote }) => {

    return (
        <div>
            { quote }
        </div>
    )
}