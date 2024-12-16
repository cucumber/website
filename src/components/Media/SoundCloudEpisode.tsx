import { FC } from 'react'

interface Props {
  track: string
}

export const SoundCloudEpisode: FC<Props> = ({ track }) => {
  return (
    <p>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
      />
    </p>
  )
}
