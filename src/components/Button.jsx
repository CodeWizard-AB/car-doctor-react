/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

function ButtonMain({ variant, children, textCol, bgCol, borderCol, event }) {
	return (
		<Button
			type="submit"
			size="large"
			variant={variant}
			sx={{
				height: "50px",
				paddingX: "25px",
				color: textCol,
				borderColor: borderCol,
				background: bgCol,
				"&:hover": {
					backgroundColor: bgCol,
					color: textCol,
					borderColor: borderCol,
				},
			}}
			onClick={event}
		>
			{children}
		</Button>
	);
}

export default ButtonMain;
