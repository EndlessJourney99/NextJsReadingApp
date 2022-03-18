import {
	Box,
	Heading,
	HStack,
	IconButton,
	Image,
	List,
	ListItem,
	Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';

export default function SlideShow(): JSX.Element {
	const [isHovering, setIsHovering] = useState(false);
	const [selectedItem, setSelectedItem] = useState(0);

	const renderListImg = (iTotal: number): JSX.Element[] => {
		const lstImg: JSX.Element[] = [];
		for (let i = 0; i < iTotal; i++) {
			const imgPath = `https://picsum.photos/500/46${i}`;
			lstImg.push(
				<ListItem
					key={i}
					display={i === selectedItem ? '' : 'none'}
					maxH="inherit"
				>
					<Image
						src={imgPath}
						width="100%"
						draggable="false"
						objectFit="contain"
						borderRadius="md"
						maxH="inherit"
					/>
				</ListItem>,
			);
		}

		return lstImg;
	};

	const renderIndicator = (iTotal: number): JSX.Element[] => {
		const lstIndicator: JSX.Element[] = [];
		for (let i = 0; i < iTotal; i++) {
			lstIndicator.push(
				<ListItem float="left" key={i}>
					<GoPrimitiveDot
						size="1.35em"
						color={i === selectedItem ? 'black' : '#b1b1b1'}
						onClick={() => setSelectedItem(i)}
						cursor="pointer"
					/>
				</ListItem>,
			);
		}
		return lstIndicator;
	};

	return (
		<Box
			position="relative"
			onMouseOver={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<IconButton
				aria-label="backward"
				icon={
					<IoIosArrowBack
						style={{ marginLeft: 'auto', marginRight: 'auto' }}
					/>
				}
				position="absolute"
				left={-5}
				top="50%"
				translateY="-50%"
				size="lg"
				fontSize="2em"
				bg="Background"
				_hover={{ backgroundColor: 'Background' }}
				_focus={{ boxShadow: 'none' }}
				display={isHovering ? '' : 'none'}
				onClick={() =>
					selectedItem > 0 ? setSelectedItem(selectedItem - 1) : ''
				}
			/>

			<List maxH="md" overflow="hidden">
				{renderListImg(5)}
			</List>
			<IconButton
				aria-label="Forward"
				icon={
					<IoIosArrowForward
						style={{ marginLeft: 'auto', marginRight: 'auto' }}
					/>
				}
				position="absolute"
				right={-5}
				top="50%"
				translateY="-50%"
				size="lg"
				fontSize="2em"
				mx="auto"
				bg="Background"
				_hover={{ backgroundColor: 'Background' }}
				_focus={{ boxShadow: 'none' }}
				display={isHovering ? '' : 'none'}
				onClick={() =>
					selectedItem < 4 ? setSelectedItem(selectedItem + 1) : ''
				}
			/>
			<List display="flex" justifyContent="center" pt={1}>
				{renderIndicator(5)}
			</List>
		</Box>
	);
}
