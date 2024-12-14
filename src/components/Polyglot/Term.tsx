import { FC } from 'react'
import terms from './terms.json'
import { useLang } from './useLang'

type TermProps = { children: keyof typeof terms }

export const Term: FC<TermProps> = ({ children }) => {
  const selectedValue = useLang()
  return <span>{terms[children][selectedValue]}</span>
}
