function Navbar({ setPage }: { setPage: (page: string) => void }) {
	return (
		<nav>
			<button onClick={() => setPage("planets")}>Planets</button>
			<button onClick={() => setPage("people")}>People</button>
		</nav>
	);
}
export default Navbar;
