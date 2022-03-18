import { Box, Heading, Image, Text } from '@chakra-ui/react';

export default function Card(props: {
	title: string;
	desc: string;
	[key: string]: string;
}): JSX.Element {
	const { title, desc, ...rest } = props;
	return (
		<Box
			shadow="md"
			minWidth="250px"
			borderRadius="2xl"
			{...rest}
			overflow="hidden"
		>
			<Image
				src="https://picsum.photos/400/300"
				objectFit="cover"
				width="100%"
				draggable="false"
			/>
			<Box p={3}>
				<Heading fontSize="xl" paddingTop=".5em">
					{title}
				</Heading>
				<Text mt={4}>{desc}</Text>
			</Box>
		</Box>
	);
}
