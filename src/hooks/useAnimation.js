import { useEffect, useState } from 'react'

export function useAnimation (isVisible) {
  const [isAnimating, setIsAnimating] = useState(false)
  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
    } else {
      setIsAnimating(false)
    }
  }, [isVisible])

  return { isAnimating }
}
