import IPerson from "../interfaces/IPerson";

function Person({ person }: { person: IPerson }) {
	return (
		<div className="card">
			<h3>{person.name}</h3>
			<p>Gender: {person.gender}</p>
			<p>Birth Year: {person.birth_year}</p>
		</div>
	);
}
export default Person;
