import {FC} from "react";
import terms from './terms.json'
import {useHistory} from "@docusaurus/router";
import BrowserOnly from '@docusaurus/BrowserOnly';
import {DEFAULT_LANGUAGE} from "./constants";

type TermProps = { children: keyof typeof terms };

const InternalTerm: FC<TermProps> = ({children}) => {
    const history = useHistory()
    const lang = new URLSearchParams(history.location.search).get('lang') || localStorage.getItem('docusaurus.tab.lang') || DEFAULT_LANGUAGE
    return <span>{terms[children][lang]}</span>
}

export const Term: FC<TermProps> = ({children}) => {
    return <BrowserOnly fallback={<span>{terms[children][DEFAULT_LANGUAGE]}</span>}>
        {() => {
            return <InternalTerm>{children}</InternalTerm>
        }}
    </BrowserOnly>
}
