import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { BsHandbag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../constant";
import ButtonMain from "./Button";
import { useState } from "react";
import Hamburger from "hamburger-react";
import AccountMenu from "./AccountMenu";
import BasicDrawer from "./Drawer";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className="flex justify-between items-center lg:*:flex *:items-center text-lg font-medium py-6 md:py-3 *:hidden lg:last:*:hidden last:*:block lg:px-0 px-6 first:*:block">
				<figure>
					<NavLink to="/">
						<img src={logo} alt="website logo" className="h-16 md:h-auto" />
					</NavLink>
				</figure>
				<ul className="gap-10">
					{navigation.map((item, i) => (
						<li key={i}>
							<NavLink
								to={item.link}
								className={({ isActive }) =>
									isActive ? "border-b-2 border-black py-1" : ""
								}
							>
								{item.title}
							</NavLink>
						</li>
					))}
				</ul>
				<div className="gap-4">
					<BsHandbag />
					<IoSearchOutline />
					<NavLink to="/login">
						<ButtonMain
							variant="outlined"
							textCol="#ff3811"
							borderCol="#ff3811"
							bgCol="white"
						>
							Appointment
						</ButtonMain>
					</NavLink>
					<AccountMenu />
				</div>
				<Hamburger toggled={isOpen} toggle={setIsOpen} />
			</nav>
			<BasicDrawer open={isOpen} setOpen={setIsOpen} />
		</>
	);
}

export default NavBar;
