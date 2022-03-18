import {
	Box,
	Heading,
	Table,
	Link,
	Divider,
	BoxProps,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Tfoot,
} from '@chakra-ui/react';

import Pagination from '../Pagination';

export default function ChapterList({
	styles,
}: {
	styles: BoxProps;
}): JSX.Element {
	return (
		<Box p={3} {...styles}>
			<Heading as="h4" fontWeight="200">
				Chapter List
			</Heading>
			<Divider py={3} />
			<Table size="md" variant="simple">
				<Thead>
					<Tr>
						<Th w="8%" isNumeric>
							#
						</Th>
						<Th>Chapter</Th>
						<Th isNumeric>Up Date</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td textAlign="right">3</Td>
						<Td>
							<Link href="/">chap 3</Link>
						</Td>
						<Td isNumeric>18/03/2022</Td>
					</Tr>
					<Tr>
						<Td textAlign="right">2</Td>
						<Td>
							<Link href="/">chap 2</Link>
						</Td>
						<Td isNumeric>18/03/2022</Td>
					</Tr>
					<Tr>
						<Td textAlign="right">1</Td>
						<Td>
							<Link href="/">chap 1</Link>
						</Td>
						<Td isNumeric>18/03/2022</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr pt={2}>
						<th colSpan={3} style={{ paddingTop: '2em' }}>
							<Pagination
								iPageIndex={1}
								iPaginatorRange={4}
								iTotalPage={7}
								styles={{ float: 'right' }}
							/>
						</th>
					</Tr>
				</Tfoot>
			</Table>
			{/* <Pagination iPageIndex={1} iPaginatorRange={4} iTotalPage={7} /> */}
		</Box>
	);
}
