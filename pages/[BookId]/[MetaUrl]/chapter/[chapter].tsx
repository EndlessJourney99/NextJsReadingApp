import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import ReadingLayout from '../../../../components/_shared/_readingLayout';

const Chapter: NextPage = () => {
	const router = useRouter();
	const { MetaUrl, ichapter } = router.query;
	return (
		<ReadingLayout>
			<Head>
				<title>{MetaUrl}</title>
				<meta name="description" content="{MetaUrl}" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box>Temp</Box>
		</ReadingLayout>
	);
};

export default Chapter;
