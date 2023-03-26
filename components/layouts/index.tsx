import React from 'react'
import { PropChildI } from '@/types'

export const PageMargin: React.FC<PropChildI> = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    )
}