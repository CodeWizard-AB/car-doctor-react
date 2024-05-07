import ButtonMain from "./Button";
import person from "../assets/images/about_us/person.png";
import parts from "../assets/images/about_us/parts.png";

/* eslint-disable react/no-unescaped-entities */
function About() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
			<figure className="relative md:row-start-1 row-start-2">
				<img src={person} alt="person standing" />
				<img
					src={parts}
					alt="parts of cars"
					className="absolute -bottom-12 right-12 hidden lg:block"
				/>
			</figure>
			<div>
				<p className="text-main font-bold text-xl">About Us</p>
				<h2 className="text-5xl font-bold max-w-sm leading-tight my-6">
					We are qualified & of experience in this field
				</h2>
				<div className="tracking-wider max-w-lg space-y-6 mb-8">
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable.
					</p>
					<p>
						The majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable.
					</p>
				</div>
				<ButtonMain textCol="white" borderCol="#ff3811" bgCol="#ff3811">
					Get More Info
				</ButtonMain>
			</div>
		</div>
	);
}

export default About;
