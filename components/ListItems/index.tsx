import { Box } from '@chakra-ui/react';

import Card from '../Card';

export default function NewList({
	cardSize = 'xs',
}: {
	cardSize?: string;
}): JSX.Element {
	return (
		<Box
			display="flex"
			justifyContent="start"
			flexWrap="wrap"
			height="inherit"
			columnGap="1.2em"
		>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				width={cardSize}
				marginBottom="2em"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				width={cardSize}
				marginBottom="2em"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				width={cardSize}
				marginBottom="2em"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				width={cardSize}
				marginBottom="2em"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				width={cardSize}
				marginBottom="2em"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				width={cardSize}
				marginBottom="2em"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				width={cardSize}
				marginBottom="2em"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				width={cardSize}
				marginBottom="2em"
			/>
			<Card
				title="Title"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia doloremque perspiciatis. Aspernatur, atque doloremque sint accusantium temporibus"
				width={cardSize}
				marginBottom="2em"
			/>
		</Box>
	);
}
