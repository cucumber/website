// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents'
import { Content, Tab, Tabs, Term, Version } from '@site/src/components/Polyglot'
import { YouTubeVideo, SoundCloudEpisode } from '@site/src/components/Media'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add our custom components
  Content,
  YouTubeVideo,
  SoundCloudEpisode,
  Tab,
  Tabs,
  Term,
  Version,
}
