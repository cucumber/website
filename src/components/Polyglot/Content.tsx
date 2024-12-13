import {FC, PropsWithChildren} from "react";
import { useLang } from "./useLang";

interface Props {
    lang: string
}

export const Content : FC<PropsWithChildren<Props>> = ({lang, children}) => {
    const langs = lang.split(',')
    const selectedValue = useLang()
    if (langs.includes(selectedValue)) {
        return <>{children}</>
    }
    return undefined
}