import {FC} from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type Props = { children: string }

export const Version: FC<Props> = ({children}) => {
    const {siteConfig} = useDocusaurusContext();
    const versions = siteConfig.customFields['versions'] as Record<string, string>
    return <span>{versions[children]}</span>
}