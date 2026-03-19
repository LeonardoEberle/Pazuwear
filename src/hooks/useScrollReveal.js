import { useEffect, useRef, useCallback } from 'react'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useScrollReveal({ threshold = 0.15, stagger = 0.08 } = {}) {
  const containerRef = useRef(null)

  const reveal = useCallback(
    (node) => {
      if (!node || prefersReducedMotion) return

      const elements = node.querySelectorAll('.reveal')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold, rootMargin: '0px 0px -40px 0px' }
      )

      elements.forEach((el, i) => {
        if (stagger && i > 0) {
          el.style.transitionDelay = `${i * stagger}s`
        }
        observer.observe(el)
      })

      return () => observer.disconnect()
    },
    [threshold, stagger]
  )

  useEffect(() => {
    if (!containerRef.current) return
    const cleanup = reveal(containerRef.current)
    return cleanup
  }, [reveal])

  return containerRef
}

export function useRevealRef({ threshold = 0.15 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion) return

    node.classList.add('reveal')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
