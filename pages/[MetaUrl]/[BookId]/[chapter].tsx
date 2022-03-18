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

const Chapter: NextPage = () => {
	const router = useRouter();
	const { id, ichapter } = router.query;
	return <Box>Temp</Box>;
};

export default Chapter;
