import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import ButtonMain from "../components/Button";
import FormInput from "../components/FormInput";

import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import linkedIn from "../assets/icons/linkedIn.png";
import "ldrs/lineSpinner";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import "ldrs/lineSpinner";

function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const { logIn, loading } = useAuth();
	const [user, setUser] = useState({});

	const handleLogIn = function (e) {
		e.preventDefault();
		logIn(user).then((result) => {
			result && navigate(location.state || "/");
		});
	};	

	return (
		<section className="grid grid-cols-2 items-center mb-20">
			<figure>
				<img src={login} alt="login illustration" />
			</figure>
			<form
				onSubmit={handleLogIn}
				className="p-16 border rounded-xl flex flex-col"
			>
				<h2 className="text-center font-semibold text-4xl mb-12">Login</h2>
				<FormInput
					type="email"
					label="Email"
					id="email"
					value={user?.email || ""}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<FormInput
					type="password"
					label="Password"
					id="password"
					value={user?.password || ""}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
				<ButtonMain
					variant="contained"
					bgCol="#ff3811"
					borderCol="#ff3011"
					textCol="white"
				>
					{!loading ? (
						"Sign In"
					) : (
						<l-line-spinner
							size="30"
							stroke="2"
							speed="1"
							color="white"
						></l-line-spinner>
					)}
				</ButtonMain>
				<p className="text-center my-8 font-medium text-lg">Or Sign In with</p>
				<div className="flex justify-center gap-6 *:cursor-pointer mb-12">
					<img src={google} alt="google" />
					<img src={linkedIn} alt="linkedIn" />
					<img src={facebook} alt="facebook" />
				</div>
				<p className="text-center font-semibold text-lg">
					Don’t have an account yet?{" "}
					<Link to="/signup" className="text-main">
						Sign up
					</Link>
				</p>
			</form>
		</section>
	);
}

export default Login;
