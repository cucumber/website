import React, { FC, useState, useEffect } from 'react'
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
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [target, duration])

  const formatted = count.toString().padStart(targetLength, '0')

  return (
    <span className={styles.counter + ' margin-bottom--md'}>
      {formatted}
    </span>
  )
}
