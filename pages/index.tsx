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

import Banner from '../components/Banner';
import Collection from '../components/Collection';
import NewList from '../components/ListItems';
import Pagination from '../components/Pagination';
import HotList from '../components/HotList';
import SubscribeList from '../components/SubscribeList';
import CategoriesList from '../components/CategoriesList';
import Layout from '../components/_shared/_layout';

const Home: NextPage = () => (
	<Layout>
		<Head>
			<title>Demo 16/03</title>
			<meta name="description" content="React + Redux skeleton app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Banner />
		<Container
			maxW="container.xl"
			paddingTop="1em"
			paddingBottom="5em"
			height="100%"
		>
			<CategoriesList />
			<Heading as="h3" pb={3} fontSize="xx-large" fontWeight="300">
				Trending!
			</Heading>
			<Collection />
			<Divider pt={3} />
			<Flex flexWrap="wrap" paddingTop={4}>
				<Box width="58rem" alignContent="center">
					<NewList cardSize="31%" />
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
	</Layout>
);

export default Home;
