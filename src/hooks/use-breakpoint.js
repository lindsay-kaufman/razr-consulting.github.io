import { useState, useEffect } from 'react'

export const useBreakpoint = () => {
  const [width, setInnerWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLargeDesktop, setIsLargeDesktop] = useState(false)

  const breakpoints = {
    mobile: 767,
    desktop: 992,
    largeDesktop: 1300,
  }

  const setMobile = () => {
    setIsDesktop(false)
    setIsLargeDesktop(false)
    setIsMobile(true)
    console.log('mobile')
  }

  const setDesktop = () => {
    setIsDesktop(true)
    setIsLargeDesktop(false)
    setIsMobile(false)
    console.log('desktop')
  }

  const setLargeDesktop = () => {
    setIsDesktop(false)
    setIsMobile(false)
    setIsLargeDesktop(true)
    console.log('large desktop')
  }

  useEffect(() => {
    const getInnerWidth = () => {
      setInnerWidth(window.innerWidth)
      return width
    }

    window.addEventListener('resize', getInnerWidth)

    if (width < breakpoints.desktop) {
      setMobile()
    } else if (width >= breakpoints.largeDesktop) {
      setLargeDesktop()
    } else {
      setDesktop()
    }

    return () => window.removeEventListener('resize', getInnerWidth)
    
  }, [breakpoints.desktop, breakpoints.largeDesktop, width])

  return {
    isMobile,
    isDesktop,
    isLargeDesktop,
  }
}
