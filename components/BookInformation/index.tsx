import {
	Box,
	Flex,
	Heading,
	Text,
	FlexProps,
	Badge,
	Divider,
	Tag,
} from '@chakra-ui/react';
import ChapterList from '../ChapterList';
import CommentSection from '../CommentSection';
import Rating from '../Rating';
import SlideShow from '../SlideShow';

export default function BookInformation({
	Title,
	Desc,
	Style,
}: {
	Title: string;
	Desc: string;
	Style?: FlexProps;
}): JSX.Element {
	return (
		<>
			<Flex {...Style} columnGap={4} wrap="wrap">
				<Box w="md" mx={['auto', 'auto', 'auto', '']}>
					<SlideShow />
				</Box>
				<Box w="2xl">
					<Heading as="h1" fontWeight="300">
						{Title}
					</Heading>
					<Rating avgRating={4} maxRating={5} />
					<Badge fontWeight={700} p={2}>
						On-Going
					</Badge>
					<Text pt={2}>{Desc}</Text>
					<Flex pt={3} wrap="wrap" columnGap={2} rowGap={2}>
						<Tag>#Shounen</Tag>
						<Tag>#comedy</Tag>
						<Tag>#NNN</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
						<Tag>#cate</Tag>
					</Flex>
				</Box>
			</Flex>
			<Divider pt={3} />
			<ChapterList
				styles={{ mt: '3', boxShadow: 'none', w: '6xl', mx: 'auto' }}
			/>
			<CommentSection />
		</>
	);
}
