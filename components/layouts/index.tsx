import React from 'react'
import { PropChildI } from '@/interfaces'

export const PageMargin: React.FC<PropChildI> = ({ children }) => {
    return (
        <section className="mx-12">
            {children}
        </section>
    )
}