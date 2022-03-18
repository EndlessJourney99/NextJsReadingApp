import { HStack, Link, Button, StackProps } from '@chakra-ui/react';

export default function CategoriesList(props: StackProps): JSX.Element {
	const { ...rest } = props;
	return (
		<HStack
			justifyContent="center"
			py={4}
			spacing={4}
			wrap="wrap"
			rowGap={3}
			width="4xl"
			mx="auto"
			{...rest}
		>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link href="/" _hover={{ textDecoration: 'none' }}>
				<Button
					borderRadius="lg"
					variant="outline"
					px={9}
					color="background"
				>
					temp
				</Button>
			</Link>
			<Link color="Background" href="/category" p={2} fontWeight="500">
				More...
			</Link>
		</HStack>
	);
}
