// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {Tab, Tabs, Term} from "@site/src/components/Polyglot";

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Add our custom components
    Tab,
    Tabs,
    Term
};
