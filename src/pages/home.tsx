import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
// utils
import { MDXProvider } from '@mdx-js/react';
// @mui
import { Container } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import HomeCard from '../components/HomeCard';
// markdown
const HomeMD = dynamic(() => import('../assets/markdown/home.mdx'), { ssr: false });
// types
import { Card } from 'src/@types/card';

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getServerSideProps() {
	// Server-side requests are mocked by `mocks/server.js`.
	const res = await fetch('https://my.backend/cards/8d74a469-c71d-4773-99d3-5456b31df424');
	const card = await res.json();

	return {
		props: {
			card
		}
	};
}

export default function HomePage({ card }: { card: Card }) {
	const components = {
		HomeCard: HomeCard
	};

	return (
		<Page title='Home Page'>
			<Container maxWidth='xl' sx={{ textAlign: 'justify' }}>
				<MDXProvider components={components}>
					<HomeMD card={card} />
				</MDXProvider>
			</Container>
		</Page>
	);
}
