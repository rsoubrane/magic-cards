import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
// @mui
import { Container } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// markdown
const LegalsMD = dynamic(() => import('../assets/markdown/license.mdx'), { ssr: false });

// ----------------------------------------------------------------------

LegalsPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function LegalsPage() {
	return (
		<Page title='Legal Mentions Page'>
			<Container maxWidth='xl' sx={{ textAlign: 'justify' }}>
				<LegalsMD name='Romain SOUBRANE' year={new Date().getFullYear()} />
			</Container>
		</Page>
	);
}
