/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import axios from "axios";
import ButtonMain from "./Button";
import ModalForm from "./ModalForm";
import { useState } from "react";

function CartTable({ services, setServices }) {
	const [open, setOpen] = useState(false);
	const [id, setId] = useState();

	const handleDelete = function (id) {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`http://localhost:4000/service-bookings/${id}`)
					.then(() => {
						setServices((items) => items.filter((item) => id !== item._id));
						Swal.fire({
							title: "Deleted!",
							text: "Your service has been deleted.",
							icon: "success",
						});
					});
			}
		});
	};

	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ width: "100%" }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{["", "Service", "Price", "Date", ""].map((item, i) => (
								<TableCell
									key={i * 999}
									align="center"
									sx={{
										fontSize: "24px",
									}}
								>
									{item}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{services?.map((service) => (
							<TableRow
								key={service._id}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell align="center">
									<button
										className="btn btn-square btn-error h-6"
										onClick={handleDelete.bind(null, service._id)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</TableCell>
								<TableCell align="center" sx={{ fontSize: "17px" }}>
									{service.title}
								</TableCell>
								<TableCell align="center" sx={{ fontSize: "17px" }}>
									${service.price}
								</TableCell>
								<TableCell align="center" sx={{ fontSize: "17px" }}>
									{service.date}
								</TableCell>
								<TableCell align="center">
									<ButtonMain
										variant={"contained"}
										event={() => {
											setOpen(true);
											setId(service._id);
										}}
									>
										Update
									</ButtonMain>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<ModalForm
				open={open}
				setOpen={setOpen}
				id={id}
				tableServices={services}
				setTableServices={setServices}
			/>
		</div>
	);
}

export default CartTable;
