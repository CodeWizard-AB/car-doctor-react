/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";

function FormInput({ label, id, type, value, onChange, error }) {
	return (
		<div className="flex flex-col gap-5 mb-7">
			<label htmlFor={id} className="font-semibold text-xl">
				{label}
			</label>
			<TextField
				id={id}
				type={type}
				placeholder={`Your ${String(label).toLowerCase()}`}
				variant="outlined"
				InputProps={{
					sx: {
						"&.Mui-focused fieldset": {
							borderColor: "#fd7e14 !important",
						},
					},
				}}
				value={value}
				onChange={onChange}
				error={Boolean(error?.[id])}
				helperText={error?.[id]}
				required={true}
			/>
		</div>
	);
}

export default FormInput;
