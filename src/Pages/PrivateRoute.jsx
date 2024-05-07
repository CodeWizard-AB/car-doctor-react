/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "ldrs/reuleaux";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading)
		return (
			<div className="grid place-items-center py-20">
				<l-reuleaux
					size="37"
					stroke="5"
					stroke-length="0.15"
					bg-opacity="0.1"
					speed="1.2"
					color="black"
				></l-reuleaux>
			</div>
		);
	return user ? children : <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
