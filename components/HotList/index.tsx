import {
	Box,
	Heading,
	VStack,
	OrderedList,
	ListItem,
	Text,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Link,
} from '@chakra-ui/react';

export default function HotList(props: { [key: string]: string }): JSX.Element {
	const { ...rest } = props;
	return (
		<Box p={3} boxShadow="md" borderRadius="md" {...rest}>
			<VStack alignItems="self-start">
				<Heading as="h4" fontWeight="200">
					Hot!
				</Heading>
				<Tabs width="100%">
					<TabList>
						<Tab>Day</Tab>
						<Tab>Week</Tab>
						<Tab>Month</Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<OrderedList spacing={3}>
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
							</OrderedList>
						</TabPanel>
						<TabPanel>
							<OrderedList>
								<ListItem>
									Lorem ipsum dolor sit amet 2
								</ListItem>
								<ListItem>Consectetur adipiscing elit</ListItem>
								<ListItem>
									Integer molestie lorem at massa
								</ListItem>
								<ListItem>
									Facilisis in pretium nisl aliquet
								</ListItem>
							</OrderedList>
						</TabPanel>
						<TabPanel>
							<OrderedList>
								<ListItem>
									Lorem ipsum dolor sit amet 3
								</ListItem>
								<ListItem>Consectetur adipiscing elit</ListItem>
								<ListItem>
									Integer molestie lorem at massa
								</ListItem>
								<ListItem>
									Facilisis in pretium nisl aliquet
								</ListItem>
							</OrderedList>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</VStack>
		</Box>
	);
}
