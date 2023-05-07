import { useState } from "react";

function Navbar({ setPage }: { setPage: (page: string) => void }) {
	const [isActive, setIsActive] = useState("planets");
	return (
		<nav>
			<button
				className={isActive === "planets" ? "active" : ""}
				onClick={() => {
					setIsActive("planets");
					setPage("planets");
				}}
			>
				Planets
			</button>
			<button
				className={isActive === "people" ? "active" : ""}
				onClick={() => {
					setIsActive("people");
					setPage("people");
				}}
			>
				People
			</button>
		</nav>
	);
}
export default Navbar;
