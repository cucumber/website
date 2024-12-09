import React from 'react';
import Layout from '@theme/Layout';
import {Hero} from "@site/src/components/Hero";
import {Intro} from "@site/src/components/Intro";
import {UsedBy} from "@site/src/components/UsedBy";

export default function Home() {
    return (
        <Layout>
            <Hero/>
            <main>
                <div className="container padding-vert--lg">
                    <Intro/>
                </div>
                {/*<div className="container padding-vert--lg">*/}
                {/*    <UsedBy/>*/}
                {/*</div>*/}
            </main>
        </Layout>
    );
}
