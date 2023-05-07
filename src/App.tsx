import { useState } from "react";
import People from "./components/People";
import Planets from "./components/Planets";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
	const [page, setPage] = useState("planets");
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<Header setPage={setPage} />
				<div className="content">
					{page === "planets" ? <Planets /> : <People />}
				</div>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
