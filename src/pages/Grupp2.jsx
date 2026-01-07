import KTH from "../assets/logos/KTH-white.svg";
import Knowit from "../assets/logos/Knowit.svg";
import Internetstiftilsen from "../assets/logos/Internetstiftelsen.svg";
import Header from "../components/Header";
import SwiperComponent from "../components/SwiperComponent";
import Hero from "../assets/grupp2/1.png";
import Slide2 from "../assets/grupp2/9.png";
import Agenda from "../assets/grupp2/2.png";
import Agenda1 from "../assets/grupp2/8.png";
import SlideBg from "../assets/grupp2/9.png";
import Exclamation from "../assets/grupp1/icons/exclamation.svg";
import Context from "../assets/grupp2/icons/context.svg";
import Gap from "../assets/grupp2/icons/gap.svg";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";

export default function Grupp2() {
	// Agenda toggle
	const agendaItems = [
		{ id: 1, content: "The Purpose" },
		{ id: 2, content: "Why Challenge?" },
		{ id: 3, content: "The Core Challenge" },
		{ id: 4, content: "Strategic Value" },
		{ id: 5, content: "Future of Haninge" },
		{ id: 6, content: "Conclusion" }
	];

	const [toggleAgenda, setToggleAgenda] = useState([]);

	const toggleItem = (id) => {
		setToggleAgenda((prev) =>
			prev.includes(id)
				? prev.filter((n) => n !== id)
				: [...prev, id]
		);
	};

	// Slide items toggle
	const [activeId, setActiveId] = useState(null);

	const toggleActive = (id) => {
		setActiveId((prev) => (prev === id ? null : id));
	};

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
					{/* Agenda */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<h3 className="px-16 text-5xl font-semibold">Agenda</h3>
						<div className="max-w-[1800px] place-items-center px-16 grid grid-cols-6 items-center w-full h-full">
							{agendaItems.map((item, index) => {
								const isTop = index % 2 === 0;
								const isOpen = toggleAgenda.includes(item.id)
								const hasActive = toggleAgenda.length > 0
								const opacityClass = isOpen
									? "opacity-100"
									: hasActive
										? "opacity-60"
										: "opacity-70"

								return (
									<div
										key={item.id}
										onClick={() => toggleItem(item.id)}
										className={`relative bg-[#C8A9CA] w-28 h-28 rounded-full cursor-pointer flex items-center justify-center transition-opacity duration-300 ${opacityClass}`}
									>
										<span className="text-5xl font-bold">{item.id}</span>
										<div
											className={`absolute left-1/2 -translate-x-1/2 w-[1px] bg-white
												transition-[height,opacity] duration-200 ease-out
												${isTop ? "bottom-full" : "top-full"}
												${isOpen ? "h-10 opacity-100" : "h-0 opacity-50"}
											`}
										/>
										<div
											className={`absolute left-1/2 -translate-x-1/2 min-w-56
												transition-all duration-300 ease-out delay-300
												${isTop ? "bottom-full mb-12" : "top-full mt-12"}
												${isOpen
													? "opacity-100 translate-y-0"
													: "opacity-0 translate-y-2 pointer-events-none"
												}
											`}
										>
											<div className="text-center text-2xl font-semibold">
												{item.content}
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#B4CBFF] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold text-[#450744]">1</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-6xl w-4/5">The Purpose</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Sustainable Community Development</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">The Purpose</h1>
						<div className="h-full max-w-[1800px] grid grid-cols-3">
							<div
								onClick={() => toggleActive(1)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 1 ? "opacity-30" : "opacity-100"}`}
							>
								<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
									<img src={Context} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-3xl font-medium">The context</h4>
									{activeId === 1 && <p className="absolute pt-3 text-lg">Urbanization is rapidly increasing, with 68% of the global population expected to live in cities by 2050.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(2)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 2 ? "opacity-30" : "opacity-100"}`}
							>
								<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
									<img src={Exclamation} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-3xl font-medium">The problem</h4>
									{activeId === 2 && <p className="absolute pt-3 text-lg">Organizational barriers prevent the right decision-makers from accessing relevant data.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(3)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 3 ? "opacity-30" : "opacity-100"}`}
							>
								<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
									<img src={Gap} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-3xl font-medium">The gap</h4>
									{activeId === 3 && <p className="absolute pt-3 text-lg">Current planning suffers from incompatible data formats and lack of organizational standards.</p>}
								</div>
							</div>
						</div>
					</SwiperSlide>
				</SwiperComponent>
			</div>
		</section>
	);
}

