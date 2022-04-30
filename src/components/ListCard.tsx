import Link from 'next/link';
//utils
import moment from 'moment';
import _ from 'lodash';
import { motion } from 'framer-motion';
// @mui
import { Box, Card, Grid, Typography, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
// types
import { Card as CardType } from 'src/@types/card';

// ---------------------------------------------------------

const CardStyle = styled(Card)({
	position: 'relative',
	cursor: 'pointer',
	display: 'flex',
	width: '100%'
});

const ContentBox = styled(Box)({
	width: 'calc(100% - 151px)',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
});

const InfoBox = styled(Box)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	textAlign: 'center',
	paddingRight: theme.spacing(2)
}));

// ----------------------------------------------------------------------

function InfoItem(info: string, item: string) {
	return (
		<Grid item xs={6}>
			<Typography variant='caption' sx={{ mb: 0.5, color: 'text.secondary', display: 'block' }}>
				{item}
			</Typography>
			<Typography variant='subtitle1'>{info}</Typography>
		</Grid>
	);
}

export default function ListCard({ card }: { card: CardType }) {
	const { id, image_uris, name, printed_name, rarity, set_name, released_at } = card;

	return (
		<motion.div key={id} transition={{ duration: 0.2 }} whileHover={{ scale: 1.075 }}>
			<Link href={{ pathname: `/cards/${id}` }} passHref>
				<CardStyle>
					<CardMedia
						component='img'
						sx={{ width: 180, borderRadius: 2, p: 1, pl: 2 }}
						alt={printed_name || name}
						image={image_uris.border_crop}
					/>

					<ContentBox>
						<CardContent>
							<Typography variant='subtitle1' align='center' color='primary' sx={{ mt: 2 }}>
								{printed_name || name}
							</Typography>
							<Typography
								variant='subtitle2'
								align='center'
								color='primary'
								sx={{ mt: 1, mb: 2, color: 'text.secondary' }}>
								{set_name}
							</Typography>
						</CardContent>
						<InfoBox>
							{InfoItem(_.startCase(_.toLower(rarity)), 'Rarity')}
							{InfoItem(moment(released_at).format('DD-MM-YYYY'), 'Release Date')}
						</InfoBox>
					</ContentBox>
				</CardStyle>
			</Link>
		</motion.div>
	);
}
