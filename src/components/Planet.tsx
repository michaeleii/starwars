import IPlanet from "../interfaces/IPlanet";

function Planet({ planet }: { planet: IPlanet }) {
	return (
		<div className="card">
			<h3>{planet.name}</h3>
			<p>Population: {planet.population}</p>
			<p>Terrain: {planet.terrain}</p>
		</div>
	);
}
export default Planet;
