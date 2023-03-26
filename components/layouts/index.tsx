import React from 'react'
import { PropChild } from '@/types'

export const PageMargin: React.FC<PropChild> = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    )
}