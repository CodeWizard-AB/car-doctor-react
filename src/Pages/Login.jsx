import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import ButtonMain from "../components/Button";
import FormInput from "../components/FormInput";

import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import linkedIn from "../assets/icons/linkedIn.png";
import "ldrs/lineSpinner";
import { useAuth } from "../contexts/AuthContext";

function Login() {
	const { logIn, loading } = useAuth();

	return (
		<section className="grid grid-cols-2 items-center mb-20">
			<figure>
				<img src={login} alt="login illustration" />
			</figure>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="p-16 border rounded-xl flex flex-col"
			>
				<h2 className="text-center font-semibold text-4xl mb-12">Login</h2>
				<FormInput type="email" label="Email" id="email" />
				<FormInput type="password" label="Password" id="password" />
				<ButtonMain
					variant="contained"
					bgCol="#ff3811"
					borderCol="#ff3011"
					textCol="white"
					// event={}
				>
					Sign In
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
