import { useState, useEffect } from 'react'

const useMobile = () => {

    const [ isMobile, setMobile ] = useState(false)

    useEffect(() => {
        if (window) {
        if (window?.innerWidth < 1024) {
            setMobile(true)
        } else {
            setMobile(false)
        }
        }
    }, [isMobile])

    return isMobile
}

export default useMobile