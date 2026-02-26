import React, { FC, useEffect, useState } from 'react'
import styles from './styles.module.scss'

const downloadsPerYear = 211_048_274
const targetLength = downloadsPerYear.toString().length
const fastForwardDuration = 5_000 // 5s
const fastForwardSteps = fastForwardDuration / 10
const fastForwardInterval = fastForwardDuration / fastForwardSteps
const fastForwardIncrement = downloadsPerYear / fastForwardSteps
const continuedDuration = 365 * 24 * 60 * 60 // 1y
const continuedIncrement = downloadsPerYear / continuedDuration

export const DownloadCounter: FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    let timer = setInterval(() => {
      current += fastForwardIncrement
      if (current >= downloadsPerYear) {
        setCount(downloadsPerYear)
        clearInterval(timer)
        timer = setInterval(() => {
          setCount((c) => c + continuedIncrement)
        }, 1000)
      } else {
        setCount(Math.floor(current))
      }
    }, fastForwardInterval)
    return () => clearInterval(timer)
  }, [downloadsPerYear])

  const formatted = Math.floor(count).toString().padStart(targetLength, '0')

  return <span className={styles.counter}>{formatted}</span>
}
