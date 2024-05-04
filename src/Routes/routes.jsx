import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>Not found</div>,
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
		],
	},
]);

export default router;
