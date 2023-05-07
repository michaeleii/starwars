import { useQuery } from "react-query";
import IPlanet from "../interfaces/IPlanet";
import Planet from "./Planet";

async function fetchPlanets() {
	const res = await fetch("http://swapi.dev/api/planets/");
	return res.json();
}
function Planets() {
	const { data, status } = useQuery("planets", fetchPlanets);
	console.log(data);
	return (
		<div>
			<h2>Planets</h2>
			{status === "loading" && <div>Loading data</div>}
			{status === "error" && <div>Error fetching data</div>}
			{status === "success" && (
				<div>
					{data.results.map((planet: IPlanet, i: number) => (
						<Planet key={i} planet={planet} />
					))}
				</div>
			)}
		</div>
	);
}
export default Planets;
