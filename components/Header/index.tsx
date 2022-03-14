import { Search2Icon, Icon } from '@chakra-ui/icons';
import { Flex, Image, Input, Box, Button } from '@chakra-ui/react';
import { MdAccountCircle } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';

export default function Header(): JSX.Element {
	const [heartIcon, setHeartIcon] = useState(() => AiOutlineHeart);

	return (
		<Flex
			flexDirection="row"
			justifyContent="space-between"
			maxHeight="70px"
			padding="1em"
			boxShadow="0px 1px 5px 0px #858585"
		>
			<Image src="vercel.svg" objectFit="contain" />
			<Box minWidth="40%" position="relative">
				<Input placeholder="Search" maxWidth="100%" />
				<Button
					colorScheme="teal"
					variant="link"
					position="absolute"
					right="0.7em"
					top="35%"
					translateY="-50%"
					backgroundColor="none"
					_focus={{
						boxShadow: 'none',
					}}
				>
					<Search2Icon />
				</Button>
			</Box>
			<Box paddingRight="3em">
				<Icon
					width="2.3em"
					height="2.3em"
					as={MdAccountCircle}
					verticalAlign="bottom"
				/>

				<Button
					variant="outline"
					color="#ff4e4e"
					borderColor="#ff4e4e"
					paddingLeft="2em"
					paddingRight="2em"
					marginLeft="1.5em"
					onMouseOver={() => {
						setHeartIcon(() => AiFillHeart);
					}}
					onMouseOut={() => {
						setHeartIcon(() => AiOutlineHeart);
					}}
				>
					<Icon as={heartIcon} />
					&nbsp; Sponsor
				</Button>
			</Box>
		</Flex>
	);
}
