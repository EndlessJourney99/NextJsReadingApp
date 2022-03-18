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

import Layout from '../../components/_shared/_layout';
import NewList from '../../components/ListItems';
import Pagination from '../../components/Pagination';

const CategoriesPage: NextPage = () => {
	const router = useRouter();
	const { MetaUrl } = router.query;
	return (
		<Layout>
			<Head>
				<title>Category</title>
				<meta name="description" content="React + Redux skeleton app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container
				maxW="container.xl"
				paddingTop="1em"
				paddingBottom="5em"
				height="100%"
			>
				<Heading as="h1" fontWeight="200">
					List Categories
				</Heading>
				<Divider my={4} />
				<Box width="full" alignContent="center">
					<NewList cardSize="2xs" />
					<Center>
						<Pagination
							iPageIndex={1}
							iPaginatorRange={4}
							iTotalPage={10}
						/>
					</Center>
				</Box>
			</Container>
		</Layout>
	);
};

export default CategoriesPage;
