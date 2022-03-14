import { Box, Heading, Image, Text } from '@chakra-ui/react';

export default function Card({
	title,
	desc,
	...rest
}: {
	title: string;
	desc: string;
}): JSX.Element {
	return (
		<Box
			p={3}
			shadow="md"
			borderWidth="1px"
			minWidth="300px"
			borderRadius="md"
			{...rest}
		>
			<Image
				src="https://via.placeholder.com/200x150"
				objectFit="cover"
				width="100%"
			/>
			<Heading fontSize="xl" paddingTop=".5em">
				{title}
			</Heading>
			<Text mt={4}>{desc}</Text>
		</Box>
	);
}
