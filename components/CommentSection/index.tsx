import {
	Box,
	Heading,
	VStack,
	Textarea,
	Button,
	Center,
} from '@chakra-ui/react';
import { useState } from 'react';

import CommentHolder from './_commentHolder';

const tempDate = new Date();
tempDate.setDate(tempDate.getDate() - 5);
export default function CommentSection(): JSX.Element {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Box position="relative" w="6xl" mx="auto">
			<VStack alignItems="start" spacing={3}>
				<Heading as="h2" alignSelf="start">
					Comment
				</Heading>
				<Textarea placeholder="Comment..." color="black" />
				<Button
					bg="Background"
					px={10}
					alignSelf="end"
					color="white"
					_hover={{ color: 'white' }}
				>
					Send
				</Button>
				<CommentHolder
					UserName="EndlessJourney"
					Comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita iusto, facilis ratione quae, quis debitis totam accusantium inventore, rerum voluptatem veniam. Sequi pariatur totam odit est quisquam placeat neque omnis!"
					CommentDate={tempDate}
					haveReply
				/>
				<CommentHolder
					UserName="EndlessJourney"
					Comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita iusto, facilis ratione quae, quis debitis totam accusantium inventore, rerum voluptatem veniam. Sequi pariatur totam odit est quisquam placeat neque omnis!"
					CommentDate={tempDate}
				/>
				<CommentHolder
					UserName="EndlessJourney"
					Comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita iusto, facilis ratione quae, quis debitis totam accusantium inventore, rerum voluptatem veniam. Sequi pariatur totam odit est quisquam placeat neque omnis!"
					CommentDate={tempDate}
				/>
				<CommentHolder
					UserName="EndlessJourney"
					Comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita iusto, facilis ratione quae, quis debitis totam accusantium inventore, rerum voluptatem veniam. Sequi pariatur totam odit est quisquam placeat neque omnis!"
					CommentDate={tempDate}
				/>
				<Center w="full">
					<Button
						variant="link"
						alignSelf="center"
						p={3}
						pt={0}
						_focus={{ boxShadow: 'none' }}
						isLoading={isLoading}
						onClick={() => {
							setIsLoading(true);
							setTimeout(() => {
								setIsLoading(false);
							}, 1000);
						}}
					>
						More
					</Button>
				</Center>
			</VStack>
		</Box>
	);
}
