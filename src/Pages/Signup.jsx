import { object, string } from "yup";
import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import ButtonMain from "../components/Button";
import FormInput from "../components/FormInput";

import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import linkedIn from "../assets/icons/linkedIn.png";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import "ldrs/lineSpinner";

const schema = object({
	name: string().required("Name is required"),
	email: string().email("Invalid email format").required("Email is required"),
	password: string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

function Signup() {
	const [error, setError] = useState(null);
	const [user, setUser] = useState({});
	const { loading, signUp } = useAuth();

	const validation = async () => {
		setError(null);
		try {
			await schema.validate(user, { abortEarly: false });
			return true;
		} catch (error) {
			const errors = {};
			error.inner.forEach((err) => {
				errors[err.path] = err.message;
			});
			setError(errors);
			return false;
		}
	};

	const handleSignUp = async function () {
		const validate = await validation();
		if (validate) {
			signUp(user);
			setError(null);
		}
	};

	return (
		<section className="grid grid-cols-2 items-center mb-20">
			<figure>
				<img src={login} alt="login illustration" />
			</figure>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="p-16 border rounded-xl flex flex-col"
			>
				<h2 className="text-center font-semibold text-4xl mb-12">Sign Up</h2>
				<FormInput
					type="text"
					label="Name"
					id="name"
					value={user?.name || ""}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
					error={error}
				/>
				<FormInput
					type="email"
					label="Email"
					id="email"
					value={user?.email || ""}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					error={error}
				/>
				<FormInput
					type="password"
					label="Password"
					id="password"
					value={user?.password || ""}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					error={error}
				/>
				<ButtonMain
					variant="contained"
					bgCol="#ff3811"
					borderCol="#ff3011"
					textCol="white"
					event={handleSignUp}
				>
					{!loading ? (
						"Sign Up"
					) : (
						<l-line-spinner
							size="30"
							stroke="2"
							speed="1"
							color="white"
						></l-line-spinner>
					)}
				</ButtonMain>
				<p className="text-center my-8 font-medium text-lg">Or Sign Up with</p>
				<div className="flex justify-center gap-6 *:cursor-pointer mb-12">
					<img src={google} alt="google" />
					<img src={linkedIn} alt="linkedIn" />
					<img src={facebook} alt="facebook" />
				</div>
				<p className="text-center font-semibold text-lg">
					Already have an account?{"  "}
					<Link to="/login" className="text-main">
						Login
					</Link>
				</p>
			</form>
		</section>
	);
}

export default Signup;
