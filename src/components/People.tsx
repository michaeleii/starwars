import { useQuery } from "react-query";
import IPerson from "../interfaces/IPerson";
import Person from "./Person";

async function fetchPeople() {
	const res = await fetch("http://swapi.dev/api/people/");
	return res.json();
}

function People() {
	const { data, status } = useQuery("people", fetchPeople);
	return (
		<div>
			<h2>People</h2>
			{status === "loading" && <div>Loading data...</div>}
			{status === "error" && <div>Error fetching data</div>}
			{status === "success" && (
				<div>
					{data.results.map((person: IPerson, i: number) => (
						<Person key={i} person={person} />
					))}
				</div>
			)}
		</div>
	);
}
export default People;
