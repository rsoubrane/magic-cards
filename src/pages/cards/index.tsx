import { ReactElement } from 'react';
// config
import { API_URL } from 'src/config';
// utils
import axios from 'axios';
// @mui
import { Container, Grid } from '@mui/material';
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import ListCard from 'src/components/ListCard';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
// types
import { Card } from 'src/@types/card';

// ----------------------------------------------------------------------

CardsPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
	const { data } = await axios.get(
		`${API_URL}/cards/search?q=is%3Acommander+pow%3E%3D8&unique=cards&as=grid&order=power&dir=desc`
	);

	return {
		props: {
			cards: data.data
		}
	};
}

export default function CardsPage({ cards }: { cards: Card[] }) {
	return (
		<Page title='Cards Page'>
			<Container maxWidth={'xl'}>
				<HeaderBreadcrumbs
					heading='Cards Page'
					links={[{ name: `${cards.length} Most powerful cards of the game` }]}
				/>

				<Grid id='test-container-cards' container spacing={3}>
					{cards &&
						cards.map((card: Card) => (
							<Grid key={card.id} item xs={12} md={6} lg={4}>
								<ListCard card={card} />
							</Grid>
						))}
				</Grid>
			</Container>
		</Page>
	);
}
