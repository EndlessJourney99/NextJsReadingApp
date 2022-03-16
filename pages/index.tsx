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

import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collection from '../components/Collection';
import NewList from '../components/NewList';
import Pagination from '../components/Pagination';
import HotList from '../components/HotList';
import SubscribeList from '../components/SubscribeList';

const Home: NextPage = () => (
	<>
		<Head>
			<title>Demo 16/03</title>
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
			<Heading as="h3" pb={3} fontSize="xx-large" fontWeight="300">
				Trending!
			</Heading>
			<Collection />
			<Divider pt={3} />
			<Flex flexWrap="wrap" paddingTop={4}>
				<Box width="58rem" alignContent="center">
					<NewList />
					<Center>
						<Pagination
							iPageIndex={1}
							iPaginatorRange={4}
							iTotalPage={10}
						/>
					</Center>
				</Box>
				<Box width="80">
					<HotList />
					<SubscribeList mt="2em" />
				</Box>
			</Flex>
		</Container>
	</>
);

export default Home;
