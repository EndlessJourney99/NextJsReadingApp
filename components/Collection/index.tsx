import { Box } from '@chakra-ui/react';
import { useRef } from 'react';

import Card from '../Card';

let collectionClientX = 0;
let collectionScrollX = 0;
let collectionIsScrolling = false;
export default function Collection(): JSX.Element {
	const containerRef = useRef<HTMLDivElement>(null);

	const onMouseDown = (e: any) => {
		// this.setState({ ...this.state, isScrolling: true, clientX: e.clientX });
		collectionIsScrolling = true;
		collectionClientX = e.clientX;
	};

	const onMouseUp = () => {
		collectionIsScrolling = false;
	};

	const onMouseMove = (e: any) => {
		if (collectionIsScrolling && containerRef.current !== null) {
			collectionScrollX = containerRef.current.scrollLeft;
			const xCalculatedScroll =
				e.clientX > collectionClientX
					? collectionClientX - e.clientX
					: Math.abs(collectionClientX - e.clientX);
			// console.log(scrollX + xCalculatedScroll);
			containerRef.current.scrollLeft =
				collectionScrollX + xCalculatedScroll;
			collectionClientX = e.clientX;
		}
	};
	return (
		<Box
			display="flex"
			flexWrap="nowrap"
			overflowX="scroll"
			height="inherit"
			columnGap="1.2em"
			paddingBottom={2}
			ref={containerRef}
			css={{
				'&::-webkit-scrollbar': {
					width: '2px',
					height: '5px',
				},
				'&::-webkit-scrollbar-track': {
					width: '2px',
					height: '5px',
				},
				'&::-webkit-scrollbar-thumb': {
					background: '#6a6a6a',
					borderRadius: '10px',
				},
			}}
			cursor="grab"
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseUp}
			onMouseMove={onMouseMove}
		>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				minWidth="25%"
				userSelect="none"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				minWidth="25%"
				userSelect="none"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				minWidth="25%"
				userSelect="none"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				minWidth="25%"
				userSelect="none"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				minWidth="25%"
				userSelect="none"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				minWidth="25%"
				userSelect="none"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				minWidth="25%"
				userSelect="none"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				minWidth="25%"
				userSelect="none"
			/>
		</Box>
	);
}
