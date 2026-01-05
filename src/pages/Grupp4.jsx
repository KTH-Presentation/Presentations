import KTH from "../assets/logos/KTH-white.svg";
import Knowit from "../assets/logos/Knowit.svg";
import Internetstiftilsen from "../assets/logos/Internetstiftelsen.svg";
import Header from "../components/Header";
import SwiperComponent from "../components/SwiperComponent";
import Hero from "../assets/grupp4/1.png";
import { SwiperSlide } from "swiper/react";

export default function Grupp4() {
	return (
		<section className="min-h-screen bg-white text-black relative">
			<Header logo={KTH} textColor="text-white" position="absolute" shadow="none" />
			<div className="h-screen">
				<SwiperComponent>
					{/* Title */}
					<SwiperSlide className="text-white py-40">
						<img src={Hero} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full max-w-7xl flex flex-col justify-between">
							<div className="w-full py-8 flex flex-col justify-center gap-6 bg-gradient-to-r from-[#02030E] via-[#02030E] via-[65%] to-[#02030E]/0">
								<h1 className="px-16 font-medium leading-snug text-6xl w-4/5">National IoT Infrastructures</h1>
								<p className="px-16 text-2xl">Exploring Requirements of Data Sharing</p>
							</div>
							<div className="px-16">
								<h6 className="pb-8 text-xl">In collaboration with</h6>
								<div className="flex items-center gap-4">
									<img className="rounded-full w-32 h-32 p-4 bg-white/80" src={Internetstiftilsen} alt="Internetstiftilsen Logo" />
									<img className="rounded-full w-32 h-32 p-4 bg-white/80" src={Knowit} alt="Knowit Logo" />
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Team */}
					<SwiperSlide className="text-white py-40">
						<div className="absolute inset-0 bg-[#061C39] w-full h-full object-cover -z-10" />
						<h3 className="px-16 text-5xl font-semibold">Our Team</h3>
						<div className="max-w-[1800px] px-16 pt-16 grid grid-cols-4">
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#79DBF7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Rebecka Wallmark Dänbro</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#79DBF7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Hrafnhildur Hekla Björnsdóttir</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#79DBF7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Vide Rabo</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#79DBF7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Halldóra Gísladóttir</p>
							</div>
						</div>
						<div className="px-16 pt-16 w-3/4 mx-auto grid grid-cols-3 justify-items-center gap-16 ">
							<div className=" flex flex-col items-center justify-center gap-6 ">
								<figure className="w-36 h-36 rounded-full bg-[#79DBF7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Anna Maria Danielsdottir</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#79DBF7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Daniel Rueda Garcia</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#79DBF7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Sebastian Torp</p>
							</div>
						</div>
					</SwiperSlide>
				</SwiperComponent>
			</div>
		</section>
	);
}

