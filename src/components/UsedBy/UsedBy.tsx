import React, {FC} from "react";
import styles from './UsedBy.module.scss';

export const UsedBy: FC = () => {
    return <ul className={styles.logosList}>
        <li><img alt="Brithtcove" src="/img/users/brightcove.svg"/></li>
        <li><img alt="EXL" src="/img/users/exl.png"/></li>
        <li><img alt="FinanceIt" src="/img/users/financeit.svg"/></li>
        <li><img alt="Pendo" src="/img/users/pendo.svg"/></li>
        <li><img alt="SproutSocial" src="/img/users/sproutsocial.svg"/></li>
        <li><img alt="Trivago" src="/img/users/trivago.svg"/></li>
    </ul>
}
