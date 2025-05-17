import { FC } from 'react'
import styles from './Subscribe.module.scss'
import clsx from 'clsx'

export const Subscribe: FC = () => {
  return (
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/cucumber"
      method="post"
      target="_blank"
      className={clsx(styles.form, 'button--lg')}
    >
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        className={styles.field}
      />
      <input type="hidden" name="embed" value="1" />
      <input type="hidden" name="tag" value="cucumber.io" />
      <button type="submit" className={clsx('button', 'button--primary', styles.submit)}>
        Subscribe
      </button>
    </form>
  )
}
