import React from 'react';
import { Brightness } from '../components/Brightness';
import ColorChange from '../components/ColorChange';
import { NavBar } from '../components/NavBar';
import { Temp } from '../components/Temp';
import 'App.scss';

export default function App() {
	return (
		<div className={"container"}>

			<main className={"main"}>
				<NavBar />

				<Brightness />

				<ColorChange />

				<Temp />
			</main>
		</div>
	);
}
