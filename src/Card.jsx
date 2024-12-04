function Card() {
	return (
		<div className="p-8 flex flex-col items-center bg-gray-200 dark:bg-zinc-900 rounded-xl gap-4 shadow-sm hover:shadow-lg transition-shadow dark:hover:shadow-gray-500">
			<img src="react.svg" alt="" className="size-32 animate-spin-slow" />
			<h1>
				This is a <span className="italic">card</span>
			</h1>
			<h2>It contains some text</h2>
		</div>
	);
}

export { Card };
