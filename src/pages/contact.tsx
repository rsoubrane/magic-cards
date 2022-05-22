import { useEffect, useState } from 'react';
import Image from 'next/image';
import router from 'next/router';
// utils
import { useForm, ValidationError } from '@formspree/react';
import { useSnackbar } from 'notistack';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Button, Typography, TextField, Stack, Paper } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// assets
import ContactBG from '../assets/contact-bg.jpeg';
// types
import { User } from 'src/@types/user';

// ----------------------------------------------------------------------

const RootStyle = styled(Paper)(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 5,
	height: '100vh',
	width: '100vw',
	padding: theme.spacing(8),
	paddingTop: theme.spacing(12),
	[theme.breakpoints.up('md')]: {
		maxWidth: '55vw',
		paddingTop: theme.spacing(18)
	}
}));

// ----------------------------------------------------------------------

Contact.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Contact() {
	const { enqueueSnackbar } = useSnackbar();

	const [user, setUser] = useState<User | null>(null);

	const [data, setData] = useState({
		name: user?.firstName ? `${user?.firstName} ${user?.lastName}` : '',
		emailAddress: user?.emailAddress || '',
		message: ''
	});

	useEffect(() => {
		// @ts-ignore
		const user = JSON.parse(sessionStorage.getItem('user')) || null;
		if (user) {
			setUser(user);
			setData({
				...data,
				name: `${user?.firstName} ${user?.lastName}`,
				emailAddress: user.emailAddress
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setData({
			...data,
			[id]: value
		});
	};

	const [state, handleSubmit] = useForm('moqrpkvl', { data });

	if (state.succeeded) {
		enqueueSnackbar(`Thanks ${data.name} for sending us a message.`, {
			variant: 'success'
		});
		router.replace('/home');
	} else if (state.errors.length) {
		enqueueSnackbar(`Error while sending the message.`, {
			variant: 'error'
		});
	}

	return (
		<Page title='Contact us'>
			<Container
				sx={{
					position: 'absolute',
					width: '100vw',
					maxWidth: '100vw !important',
					height: '100vh',
					right: 0,
					top: 0,
					margin: 0,
					padding: 0
				}}>
				<Image
					src={ContactBG}
					alt='magic background'
					layout='fill'
					quality={60}
					style={{
						transform: 'scale(-1, 1)'
					}}
					priority={true}
				/>

				<RootStyle variant='outlined'>
					<Stack spacing={5}>
						<Typography variant='h3'>
							Feel free to send us a message. <br />
							We'll be glad to hear from you.
						</Typography>

						<form onSubmit={handleSubmit}>
							<Stack spacing={3}>
								<TextField
									id='name'
									label='Name'
									variant='outlined'
									value={data.name}
									onChange={(e) => handleChange(e)}
								/>
								<TextField
									id='emailAddress'
									label='Email'
									variant='outlined'
									value={data.emailAddress}
									onChange={(e) => handleChange(e)}
								/>
								<ValidationError prefix='Email' field='emailAddress' errors={state.errors} />

								<TextField
									id='message'
									label='Message'
									variant='outlined'
									value={data.message}
									onChange={(e) => handleChange(e)}
									multiline
								/>
								<ValidationError prefix='Message' field='message' errors={state.errors} />

								<Button
									type='submit'
									size='large'
									variant='contained'
									disabled={
										Object.values(data)
											.map((item) => item !== '')
											.includes(false) || state.submitting
									}>
									Send message
								</Button>
							</Stack>
						</form>
					</Stack>
				</RootStyle>
			</Container>
		</Page>
	);
}
