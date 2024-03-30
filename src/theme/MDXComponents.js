// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {Term} from '@site/src/components/Term';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Add our custom components
    Term,
};
