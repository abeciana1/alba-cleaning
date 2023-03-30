import React from 'react'
import { SectionTagI } from '@/interfaces'
import cx from 'classnames'

export const SectionTag: React.FC<SectionTagI> = ({
    text,
    color
}) => {

    return (
        <div className={cx("w-20 text-center rounded-full px-1 py-0.5", {
            ['bg-dishycoral-100']: color === "dishycoral"
        })}>
            <span className={cx("text-md", {
                ['text-dishycoral-500']: color === "dishycoral"
            })}>
                {text}
            </span>
        </div>
    )
}