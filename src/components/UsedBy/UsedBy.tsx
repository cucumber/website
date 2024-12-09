import React, {FC} from 'react';
import styles from './UsedBy.module.scss';

// array of pairs being [name, imageUrl] respectively
const LOGOS: [string, string][] = [] as const

export const UsedBy: FC = () => {
    return <>
        <p className={styles.strapLine}>Loved by teams everywhere</p>
        <ul className={styles.logosList}>
            {LOGOS.map(([alt, filename]) => (
                <li key={filename}>
                    <img alt={alt} src={'/img/users/' + filename}/>
                </li>
            ))}
        </ul>
    </>
}
