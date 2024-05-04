import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
	const location = useLocation();
	return (
		<div>
			<Toaster position="left top" />
			<div className="max-w-screen-xl mx-auto">
				<NavBar />
				<Outlet />
			</div>
			{location.pathname !== "/login" && location.pathname !== "/signup" && (
				<Footer />
			) }
		</div>
	);
}

export default App;
