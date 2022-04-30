// scroll bar
import 'simplebar/src/simplebar.css';
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
// mocks
import '../mocks';

// react
import { ReactElement, ReactNode } from 'react';
// utils
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
// next
import { NextPage } from 'next';
import Head from 'next/head';
import App, { AppProps, AppContext } from 'next/app';
// theme
import ThemeProvider from '../theme';
// components
import NotistackProvider from 'src/components/NotistackProvider';

// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
	Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
	const { Component, pageProps } = props;

	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
				<link rel='icon' href='/favicon/favicon.ico' />
			</Head>

			<ThemeProvider>
				<NotistackProvider>
					<LazyMotion features={domAnimation}>
						<AnimatePresence exitBeforeEnter={true}>
							{getLayout(<Component {...pageProps} />)}
						</AnimatePresence>
					</LazyMotion>
				</NotistackProvider>
			</ThemeProvider>
		</>
	);
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context: AppContext) => {
	const appProps = await App.getInitialProps(context);

	return {
		...appProps
	};
};
