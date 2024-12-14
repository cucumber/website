// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents'
import { Content, Tab, Tabs, Term, Version } from '@site/src/components/Polyglot'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add our custom components
  Content,
  Tab,
  Tabs,
  Term,
  Version,
}
