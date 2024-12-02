
function Card() {
	return (
		<div className="p-8 flex flex-col items-center bg-zinc-900 rounded-xl gap-4 hover:shadow-xl transition-shadow">
			<img src="react.svg" alt="" className="size-32" />
			<h1>This is a <span className="italic">card</span></h1>
			<h2>It contains some text</h2>
		</div>
	);
}

export { Card };
