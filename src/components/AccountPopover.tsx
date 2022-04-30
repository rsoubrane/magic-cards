import { useState } from 'react';
import { useRouter } from 'next/router';
// utils
import axios from 'axios';
import { useSnackbar } from 'notistack';
import createAvatar from 'src/utils/createAvatar';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, MenuItem, IconButton, Container } from '@mui/material';
// components
import Avatar from './Avatar';
import MenuPopover from './MenuPopover';
import Iconify from './Iconify';
// types
import { User } from '../@types/user';

// ----------------------------------------------------------------------

export default function AccountPopover() {
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();

	// @ts-ignore
	const user: User | null = JSON.parse(sessionStorage.getItem('user')) || null;

	const [open, setOpen] = useState<HTMLElement | null>(null);

	const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => {
		setOpen(null);
	};

	const handleLogin = async () => {
		try {
			const { data } = await axios.post('/login', {
				username: 'romain.soubrane'
			});
			closeAndRedirect(`User ${data.firstName} ${data.lastName} successfully logged in!`);
		} catch (error) {
			console.error(error);
			enqueueSnackbar('Unable to login!', { variant: 'error' });
		}
	};

	const handleLogout = async () => {
		try {
			await axios.post('/logout', {});
			closeAndRedirect(`User successfully logged out!`);
		} catch (error) {
			console.error(error);
			enqueueSnackbar('Unable to logout!', { variant: 'error' });
		}
	};

	const closeAndRedirect = (message: string) => {
		handleClose();
		enqueueSnackbar(message, { variant: 'success' });
		router.replace('/home');
	};

	return (
		<>
			<Container disableGutters sx={{ display: { xs: 'block', md: 'none' }, p: 0, m: 0, width: '100%' }}>
				{user ? (
					<MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
				) : (
					<MenuItem onClick={() => handleLogin()}>Login</MenuItem>
				)}
			</Container>

			<Container
				sx={{
					display: { xs: 'none', md: 'contents' },
					width: '100%',
					textAlign: 'left'
				}}>
				<IconButton
					onClick={handleOpen}
					sx={{
						my: 1,
						ml: 3,
						mr: 1,
						...(open && {
							'&:before': {
								zIndex: 1,
								content: "''",
								width: '100%',
								height: '100%',
								borderRadius: '50%',
								position: 'absolute',
								bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8)
							}
						})
					}}>
					<Avatar color={user?.firstName ? createAvatar(user?.firstName).color : 'default'} sx={{ p: 0 }}>
						{user?.firstName ? createAvatar(user?.firstName).name : <Iconify icon={'eva:person-fill'} />}
					</Avatar>
				</IconButton>

				<MenuPopover
					open={Boolean(open)}
					anchorEl={open}
					onClose={handleClose}
					sx={{
						p: 0,
						mt: 1.5,
						ml: 0.75,
						'& .MuiMenuItem-root': {
							typography: 'body2',
							borderRadius: 0.75
						}
					}}>
					{user ? (
						<>
							<Box sx={{ my: 1.5, px: 2.5 }}>
								<Typography variant='subtitle2' noWrap>
									{user?.firstName} {user?.lastName}
								</Typography>
								<Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
									{user?.emailAddress}
								</Typography>
							</Box>
							<Divider sx={{ borderStyle: 'dashed' }} />
							<MenuItem onClick={() => handleLogout()} sx={{ m: 1 }}>
								Logout
							</MenuItem>
						</>
					) : (
						<MenuItem onClick={() => handleLogin()} sx={{ m: 1 }}>
							Login
						</MenuItem>
					)}
				</MenuPopover>
			</Container>
		</>
	);
}
