import React, { use, useEffect, useState } from 'react'
import { ImageCompareI } from '@/interfaces'
import Image from 'next/image'

export const ImageCompare: React.FC<ImageCompareI> = ({
    images
}) => {

    const [currentIdx, setIdx] = useState(0)
    const [ fade, setFade ] = useState("fade-in")
    
    useEffect(() => {
        if (currentIdx === 0) {
            setTimeout(() => {
                setIdx(1)
            }, 1200)
        } else {
            setTimeout(() => {
                setIdx(0)
            }, 1200)
        }
    }, [currentIdx])

    return (
        <>
            {images &&
                <Image
                    src={images[currentIdx].image}
                    alt={images[currentIdx].alt}
                    height={images[currentIdx].height}
                    width={images[currentIdx].width}
                    className=""
                />
            }
        </>
    )
}