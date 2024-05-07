import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { checkOutForm } from "../constant";
import ButtonMain from "../components/Button";
import Swal from "sweetalert2";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

function Checkout() {
	const { user } = useAuth();
	const service = useLoaderData();
	const navigate = useNavigate();
	const [fieldValue, setFieldValue] = useState({
		email: user?.email,
		fullName: user?.displayName,
	});

	const handleCheckout = function (e) {
		e.preventDefault();
		axios
			.post("http://localhost:4000/service-bookings", {
				...fieldValue,
				price: service.price,
				title: service.title,
				service_id: service.service_id,
			})
			.then(() => {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Your booking has been confirmed",
					showConfirmButton: false,
					timer: 1500,
				}).then(() => navigate("/cart"));
			});
	};

	return (
		<div>
			<PageBanner head="Check Out" subHead="Home / Checkout" />
			<form
				onSubmit={handleCheckout}
				className="bg-[#F3F3F3] p-24 grid grid-cols-2 gap-6 my-20 rounded-xl last:*:col-span-2"
			>
				<h2 className="col-span-2 text-center text-3xl font-medium mb-5">
					Service: {service.title}
				</h2>

				{checkOutForm.map((item, i) =>
					item.type === "date" ? (
						<LocalizationProvider dateAdapter={AdapterDayjs} key={i * 99}>
							<DatePicker
								label={item.label}
								sx={{ background: "white" }}
								required={true}
								value={null}
								onChange={(e) => {
									setFieldValue({
										...fieldValue,
										[item.name]: new Date(e.$d).toLocaleDateString(),
									});
								}}
								slotProps={{
									textField: {
										required: true,
									},
								}}
							/>
						</LocalizationProvider>
					) : (
						<TextField
							type={item.type}
							id={item.name}
							label={item.label}
							variant="outlined"
							multiline={i + 1 === checkOutForm.length ? true : false}
							rows={6}
							key={i * 99}
							className={`${
								i + 1 === checkOutForm.length && "col-span-2"
							} bg-white`}
							required={i !== checkOutForm.length - 1}
							value={fieldValue?.[item.name] || ""}
							onChange={(e) =>
								setFieldValue({ ...fieldValue, [item.name]: e.target.value })
							}
						/>
					)
				)}
				<ButtonMain variant="contained" bgCol="#ff3811" borderCol="#ff3811">
					Order Confirm
				</ButtonMain>
			</form>
		</div>
	);
}

export default Checkout;
