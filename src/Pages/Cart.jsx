import { useEffect, useState } from "react";
import CartTable from "../components/CartTable";
import PageBanner from "../components/PageBanner";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

function Cart() {
	const { user } = useAuth();
	const [services, setServices] = useState();

	useEffect(() => {
		axios
			.get(`http://localhost:4000/service-bookings?email=${user?.email}`, {
				withCredentials: true,
			})
			.then((res) => setServices(res.data));
	}, [user?.email]);

	return (
		<div>
			<PageBanner head={"Cart Details"} subHead={"Home / Cart"} />
			{services?.length > 0 ? (
				<div className="my-20 lg:max-w-screen-md md:max-w-screen-sm mx-auto">
					<CartTable services={services} setServices={setServices} />
				</div>
			) : (
				<div>There is no services</div>
			)}
		</div>
	);
}

export default Cart;
