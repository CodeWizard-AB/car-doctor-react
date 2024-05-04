import error from "../assets/images/error/Frame.png";
import { Link } from "react-router-dom";
import ButtonMain from "../components/Button";

function ErrorPage() {
	return (
		<div className="grid place-items-center h-screen">
			<figure className="flex flex-col items-center gap-10">
				<img src={error} alt="error page image" />
				<Link to="/">
					<ButtonMain variant="contained" bgCol="#ff3811" borderCol="#ff3811">
						Go to Home page
					</ButtonMain>
				</Link>
			</figure>
		</div>
	);
}

export default ErrorPage;
