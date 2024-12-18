import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Greeting } from "./Greeting";
import { Card } from "./Card";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex flex-col gap-8">
				<Greeting />
				<div className="flex gap-4">
					<Card />
					<Card />
					<Card />
				</div>
				{/* <a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p> */}
			</div>
			{/* <p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p> */}
		</>
	);
}

export default App;
