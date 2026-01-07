import KTH from "../assets/logos/KTH-white.svg";
import Knowit from "../assets/logos/Knowit.svg";
import Internetstiftilsen from "../assets/logos/Internetstiftelsen.svg";
import Header from "../components/Header";
import SwiperComponent from "../components/SwiperComponent";
import Hero from "../assets/grupp4/1.png";
import Agenda from "../assets/grupp4/2.png";
import Agenda1 from "../assets/grupp4/7.png";
import SlideBg from "../assets/grupp4/4.png";
import Exclamation from "../assets/grupp1/icons/exclamation.svg";
import Border from "../assets/grupp4/icons/border.svg";
import Context from "../assets/grupp2/icons/context.svg";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";

export default function Grupp4() {
	// Agenda toggle
	const agendaItems = [
		{ id: 1, content: "Introduction" },
		{ id: 2, content: "Prepositions & Arguments" },
		{ id: 3, content: "Coherent Governance & Standardization Mechanisms" },
		{ id: 4, content: "Trust through Secure & Transparent Data-sharing Practices" },
		{ id: 5, content: "Continuous Learning through Collaborative Testbeds & Federated Systems" },
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
										: "opacity-80"

								return (
									<div
										key={item.id}
										onClick={() => toggleItem(item.id)}
										className={`relative bg-[#094979] w-28 h-28 rounded-full cursor-pointer flex items-center justify-center transition-opacity duration-300 ${opacityClass}`}
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
							<div className="relative bg-[#79DBF7] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold text-[#061C39]">1</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-6xl w-4/5">Introduction</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">Purpose & Research Question</h1>
						<div className="h-full max-w-[1800px] grid grid-cols-3">
							<div
								onClick={() => toggleActive(1)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 1 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-24 h-24 rounded-full flex items-center justify-center">
									<img src={Context} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-3xl font-medium">Purpose</h4>
									{activeId === 1 && <p className="absolute pt-3 text-lg">Investigate how a <span className="font-bold">national data-sharing infrastructure for IoT in public critical services</span> could be <span className="font-bold">designed and implemented</span> for the Swedish public sector.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(2)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 2 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
									<img src={Exclamation} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-3xl font-medium">Research Question</h4>
									{activeId === 2 && <p className="absolute pt-3 text-lg">What are the requirements for a reliable and scalable national IoT-data sharing infrastructure for public critical services in Sweden?</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(3)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 3 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
									<img src={Border} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-3xl font-medium">Delimitations</h4>
									{activeId === 3 && <p className="absolute pt-3 text-lg"><span><span className="font-bold">Technical focus</span>: Systemic perspective excluding specific technology recommendations</span><span className="block"><span className="font-bold">Organizational focus</span>: Inter-organizational perspective excluding employee/individual level.</span></p>}
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">The Bigger Picture</h1>
						<h2 className="px-16 leading-snug text-3xl w-4/5">IoT is Increasingly Part of National Infrastructures</h2>
						<div className="h-full max-w-[1800px] grid grid-cols-2 items-start pt-8 gap-8">
							<div
								onClick={() => toggleActive(4)}
								className={`px-16 flex flex-col w-fit items-center gap-4 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 4 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-20 h-20 rounded-full flex items-center justify-center">
									<span className="text-xl font-bold">1</span>
								</div>
								<div className="relative w-full">
									<h4 className="text-xl font-medium">Duarte, F., 2024</h4>
									{activeId === 4 && <p className=" pt-3 text-lg min-w-80">With the <span className="font-bold">rapid advancement of digitalisation</span>, there is a <span className="font-bold">growing demand for scalable IoT solutions</span>. Today, more than 15 billion devices are connected worldwide, a figure expected to more than double by 2030</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(5)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 5 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-20 h-20 rounded-full cursor-pointer flex items-center justify-center">
									<span className="text-xl font-bold">2</span>
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-xl font-medium">Adams and Nelson, 2022</h4>
									{activeId === 5 && <p className="absolute -left-[20%] pt-3 text-lg min-w-80">In practice, IoT data is frequently managed within <span className="font-bold">organizational silos</span>. This <span className="font-bold">isolates</span> information, <span className="font-bold">impedes</span> its effective use, and <span className="font-bold">inhibits</span> collaboration</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(6)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 6 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-20 h-20 rounded-full cursor-pointer flex items-center justify-center">
									<span className="text-xl font-bold">3</span>
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-xl font-medium">Oladele, 2024</h4>
									{activeId === 6 && <p className="absolute -left-[20%] pt-3 text-lg min-w-80">IoT is <span className="font-bold">increasingly embedded in critical sectors</span>, where it <span className="font-bold">enables smarter services and more efficient operations</span></p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(7)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 7 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-20 h-20 rounded-full cursor-pointer flex items-center justify-center">
									<span className="text-xl font-bold">4</span>
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-xl font-medium">Saarikko, Westergren and Jonsson, 2020</h4>
									{activeId === 7 && <p className="absolute -left-[20%] pt-3 text-lg min-w-80"><span className="block">The functioning of these sectors is vital to national systems and public welfare.</span>As of 2020, an estimated <span className="font-bold">57% of Swedish municipalities were utilizing IoT applications</span>, such as in home care, for smart meters, and in health care</p>}
								</div>
							</div>
						</div>
					</SwiperSlide>
				</SwiperComponent>
			</div>
		</section>
	);
}

