import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";

function Home() {
	return (
		<div className="space-y-32">
			<Banner />
			<About />
			<Services />
		</div>
	);
}

export default Home;
