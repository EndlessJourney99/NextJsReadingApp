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
import Layout from '../../../components/_shared/_layout';
import BookInformation from '../../../components/BookInformation';

const BookDetail: NextPage = () => {
	const router = useRouter();
	const { id, MetaUrl } = router.query;
	return (
		<Layout>
			<Head>
				<title>{MetaUrl}</title>
				<meta name="description" content="{MetaUrl}" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxW="container.xl" pb={10}>
				<BookInformation
					Title="Staging"
					Desc="
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis doloremque, maxime vero repudiandae quibusdam numquam maiores id quisquam molestias voluptatem sit, fugiat sequi nihil asperiores et officia magni dolor magnam."
					Style={{ py: '3em' }}
				/>
			</Container>
		</Layout>
	);
};

export default BookDetail;
