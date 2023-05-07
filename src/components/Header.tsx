import Navbar from "./Navbar";

function Header({ setPage }: { setPage: (page: string) => void }) {
	return (
		<header>
			<h1>Star Wars Info</h1>
			<Navbar setPage={setPage} />
		</header>
	);
}
export default Header;
