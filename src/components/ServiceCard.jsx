/* eslint-disable react/prop-types */
import { GoArrowRight } from "react-icons/go";
function ServiceCard({ service }) {
	return (
		<figure className="bg-white p-6 border rounded-xl border-gray-300 hover:-translate-y-2 transition-all duration-500">
			<div
				className={`bg-[url(${service.img})] h-60 bg-cover bg-center rounded-xl`}
				style={{
					backgroundImage: `url(${service.img})`,
				}}
			></div>
			<figcaption className="grid gap-3 mt-4 grid-cols-[1fr_auto]">
				<p className="col-span-2 font-bold text-2xl">{service.title}</p>
				<p className="text-main font-semibold text-xl">
					Price: ${service.price}
				</p>
				<GoArrowRight size={24} color="#ff3811" cursor="pointer" />
			</figcaption>
		</figure>
	);
}

export default ServiceCard;
