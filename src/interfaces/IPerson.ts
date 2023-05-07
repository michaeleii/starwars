interface Person {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: any[]; // Assuming species can be of any type
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
}

export default Person;
