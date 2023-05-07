import { useQuery } from "@tanstack/react-query";
import IPerson from "../interfaces/IPerson";
import Person from "./Person";
import { useState } from "react";

async function fetchPeople(page: number) {
	const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
	return res.json();
}

function People() {
	const [page, setPage] = useState(1);
	const { data, isLoading, isError, isPreviousData } = useQuery({
		queryKey: ["people", page],
		queryFn: () => fetchPeople(page),
		keepPreviousData: true,
	});
	return (
		<div>
			<h2>People</h2>
			{isLoading ? (
				<div>Loading data...</div>
			) : isError ? (
				<div>Error fetching data</div>
			) : (
				<>
					<div>
						{data.results.map((person: IPerson, i: number) => (
							<Person key={i} person={person} />
						))}
					</div>
					<div className="btn-container">
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
					</div>
				</>
			)}
		</div>
	);
}
export default People;
