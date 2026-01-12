import KTH from "../assets/logos/KTH-white.svg";
import Knowit from "../assets/logos/Knowit.svg";
import Internetstiftilsen from "../assets/logos/Internetstiftelsen.svg";
import Header from "../components/Header";
import SwiperComponent from "../components/SwiperComponent";
import Hero from "../assets/grupp4/1.png";
import Agenda from "../assets/grupp4/2.png";
import Agenda1 from "../assets/grupp4/7.png";
import SlideBg from "../assets/grupp4/4.png";
import ClosingBg from "../assets/grupp4/9.png";
import Nasa from "../assets/grupp4/nasa.png";
import Geel from "../assets/grupp4/Geel.png";
import Participants from "../assets/grupp4/participants.png";
import Establish from "../assets/grupp4/establish.png";
import Build from "../assets/grupp4/build.jpg";
import Enable from "../assets/grupp4/enable.png";
import Exclamation from "../assets/grupp1/icons/exclamation.svg";
import Border from "../assets/grupp4/icons/border.svg";
import Map from "../assets/grupp4/icons/map.svg";
import Network from "../assets/grupp4/icons/network.svg";
import Decision from "../assets/grupp4/icons/decision.svg";
import Heart from "../assets/grupp4/icons/heart.svg";
import Thumb from "../assets/grupp4/icons/thumb.svg";
import Question from "../assets/grupp4/icons/question-mark.svg";
import Result from "../assets/grupp4/icons/result.svg";
import Context from "../assets/grupp2/icons/context.svg";
import Complex from "../assets/grupp2/icons/complex.svg";
import Gap from "../assets/grupp2/icons/gap.svg";
import Questions from "../assets/grupp1/icons/questions.svg";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import ExpandableCircle from "../components/ExpandableCircle";

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

	// Quotes array
	const quotes = [
		{
			key: "q1",
			title: "Duarte, F., 2024",
			text: "With the rapid advancement of digitalisation, there is a growing demand for scalable IoT1 solutions. Today, more than 15 billion devices are connected worldwide, a figure expected to more than double by 2030"
		},
		{
			key: "q2",
			title: "Adams and Nelson, 2022).",
			text: "In practice, IoT data is frequently managed within organizational silos. This isolates information, impedes its effective use, and inhibits collaboration"
		},
		{
			key: "q3",
			title: "Oladele, 2024",
			text: "IoT is increasingly embedded in critical sectors2, where it enables smarter services and more efficient operations"
		},
		{
			key: "q4",
			title: "Saarikko, Westergren and Jonsson, 2020",
			text: "The functioning of these sectors is vital to national systems and public welfare.As of 2020, an estimated 57% of Swedish municipalities were utilizing IoT applications, such as in home care, for smart meters, and in health care"
		},
	]

	return (
		<section className="min-h-screen bg-white text-black relative">
			<Header logo={KTH} textColor="text-white" position="absolute" shadow="none" />
			<div className="h-screen">
				<SwiperComponent>
					{/* Title */}
					<SwiperSlide className="text-white py-40">
						<img src={Hero} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
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
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
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
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
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
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">Purpose & Research Question</h1>
						<div className="px-16 h-full max-w-[1920px] grid grid-cols-3">
							<div
								onClick={() => toggleActive(1)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 1 ? "opacity-50" : "opacity-100"}`}
							>
								<div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${activeId !== 1 ? "opacity-50 bg-[#094979]" : "opacity-100 bg-[#FFB494]"}`}>
									<img src={Context} alt="" />
								</div>
								<div className="relative w-max flex flex-col items-start">
									<h4 className="text-3xl font-medium">Purpose</h4>
									{activeId === 1 && <p className="absolute min-w-80 top-full pt-3 text-lg">Investigate how a <span className="font-bold">national data-sharing infrastructure for IoT in public critical services</span> could be <span className="font-bold">designed and implemented</span> for the Swedish public sector.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(2)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 2 ? "opacity-50" : "opacity-100"}`}
							>
								<div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${activeId !== 2 ? "opacity-50 bg-[#094979]" : "opacity-100 bg-[#FFB494]"}`}>
									<img src={Exclamation} alt="" />
								</div>
								<div className="relative w-max flex flex-col items-start">
									<h4 className="text-3xl font-medium">Research Question</h4>
									{activeId === 2 && <p className="absolute min-w-80 top-full pt-3 text-lg">What are the requirements for a reliable and scalable national IoT-data sharing infrastructure for public critical services in Sweden?</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(3)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 3 ? "opacity-50" : "opacity-100"}`}
							>
								<div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${activeId !== 3 ? "opacity-50 bg-[#094979]" : "opacity-100 bg-[#FFB494]"}`}>
									<img src={Border} alt="" />
								</div>
								<div className="relative w-max flex flex-col items-start">
									<h4 className="text-3xl font-medium">Delimitations</h4>
									{activeId === 3 && <p className="absolute min-w-80 top-full pt-3 text-lg"><span><span className="font-bold">Technical focus</span>: Systemic perspective excluding specific technology recommendations</span><span className="block"><span className="font-bold">Organizational focus</span>: Inter-organizational perspective excluding employee/individual level.</span></p>}
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={Nasa} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">The Bigger Picture</h1>
						<h2 className="px-16 leading-snug text-3xl w-4/5">IoT is Increasingly Part of National Infrastructures</h2>
						<div className="px-16 h-full max-w-[1920px] pt-8">
							<ExpandableCircle items={quotes} />
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">The problems</h1>
						<div className="px-16 h-full max-w-[1920px] grid grid-cols-2">
							<div className="px-16 flex flex-col items-center justify-center gap-8">
								<img className="max-w-20" src={Map} alt="" />
								<h4 className="text-2xl font-medium max-w-96">Lack of national-scale data sharing capabilities for ioT in Public critical services</h4>
							</div>
							<div className="px-16 flex flex-col items-center justify-center gap-8">
								<img className="max-w-20" src={Network} alt="" />
								<h4 className="text-2xl font-medium max-w-96">Systems remain siloed, unscalable, and inefficient, suffering from low data availability</h4>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">Why it matters</h1>
						<div className="px-16 h-full max-w-[1920px] grid grid-cols-3">
							<div
								onClick={() => toggleActive(4)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 4 ? "opacity-50" : "opacity-100"}`}
							>
								<div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${activeId !== 4 ? "opacity-50 bg-[#094979]" : "opacity-100 bg-[#FFB494]"}`}>
									<img className="max-w-14" src={Decision} alt="" />
								</div>
								<div className="relative flex flex-col items-start">
									<h4 className="text-3xl font-medium">Poor decision-making</h4>
									{activeId === 4 && <p className="absolute min-w-fit top-full pt-3 text-lg">Prevents effective national data-driven policies.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(5)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 5 ? "opacity-50" : "opacity-100"}`}
							>
								<div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${activeId !== 5 ? "opacity-50 bg-[#094979]" : "opacity-100 bg-[#FFB494]"}`}>
									<img className="max-w-14" src={Heart} alt="" />
								</div>
								<div className="relative flex flex-col items-start">
									<h4 className="text-3xl font-medium">Weak national resilience</h4>
									{activeId === 5 && <p className="absolute min-w-fit top-full pt-3 text-lg">Hinders fast response to crises and incidents.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(6)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 6 ? "opacity-50" : "opacity-100"}`}
							>
								<div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${activeId !== 6 ? "opacity-50 bg-[#094979]" : "opacity-100 bg-[#FFB494]"}`}>
									<img className="max-w-14" src={Thumb} alt="" />
								</div>
								<div className="relative flex flex-col items-start">
									<h4 className="text-3xl font-medium">Low trust</h4>
									{activeId === 6 && <p className="absolute lg:w-80 top-full pt-3 text-lg">Low transparency undermines public confidence</p>}
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">Barriers</h1>
						<div className="px-16 h-full max-w-[1920px] grid grid-cols-2">
							<div className="px-16 flex flex-col items-center justify-center gap-8">
								<div className="relative bg-[#094979] w-24 h-24 rounded-full flex items-center justify-center">
									<img className="max-w-14" src={Exclamation} alt="" />
								</div>
								<h4 className="text-2xl max-w-72 font-medium">Highly sensitive data</h4>
							</div>
							<div className="px-16 flex flex-col items-center justify-center gap-8">
								<div className="relative bg-[#094979] w-24 h-24 rounded-full flex items-center justify-center">
									<img className="max-w-14" src={Complex} alt="" />
								</div>
								<h4 className="text-2xl max-w-72 font-medium">Complex regulatory landscape</h4>
							</div>
							<div className="px-16 flex flex-col items-center justify-center gap-8">
								<div className="relative bg-[#094979] w-24 h-24 rounded-full flex items-center justify-center">
									<img className="max-w-14" src={Question} alt="" />
								</div>
								<h4 className="text-2xl max-w-72 font-medium">Lack of understanding of the potential value</h4>
							</div>
							<div className="px-16 flex flex-col items-center justify-center gap-8">
								<div className="relative bg-[#094979] w-24 h-24 rounded-full flex items-center justify-center">
									<img className="max-w-14" src={Gap} alt="" />
								</div>
								<h4 className="text-2xl max-w-72 font-medium">Low interoperability and few standards</h4>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<div className="px-16  max-w-[1920px] mx-auto">
							<span className="text-sm font-medium text-white/60">National IoT Infrastructures</span>
							<h1 className="font-medium leading-snug text-5xl w-4/5">Theory and Research Design</h1>
							<span className="text-2xl font-medium">Geel's Multi-Level Perspective</span>
							<img className="pt-[2%] max-w-4xl mx-auto" src={Geel} alt="" />
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<div className="px-16  max-w-[1920px] mx-auto">
							<span className="text-sm font-medium text-white/60">National IoT Infrastructures</span>
							<h1 className="font-medium leading-snug text-5xl w-4/5">Theory and Research Design</h1>
							<span className="text-2xl font-medium">Interview Participants</span>
							<img className="pt-[2%] max-w-3xl mx-auto" src={Participants} alt="" />
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<div className="px-16  max-w-[1920px] mx-auto">
							<span className="text-sm font-medium text-white/60">National IoT Infrastructures</span>
							<h1 className="font-medium leading-snug text-5xl w-4/5">Theory and Research Design</h1>
							<span className="text-2xl font-medium">Research Design</span>
							<ul className="pt-4 grid grid-cols-3 gap-10">
								<li className="bg-[#79DBF7] text-[#061C39] px-6 py-8 rounded-lg text-lg">Philosophy<span className="text-xl font-semibold block">Interpretivist</span></li>
								<li className="bg-[#79DBF7] text-[#061C39] px-6 py-8 rounded-lg text-lg">Theoretical Approach<span className="text-xl font-semibold block">Abductive</span></li>
								<li className="bg-[#79DBF7] text-[#061C39] px-6 py-8 rounded-lg text-lg">Methodological Choice<span className="text-xl font-semibold block">Qualitative</span></li>
								<li className="bg-[#79DBF7] text-[#061C39] px-6 py-8 rounded-lg text-lg">Strategy<span className="text-xl font-semibold block">Case Study</span></li>
								<li className="bg-[#79DBF7] text-[#061C39] px-6 py-8 rounded-lg text-lg">Time Horizon<span className="text-xl font-semibold block">Cross-Sectional</span></li>
								<li className="bg-[#79DBF7] text-[#061C39] px-6 py-8 rounded-lg text-lg">Techniques & Procedures<span className="text-xl font-semibold block">Thematic & Semi-Systematic</span></li>
							</ul>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<div className="px-16 max-w-[1920px] mx-auto">
							<span className="text-sm font-medium text-white/60">National IoT Infrastructures</span>
							<h1 className="font-medium leading-snug text-5xl w-4/5">The Framework Method</h1>
							<span className="text-2xl font-medium">Research Design</span>
							<ul className="pt-4 grid grid-cols-3 gap-8 max-w-fit">
								<li className="h-20 flex items-center bg-[#79DBF7] text-[#061C39] w-72 px-6 py-2 rounded-lg text-lg">1. Interview transcripts</li>
								<li className="h-20 flex items-center bg-[#79DBF7] text-[#061C39] w-72 px-6 py-2 rounded-lg text-lg">2. Data Familiarization</li>
								<li className="h-20 flex items-center bg-[#79DBF7] text-[#061C39] w-72 px-6 py-2 rounded-lg text-lg">3. Data Coding</li>
								<li className="h-20 flex items-center bg-[#79DBF7] text-[#061C39] w-72 px-6 py-2 rounded-lg text-lg">4. Analytical Framework Developmetn</li>
								<li className="h-20 flex items-center bg-[#79DBF7] text-[#061C39] w-72 px-6 py-2 rounded-lg text-lg">5. Analytical Framework Application</li>
								<li className="h-20 flex items-center bg-[#79DBF7] text-[#061C39] w-72 px-6 py-2 rounded-lg text-lg">6. Data Charting</li>
								<li className="h-20 flex items-center bg-[#79DBF7] text-[#061C39] w-72 px-6 py-2 rounded-lg text-lg">7. Data Interpretation</li>
								<li className="h-20 flex items-center bg-[#79DBF7] text-[#061C39] w-72 px-6 py-2 rounded-lg text-lg">8. Synthesizing findings into Discussion & Conclusion</li>
							</ul>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">Propositions for Scalable IoT Data-sharing</h1>
						<div className="px-16 h-full max-w-[1920px] grid grid-cols-3">
							<div
								onClick={() => toggleActive(7)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 7 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-48 h-48 overflow-hidden rounded-full flex items-center justify-center">
									<img className="w-48 h-48 object-cover" src={Establish} alt="" />
								</div>
								<div className="relative w-max flex flex-col items-start">
									<h4 className="text-3xl font-medium">Establish</h4>
									{activeId === 7 && <p className="absolute min-w-80 top-full pt-3 text-lg">Coherent Governance & Standardization Mechanisms</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(8)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 8 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-48 h-48 overflow-hidden rounded-full cursor-pointer flex items-center justify-center">
									<img className="w-48 h-48 object-cover" src={Build} alt="" />
								</div>
								<div className="relative w-max flex flex-col items-start">
									<h4 className="text-3xl font-medium">Build</h4>
									{activeId === 8 && <p className="absolute min-w-80 top-full pt-3 text-lg">Trust through Secure & Transparent Data-sharing Practices</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(9)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== null && activeId !== 9 ? "opacity-50" : "opacity-100"}`}
							>
								<div className="relative bg-[#094979] w-48 h-48 rounded-full overflow-hidden cursor-pointer flex items-center justify-center">
									<img className="w-48 h-48 object-cover" src={Enable} alt="" />
								</div>
								<div className="relative w-max flex flex-col items-start">
									<h4 className="text-3xl font-medium">Enable</h4>
									{activeId === 9 && <p className="absolute min-w-80 top-full pt-3 text-lg">Continuous Learning through Collaborative Testbeds & Federated Systems</p>}
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">Governance & Standardization</h1>
						<span className="px-16 text-2xl font-medium">Establish Coherent Governance & Standardization Mechanisms</span>
						<div className="px-16 h-full max-w-[1920px] grid grid-cols-3">
							<div
								onClick={() => toggleActive(10)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 10 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
									<h4 className="text-2xl font-medium">What?</h4>
									{activeId === 10 && <p className="text-lg">A coordinated national governance and standardization framework must be established to ensure interoperability and compliance across municipalities</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(11)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 11 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
									<h4 className="text-2xl font-medium">Why?</h4>
									{activeId === 11 && <p className="text-lg">Fragmented responsibilities and inconsistent legal interpretations currently limit scalability and create barriers to collaboration</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(12)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 12 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
									<h4 className="text-2xl font-medium">How?</h4>
									{activeId === 12 && (
										<ul className="text-lg list-disc">
											<li>Facilitate working groups for governance models (R1, R2)</li>
											<li>Align national & international standards & legal frameworks for industry compliance (L1)</li>
											<li>Strengthen strategic stance & interpretation between industry actors & policymakers (L3)</li>
										</ul>
									)}
								</div>
							</div>
							<div
								onClick={() => toggleActive(13)}
								className={`col-span-2 px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 13 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="flex w-full items-center gap-6">
									<img className="max-w-16" src={Result} alt="" />
									{activeId === 13 && (
										<div className="text-lg list-disc bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
											<h4 className="text-2xl font-medium">Expected result:</h4>
											<p>Internetstiftelsen facilitates standard-setting and governance alignment between public and private stakeholders to create an interoperable foundation.</p>
										</div>
									)}
								</div>
							</div>

						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">Trust by Secure & Transparent Practices</h1>
						<span className="px-16 text-2xl font-medium">Build Trust through Secure & Transparent Data-sharing Practices</span>
						<div className="px-16 h-full max-w-[1920px] grid grid-cols-3">
							<div
								onClick={() => toggleActive(10)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 10 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
									<h4 className="text-2xl font-medium">What?</h4>
									{activeId === 10 && <p className="text-lg">Reliability and scalability depend on trust and perceived security among actors (technical and institutional).</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(11)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 11 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
									<h4 className="text-2xl font-medium">Why?</h4>
									{activeId === 11 && <p className="text-lg">Without credible mechanisms for data protection, transparency and accountability, stakeholders remain hesitant to share information across organizational boundaries</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(12)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 12 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
									<h4 className="text-2xl font-medium">How?</h4>
									{activeId === 12 && (
										<ul className="text-lg list-disc">
											<li>Use certification schemes/trust marks of data compliance (R4)</li>
											<li>Clarify structures of data ownership, access rights, and accountability (L2)</li>
											<li>Provide operational guidelines for interoperability & standard procedures (R2)</li>
										</ul>
									)}
								</div>
							</div>
							<div
								onClick={() => toggleActive(13)}
								className={`col-span-2 px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 13 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="flex w-full items-center gap-6">
									<img className="max-w-16" src={Result} alt="" />
									{activeId === 13 && (
										<div className="text-lg list-disc bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
											<h4 className="text-2xl font-medium">Expected result:</h4>
											<p>Internetstiftelsen strengthens their position as a neutral trust enabler, developing certification schemes and secure interoperability frameworks that strengthen confidence in data exchange.</p>
										</div>
									)}
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Content Slide */}
					<SwiperSlide className="text-white py-40">
						<img src={SlideBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<span className="px-16 text-sm font-medium text-white/60">National IoT Infrastructures</span>
						<h1 className="px-16 font-medium leading-snug text-5xl w-4/5">Continuous Learning through Collaboration</h1>
						<span className="px-16 text-2xl font-medium">Enable Continuous Learning through Collaborative Testbeds & Federated Systems</span>
						<div className="px-16 h-full max-w-[1920px] grid grid-cols-3">
							<div
								onClick={() => toggleActive(10)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 10 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
									<h4 className="text-2xl font-medium">What?</h4>
									{activeId === 10 && <p className="text-lg">A sustainable IoT infrastructure requires continuous organizational learning and experimentation across sectors.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(11)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 11 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
									<h4 className="text-2xl font-medium">Why?</h4>
									{activeId === 11 && <p className="text-lg">Without structured testbeds and pilot environments, actors cannot validate interoperability, adapt governance models, or ensure long-term system resilience.</p>}
								</div>
							</div>
							<div
								onClick={() => toggleActive(12)}
								className={`px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 12 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
									<h4 className="text-2xl font-medium">How?</h4>
									{activeId === 12 && (
										<ul className="text-lg list-disc">
											<li>Lead multi-actor pilots, testing data-sharing solution under real-world conditions (N1)</li>
											<li>Facilitate federated testbeds, allowing interoperability & collaboration (N2, N4)</li>
											<li>Establish channels for sharing learnings from pilot initiatives (N3)</li>
										</ul>
									)}
								</div>
							</div>
							<div
								onClick={() => toggleActive(13)}
								className={`col-span-2 px-16 flex flex-col items-center justify-center gap-8 cursor-pointer transition-opacity duration-300 ${activeId !== 13 ? "opacity-80" : "opacity-100"}`}
							>
								<div className="flex w-full items-center gap-6">
									<img className="max-w-16" src={Result} alt="" />
									{activeId === 13 && (
										<div className="text-lg list-disc bg-[#094979] w-full px-12 py-8 flex flex-col items-start justify-center gap-2 rounded-lg">
											<h4 className="text-2xl font-medium">Expected result:</h4>
											<p>Internetstiftelsen leads multi-actor pilot initiatives that connect research, policy, and practice, accelerating the evolution of scalable and reliable IoT systems.</p>
										</div>
									)}
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="text-white py-40">
						<img src={ClosingBg} alt="Background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
						<div className="absolute inset-0 bg-[#4E4F71] opacity-30 w-full h-full -z-10" />
						<div className="h-full max-w-7xl flex flex-col justify-between">
							<div className="w-full mx-auto py-8 flex flex-col justify-center items-center h-full bg-gradient-to-r from-[#02030E] via-[#02030E] via-[65%] to-[#02030E]/0">
								<h2 className="px-16 font-medium leading-snug text-6xl">Thanks!</h2>
								<p className="px-16 text-4xl flex gap-4 pt-4"> <img src={Questions} alt="" />Do you have any questions?</p>
							</div>
						</div>
					</SwiperSlide>
				</SwiperComponent>
			</div>
		</section>
	);
}

