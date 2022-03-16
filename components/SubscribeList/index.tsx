import {
	Box,
	Heading,
	VStack,
	OrderedList,
	ListItem,
	Link,
	Divider,
} from '@chakra-ui/react';

export default function SubscribeList(props: {
	[key: string]: string;
}): JSX.Element {
	const { ...rest } = props;
	return (
		<Box p={3} boxShadow="md" borderRadius="md" {...rest}>
			<Heading as="h4" fontWeight="200">
				Subscribed List
			</Heading>
			<Divider py={3} />
			<OrderedList spacing={3} p={3}>
				<ListItem>
					<Link color="teal.500" href="/">
						Lorem ipsum dolor sit amet
					</Link>
				</ListItem>
				<ListItem>
					<Link color="teal.500" href="/">
						Consectetur adipiscing elit
					</Link>
				</ListItem>
				<ListItem>
					<Link color="teal.500" href="/">
						Integer molestie lorem at massa
					</Link>
				</ListItem>
				<ListItem>
					<Link color="teal.500" href="/">
						Facilisis in pretium nisl aliquet
					</Link>
				</ListItem>
				<ListItem>
					<Link color="teal.500" href="/">
						Facilisis in pretium nisl aliquet
					</Link>
				</ListItem>
				<ListItem>
					<Link color="teal.500" href="/">
						Facilisis in pretium nisl aliquet
					</Link>
				</ListItem>
			</OrderedList>
		</Box>
	);
}
