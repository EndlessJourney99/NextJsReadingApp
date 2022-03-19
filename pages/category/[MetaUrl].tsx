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

const Category: NextPage = () => {
	const router = useRouter();
	const { MetaUrl } = router.query;
	return (
		<Layout>
			<Head>
				<title>Category</title>
				<meta name="description" content="React + Redux skeleton app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Heading>Category page {MetaUrl}</Heading>
			<Center>
				<Box width="58rem" alignContent="center">
					<NewList cardSize="2xs" />
					<Center>
						<Pagination
							iPageIndex={1}
							iPaginatorRange={4}
							iTotalPage={10}
						/>
					</Center>
				</Box>
			</Center>
		</Layout>
	);
};

export default Category;
