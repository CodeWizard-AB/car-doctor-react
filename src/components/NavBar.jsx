import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { BsHandbag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../constant";
import ButtonMain from "./Button";
import { useState } from "react";
import Hamburger from "hamburger-react";

function NavBar() {
	const [isOpen, setOpen] = useState(false);

	return (
		<nav className="flex justify-between items-center lg:*:flex *:items-center text-lg font-medium py-6 md:py-3 *:hidden lg:last:*:hidden last:*:block lg:px-0 px-6 first:*:block">
			<figure>
				<img src={logo} alt="website logo" className="h-16 md:h-auto" />
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
				<ButtonMain
					variant="outlined"
					textCol="#ff3811"
					borderCol="#ff3811"
					bgCol="white"
				>
					Appointment
				</ButtonMain>
			</div>
			<Hamburger toggled={isOpen} toggle={setOpen} />
		</nav>
	);
}

export default NavBar;
