import KTH from "../assets/logos/KTH-white.svg";
import Knowit from "../assets/logos/Knowit.svg";
import Internetstiftilsen from "../assets/logos/Internetstiftelsen.svg";
import Header from "../components/Header";
import SwiperComponent from "../components/SwiperComponent";
import Hero from "../assets/grupp2/1.png";
import Slide2 from "../assets/grupp2/9.png";
import { SwiperSlide } from "swiper/react";

export default function Grupp2() {
	return (
		<section className="min-h-screen bg-white text-black relative">
			<Header logo={KTH} textColor="text-white" position="absolute" shadow="none" />
			<div className="h-screen">
				<SwiperComponent>
					{/* Title */}
					<SwiperSlide className="text-white py-40">
						<img src={Hero} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full max-w-7xl flex flex-col justify-between">
							<div className="w-full py-8 flex flex-col justify-center gap-6 bg-gradient-to-r from-[#20154C] via-[#20154C] via-[65%] to-[#20154C]/0">
								<h1 className="px-16 font-medium leading-snug text-6xl">Sustainable Community Development</h1>
								<p className="px-16 text-2xl">A Data-Driven Strategy for 2050</p>
							</div>
							<div className="px-16">
								<h6 className="pb-8 text-xl">In collaboration with</h6>
								<div className="flex items-center gap-4">
									<figure className="rounded-full w-32 h-32 p-4 bg-white/80 flex items-center justify-center">
										<img className="w-full h-full" src={Internetstiftilsen} alt="Internetstiftilsen Logo" />
									</figure>
									<figure className="rounded-full w-32 h-32 p-4 bg-white/80 flex items-center justify-center">
										<img className="w-full h-full" src={Knowit} alt="Knowit Logo" />
									</figure>

								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Team */}
					<SwiperSlide className="text-white py-40">
						<img src={Slide2} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<h3 className="px-16 text-5xl font-semibold">Our Team</h3>
						<div className="max-w-[1800px] px-16 pt-16 grid grid-cols-4">
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#F9C9FF]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Kim Kleczkowski</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#F9C9FF]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Warisatil Ilmi</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#F9C9FF]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Astrid Celedon</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#F9C9FF]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Zaky Dzulfikar Harun</p>
							</div>
						</div>
						<div className="px-16 pt-16 w-3/4 mx-auto grid grid-cols-3 justify-items-center gap-16 ">
							<div className=" flex flex-col items-center justify-center gap-6 ">
								<figure className="w-36 h-36 rounded-full bg-[#F9C9FF]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Jeffrey Chang</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#F9C9FF]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Frida Lantz Bergkvist</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#F9C9FF]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Josefine Rafstedt</p>
							</div>
						</div>
					</SwiperSlide>
				</SwiperComponent>
			</div>
		</section>
	);
}

