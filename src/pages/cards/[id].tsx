import { ReactElement } from 'react';
import Image from 'next/image';
// utils
import axios from 'axios';
import { pascalCase } from 'change-case';
import { motion } from 'framer-motion';
import { animations } from 'src/utils/animations';
// @mui
import {
	Card,
	CardContent as MUICardContent,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
	Box,
	Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
// config
import { API_URL, PATH_PAGE } from 'src/config';
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
// types
import { Card as CardType } from 'src/@types/card';

// ----------------------------------------------------------------------

CardPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticPaths() {
	const { data } = await axios.get(
		`${API_URL}/cards/search?q=is%3Acommander+pow%3E%3D8&unique=cards&as=grid&order=power&dir=desc`
	);

	return {
		paths: data.data.map(({ id }: { id: string }) => `/cards/${id}`),
		fallback: false
	};
}

export async function getStaticProps({ params }: { params: { id: string } }) {
	const { data } = await axios.get(`${API_URL}/cards/${params.id}`);

	return {
		props: {
			card: data
		}
	};
}

export default function CardPage({ card }: { card: CardType }) {
	const { name, image_uris, type_line, oracle_text, flavor_text, power, toughness, artist, legalities } = card;

	const LEGALITIES_DISPLAY = [
		'standard',
		'alchemy',
		'pioneer',
		'explorer',
		'modern',
		'brawl',
		'legacy',
		'historic',
		'vintage',
		'pauper',
		'commander',
		'penny'
	];

	const StatusBox = styled(Chip)(({ theme }) => ({
		position: 'relative',
		width: 78,
		height: 26,
		fontSize: '.6rem',
		borderRadius: 5,
		marginRight: 8
	}));

	const CardContent = () => (
		<MUICardContent>
			<Stack flex='colum' justifyContent='space-around' alignItems='flex-start'>
				<Typography variant='h4'>{name}</Typography>
				<Divider sx={{ width: '100%', borderStyle: 'line', my: 1 }} />
				<Typography variant='body1'>{type_line}</Typography>
				<Divider sx={{ width: '100%', borderStyle: 'line', my: 1 }} />
				<Typography sx={{ textAlign: 'justify' }}>{oracle_text}</Typography>
				<Typography variant='body2' sx={{ fontStyle: 'italic', mt: 1 }}>
					{flavor_text}
				</Typography>
				<Divider sx={{ width: '100%', borderStyle: 'line', my: 1 }} />
				<Typography variant='h6'>
					{power}/{toughness}
				</Typography>
				<Divider sx={{ width: '100%', borderStyle: 'line', my: 1 }} />
				<Typography>Illustrated by {artist}</Typography>
				<Divider sx={{ width: '100%', borderStyle: 'line', my: 1 }} />
				<Grid container>
					{Object.entries(legalities).map(
						([key, value]) =>
							LEGALITIES_DISPLAY.includes(key) && (
								<Grid
									item
									xs={12}
									sm={6}
									key={key}
									sx={{
										display: 'inline-flex',
										justifyContent: 'flex-start',
										alignItems: 'center',
										mt: 1
									}}>
									<StatusBox
										label={value === 'legal' ? 'LEGAL' : 'NOT LEGAL'}
										color={value === 'legal' ? 'success' : 'default'}
									/>
									<Typography variant='body2'>{pascalCase(key)}</Typography>
								</Grid>
							)
					)}
				</Grid>
			</Stack>
		</MUICardContent>
	);

	return (
		<Page title='Card Page'>
			<Container maxWidth='xl'>
				<HeaderBreadcrumbs
					heading='Card Details'
					links={[{ name: 'Cards', href: PATH_PAGE.cards }, { name: `Card: ${name}` }]}
				/>

				<motion.main
					initial='initial'
					animate='animate'
					exit='exit'
					variants={animations[4].variants}
					transition={animations[4].transition}>
					<Grid
						container
						sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
						<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
							<Image src={image_uris.png} width={370} height={500} alt='card image' />
						</Grid>
						<Grid item xs={12} sx={{ mx: 1, mt: 3 }}>
							<Card sx={{ textAlign: 'center' }}>
								<CardContent />
							</Card>
						</Grid>
					</Grid>

					<Container sx={{ display: { xs: 'none', md: 'inline-flex' }, justifyContent: 'center' }}>
						<Box sx={{ position: 'relative', zIndex: 2 }}>
							<Image src={image_uris.png} width={370} height={500} alt='card image' />
						</Box>

						<Card sx={{ right: 0, maxWidth: 400, mt: 4, ml: -1 }}>
							<CardContent />
						</Card>
					</Container>
				</motion.main>
			</Container>
		</Page>
	);
}
