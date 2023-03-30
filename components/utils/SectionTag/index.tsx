import React from 'react'
import { SectionTagI } from '@/interfaces'
import cx from 'classnames'

export const SectionTag: React.FC<SectionTagI> = ({
    text,
    color
}) => {

    return (
        <div className={cx("w-24 text-center rounded-full px-2 py-0.5", {
            ['bg-dishycoral-100']: color === "dishycoral"
        })}>
            <span className={cx("text-lg", {
                ['text-dishycoral-500']: color === "dishycoral"
            })}>
                {text}
            </span>
        </div>
    )
}