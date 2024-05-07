/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

export default function ModalForm({
	open,
	setOpen,
	id,
	tableServices,
	setTableServices,
}) {
	const [serviceSelect, setServiceSelect] = React.useState("");
	const [selectDate, setSelectDate] = React.useState();
	const [services, setServices] = React.useState();

	React.useEffect(() => {
		axios
			.get("http://localhost:4000/car-services")
			.then((res) => setServices(res.data));
	}, [id]);

	React.useEffect(() => {
		id &&
			axios
				.get(`http://localhost:4000/service-bookings/${id}`)
				.then(({ data }) => {
					setServiceSelect(data.title);
					setSelectDate(dayjs(data.date));
				});
	}, [id]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleUpdate = function () {
		const price = services.find((item) => item.title === serviceSelect).price;
		const updateDate = new Date(selectDate.$d).toLocaleDateString();
		axios
			.patch(`http://localhost:4000/service-bookings/${id}`, {
				title: serviceSelect,
				date: updateDate,
				price,
			})
			.then(() => {
				const wholeServices = [...tableServices];
				const remaining = wholeServices.filter((service) => service._id !== id);
				const updated = wholeServices.find((service) => service._id === id);
				const allServices = [
					...remaining,
					{ ...updated, title: serviceSelect, price, date: updateDate },
				];
				setTableServices(allServices);
				handleClose();
			});
	};

	return (
		<React.Fragment>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
					Service Update
				</DialogTitle>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers sx={{ minWidth: 400 }}>
					<Box sx={{ minWidth: 120, marginBottom: "20px" }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Service</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={serviceSelect}
								onChange={(e) => setServiceSelect(e.target.value)}
							>
								{services?.map((item, i) => (
									<MenuItem key={i * 199} value={item.title}>
										{item.title}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>

					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DemoContainer components={["DatePicker"]}>
							{selectDate && (
								<DatePicker
									label="Date"
									sx={{ width: "100%" }}
									value={selectDate}
									onChange={(newDate) => setSelectDate(newDate)}
								/>
							)}
						</DemoContainer>
					</LocalizationProvider>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleUpdate}>
						Save changes
					</Button>
				</DialogActions>
			</BootstrapDialog>
		</React.Fragment>
	);
}
