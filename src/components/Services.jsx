/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import ButtonMain from "./Button";

function Services() {
	const [services, setServices] = useState();

	useEffect(() => {
		fetch("services.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<section className="!mb-16">
			<SectionTitle>
				<p>Service</p>
				<p>Our Service Area</p>
				<p>
					The majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
				</p>
			</SectionTitle>
			<div className="grid grid-cols-3 gap-6">
				{services?.map((item) => (
					<ServiceCard key={item._id} service={item} />
				))}
			</div>
			<div className="grid place-items-center mt-14">
				<ButtonMain
					textCol="#ff3811"
					borderCol="#ff3811"
					bgCol="white"
					variant="outlined"
				>
					More Service
				</ButtonMain>
			</div>
		</section>
	);
}

export default Services;
