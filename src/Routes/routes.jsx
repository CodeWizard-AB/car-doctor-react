import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/services",
				element: <h2>Service</h2>,
			},
			{
				path: "/about",
				element: <h2>About</h2>,
			},
			{
				path: "/contact",
				element: <h2>Contact</h2>,
			},
			{
				path: "/blog",
				element: <h2>Blog</h2>,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
		],
	},
]);

export default router;
