/* eslint-disable react/prop-types */
import checkout from "../assets/images/checkout/checkout.png";

function PageBanner({ head, subHead }) {
	return (
		<figure className="relative mt-2">
			<div
				className="absolute top-0 w-full h-full rounded-xl"
				style={{
					background:
						"linear-gradient(90deg, rgb(21, 21, 21),rgba(21, 21, 21, 0) 100%)",
				}}
			></div>
			<img src={checkout} alt="banner" className="w-full" />
			<figcaption className="absolute top-1/2 -translate-y-1/2 left-28 text-white text-5xl font-bold">
				{head}
			</figcaption>
			<p
				className="bottom-0 absolute bg-main left-1/2 -translate-x-1/2 font-medium text-xl text-white px-16 py-3"
				style={{
					clipPath: "polygon(11% 0, 89% 0, 100% 100%, 0% 100%)",
				}}
			>
				{subHead}
			</p>
		</figure>
	);
}

export default PageBanner;
