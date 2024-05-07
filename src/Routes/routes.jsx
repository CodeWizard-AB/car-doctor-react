import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ErrorPage from "../Pages/ErrorPage";
import Checkout from "../Pages/Checkout";
import PrivateRoute from "../Pages/PrivateRoute";
import Cart from "../Pages/Cart";

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
				path: "/cart",
				element: (
					<PrivateRoute>
						<Cart />
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
			{
				path: "/checkout/:id",
				element: (
					<PrivateRoute>
						<Checkout />
					</PrivateRoute>
				),
				loader: ({ params: { id } }) =>
					fetch(`http://localhost:4000/car-services/${id}`),
			},
		],
	},
]);

export default router;
