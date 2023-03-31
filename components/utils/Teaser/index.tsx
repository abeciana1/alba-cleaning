import React from 'react'
import { TeaserI } from '@/interfaces'
import cx from 'classnames'

export const TeaserWithIcon: React.FC<TeaserI> = ({
    title,
    body,
    icon,
    iconClass,
    teaserClass = ""
}) => {

    const Icon = icon as React.ElementType

    return (
        <div className={cx("bg-background p-3 text-charcoal shadow-md", {
            [teaserClass]: teaserClass
        })}>
            <div className="flex items-center">
                <Icon
                    fill="background"
                    addClass={iconClass}
                />
                <span className="pl-5 text-lg font-medium">{title}</span>
            </div>
            <div className="pt-2 text-lg">
                {body}
            </div>
        </div>
    )
}

export const TeaserWithImg: React.FC<TeaserI> = ({
    title,
    body,
    icon,
    iconClass,
    teaserClass = ""
}) => {

    return (
        <div className={cx("bg-background p-3 text-charcoal shadow-md", {
            [teaserClass]: teaserClass
        })}>
            <div className="flex items-center">
                <Icon
                    fill="background"
                    addClass={iconClass}
                />
                <span className="pl-5 text-lg font-medium">{title}</span>
            </div>
            <div className="pt-2 text-lg">
                {body}
            </div>
        </div>
    )
}