import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from '../styles/Home.module.css';
import { setValue, selectExampleValue } from '../redux/Slices/exampleSlices';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';

const Home: NextPage = () => {
	const dispatch = useAppDispatch();
	const exampleValue = useAppSelector(selectExampleValue);

	const randomExampleValue = () => {
		dispatch(
			setValue({
				value: uuidv4(),
			}),
		);
	};
	return (
		<div className={styles.main}>
			<Head>
				<title>React + Redux skeleton</title>
				<meta name="description" content="React + Redux skeleton app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.grid}>
				<h2 style={{ width: '100%', textAlign: 'center' }}>
					{exampleValue.value}
				</h2>
				<button
					className={styles.btnCustom}
					type="button"
					onClick={randomExampleValue}
				>
					Random Value
				</button>
			</div>
		</div>
	);
};

export default Home;
