import { Search2Icon, Icon } from '@chakra-ui/icons';
import {
	Flex,
	Image,
	Input,
	Box,
	Button,
	Link,
	Menu,
	MenuButton,
	MenuList,
	IconButton,
	MenuItem,
} from '@chakra-ui/react';
import { MdAccountCircle } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';

export default function Header(): JSX.Element {
	const [heartIcon, setHeartIcon] = useState(() => AiOutlineHeart);

	return (
		<Flex
			flexDirection="row"
			justifyContent={['center', 'center', 'center', 'space-between']}
			maxHeight="70px"
			padding="1em"
			boxShadow="0px 1px 5px 0px #858585"
		>
			<Link href="/" display="contents">
				<Image src="/vercel.svg" objectFit="contain" />
			</Link>
			<Box
				minWidth="40%"
				position="relative"
				display={['none', 'none', 'none', 'block']}
			>
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
			<Box
				paddingRight="3em"
				height="100%"
				display={['none', 'none', 'none', 'block']}
			>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label="User"
						icon={<MdAccountCircle />}
						variant="outline"
						size="md"
						fontSize="1.5em"
					/>
					<MenuList>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Subscribe</MenuItem>
						<hr />
						<MenuItem>Sign Out</MenuItem>
					</MenuList>
				</Menu>
				{/* <Icon
					width="2.3em"
					height="2.3em"
					as={MdAccountCircle}
					verticalAlign="bottom"
				/> */}

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
