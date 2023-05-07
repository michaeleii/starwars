import { useQuery } from "@tanstack/react-query";
import IPlanet from "../interfaces/IPlanet";
import Planet from "./Planet";
import { useState } from "react";

async function fetchPlanets(page: number) {
	const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
	return res.json();
}
function Planets() {
	const [page, setPage] = useState(1);
	const { data, isLoading, isError, isPreviousData } = useQuery({
		queryKey: ["planets", page],
		queryFn: () => fetchPlanets(page),
		keepPreviousData: true,
	});
	return (
		<div>
			<h2>Planets</h2>
			{isLoading ? (
				<div>Loading data...</div>
			) : isError ? (
				<div>Error fetching data</div>
			) : (
				<>
					<button
						onClick={() => setPage((old) => Math.max(old - 1, 0))}
						disabled={page === 1}
					>
						Previous Page
					</button>{" "}
					<span>{page}</span>
					<button
						onClick={() => {
							if (!isPreviousData && data.next) {
								setPage((old) => old + 1);
							}
						}}
						// Disable the Next Page button until we know a next page is available
						disabled={isPreviousData || !data.next}
					>
						Next Page
					</button>
					<div>
						{data.results.map((planet: IPlanet, i: number) => (
							<Planet key={i} planet={planet} />
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default Planets;
