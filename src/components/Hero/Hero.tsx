import React, {FC} from 'react';
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from './Hero.module.scss'

export const Hero: FC = () => {
    return (
        <header className={clsx(styles.backdrop)}>
            <div className="container">
                <h1 className={clsx(styles.title)}>
                    <strong>Cucumber </strong>
                    lets you write<br/>
                    automated tests in plain language
                </h1>
                <div className={styles.ctas}>
                    <Link
                        className="button button--primary button--lg"
                        to="https://cucumber.io/docs/installation">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
