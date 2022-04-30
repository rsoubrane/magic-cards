// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// components
import Page from '../components/Page';
// assets
import { PageNotFoundIllustration } from '../assets';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	display: 'flex',
	height: '100%',
	alignItems: 'center',
	paddingTop: theme.spacing(15),
	paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Page404() {
	return (
		<Page title='404 Page Not Found' sx={{ height: 1 }}>
			<RootStyle>
				<Container>
					<Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
						<Typography variant='h3' paragraph>
							Sorry, page not found!
						</Typography>
						<Typography sx={{ color: 'text.secondary' }}>
							Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
							sure to check your spelling.
						</Typography>
						<PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
						<NextLink href='/' passHref>
							<Button size='large' variant='contained'>
								Go to Home
							</Button>
						</NextLink>
					</Box>
				</Container>
			</RootStyle>
		</Page>
	);
}
