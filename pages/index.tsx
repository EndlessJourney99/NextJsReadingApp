import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collection from '../components/Collection';

const Home: NextPage = () => (
	<>
		<Head>
			<title>React + Redux skeleton</title>
			<meta name="description" content="React + Redux skeleton app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header />
		<Banner />
		<Container
			maxW="container.xl"
			paddingTop="1em"
			paddingBottom="5em"
			height="100%"
		>
			<Box>
				<Heading
					as="h3"
					pb={3}
					fontSize="xx-large"
					fontWeight="semibold"
				>
					Trending
				</Heading>
				<Collection />
			</Box>
		</Container>
	</>
);

export default Home;
