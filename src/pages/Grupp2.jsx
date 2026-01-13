import KTH from "../assets/logos/KTH-white.svg";
import Knowit from "../assets/logos/Knowit.svg";
import Rymd from "../assets/logos/Rymd.svg";
import Internetstiftilsen from "../assets/logos/Internetstiftelsen.svg";
import Haninge from "../assets/logos/Haninge.svg";
import Haninge1 from "../assets/logos/Haninge1.svg";
import Header from "../components/Header";
import SwiperComponent from "../components/SwiperComponent";
import Hero from "../assets/grupp2/1.png";
import Slide2 from "../assets/grupp2/9.png";
import Agenda from "../assets/grupp2/2.png";
import Agenda1 from "../assets/grupp2/8.png";
import SlideBg from "../assets/grupp2/9.png";
import Hand from "../assets/grupp2/hand.png";
import ClosingBg from "../assets/grupp2/15.png";
import Astrid from "../assets/grupp2/profile/Astrid.png";
import Frida from "../assets/grupp2/profile/Frida.png";
import Kim from "../assets/grupp2/profile/Kim.png";
import Warisatil from "../assets/grupp2/profile/Warisatil.png";
import Zaky from "../assets/grupp2/profile/Zaky.png";
import Jeffrey from "../assets/grupp2/profile/Jeffrey.png";
import Josefine from "../assets/grupp2/profile/Josefine.png";
import Exclamation from "../assets/grupp1/icons/exclamation.svg";
import Context from "../assets/grupp2/icons/context.svg";
import Gap from "../assets/grupp2/icons/gap.svg";
import Urban from "../assets/grupp2/icons/urban.svg";
import Digitalization from "../assets/grupp2/icons/digitalization.svg";
import Conversation from "../assets/grupp2/icons/conversation.svg";
import Global from "../assets/grupp2/icons/global-warming-2.svg";
import Twin from "../assets/grupp2/icons/twin.svg";
import Clock from "../assets/grupp2/icons/clock.svg";
import Dollar from "../assets/grupp2/icons/dollar.svg";
import Complex from "../assets/grupp2/icons/complex.svg";
import Group from "../assets/grupp2/icons/group.svg";
import Arrow from "../assets/grupp2/icons/arrow.svg";
import Notes from "../assets/grupp1/icons/Notes.svg";
import Questions from "../assets/grupp1/icons/questions.svg";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import MatrixScenario from "../components/MatrixScenario.jsx";
import ScenarioQuadrant from "../components/ScenarioQuadrant";

export default function Grupp2() {
	// Agenda toggle
	const agendaItems = [
		{ id: 1, content: "The Purpose" },
		{ id: 2, content: "Why Now?" },
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

	// Arrow slide toggle
	const [isOpen, setIsOpen] = useState([]);

	const toggleOpen = (id) => {
		setIsOpen((prev) =>
			prev.includes(id)
				? prev.filter((isOpen) => isOpen !== id)
				: [...prev, id]
		);
	};

	return (
		<section className="min-h-screen bg-white text-black relative">
			<Header logo={KTH} textColor="text-white" position="absolute" shadow="none" />
			<div className="h-screen">
				<SwiperComponent>
					{/* Title */}
					<SwiperSlide className="text-white py-40">
						<img src={Hero} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full max-w-[1920px] mx-auto flex flex-col justify-between">
							{/* <div className="w-full py-8 flex flex-col justify-center gap-6 bg-gradient-to-r from-[#20154C] via-[#20154C] via-[65%] to-[#20154C]/0"> */}
							<div className="w-full py-8 flex flex-col justify-center gap-6">
								<h1 className="px-16 font-medium leading-snug text-5xl">Sustainable Community Development</h1>
								<p className="px-16 text-2xl">Exploring Smart City Development and Sustainable Living Towards 2050</p>
							</div>
							<div className="px-16">
								<h6 className="pb-8 text-xl">In collaboration with</h6>
								<div className="flex items-center gap-4 md:gap-11">
									<figure className="rounded-full w-36 h-36 p-4 bg-white/80 flex items-center justify-center">
										<img className="w-full h-full" src={Knowit} alt="Knowit Logo" />
									</figure>
									<figure className="rounded-full w-36 h-36 p-4 bg-white/80 flex items-center justify-center">
										<img className="w-full h-full" src={Haninge1} alt="Knowit Logo" />
									</figure>
									<figure className="rounded-full w-36 h-36 bg-white/80 flex items-center justify-center">
										<img className="w-full h-full" src={Rymd} alt="Knowit Logo" />
									</figure>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Team */}
					<SwiperSlide className="text-white py-40">
						<img src={Slide2} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] mx-auto px-16">
							<h3 className="text-4xl font-semibold">Our Team</h3>
							<div className="pt-6 grid grid-cols-4">
								<div className=" flex flex-col items-center justify-center gap-6 w-42">
									<figure className="w-36 h-36 rounded-full overflow-hidden">
										<img className="w-full h-full" src={Jeffrey} alt="" />
									</figure>
									<p className="text-xl font-medium whitespace-nowrap">Jeffrey Chang</p>
								</div>
								<div className=" flex flex-col items-center justify-center gap-6 w-42">
									<figure className="w-36 h-36 rounded-full overflow-hidden">
										<img className="w-full h-full" src={Astrid} alt="" />
									</figure>
									<p className="text-xl font-medium whitespace-nowrap">Astrid Celedon</p>
								</div>
								<div className=" flex flex-col items-center justify-center gap-6 w-42">
									<figure className="w-36 h-36 rounded-full overflow-hidden">
										<img className="w-full h-full" src={Josefine} alt="" />
									</figure>
									<p className="text-xl font-medium whitespace-nowrap">Josefine Rafstedt</p>
								</div>
								<div className=" flex flex-col items-center justify-center gap-6 w-42">
									<figure className="w-36 h-36 rounded-full overflow-hidden">
										<img className="w-full h-full" src={Zaky} alt="" />
									</figure>
									<p className="text-xl font-medium whitespace-nowrap">Zaky Dzulfikar Harun</p>
								</div>
							</div>
							<div className="px-16 pt-16 w-3/4 mx-auto grid grid-cols-3 justify-items-center gap-16 ">
								<div className=" flex flex-col items-center justify-center gap-6 ">
									<figure className="w-36 h-36 rounded-full overflow-hidden">
										<img className="w-full h-full" src={Warisatil} alt="" />
									</figure>
									<p className="text-xl font-medium whitespace-nowrap">Warisatil Ilmi</p>
								</div>
								<div className=" flex flex-col items-center justify-center gap-6 w-42">
									<figure className="w-36 h-36 rounded-full overflow-hidden">
										<img className="w-full h-full" src={Kim} alt="" />
									</figure>
									<p className="text-xl font-medium whitespace-nowrap">Kim Kleczkowski</p>
								</div>
								<div className=" flex flex-col items-center justify-center gap-6 w-42">
									<figure className="w-36 h-36 rounded-full overflow-hidden">
										<img className="w-full h-full" src={Frida} alt="" />
									</figure>
									<p className="text-xl font-medium whitespace-nowrap">Frida Lantz Bergkvist</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Agenda */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<h3 className="text-4xl font-semibold">Today's Agenda</h3>
							<div className="place-items-center grid grid-cols-6 items-center w-full h-full">
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
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#B4CBFF] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold text-[#450744]">1</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">The Purpose</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-4xl w-4/5">The Purpose</h1>
							<div className="px-16 h-full grid grid-cols-3 text-center">
								<div
									onClick={() => toggleActive(1)}
									className={`flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 1 ? "opacity-50" : "opacity-100"}`}
								>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
										<img src={Context} alt="" />
									</div>
									<div className="relative w-max flex flex-col items-center">
										<h4 className="text-2xl font-medium">The Context</h4>
										{activeId === 1 && <p className="absolute min-w-80 top-full pt-3 text-lg">Urbanization is rapidly increasing, with 68% of the global population expected to live in cities by 2050.</p>}
									</div>
								</div>
								<div
									onClick={() => toggleActive(2)}
									className={`flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 2 ? "opacity-50" : "opacity-100"}`}
								>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
										<img src={Exclamation} alt="" />
									</div>
									<div className="relative w-max flex flex-col items-center">
										<h4 className="text-2xl font-medium">The Problem</h4>
										{activeId === 2 && <p className="absolute min-w-80 top-full pt-3 text-lg">Organizational barriers prevent the right decision-makers from accessing relevant data.</p>}
									</div>
								</div>
								<div
									onClick={() => toggleActive(3)}
									className={`flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 3 ? "opacity-50" : "opacity-100"}`}
								>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
										<img src={Gap} alt="" />
									</div>
									<div className="relative w-max flex flex-col items-center">
										<h4 className="text-2xl font-medium">The Gap</h4>
										{activeId === 3 && <p className="absolute min-w-80 top-full pt-3 text-lg">Current planning suffers from incompatible data formats and lack of organizational standards.</p>}
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-4xl w-4/5 flex gap-4"><img className="w-9" src={Haninge} alt="" />Haninge Municpality</h1>
							<span className="text-xl font-medium">Overview Plan (Översiktsplan) 2050:</span>
							<div className="w-full h-full grid items-center place-content-center">
								<div className="w-full flex items-center justify-center">
									<p className="max-w-[50%] text-center text-3xl font-bold">"How land and water areas should be used, and how buildings, activities, and natural areas will be developed and preserved."</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#B4CBFF] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold text-[#450744]">2</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">Why Now?</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-5xl w-4/5">External drivers of change</h1>
							<div className="h-full grid grid-cols-4 text-center">
								<div className={"flex flex-col items-center justify-center gap-8"}>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
										<img src={Urban} alt="" />
									</div>
									<h4 className="text-xl font-medium">Rapid Urbanization</h4>
								</div>
								<div className={"flex flex-col items-center justify-center gap-8"}>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
										<img src={Digitalization} alt="" />
									</div>
									<h4 className="text-xl font-medium">Digitalization</h4>
								</div>
								<div className={"flex flex-col items-center justify-center gap-8"}>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
										<img src={Conversation} alt="" />
									</div>
									<h4 className="text-xl font-medium">Stakeholder Expectation</h4>
								</div>
								<div className={"flex flex-col items-center justify-center gap-8"}>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
										<img src={Global} alt="" />
									</div>
									<h4 className="text-xl font-medium">Climate Crisis</h4>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#B4CBFF] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold text-[#450744]">3</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">The Core Challenge</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-4xl w-4/5">The Core Challenge</h1>
							<div className="w-full h-full grid items-center place-content-center">
								<div className="flex items-center justify-center px-12 py-6">
									<p className="max-w-[60%] text-center text-2xl font-bold">"Municipalities have a lot of data. The problem is: how should they use it, share it, and make collective decisions based on it to mitigate costs, risks, and misunderstandings?"</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-4xl w-4/5">Proposition</h1>
							<span className="text-xl font-medium">Adopt a digital twin</span>
							<div className="h-full flex items-center justify-center">
								<p className="max-w-[60%] text-center top-full pt-3 text-xl font-medium">Adopt a dynamic, visual 3D models that layer real-time IoT data over satellite imagery to serve as a shared knowledge platform for multi-stakeholder decision-making.</p>
							</div>
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#B4CBFF] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold text-[#450744]">4</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">The Strategic Value</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-4xl w-4/5">Standardize Data, <span className="block">Enable Proactive Risk Mitigation</span></h1>
							<div className="h-full grid grid-cols-3 text-center">
								<div
									onClick={() => toggleActive(5)}
									className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 5 ? "opacity-50" : "opacity-100"}`}
								>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
										<img className="max-h-12" src={Clock} alt="" />
									</div>
									<div className="relative w-max flex flex-col items-center">
										<h4 className="text-3xl font-medium">Current situation</h4>
										{activeId === 5 && (
											<ul className="absolute top-full pt-3 text-lg space-y-3">
												<li>Fragmented data</li>
												<li>Organizational silos</li>
												<li>Late discovery</li>
											</ul>
										)}
									</div>
								</div>
								<div
									onClick={() => toggleActive(6)}
									className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 6 ? "opacity-50" : "opacity-100"}`}
								>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
										<img className="max-h-12" src={Twin} alt="" />
									</div>
									<div className="relative w-max flex flex-col items-center">
										<h4 className="text-3xl font-medium">Digital Twin Solution</h4>
										{activeId === 6 && (
											<ul className="absolute min-w-max top-full pt-3 text-lg space-y-3">
												<li>Unified database</li>
												<li>Integrated IoT and remote sensing</li>
												<li>Enable layered analysis</li>
											</ul>
										)}
									</div>
								</div>
								<div
									onClick={() => toggleActive(7)}
									className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 7 ? "opacity-50" : "opacity-100"}`}
								>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
										<img className="max-w-12" src={Notes} alt="" />
									</div>
									<div className="relative w-max flex flex-col items-center">
										<h4 className="text-3xl font-medium">Outcome</h4>
										{activeId === 7 && (
											<ul className="absolute min-w-max top-full pt-3 text-lg space-y-3">
												<li>Early risk detection</li>
												<li>Avoid costly delays</li>
												<li>Evidence based decision</li>
												<li>Enable cross-dept coordination</li>
											</ul>
										)}
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium text-4xl">Enable Democratized Decision-making</h1>
							<div className="h-full flex items-center justify-center">
								<p className="max-w-[60%] text-center top-full pt-3 text-xl font-medium">Visual models translate complex statistics into intuitive 3D maps, making it easier for politicians, citizens, and diverse departments to understand and agree on urban plans.</p>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-4xl w-4/5">Reality Check:</h1>
							<span className="text-xl font-medium">What`s Really Holding Us Back</span>
							<div className="h-full grid grid-cols-3 text-center place-items-center">
								<div className={"flex flex-col items-center justify-center gap-8"}>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
										<img src={Dollar} alt="" />
									</div>
									<h4 className="max-w-60 text-2xl font-medium w-60">High costs and uncertain ROI</h4>
								</div>
								<div className={"flex flex-col items-center justify-center gap-8"}>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
										<img src={Complex} alt="" />
									</div>
									<h4 className="max-w-80 text-2xl font-medium w-60">Technical complexity and fragmentation</h4>
								</div>
								<div className={"flex flex-col items-center justify-center gap-8"}>
									<div className="relative bg-[#C8A9CA] w-24 h-24 rounded-full flex items-center justify-center">
										<img src={Group} alt="" />
									</div>
									<h4 className="max-w-80 text-2xl font-medium w-58">Oranisational silos and weak commitment</h4>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-4xl w-4/5">Delivering Evidence Based Efficiency</h1>
							<div className="h-full flex flex-col gap-8 items-start justify-center pt-7">
								<div
									onClick={() => toggleOpen(1)}
									className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${!isOpen.includes(1) ? "opacity-70" : "opacity-100"}`}
								>
									<div className="relative w-max text-center">
										<div className="bg-[#C8A9CA] text-[#20154C] w-[400px] h-28 px-12 py-8 rounded-lg flex items-center justify-center">
											<h4 className="text-2xl font-semibold">Integrated Standard</h4>
										</div>
										<div
											className={`absolute left-full top-1/2 -translate-y-1/2 min-w-full flex items-center gap-4 transition-all duration-500 ease-out ${isOpen.includes(1) ? "opacity-100 translate-x-4" : "opacity-0 -translate-x-10 pointer-events-none"}`}
										>
											<img src={Arrow} alt="arrow" className="h-12 w-auto" />
											<div className="border-4 border-[#C8A9CA] text-[#C8A9CA] w-[450px] h-28 px-12 py-8 rounded-lg flex items-center justify-center">
												<h4 className="text-xl font-semibold">
													Eliminate format conflicts <span className="block">Faster issue identification</span>
												</h4>
											</div>
										</div>
									</div>
								</div>
								<div
									onClick={() => toggleOpen(2)}
									className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${!isOpen.includes(2) ? "opacity-70" : "opacity-100"}`}
								>
									<div className="relative w-max text-center">
										<div className="bg-[#C8A9CA] text-[#20154C] w-[400px] h-28 px-12 py-8 rounded-lg flex items-center justify-center">
											<h4 className="text-2xl font-semibold">Prevents Waste</h4>
										</div>
										<div
											className={`absolute left-full top-1/2 -translate-y-1/2 min-w-full flex items-center gap-4 transition-all duration-500 ease-out ${isOpen.includes(2) ? "opacity-100 translate-x-4" : "opacity-0 -translate-x-10 pointer-events-none"}`}
										>
											<img src={Arrow} alt="arrow" className="h-12 w-auto" />
											<div className="border-4 border-[#C8A9CA] text-[#C8A9CA] w-[450px] h-28 px-12 py-8 rounded-lg flex items-center justify-center">
												<h4 className="text-xl font-semibold">
													Avoid cancelled projects = Cost efficient operation
												</h4>
											</div>
										</div>
									</div>
								</div>
								<div
									onClick={() => toggleOpen(3)}
									className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${!isOpen.includes(3) ? "opacity-70" : "opacity-100"}`}
								>
									<div className="relative w-max text-center">
										<div className="bg-[#C8A9CA] text-[#20154C] w-[400px] h-28 px-12 py-8 rounded-lg flex items-center justify-center">
											<h4 className="text-2xl font-semibold">Breaking the Departmental Barrier</h4>
										</div>
										<div
											className={`absolute left-full top-1/2 -translate-y-1/2 min-w-full flex items-center gap-4 transition-all duration-500 ease-out ${isOpen.includes(3) ? "opacity-100 translate-x-4" : "opacity-0 -translate-x-10 pointer-events-none"}`}
										>
											<img src={Arrow} alt="arrow" className="h-12 w-auto" />
											<div className="border-4 border-[#C8A9CA] text-[#C8A9CA] w-[450px] h-28 px-12 py-8 rounded-lg flex items-center justify-center">
												<h4 className="text-xl font-semibold">
													Shared visualization Aligned organization
												</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#B4CBFF] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold text-[#450744]">5</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-6xl w-4/5">The Future of Haninge</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<div className="h-full flex flex-col gap-[20%]">
								<div>
									<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
									<h1 className="font-medium leading-snug text-6xl w-4/5">Sweden 2050: <span className="block">Digitalisation scenarios</span></h1>
								</div>
								<p className="max-w-[30%] text-3xl">Analysing the intersection of political commitment and technological standardisation in urban planning.</p>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-5xl w-4/5">2x2 Matrix scenario</h1>
							<div className="relative w-full h-full flex flex-col items-center justify-start mt-20">
								<MatrixScenario />
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
							<h1 className="font-medium leading-snug text-5xl w-4/5">What makes it work?</h1>
							<div className="relative pt-12 w-full h-full flex flex-col items-center justify-start">
								<ScenarioQuadrant />
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="max-w-[1920px] h-full mx-auto px-16">
							<div className="h-full flex flex-col gap-[20%]">
								<div>
									<span className="text-sm font-medium text-white/60">Sustainable Community Development</span>
									<h1 className="font-medium leading-snug text-6xl w-4/5">The future</h1>
								</div>
								<p className="max-w-[600px] text-3xl">Integrating IoT and remote sensing data into Digital Twins significantly enhances urban resilience and transparency.<span>Prioritize standardization and internal collaboration now to ensure the "Collaborative Ecosystem" becomes reality.</span></p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="text-white py-40">
						<img src={ClosingBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full max-w-7xl flex flex-col justify-between">
							<div className="w-full mx-auto py-8 flex flex-col justify-center items-center h-full bg-gradient-to-r from-[#20154C] via-[#20154C] via-[65%] to-[#20154C]/0">
								<h2 className="px-16 font-medium leading-snug text-6xl">Thanks!</h2>
								<p className="px-16 text-4xl flex gap-4 pt-4"> <img src={Questions} alt="" />Do you have any questions?</p>
							</div>
						</div>
					</SwiperSlide>
				</SwiperComponent>
			</div>
		</section >
	);
}

