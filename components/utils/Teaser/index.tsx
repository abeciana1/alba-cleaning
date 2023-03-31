import React from 'react'
import { TeaserIconI, TeaserImgI } from '@/interfaces'
import cx from 'classnames'
import Image from 'next/image'

export const TeaserWithIcon: React.FC<TeaserIconI> = ({
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

export const TeaserWithImg: React.FC<TeaserImgI> = ({
    title,
    body,
    image,
    imageClass,
    teaserClass = ""
}) => {

    return (
        <div className={cx("bg-background p-3 text-charcoal shadow-md", {
            [teaserClass]: teaserClass
        })}>
            <div className="flex items-center">
                <Image
                    src={image.image}
                    alt={image.alt}
                    height={image.height}
                    width={image.width}
                    className={imageClass}
                />
                <span className="pl-5 text-lg font-medium">{title}</span>
            </div>
            <div className="pt-2 text-lg">
                {body}
            </div>
        </div>
    )
}