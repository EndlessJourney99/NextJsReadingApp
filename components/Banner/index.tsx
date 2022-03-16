import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

export default function Banner(): JSX.Element {
	return (
		<Box position="relative" width="100%" height="600px" overflow="hidden">
			<Image
				src="https://picsum.photos/1920/1080"
				objectFit="cover"
				width="100%"
			/>
			<Box
				position="absolute"
				top="0"
				left="0"
				right="0"
				bottom="0"
				backgroundColor="#47484880"
				display="flex"
				justifyContent="center"
				alignItems="flex-end"
			>
				<Stack color="white" alignItems="center" paddingBottom="3em">
					<Heading as="h2">Title</Heading>
					<Text width="50%" fontSize="1xl" textAlign="center">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Velit libero eveniet inventore, rerum ratione id
						nemo commodi qui aspernatur minus adipisci sunt aliquam
						quia nisi, deleniti in earum beatae? Accusantium?
					</Text>
				</Stack>
			</Box>
		</Box>
	);
}
