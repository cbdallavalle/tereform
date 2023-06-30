import { useEffect, useState } from "react"

type useScrollPositionProps = (event: Event, topOffset: number) => void

const useScrollPosition = (onScroll: useScrollPositionProps) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const scrollListener = (event?: Event) => {
      const topOffset = window.pageYOffset
      setScrollPosition(topOffset)
      if (event && onScroll) onScroll(event, topOffset)
    }
    window.addEventListener("scroll", scrollListener)
    scrollListener()
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])

  return scrollPosition
}

export default useScrollPosition