// import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div>
			<div className="max-w-screen-xl mx-auto">
				<NavBar />
				<Outlet />
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
