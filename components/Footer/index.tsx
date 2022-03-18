import {
	Box,
	Heading,
	HStack,
	IconButton,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import {
	AiFillFacebook,
	AiFillGithub,
	AiFillTwitterCircle,
} from 'react-icons/ai';

export default function Footer(): JSX.Element {
	return (
		<Box
			position="relative"
			bottom={0}
			right={0}
			left={0}
			bgColor="Background"
		>
			<Stack color="white" alignItems="center" p={[2, 6, 20]}>
				<Heading as="h2">Footer</Heading>
				<Text width={['100%', '50%']} fontSize="1xl" textAlign="center">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Velit libero eveniet inventore, rerum ratione id nemo
					commodi qui aspernatur minus adipisci sunt aliquam quia
					nisi, deleniti in earum beatae? Accusantium?
				</Text>
				<HStack spacing={3} py={4}>
					<IconButton
						aria-label="Github"
						icon={<AiFillGithub />}
						colorScheme="blackAlpha"
						fontSize="lg"
					/>
					<IconButton
						aria-label="Twitter"
						icon={<AiFillTwitterCircle />}
						colorScheme="twitter"
						fontSize="lg"
					/>
					<IconButton
						aria-label="Facebook"
						icon={<AiFillFacebook />}
						colorScheme="facebook"
						fontSize="lg"
					/>
				</HStack>
			</Stack>
		</Box>
	);
}
