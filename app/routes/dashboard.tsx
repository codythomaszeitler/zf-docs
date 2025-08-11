export default function Dashboard() {
	const numbers = [];
	for (let i = 0; i < 1000; i++) {
		numbers.push(i);
	}

	return (
		<div style={{
		}}>
			{numbers.map(i => <p>{i}</p>)}
		</div>
	);
}