// utils
import { motion } from 'framer-motion';
// mui
import { Box, Button, Card, CardContent, styled, Typography } from '@mui/material';
// types
import { Card as CardType } from 'src/@types/card';
import Image from 'next/image';
import Link from 'next/link';

// ---------------------------------------------------------

const CardStyle = styled(Card)({
	position: 'relative',
	maxWidth: 260,
	boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
	overflow: 'visible',
	borderRadius: 16
});

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const frameVariants = {
	hover: { scale: 0.95 }
};

export const HomeCard = ({ card }: { card: CardType }) => (
	<CardStyle>
		<Box>
			<motion.div whileHover='hover' variants={frameVariants} transition={transition}>
				<Image src={card.image_uris.border_crop} alt='card image' width={260} height={325} />
			</motion.div>
		</Box>
		<CardContent sx={{ m: 0, p: 3, pt: 2 }}>
			<Typography variant='subtitle1'>Set: {card.set_name}</Typography>
			<Typography variant='subtitle2'>Power: {card.power}</Typography>
			<Typography variant='subtitle2'>Toughness: {card.toughness}</Typography>
			<Link href={`/cards/${card.id}`} passHref>
				<Button variant='contained' color='primary' sx={{ mt: 2 }}>
					Card details
				</Button>
			</Link>
		</CardContent>
	</CardStyle>
);

export default HomeCard;
