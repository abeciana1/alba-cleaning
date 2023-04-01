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
        <div className={cx("bg-background p-3 text-charcoal shadow-md rounded-xl", {
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
    teaserClass = "",
    color
}) => {

    return (
        <div className={cx("bg-background p-3 text-charcoal shadow-md h-44 rounded-xl", {
            [teaserClass]: teaserClass
        })}>
            <div className="flex items-center">
                <Image
                    src={image.url}
                    alt={image.alt}
                    height={image.height}
                    width={image.width}
                    className={cx("w-14 h-14 p-3 rounded-xl", {
                        ['bg-skyblue']: color === 'skyblue',
                        ['bg-altPink']: color === 'mintgreen',
                        ['bg-chineseviolet']: color === 'chineseviolet',
                        ['bg-shadowblue']: color === 'shadowblue',
                        ['bg-dishycoral']: color === 'dishycoral',
                        ['bg-charcoal']: color === 'charcoal'
                    })}
                />
                <span className="pl-5 text-lg font-medium">{title}</span>
            </div>
            <div className="pt-2 text-lg">
                {body}
            </div>
        </div>
    )
}