import logo from "../assets/logo.svg";

function Footer() {
	return (
		<footer className="py-28 bg-[#151515] text-white">
			<div className="max-w-screen-xl mx-auto md:footer px-10">
				<aside>
					<img src={logo} alt="website logo" />
					<p className="max-w-72">
						Edwin Diaz is a software and web technologies engineer, a life coach
						trainer who is also a serial .
					</p>
				</aside>
				<nav>
					<h6 className="footer-title">Services</h6>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</nav>
				<nav>
					<h6 className="footer-title">Company</h6>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</nav>
				<nav>
					<h6 className="footer-title">Legal</h6>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;
