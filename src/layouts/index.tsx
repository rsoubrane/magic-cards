import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
const AppBar = dynamic(() => import('../components/AppBar'), { ssr: false });

// ----------------------------------------------------------------------

const MainLayout = styled(
	'main',
	{}
)(({ theme }) => ({
	flexGrow: 1,
	paddingTop: 48,
	paddingBottom: 48,
	paddingLeft: 16,
	paddingRight: 16,
	[theme.breakpoints.up('md')]: {
		paddingLeft: 64,
		paddingRight: 64,
		width: '100%',
		transition: theme.transitions.create('margin-left', {
			duration: theme.transitions.duration.shorter
		})
	},
	[theme.breakpoints.up('lg')]: {
		paddingLeft: 128,
		paddingRight: 128
	}
}));

// ----------------------------------------------------------------------

type Props = {
	children: ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<Box>
			<AppBar />

			<MainLayout>{children}</MainLayout>
		</Box>
	);
}
