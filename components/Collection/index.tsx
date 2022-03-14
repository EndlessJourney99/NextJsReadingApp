import { Box } from '@chakra-ui/react';

import Card from './card';

export default function Collection(): JSX.Element {
	return (
		<Box
			display="flex"
			flexWrap="nowrap"
			overflowX="scroll"
			height="inherit"
			columnGap="1.2em"
			paddingBottom={2}
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
		>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
			/>
		</Box>
	);
}
