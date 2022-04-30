import * as React from 'react';
// next
import Document, { Html, Head, Main, NextScript } from 'next/document';
// theme
import palette from '../theme/palette';

// ----------------------------------------------------------------------

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='utf-8' />
					<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />

					<meta name='theme-color' content={palette.light.primary.main} />
					<link rel='manifest' href='/manifest.json' />

					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap'
						rel='stylesheet'
					/>

					<meta name='description' content='DM Dev Front project Using Next.js' />
					<meta name='keywords' content='react,nextjs' />
					<meta name='author' content='Romain Soubrane' />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => <App {...props} />
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		styles: [...React.Children.toArray(initialProps.styles)]
	};
};
