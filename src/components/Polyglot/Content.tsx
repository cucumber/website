import {FC, PropsWithChildren} from "react";
import {useTabs,TabsProps} from '@docusaurus/theme-common/internal'
import DocusaurusTabItem from "@theme/TabItem";

const DOCUSAURUS_TABS_PROPS: TabsProps = {
    groupId: 'lang',
    queryString: true,
    children: [
        <DocusaurusTabItem value="java">&nbsp;</DocusaurusTabItem>,
        <DocusaurusTabItem value="kotlin">&nbsp;</DocusaurusTabItem>,
        <DocusaurusTabItem value="scala">&nbsp;</DocusaurusTabItem>,
        <DocusaurusTabItem value="javascript">&nbsp;</DocusaurusTabItem>,
        <DocusaurusTabItem value="ruby">&nbsp;</DocusaurusTabItem>,
        <DocusaurusTabItem value="golang">&nbsp;</DocusaurusTabItem>
    ]
};

interface Props {
    lang: string
}

export const Content : FC<PropsWithChildren<Props>> = ({lang, children}) => {
    const langs = lang.split(',')
    const {selectedValue} = useTabs(DOCUSAURUS_TABS_PROPS)
    if (langs.includes(selectedValue)) {
        return <>{children}</>
    }
    return undefined
}