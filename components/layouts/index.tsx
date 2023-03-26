import React from 'react'
import { PropChildI } from '@/types'

export const PageMargin: React.FC<PropChildI> = ({ children }) => {
    return (
        <section className="mx-12">
            {children}
        </section>
    )
}