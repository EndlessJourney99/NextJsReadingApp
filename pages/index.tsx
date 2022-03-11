import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
	<div className={styles.container}>
		<Head>
			<title>React + Redux skeleton</title>
			<meta name="description" content="React + Redux skeleton app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	</div>
);

export default Home;
