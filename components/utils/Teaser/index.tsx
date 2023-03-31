import React from 'react'
import { TeaserI } from '@/interfaces'
import cx from 'classnames'

export const Teaser: React.FC<TeaserI> = ({
    title,
    body,
    icon,
    iconClass,
    teaserClass = ""
}) => {

    const Icon = icon as React.ElementType

    return (
        <div className={cx("bg-background p-3 text-charcoal", {
            [teaserClass]: teaserClass
        })}>
            <div className="flex items-center">
                <Icon
                    fill="background"
                    addClass={iconClass}
                />
                <span className="pl-5 text-lg font-medium">{title}</span>
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}