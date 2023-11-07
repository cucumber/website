import React, {FC} from "react";
import styles from './UsedBy.module.scss';

const LOGOS = [
    ['Brightcove', 'brightcove.svg'],
    ['EXL', 'exl.png'],
    ['FinanceIt', 'financeit.svg'],
    ['Pendo', 'pendo.svg'],
    ['SproutSocial', 'sproutsocial.svg'],
    ['Trivago', 'trivago.svg'],
]

export const UsedBy: FC = () => {
    return <>
        <p className={styles.strapLine}>Loved by teams everywhere</p>
        <ul className={styles.logosList}>
            {LOGOS.map(([alt, filename]) => (
                <li>
                    <img alt={alt} src={'/img/users/' + filename}/>
                </li>
            ))}
        </ul>
    </>
}
