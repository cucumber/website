import {FC, ReactElement, ReactNode} from "react";
import DocusaurusTabs from "@theme/Tabs";
import DocusaurusTabItem from "@theme/TabItem";
import {LANGUAGES} from "./constants";

type TabProps = { value: keyof typeof LANGUAGES, children: ReactNode };

export const Tabs: FC<{children: ReactElement<TabProps>[]}> = ({children}) => {
    const asArray = Array.isArray(children) ? children : [children]
    return <DocusaurusTabs groupId="lang" queryString>
        {asArray.flatMap(child => {
            const keys = child.props.value.split(',')
            return keys.map(key => {
                return <DocusaurusTabItem key={key} value={key} label={LANGUAGES[key]} attributes={{className: 'language-tab language-tab--' + key}}>{child.props.children}</DocusaurusTabItem>
            })
        })}
    </DocusaurusTabs>
}

export const Tab: FC<TabProps> = () => {
    // no-op component impl - see remapping in <Tabs> above
    throw '<Tab> must be used inside of <Tabs>'
}
