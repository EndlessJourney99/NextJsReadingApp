import { Button, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Pagination({
	iPageIndex,
	iPaginatorRange,
	iTotalPage,
}: {
	iPageIndex: number;
	iPaginatorRange: number;
	iTotalPage: number;
}): JSX.Element {
	const [activePage, setActivePage] = useState(iPageIndex);

	const renderPageNumber = (): JSX.Element[] => {
		const pageList: JSX.Element[] = [];
		const offset =
			activePage + 1 > iPaginatorRange
				? activePage - iPaginatorRange + 1
				: 0;
		for (let i = offset + 1; i <= iPaginatorRange + offset; i++) {
			if (i > iTotalPage) break;
			if (activePage === i)
				pageList.push(
					<ListItem float="left">
						<Button
							colorScheme="teal"
							variant="ghost"
							bg="teal.300"
							onClick={() => {
								setActivePage(i);
							}}
						>
							{i}
						</Button>
					</ListItem>,
				);
			else
				pageList.push(
					<ListItem float="left">
						<Button
							colorScheme="teal"
							variant="ghost"
							onClick={() => {
								setActivePage(i);
							}}
						>
							{i}
						</Button>
					</ListItem>,
				);
		}

		if (iPaginatorRange < iTotalPage && activePage < iTotalPage - 1) {
			pageList.push(
				<ListItem float="left">
					<Text py={3}>...</Text>
				</ListItem>,
				<ListItem float="left">
					<Button
						colorScheme="teal"
						variant="ghost"
						onClick={() => {
							setActivePage(iTotalPage);
						}}
					>
						{iTotalPage}
					</Button>
				</ListItem>,
			);
		}

		return pageList;
	};

	return (
		<List>
			<ListItem float="left">
				<Button
					colorScheme="teal"
					variant="ghost"
					px={3}
					onClick={() => {
						if (activePage > 1) setActivePage(activePage - 1);
					}}
				>
					<ListIcon
						as={IoIosArrowBack}
						color="blackAlpha.900"
						m={0}
					/>
				</Button>
			</ListItem>
			{renderPageNumber()}
			<ListItem float="left">
				<Button
					colorScheme="teal"
					variant="ghost"
					px={3}
					onClick={() => {
						if (activePage < iTotalPage)
							setActivePage(activePage + 1);
					}}
				>
					<ListIcon
						as={IoIosArrowForward}
						color="blackAlpha.900"
						m={0}
					/>
				</Button>
			</ListItem>
		</List>
	);
}
