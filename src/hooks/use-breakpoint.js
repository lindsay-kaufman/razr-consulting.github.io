import { useState, useEffect } from 'react'

export const useBreakpoint = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLargeDesktop, setIsLargeDesktop] = useState(false)

  const breakpoints = {
    mobile: 767,
    desktop: 992,
    largeDesktop: 1300,
  }

  useEffect(() => {
    setWidth(window.innerWidth)

    if (width < breakpoints.desktop) {
      setIsMobile(true)
    } else if (width >= breakpoints.largeDesktop) {
      setIsLargeDesktop(true)
    } else setIsDesktop(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isMobile,
    isDesktop,
    isLargeDesktop,
  }
}
