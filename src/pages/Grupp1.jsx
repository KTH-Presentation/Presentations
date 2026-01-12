import { SwiperSlide } from "swiper/react";
import KTH from "../assets/logos/KTH-white.svg";
import Knowit from "../assets/logos/Knowit.svg";
import Internetstiftilsen from "../assets/logos/Internetstiftelsen.svg";
import Header from "../components/Header";
import SwiperComponent from "../components/SwiperComponent";
import Hero from "../assets/grupp1/1.png";
import Map from "../assets/grupp1/map.png";
import SimpleDots from "../assets/grupp1/4.png";
import Agenda from "../assets/grupp1/3.png";
import Agenda1 from "../assets/grupp1/8.png";
import Exclamation from "../assets/grupp1/icons/exclamation.svg";
import Climate from "../assets/grupp1/icons/Climate Change.svg";
import Hourglass from "../assets/grupp1/icons/ix_hourglass.svg";
import Files from "../assets/grupp1/icons/Files.svg";
import Purpose from "../assets/grupp1/icons/purpose.svg";
import Notes from "../assets/grupp1/icons/Notes.svg";
import Idea from "../assets/grupp1/icons/idea.svg";
import Screen from "../assets/grupp1/icons/screen.svg";
import Leaders from "../assets/grupp1/icons/leaders.svg";
import Stationery from "../assets/grupp1/icons/stationery.svg";
import Platform from "../assets/grupp1/icons/platform.svg";
import Data from "../assets/grupp1/icons/data.svg";
import ItPeople from "../assets/grupp1/icons/It-people.svg";
import Structure from "../assets/grupp1/icons/structure.svg";
import Search from "../assets/grupp1/icons/structure.svg";
import Together from "../assets/grupp1/icons/together.svg";
import Questions from "../assets/grupp1/icons/questions.svg";
import Graph1 from "../assets/grupp1/graph1.png";
import Graph2 from "../assets/grupp1/graph2.png";
import Landscape from "../assets/grupp1/landscape.png";
import LookingGlass from "../assets/grupp1/looking-glass.png";
import Reccomendations from "../assets/grupp1/reccomendations.png";
import Team from "../assets/grupp1/team.png";
import { useState } from "react";


export default function Grupp1() {
	// Agenda toggle
	const agendaItems = [
		{ id: 1, content: "Why This Matters?" },
		{ id: 2, content: "What Did We Look At?" },
		{ id: 3, content: "What Have We Done?" },
		{ id: 4, content: "What Have We Found?" },
		{ id: 5, content: "Summary" }
	];

	const summaryItems = [
		{ id: 6, content: "We defined the problem" },
		{ id: 7, content: "We conducted 20 Interviews" },
		{ id: 8, content: "We analyzed the results" },
		{ id: 9, content: "We discussed the implications of the findings" },
		{ id: 10, content: "We will finalize the report…" },
	]

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

	// Circle
	const cx = 100;
	const cy = 100;
	const r = 90;

	// Helper to create arc paths
	const polarToCartesian = (cx, cy, r, angle) => {
		const rad = ((angle - 90) * Math.PI) / 180;
		return {
			x: cx + r * Math.cos(rad),
			y: cy + r * Math.sin(rad),
		};
	};

	const describeArc = (cx, cy, r, startAngle, endAngle) => {
		const start = polarToCartesian(cx, cy, r, endAngle);
		const end = polarToCartesian(cx, cy, r, startAngle);
		const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

		return `
      M ${cx} ${cy}
      L ${start.x} ${start.y}
      A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}
      Z
    `;
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
							<div className="w-full py-8 flex items-center bg-gradient-to-r from-[#125375] via-[#125375] via-[65%] to-[#125375]/0">
								<h2 className="px-16 font-medium leading-snug text-4xl lg:text-5xl w-4/5">Evaluating IoT Water-Efficiency Pilots in Sweden</h2>
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
					{/* Intro */}
					<SwiperSlide className="text-white py-40">
						<div className="absolute inset-0 w-full h-full bg-[#031326] -z-10" />
						<div className="relative w-full h-full flex flex-col justify-between items-center pt-32">
							<img src={Map} alt="Background image" className="absolute inset-0 w-full h-full p-16 -z-10" />
							<h1 className="text-[150px] font-bold">0.5<span className="text-[#007BC7]">%</span></h1>
							<p className="text-4xl">Of all water on earth is accessible, freshwater…</p>
						</div>
					</SwiperSlide>
					{/* Team */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<h3 className="px-16 text-4xl font-semibold">Our Team</h3>
						<div className="max-w-[1800px] px-16 pt-16 grid grid-cols-4">
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#007BC7]">
									<img src={null} alt="" />
								</figure>
								<p className="text-2xl font-medium">Oskar Carlsson</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#007BC7]">
									<img src={null} alt="" />
								</figure>
								<p className="text-2xl font-medium">Peter Carlsson</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#007BC7]">
									<img src={null} alt="" />
								</figure>
								<p className="text-2xl font-medium">Revan Koc</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#007BC7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Oliver Klinte</p>
							</div>
						</div>
						<div className="px-16 pt-16 w-3/4 mx-auto grid grid-cols-3 justify-items-center gap-16 ">
							<div className=" flex flex-col items-center justify-center gap-6 ">
								<figure className="w-36 h-36 rounded-full bg-[#007BC7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Anthon Yotsanan</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#007BC7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Mike Chu</p>
							</div>
							<div className=" flex flex-col items-center justify-center gap-6 w-42">
								<figure className="w-36 h-36 rounded-full bg-[#007BC7]">
									{/* <img src="" alt="" /> */}
								</figure>
								<p className="text-2xl font-medium">Alexander Lundin</p>
							</div>
						</div>
					</SwiperSlide>
					{/* Agenda */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<h3 className="px-16 text-4xl font-semibold">Agenda</h3>
						<div className="max-w-[1800px] place-items-center px-16 grid grid-cols-5 items-center w-full h-full">
							{agendaItems.map((item, index) => {
								const isTop = index % 2 === 0;
								const isOpen = toggleAgenda.includes(item.id)
								const hasActive = toggleAgenda.length > 0
								const opacityClass = isOpen
									? "opacity-100"
									: hasActive
										? "opacity-40"
										: "opacity-50"

								return (
									<div
										key={item.id}
										onClick={() => toggleItem(item.id)}
										className={`relative bg-[#094852] w-28 h-28 rounded-full cursor-pointer flex items-center justify-center transition-opacity duration-300 ${opacityClass}`}
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
							<div className="relative bg-[#094852] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold">1</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">Why This Matters</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">The Importance Of Water</h1>
						<div className="h-full max-w-[1800px] px-16 grid grid-cols-3">
							<div
								onClick={() => toggleActive(1)}
								className={`flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 1 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#125375] w-24 h-24 rounded-full flex items-center justify-center">
									<img src={Exclamation} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-2xl font-medium">Uncertainties</h4>
									{activeId === 1 && <p className="absolute pt-3 text-lg">Geopolitical tensions increase uncertainty for IoT water projects. Water systems are now treated as critical national infrastructure, requiring stronger security and resilience.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(2)}
								className={`flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 2 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#125375] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
									<img src={Climate} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-2xl font-medium">Climate change</h4>
									{activeId === 2 && <p className="absolute pt-3 text-lg">Climate change increases uncertainty through more frequent droughts, floods, and strain on aging water infrastructure, making continuous monitoring essential.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(3)}
								className={`flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 3 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#125375] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
									<img src={Hourglass} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-2xl font-medium">A finite resource</h4>
									{activeId === 3 && <p className="absolute pt-3 text-lg">Water is a finite resource, and increasing pressure from climate, population, and aging infrastructure creates uncertainty around long-term availability.</p>}
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">Problem Formulation</h1>
						<span className="px-16 text-xl font-medium">The Landscape of Water IoT Implementation in Sweden</span>
						<div className="w-full h-full grid items-center place-content-center">
							<div className="bg-[#007BC7] w-[550px] h-[250px] rounded-[50%] mx-16 flex items-center justify-center px-12 py-6">
								<p className="max-w-96 text-center text-3xl font-medium">The context of Sweden's decentralized governance structure</p>
							</div>
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#094852] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold">2</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">What Did We Look At?</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">What did we look at?</h1>
						<div className="px-16 h-full max-w-[1800px] grid grid-cols-3">
							<div
								onClick={() => toggleActive(4)}
								className={`flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 4 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#125375] w-24 h-24 rounded-full flex items-center justify-center">
									<img src={Files} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-2xl font-medium">Our Contribution</h4>
									{activeId === 4 && (
										<ul className="absolute pt-3 text-lg">
											<li>• Cross-case study of real IoT water-efficiency pilots in Swedish municipalities</li>
											<li>• Focus on organizational and managerial enablers and barriers</li>
											<li>• Insights that can support a future standardized national model</li>
										</ul>
									)}
								</div>
							</div>
							<div
								onClick={() => toggleActive(5)}
								className={`flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 5 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#125375] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
									<img src={Purpose} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-2xl font-medium">Purpose Of This Study</h4>
									{activeId === 5 && <p className="absolute pt-3 text-lg">We want to look at how IoT is actually used in real water projects in Swedish municipalities. To find clear patterns and lessons that can help create a more standard, national way of working in Sweden.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(6)}
								className={`flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 6 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#125375] w-24 h-24 rounded-full cursor-pointer flex items-center justify-center">
									<img src={Notes} alt="" />
								</div>
								<div className="relative w-full text-center">
									<h4 className="text-2xl font-medium">Research Questions</h4>
									{activeId === 6 && (
										<ul className="absolute pt-3 text-lg list-decimal">
											<li>How are IoT solutions for water-efficiency currently used and managed in Sweden?</li>
											<li>What key enablers and barriers shape the adoption and scalability of IoT water-efficiency projects in Sweden?</li>
										</ul>
									)}
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#094852] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold">3</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">What Have We Done?</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">Conducted 20 interviews</h1>
						<div className="px-16 pt-8 max-w-[1800px] flex items-center gap-16 justify-center">
							<svg width="400" height="400" viewBox="0 0 200 200">
								{/* Segment 1 — 20% (0° → 72°) */}
								<path
									d={describeArc(cx, cy, r, 0, 72)}
									fill="#007BC7"
								/>
								{/* Segment 2 — 20% (72° → 144°) */}
								<path
									d={describeArc(cx, cy, r, 72, 144)}
									fill="#125375"
								/>
								{/* Segment 3 — 20% (144° → 216°) */}
								<path
									d={describeArc(cx, cy, r, 144, 216)}
									fill="#042D5D"
								/>
								{/* Segment 4 — 40% (216° → 360°) */}
								<path
									d={describeArc(cx, cy, r, 216, 360)}
									fill="#ffffff"
								/>
								{/* TEXT LABELS */}
								<text x="135" y="55" textAnchor="middle" fill="white" fontSize="12">
									4 (20%)
								</text>
								<text x="150" y="120" textAnchor="middle" fill="white" fontSize="12">
									4 (20%)
								</text>
								<text x="95" y="165" textAnchor="middle" fill="white" fontSize="12">
									4 (20%)
								</text>
								<text x="50" y="95" textAnchor="middle" fill="black" fontSize="12">
									8 (40%)
								</text>
							</svg>
							<div className="space-y-4 flex flex-col items-start">
								<div className="flex items-center gap-2">
									<div className="bg-white w-8 h-8 rounded-full" />
									<span>Regional Governance & Water Management Actors</span>
								</div>
								<div className="flex justify-center items-center gap-2">
									<div className="bg-[#007BC7] w-8 h-8 rounded-full" />
									<span>Municipalities</span>
								</div>
								<div className="flex justify-center items-center gap-2">
									<div className="bg-[#125375] w-8 h-8 rounded-full" />
									<span>Research & innovation actors</span>
								</div>
								<div className="flex justify-center items-center gap-2">
									<div className="bg-[#042D5D] w-8 h-8 rounded-full" />
									<span>Consultants & private actors</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">Founded <span className="text-[#007BC7]">5</span> Perspectives</h1>
						<div className="px-16 pt-16 h-full max-w-[1800px] w-full flex items-center justify-center">
							<svg viewBox="-63 -50 420 420" width="650">
								<polygon
									points="150,30 185,110 270,110 200,165 230,245 150,195 70,245 100,165 30,110 115,110"
									fill="none"
									stroke="#007BC7"
									strokeWidth="6"
									vectorEffect="non-scaling-stroke"
									strokeLinejoin="round"
								/>

								{[
									[150, 15, "Organizational"],
									[315, 110, "Technical"],
									[220, 260, "Resources"],
									[80, 260, "Governance"],
									[-20, 110, "Managerial"],
								].map(([x, y, t], i) => (
									<text
										key={i}
										x={x}
										y={y}
										textAnchor="middle"
										dominantBaseline="middle"
										fill="white"
									>
										{t}
									</text>
								))}
							</svg>
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#094852] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold">4</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">What Have We Found?</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">Overview</h1>
						<span className="px-16 text-2xl font-medium">Previous and current projects</span>
						<div onClick={() => toggleActive(7)} className="pt-12 relative w-full flex flex-col items-center justify-center cursor-pointer">
							<p>Practices in past and current IoT work and water projects</p>
							<img className="max-w-2xl pt-10" src={Graph1} alt="" />
							{activeId === 7 && (
								<div className="absolute left-[80%] bg-[#007BC7] md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full flex items-center justify-center">
									<p className="text-4xl lg:text-5xl font-semibold flex flex-col justify-center items-center">197 <span className="text-lg font-normal">data points</span></p>
								</div>
							)}
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">Overview</h1>
						<span className="px-16 text-xl font-medium">Enablers and Barriers</span>
						<div onClick={() => toggleActive(8)} className="relative h-full max-w-[1800px] w-full flex items-center justify-center cursor-pointer">
							<img className="max-w-3xl pt-10" src={Graph2} alt="" />
							{activeId === 8 && (
								<div className="absolute left-[80%] top-6 bg-[#007BC7] md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full flex items-center justify-center">
									<p className="text-4xl lg:text-5xl font-semibold flex flex-col justify-center items-center">735 <span className="text-lg font-normal">data points</span></p>
								</div>
							)}
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">1. Clear operational needs drive adoption</h1>
						<div className="px-16 h-full max-w-[1800px] grid grid-cols-2 place-items-center text-center">
							<div onClick={() => toggleActive(9)} className={`cursor-pointer py-8 px-16 bg-[#125375] rounded-xl flex flex-col justify-center items-center gap-4 ${activeId !== 9 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={Idea} alt="" />
								<h6 className="text-2xl font-medium">Why is this the case?</h6>
								{activeId === 9 &&
									<p className="text-lg">Municipalities start IoT projects primarily when facing concrete operational problems, leaks, flooding, groundwater uncertainty, or inefficient manual routines. Digitalization is not a strategic priority in itself, so projects emerge reactively rather than proactively.</p>
								}
							</div>
							<div onClick={() => toggleActive(10)} className={`cursor-pointer py-8 px-16 bg-[#042D5D] rounded-xl flex flex-col justify-center items-center ${activeId !== 10 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={Screen} alt="" />
								<h6 className="text-2xl font-medium">How can this be resolved?</h6>
								{activeId === 10 && (
									<p className="text-lg">Creating formalized knowledge, sharing systems, common learning platforms, standardized reporting from pilot projects, templates for evaluation, and reusable playbooks, helps transform isolated experiments into collectively useful knowledge.</p>
								)}
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">2. Enthusiasts start projects, but leadership determines scalability</h1>
						<div className="px-16 h-full max-w-[1800px] grid grid-cols-2 place-items-center text-center">
							<div onClick={() => toggleActive(11)} className={`cursor-pointer py-8 px-16 bg-[#125375] rounded-xl flex flex-col justify-center items-center gap-4 ${activeId !== 11 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={Leaders} alt="" />
								<h6 className="text-2xl font-medium">Why is this the case?</h6>
								{activeId === 11 &&
									<p className="text-lg">Early IoT initiatives often rely on motivated individuals who push pilots forward. But without managerial commitment, stable funding, or cross-department responsibility, these projects cannot survive organizational change.</p>
								}
							</div>
							<div onClick={() => toggleActive(12)} className={`cursor-pointer py-8 px-16 bg-[#042D5D] rounded-xl flex flex-col justify-center items-center ${activeId !== 12 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={Stationery} alt="" />
								<h6 className="text-2xl font-medium">How can this be resolved?</h6>
								{activeId === 12 && (
									<p className="text-lg">Scaling requires anchoring IoT work in leadership structures. This includes clear governance models, defined ownership, long-term budgeting, and competence retention strategies that reduce dependence on single individuals.</p>
								)}
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">3. Technical maturity is not the main barrier, interoperability is…</h1>
						<div className="px-16 h-full max-w-[1800px] grid grid-cols-2 place-items-center text-center">
							<div onClick={() => toggleActive(13)} className={`cursor-pointer py-8 px-16 bg-[#125375] rounded-xl flex flex-col justify-center items-center gap-4 ${activeId !== 13 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={Platform} alt="" />
								<h6 className="text-2xl font-medium">Why is this the case?</h6>
								{activeId === 13 &&
									<p className="text-lg"> Sensors and networks are readily available, but municipalities use different platforms, vendors, and data formats. This creates isolated systems and increases the risk of vendor lock-in, making it difficult to share knowledge or replicate successful solutions.</p>
								}
							</div>
							<div onClick={() => toggleActive(14)} className={`pcursor-pointer y-8 px-16 bg-[#042D5D] rounded-xl flex flex-col justify-center items-center ${activeId !== 14 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={Data} alt="" />
								<h6 className="text-2xl font-medium">How can this be resolved?</h6>
								{activeId === 14 && (
									<p className="text-lg">Developing shared data standards, open APIs, and procurement templates enables interoperability. National or regional architectures help municipalities avoid lock-in and create scalable ecosystems where solutions can be reused rather than rebuilt.</p>
								)}
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">4. Decentralized structure highlights that small Municipalities Cannot Scale Alone</h1>
						<div className="px-16 h-full max-w-[1800px] grid grid-cols-2 place-items-center text-center">
							<div onClick={() => toggleActive(15)} className={`cursor-pointer py-8 px-16 bg-[#125375] rounded-xl flex flex-col justify-center items-center gap-4 ${activeId !== 15 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={ItPeople} alt="" />
								<h6 className="text-2xl font-medium">Why is this the case?</h6>
								{activeId === 15 &&
									<p className="text-lg">Smaller municipalities lack the technical capacity, IT competence, and financial resources needed to scale IoT solutions. Limited staff and tight budgets make it difficult to maintain sensor networks or invest in long-term digital infrastructure, leading to uneven digital maturity and higher dependency on vendors.</p>
								}
							</div>
							<div onClick={() => toggleActive(16)} className={`cursor-pointer py-8 px-16 bg-[#042D5D] rounded-xl flex flex-col justify-center items-center ${activeId !== 16 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={Structure} alt="" />
								<h6 className="text-2xl font-medium">How can this be resolved?</h6>
								{activeId === 16 && (
									<p className="text-lg">Scaling becomes possible through shared capability models: regional support functions, common platforms, and shared infrastructure. Pooling resources lowers costs, reduces competence demands, and creates more sustainable, scalable IoT solutions across municipalities.</p>
								)}
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">5. Knowledge Sharing Is important but Unstructured</h1>
						<div className="px-16 h-full max-w-[1800px] grid grid-cols-2 place-items-center text-center">
							<div onClick={() => toggleActive(17)} className={`cursor-pointer py-8 px-16 bg-[#125375] rounded-xl flex flex-col justify-center items-center gap-4 ${activeId !== 17 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={Search} alt="" />
								<h6 className="text-2xl font-medium">Why is this the case?</h6>
								{activeId === 17 &&
									<p className="text-lg">Knowledge sharing depends on informal networks and individual relationships. There is no standardized platform, no structured documentation, and no routines for transferring lessons from one municipality to another.</p>
								}
							</div>
							<div onClick={() => toggleActive(18)} className={`cursor-pointer py-8 px-16 bg-[#042D5D] rounded-xl flex flex-col justify-center items-center ${activeId !== 18 ? "w-3/4 h-1/2 gap-8" : "w-full py-[10%] gap-4"}`}>
								<img className="h-14" src={Together} alt="" />
								<h6 className="text-2xl font-medium">How can this be resolved?</h6>
								{activeId === 18 && (
									<p className="text-lg">Creating formalized knowledge-sharing systems, common learning platforms, standardized reporting from pilot projects, templates for evaluation, and reusable playbooks. This helps to transform isolated experiments into collectively useful knowledge.</p>
								)}
							</div>
						</div>
					</SwiperSlide>
					{/* Agenda point */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda1} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full flex flex-col gap-16 items-center justify-center text-center">
							<div className="relative bg-[#094852] w-24 h-24 rounded-full flex items-center justify-center">
								<span className="text-4xl font-bold">5</span>
							</div>
							<h1 className="px-16 font-medium leading-snug text-4xl w-4/5">Summary</h1>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SimpleDots} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<div className="px-16 py-8 max-w-[1800px] grid grid-cols-3 place-items-center">
							<div onClick={() => toggleActive(19)} className={`cursor-pointer ${activeId !== 19 ? "h-full" : "border-b pb-6 px-16"}`}>
								<p className="text-lg font-semibold">Current Landscape</p>
							</div>
							<div onClick={() => toggleActive(20)} className={`cursor-pointer ${activeId !== 20 ? "h-full" : "border-b pb-6 px-16"}`}>
								<p className="text-lg font-semibold">What we see</p>
							</div>
							<div onClick={() => toggleActive(21)} className={`cursor-pointer ${activeId !== 21 ? "h-full" : "border-b pb-6 px-16"}`}>
								<p className="text-lg font-semibold">Recommendations</p>
							</div>
						</div>
						{activeId === 19 && (
							<div className="px-16 grid grid-cols-2 place-items-center h-full gap-6">
								<img className="rounded-xl object-cover max-w-full" src={Landscape} alt="" />
								<ul className="list-disc">
									<h5 className="text-3xl font-medium pb-4">Current Landscape</h5>
									<li>Sweden shows strong innovation but weak coordination.</li>
									<li>Pilots succeed locally but rarely scale nationally.</li>
									<li>Small municipalities need more support to participate.</li>
									<li>Every municipality has their own needs.</li>
									<li>Organizational and managerial factors determine longevity.</li>
								</ul>
							</div>
						)}
						{activeId === 20 && (
							<div className="px-16 grid grid-cols-2 place-items-center h-full gap-6">
								<img className="rounded-xl object-cover max-w-full" src={LookingGlass} alt="" />
								<ul className="list-disc">
									<h5 className="text-3xl font-medium pb-4">What we see</h5>
									<li>IoT adoption is driven by operational needs.</li>
									<li>Decentralized governance creates fragmentation.</li>
									<li>Interoperability, not technology, is a strong barrier.</li>
									<li>Capacity, competence, and financial gaps limit scaling.</li>
									<li>Knowledge remains isolated without structured sharing.</li>
								</ul>
							</div>
						)}
						{activeId === 21 && (
							<div className="px-16 grid grid-cols-2 place-items-center h-full gap-6">
								<img className="rounded-xl object-cover max-w-full" src={Reccomendations} alt="" />
								<ul className="list-disc">
									<h5 className="text-3xl font-medium pb-4">Recommendations</h5>
									<li>Develop shared standards, data models, and open APIs.</li>
									<li>Build regional support and provide procurement models.</li>
									<li>Create structured platforms for knowledge sharing.</li>
									<li>Anchor IoT work in leadership and long-term governance.</li>
									<li>Be mindful of our water.</li>
								</ul>
							</div>
						)}
					</SwiperSlide>
					{/* Summary */}
					<SwiperSlide className="text-white py-40">
						<img src={Agenda} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">Evaluating IoT Water-Efficiency Pilots in Sweden</span>
						<div className="px-16 grid grid-cols-2 items-center">
							<div className="px-16 flex flex-col gap-8 pt-4">
								{summaryItems.map((item, index) => {
									const isOpen = toggleAgenda.includes(item.id)
									const isLast = index === summaryItems.length - 1
									const hasActive = toggleAgenda.length > 0
									const opacityClass = isOpen
										? "opacity-100"
										: hasActive
											? "opacity-30"
											: "opacity-50"

									return (
										<div
											key={item.id}
											onClick={() => toggleItem(item.id)}
											className={`relative bg-[#094852] w-20 h-20 rounded-full cursor-pointer flex items-center justify-center transition-opacity duration-300 ${opacityClass}`}>
											<span className="text-4xl font-bold">{item.id - 5}</span>
											<div className={`absolute left-full top-1/2 -translate-y-1/2 ml-4 min-w-56 transition-all duration-300 ease-out ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}`}>
												<div className="text-left text-2xl font-semibold">
													{item.content}
												</div>
											</div>

											{/* LINE — bottom center (NOT last, appears AFTER text) */}
											{!isLast && (
												<div
													className={`
														absolute left-1/2 top-full -translate-x-1/2
														w-[1px] bg-white
														transition-[height,opacity] duration-200 ease-out delay-300
														${isOpen ? "h-10 opacity-100" : "h-0 opacity-0"}
													`}
												/>
											)}
										</div>
									)
								})}
							</div>
							<img className="max-w-full rounded-xl" src={Team} alt="" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="text-white py-40">
						<img src={Hero} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="h-full max-w-7xl flex flex-col justify-between">
							<div className="w-full mx-auto py-8 flex flex-col justify-center items-center h-full bg-gradient-to-r from-[#125375] via-[#125375] via-[65%] to-[#125375]/0">
								<h2 className="px-16 font-medium leading-snug text-5xl">Thanks!</h2>
								<p className="px-16 text-3xl flex gap-4 pt-4"> <img src={Questions} alt="" />Do you have any questions?</p>
							</div>
						</div>
					</SwiperSlide>
				</SwiperComponent>
			</div>
		</section>
	);
}