import {
	Box,
	Wrap,
	VStack,
	Textarea,
	Button,
	Text,
	Avatar,
	Divider,
	AbsoluteCenter,
	Center,
} from '@chakra-ui/react';
import { CalculateTimeDiff } from '../../helpers/TimeConvertHelper';

export default function CommentHolder({
	UserName,
	Comment,
	CommentDate,
	haveReply, // Note: Temporary for indicating comment have reply
}: {
	UserName: string;
	Comment: string;
	CommentDate: Date;
	haveReply?: boolean;
}): JSX.Element {
	return (
		<Box border="1px" borderColor="gray.300" borderRadius="md" w="full">
			<Box position="relative" px={5} pb={7} pt={5}>
				<Box display="flex">
					<Box
						display="flex"
						flexDir="column"
						alignItems="center"
						borderRight="1px"
						px={4}
						pb={5}
						w="3xs"
					>
						<Avatar size="sm" />
						<Text>{UserName}</Text>
						<Text as="sub">{CalculateTimeDiff(CommentDate)}</Text>
					</Box>
					<Box w="auto" pl={4}>
						{Comment}
					</Box>
				</Box>
				<Button
					variant="link"
					position="absolute"
					bottom={2}
					right={10}
					fontSize="sm"
				>
					Reply
				</Button>
			</Box>
			{haveReply ? (
				<>
					<Box
						pb={5}
						position="relative"
						_before={{
							content: '""',
							border: '1px',
							position: 'absolute',
							height: '100%',
							top: '-50px',
							left: '90px',
							borderColor: 'gray.300',
						}}
					>
						<Divider my={4} />
						<Box
							display="flex"
							pl={24}
							position="relative"
							_before={{
								content: '""',
								display: 'inline-block',
								width: '15px',
								height: '15px',
								borderRadius: '7.5px',
								position: 'absolute',
								top: '50%',
								left: '83px',
								bgColor: 'background',
							}}
						>
							<Box
								display="flex"
								flexDir="column"
								alignItems="center"
								borderRight="1px"
								px={4}
								pb={5}
								w="3xs"
							>
								<Avatar size="sm" />
								<Text>{UserName}</Text>
								<Text as="sub">
									{CalculateTimeDiff(CommentDate)}
								</Text>
							</Box>
							<Box w="auto" pl={4}>
								{Comment}
							</Box>
						</Box>

						<Divider my={4} />
						<Box
							display="flex"
							pl={24}
							position="relative"
							_before={{
								content: '""',
								display: 'inline-block',
								width: '15px',
								height: '15px',
								borderRadius: '7.5px',
								position: 'absolute',
								top: '50%',
								left: '83px',
								bgColor: 'background',
							}}
						>
							<Box
								display="flex"
								flexDir="column"
								alignItems="center"
								borderRight="1px"
								px={4}
								pb={5}
								w="3xs"
							>
								<Avatar size="sm" />
								<Text>{UserName}</Text>
								<Text as="sub">
									{CalculateTimeDiff(CommentDate)}
								</Text>
							</Box>
							<Box w="auto" pl={4}>
								{Comment}
							</Box>
						</Box>
					</Box>
					<Center>
						<Button
							variant="link"
							alignSelf="center"
							p={3}
							pt={0}
							_focus={{ boxShadow: 'none' }}
						>
							More
						</Button>
					</Center>
				</>
			) : (
				''
			)}
		</Box>
	);
}
