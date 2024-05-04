import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerImages } from "../constant";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ButtonMain from "./Button";

function Banner() {
	let sliderRef = useRef(null);
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="slider-container relative">
			<Slider
				ref={(slider) => {
					sliderRef = slider;
				}}
				{...settings}
			>
				{bannerImages.map((image, i) => (
					<div
						key={i * 10}
						className="bg-cover bg-center bg-red-300 py-24 px-24"
						style={{
							backgroundImage: `url(${image})`,
						}}
					>
						<div className="max-w-96 space-y-8 text-white">
							<h1 className="text-6xl font-bold leading-tight">
								Affordable Price For Car Servicing
							</h1>
							<p>
								There are many variations of passages of available, but the
								majority have suffered alteration in some form.
							</p>
							<div className="space-x-4">
								<ButtonMain
									variant="contained"
									textCol="white"
									bgCol="#ff3811"
									borderCol="#ff3811"
								>
									Discover More
								</ButtonMain>
								<ButtonMain
									variant="outlined"
									textCol="white"
									borderCol="white"
								>
									Latest Project
								</ButtonMain>
							</div>
						</div>
					</div>
				))}
			</Slider>
			<div
				style={{ textAlign: "center" }}
				className="absolute bottom-14 flex gap-5 right-14 *:p-3 text-black *:bg-white/80 *:rounded-full hover:*:text-white *:transition-all *:duration-300 hover:*:bg-main"
			>
				<button className="button" onClick={() => sliderRef.slickPrev()}>
					<FaArrowLeft />
				</button>
				<button className="button" onClick={() => sliderRef.slickNext()}>
					<FaArrowRight />
				</button>
			</div>
		</div>
	);
}

export default Banner;
