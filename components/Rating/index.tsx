import {
	Box,
	Button,
	Heading,
	HStack,
	Icon,
	Image,
	Text,
} from '@chakra-ui/react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const RatingIcon = (fill: boolean, iconSize: number, fillColor: string) => (
	<Icon
		as={fill ? AiFillStar : AiOutlineStar}
		size={`${iconSize}px`}
		color={fillColor}
		stroke={fillColor}
	/>
);

export default function Rating({
	avgRating,
	maxRating,
}: {
	avgRating: number;
	maxRating: number;
}): JSX.Element {
	if (avgRating > maxRating)
		throw Error('Rating cannot greater than max rating');
	const ratingElem: JSX.Element[] = [];
	for (let i = 0; i < maxRating; i++) {
		if (i + 1 <= avgRating)
			ratingElem.push(RatingIcon(true, 30, '#ffdb1b'));
		else ratingElem.push(RatingIcon(false, 30, '#ffdb1b'));
	}
	return <HStack py={3}>{ratingElem}</HStack>;
}
