import {FC, ReactElement, ReactNode} from "react";
import DocusaurusTabs from "@theme/Tabs";
import DocusaurusTabItem from "@theme/TabItem";
import {LANGUAGES} from "./constants";

type TabProps = { value: keyof typeof LANGUAGES, children: ReactNode };

export const Tabs: FC<{children: ReactElement<TabProps>[]}> = ({children}) => {
    return <DocusaurusTabs groupId="lang" queryString>
        {children.map(child => {
            return <DocusaurusTabItem key={child.props.value} value={child.props.value} label={LANGUAGES[child.props.value]}>{child.props.children}</DocusaurusTabItem>
        })}
    </DocusaurusTabs>
}

export const Tab: FC<TabProps> = () => {
    // no-op component impl - see remapping in <Tabs> above
    throw '<Tab> must be used inside of <Tabs>'
}
