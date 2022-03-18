import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

// TODO: Create footer for layout
const ReadingLayout = ({ children }: { children: JSX.Element[] }) => (
	<>
		<Header />
		<main style={{ minHeight: 'calc(100vh - 409px)' }}>{children}</main>
		<Footer />
	</>
);

export default ReadingLayout;
