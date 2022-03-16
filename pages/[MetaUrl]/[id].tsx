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
	const { id } = router.query;
	return (
		<>
			<Head>
				<title>Demo 16/03</title>
				<meta name="description" content="React + Redux skeleton app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Center>
				<Heading>detail page {id}</Heading>
			</Center>
		</>
	);
};

export default Home;
