import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const TitleAndMetaTags = ({
    url = 'https://beta.itinerary.eu.org',
    pathname,
    title = 'Incubator — Scratch Experiments',
    description = 'Incubator is a platform for Scratch experiments.',
    poster,
}) => {
    const router = useRouter();

    const image = poster ? `${url}/${poster}` : `${url}/social.png`;
    const path = pathname || router.pathname;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width" />
            <link rel="icon" href="/incubator.svg" type="image/svg+xml" />

            <meta property="og:url" content={`${url}${path}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    );
};

export default TitleAndMetaTags;
