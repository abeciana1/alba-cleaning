import React, { useEffect, useState } from 'react'
import { ImageCompareI } from '@/interfaces'
import Image from 'next/image'

export const ImageCompare: React.FC<ImageCompareI> = ({
    images
}) => {

    const [currentIdx, setIdx] = useState(0)
    
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
                    className={`fade-in-${currentIdx} fade-out-${currentIdx}`}
                />
            }
        </>
    )
}