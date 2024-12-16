import { FC } from 'react'

interface Props {
  video: string
}

export const YouTubeVideo: FC<Props> = ({ video }) => {
  return (
    <p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video}?si=9IXzdZNk1ym4oxL8`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </p>
  )
}
