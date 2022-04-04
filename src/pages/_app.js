import { UIProvider } from '@design-system/theme';
import { createTheme } from '@design-system/theme/stitches.config';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Head from 'next/head';

import { CustomToastProvider, ToastContainer } from '@design-system';

import { SWRConfig } from 'swr';
import fetchJson from '@utils/fetch-json';

const lightTheme = createTheme({
    type: 'light',
});

const darkTheme = createTheme({
    type: 'dark',
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <script async defer data-website-id="77abe5c5-6a80-46c5-a574-44eeb19fd6de" src="https://umami-production-dc41.up.railway.app/umami.js" />
            </Head>
            <SWRConfig
                value={{
                    fetcher: fetchJson,
                    onError: (err) => {
                        console.error(err);
                    },
                }}
            >
                <NextThemesProvider
                    defaultTheme="system"
                    attribute="class"
                    value={{
                        light: lightTheme.className,
                        dark: darkTheme.className,
                    }}
                >
                    <UIProvider>
                        <CustomToastProvider>
                            <Component {...pageProps} />
                            <ToastContainer />
                        </CustomToastProvider>
                    </UIProvider>
                </NextThemesProvider>
            </SWRConfig>
        </>
    );
}

export default MyApp;
