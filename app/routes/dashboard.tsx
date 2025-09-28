export default function Dashboard() {
	// So is the issue here is that there is no minimum size to this
	// element?

	// So let's say this goes down to 10, what happens.

	// Also, what is super interesting here is that the route did not update on the top
	// of the screen.

	// Okay I am trying to remember what the issue originally was.
	const numbers = [];
	for (let i = 0; i < 3; i++) {
		numbers.push(i);
	}

	return (
		<div style={{
		}}>
			{numbers.map(i => <p>{i}</p>)}
		</div>
	);
}