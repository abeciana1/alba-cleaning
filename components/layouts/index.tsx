import React from 'react'
import { PageMarginI } from '@/interfaces'
import cx from 'classnames'

export const PageMargin: React.FC<PageMarginI> = ({ children, addClass = "" }) => {
    return (
        <section className={cx("px-2 md:px-12", {
            [addClass]: addClass
        })}>
            {children}
        </section>
    )
}