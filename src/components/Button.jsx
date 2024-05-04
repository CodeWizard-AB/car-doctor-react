/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

function ButtonMain({ variant, children, textCol, bgCol, borderCol }) {
	return (
		<Button
			size="large"
			variant={variant}
			sx={{
				height: '50px',
				color: textCol,
				borderColor: borderCol,
				background: bgCol,
				"&:hover": {
					backgroundColor: bgCol,
					color: textCol,
					borderColor: borderCol,
				},
			}}
		>
			{children}
		</Button>
	);
}

export default ButtonMain;
