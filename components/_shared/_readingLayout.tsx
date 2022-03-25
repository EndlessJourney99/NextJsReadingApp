import { Search2Icon } from '@chakra-ui/icons';
import {
	Flex,
	Link,
	Image,
	Box,
	Input,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	HStack,
	MenuGroup,
	MenuDivider,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from '@chakra-ui/react';
import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { BsFillSunFill, BsFonts } from 'react-icons/bs';

import Footer from '../Footer';

// TODO: Create footer for layout
const ReadingLayout = ({ children }: { children: JSX.Element[] }) => (
	<>
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
			<HStack spacing={3} display={['none', 'none', 'none', 'block']}>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label="Background"
						icon={<BsFillSunFill />}
						variant="outline"
						size="md"
						fontSize="1.5em"
					/>
					<MenuList>
						<MenuItem>Nền Trắng</MenuItem>
						<MenuItem>Nền Tối</MenuItem>
						<MenuItem>Nền Vàng</MenuItem>
						<MenuItem>Nền Xanh Đen</MenuItem>
					</MenuList>
				</Menu>

				<Menu>
					<MenuButton
						as={IconButton}
						aria-label="Background"
						icon={<BsFonts />}
						variant="outline"
						size="md"
						fontSize="1.5em"
					/>
					<MenuList>
						<MenuGroup title="Font Size">
							<MenuItem>
								<Slider
									aria-label="slider-ex-1"
									defaultValue={15}
									min={5}
									max={100}
								>
									<SliderTrack>
										<SliderFilledTrack />
									</SliderTrack>
									<SliderThumb />
								</Slider>
							</MenuItem>
						</MenuGroup>
						<MenuDivider />
						<MenuGroup title="Help">
							<MenuItem>Docs</MenuItem>
							<MenuItem>FAQ</MenuItem>
						</MenuGroup>
					</MenuList>
				</Menu>
			</HStack>

			<Box
				minWidth="20%"
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
			</Box>
		</Flex>
		<main style={{ minHeight: 'calc(100vh - 409px)' }}>{children}</main>
		<Footer />
	</>
);

export default ReadingLayout;
