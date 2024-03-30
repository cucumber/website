import {FC} from "react";
import terms from './terms.json'
import {useHistory} from "@docusaurus/router";

export const Term: FC<{ children: keyof typeof terms }> = ({children}) => {
    const history = useHistory()
    const lang = new URLSearchParams(history.location.search).get('lang') || localStorage.getItem('docusaurus.tab.lang') || 'java'
    return <span>{terms[children][lang]}</span>
}
