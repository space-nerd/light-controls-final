import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Brightness } from '../components/Brightness';
import ColorChange from '../components/ColorChange';
import { NavBar } from '../components/NavBar';
import { Temp } from '../components/Temp';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Light Controls</title>
				<meta name="description" content="Controls for my lights" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#000000" />
				<link rel="apple-touch-icon" href="/logo192.png" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<NavBar />

				<Brightness />

				<ColorChange />

				<Temp />
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
