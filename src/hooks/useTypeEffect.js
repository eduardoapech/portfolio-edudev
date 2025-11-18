import { useEffect, useRef } from 'react'

export function useTypeEffect(elementRef, text, speed = 100, callback = null) {
  const timeoutRef = useRef(null)
  const indexRef = useRef(0)
  const callbackRef = useRef(callback)

  // Keep callback ref updated
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!elementRef.current || !text) {
      if (elementRef.current && !text) {
        elementRef.current.innerText = ''
      }
      return
    }

    elementRef.current.innerText = ''
    indexRef.current = 0

    function type() {
      if (indexRef.current < text.length && elementRef.current) {
        const char = text.charAt(indexRef.current)
        elementRef.current.innerHTML += char === ' ' ? '&nbsp;' : char
        indexRef.current++
        timeoutRef.current = setTimeout(type, speed)
      } else if (callbackRef.current) {
        callbackRef.current()
      }
    }

    type()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [text, speed, elementRef])
}

