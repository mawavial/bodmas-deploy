import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Calculator from '../components/calculator'



export default function Home(): JSX.Element {
	return (
		<div className={styles.container}>
			<Head>
				<title>Calculator</title>
				<meta name="description" content="A simple calculator" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Calculator />
		</div>
	)
}
