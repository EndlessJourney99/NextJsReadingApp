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

export default function ReadingNav(): JSX.Element {
	const [heartIcon, setHeartIcon] = useState(() => AiOutlineHeart);

	return (
		<Flex
			flexDirection="row"
			justifyContent={['center', 'center', 'center', 'space-between']}
			maxHeight="70px"
			padding="1em"
			boxShadow="0px 1px 5px 0px #858585"
		>
			temp
		</Flex>
	);
}
