import React from 'react'
import { SectionTagI } from '@/interfaces'
import cx from 'classnames'

export const SectionTag: React.FC<SectionTagI> = ({
    text,
    color
}) => {

    return (
        <div>
            <span>
                {text}
            </span>
        </div>
    )
}