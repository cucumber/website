import React, { FC, useEffect, useState } from 'react'
import styles from './styles.module.scss'

interface AnimatedCounterProps {
  target: number
}

const duration = 5_000

export const AnimatedCounter: FC<AnimatedCounterProps> = ({ target }) => {
  const [count, setCount] = useState(0)
  const targetLength = target.toString().length

  useEffect(() => {
    const steps = duration / 10
    const increment = target / steps
    const intervalTime = duration / steps
    const perSecond = target / (365 * 24 * 60 * 60)
    let current = 0

    let timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
        timer = setInterval(() => {
          setCount((c) => c + perSecond)
        }, 1000)
      } else {
        setCount(Math.floor(current))
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [target])

  const formatted = Math.floor(count).toString().padStart(targetLength, '0')

  return (
    <span className={styles.counter + ' margin-bottom--md'}>
      {formatted}
    </span>
  )
}
