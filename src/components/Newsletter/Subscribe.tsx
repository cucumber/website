import { FC } from 'react'
import styles from './Subscribe.module.scss'

export const Subscribe: FC = () => {
  return <>
    <p className="margin-bottom--sm">Subscribe to the Cucumber newsletter:</p>
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/cucumber"
      method="post"
      target="_blank"
    >
      <input type="email" name="email" placeholder="you@example.com" required className={styles.field} />
      <input type="hidden" name="embed" value="1" />
      <input type="hidden" name="tag" value="cucumber.io" />
      <button className="button button--primary" type="submit">Subscribe</button>
    </form>
  </>
}