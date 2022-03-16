import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import {
	Box,
	Container,
	Flex,
	Heading,
	Divider,
	Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
	const router = useRouter();
	const { MetaUrl } = router.query;
	return (
		<>
			<Head>
				<title>Category</title>
				<meta name="description" content="React + Redux skeleton app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Center>
				<Heading>Category page {MetaUrl}</Heading>
			</Center>
		</>
	);
};

export default Home;
