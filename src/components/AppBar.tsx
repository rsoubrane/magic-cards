import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// config
import { pages } from '../config';
// @mui
import {
	AppBar as MUIAppBar,
	Container,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Button,
	Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// assets
import Logo from '../../public/logo/logo.png';
import AccountPopover from './AccountPopover';

// ----------------------------------------------------------------------

const AppBar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const HomeButton = ({ sx }: any) => (
		<Link href='/home' passHref>
			<Typography variant='h6' noWrap component='div' sx={{ ...sx, cursor: 'pointer' }}>
				<Image src={Logo} alt='Logo' width={200} height={50} />
			</Typography>
		</Link>
	);

	return (
		<MUIAppBar position='sticky'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					{/* MOBILE VERSION OF THE APP BAR */}
					<HomeButton sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} />
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left'
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' }
							}}>
							{pages.map((page) => (
								<Link key={page.id} href={`/${page.id}`} passHref>
									<MenuItem onClick={handleCloseNavMenu}>
										<Typography textAlign='center'>{page.name}</Typography>
									</MenuItem>
								</Link>
							))}

							<Divider sx={{ borderStyle: 'line' }} />

							<AccountPopover />
						</Menu>
					</Box>

					{/* DESKTOP VERSION OF THE APP BAR */}
					<HomeButton sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
						{pages.map((page) => (
							<Link key={page.id} href={`/${page.id}`} passHref>
								<Button
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block', textAlign: 'center' }}>
									{page.name}
								</Button>
							</Link>
						))}

						<AccountPopover />
					</Box>
				</Toolbar>
			</Container>
		</MUIAppBar>
	);
};

export default AppBar;
