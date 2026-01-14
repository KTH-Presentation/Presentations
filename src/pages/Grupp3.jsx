import { useEffect, useRef, useState } from "react";

import KTH from "../assets/logos/KTH-white.svg";
import Knowit from "../assets/logos/Knowit.svg";
import Internetstiftilsen from "../assets/logos/Internetstiftelsen.svg";
import ÖrebroBostäder from "../assets/logos/ÖrebroBostäder.svg";

import Header from "../components/Header";
import SwiperComponent from "../components/SwiperComponent";

import IconVulnerable from "../assets/grupp3/icons/vulnerable.png";
import IconCosts from "../assets/grupp3/icons/costs.png";
import IconCycle from "../assets/grupp3/icons/cycle.png";
import IconChat from "../assets/grupp3/icons/chat.png";
import OperationsEfficiency from "../assets/grupp3/icons/OperationsEfficiency.png";
import Littering from "../assets/grupp3/icons/Littering.png";


import Hero from "../assets/grupp3/1.png";
import SlideTeam from "../assets/grupp3/6.png"; // Slide 2 bakgrund
import Slide3 from "../assets/grupp3/3.png";
import Slide4 from "../assets/grupp3/4.png";
import Slide5 from "../assets/grupp3/5.png";
import Slide6 from "../assets/grupp3/6.png"; // Slide 6 bakgrund (samma bild som slide 2)

import { SwiperSlide } from "swiper/react";

export default function Grupp3() {
  return (
    <section className="min-h-screen bg-white text-black relative">
      <Header logo={KTH} textColor="text-white" position="absolute" shadow="none" />

      <div className="h-screen">
        <SwiperComponent>
          {/* ===================== SLIDE 1 ===================== */}
          <SwiperSlide className="text-white py-40 relative">
            <img
              src={Hero}
              alt="Background image"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            <div className="h-full max-w-7xl flex flex-col justify-between">
              <div className="w-full py-8 flex items-center bg-gradient-to-r from-[#084444] via-[#084444] via-[65%] to-[#084444]/0">
                <h1 className="px-16 font-medium leading-snug text-6xl w-4/5">
                  Smart Waste Management in Vulnerable Residential Areas
                </h1>
              </div>

              <div className="px-16">
                <h6 className="pb-8 text-xl">In collaboration with</h6>

                <div className="flex items-center gap-4">
                  <figure className="rounded-full w-32 h-32 p-4 bg-white/80 flex items-center justify-center">
                    <img className="w-full h-full" src={Internetstiftilsen} alt="Internetstiftilsen Logo" />
                  </figure>

                  <figure className="rounded-full w-32 h-32 p-4 bg-white/80 flex items-center justify-center">
                    <img className="max-w-20 max-h-20 w-full h-full" src={Knowit} alt="Knowit Logo" />
                  </figure>

                  <figure className="rounded-full w-32 h-32 p-4 bg-white/80 flex items-center justify-center">
                    <img className="max-w-20 max-h-20 w-full h-full" src={ÖrebroBostäder} alt="ÖrebroBostäder Logo" />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* ===================== SLIDE 2 ===================== */}
          <SwiperSlide className="text-white py-40 relative">
            <img
              src={SlideTeam}
              alt="Background image"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            <h3 className="px-16 text-5xl font-semibold">Our Team</h3>

            <div className="max-w-[1800px] px-16 pt-16 grid grid-cols-4">
              <div className="flex flex-col items-center justify-center gap-6 w-42">
                <figure className="w-36 h-36 rounded-full bg-[#DBF77F]" />
                <p className="text-2xl font-medium">Saga Siösteen</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 w-42">
                <figure className="w-36 h-36 rounded-full bg-[#DBF77F]" />
                <p className="text-2xl font-medium">I Dewa Gede Ryan Andhika</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 w-42">
                <figure className="w-36 h-36 rounded-full bg-[#DBF77F]" />
                <p className="text-2xl font-medium">Moritz Lother</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 w-42">
                <figure className="w-36 h-36 rounded-full bg-[#DBF77F]" />
                <p className="text-2xl font-medium">Tiago Afonson</p>
              </div>
            </div>

            <div className="px-16 pt-16 w-3/4 mx-auto grid grid-cols-3 justify-items-center gap-16">
              <div className="flex flex-col items-center justify-center gap-6">
                <figure className="w-36 h-36 rounded-full bg-[#DBF77F]" />
                <p className="text-2xl font-medium">Andreas Eurenius</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 w-42">
                <figure className="w-36 h-36 rounded-full bg-[#DBF77F]" />
                <p className="text-2xl font-medium">Melise Lundberg</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 w-42">
                <figure className="w-36 h-36 rounded-full bg-[#DBF77F]" />
                <p className="text-2xl font-medium">Sacdia Abdulnassir</p>
              </div>
            </div>
          </SwiperSlide>

          {/* ===================== SLIDE 3 ===================== */}
          <SwiperSlide className="relative text-white">
            <img
              src={Slide3}
              alt="Agenda background"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <AgendaSlide />
          </SwiperSlide>

          {/* ===================== SLIDE 4 ===================== */}
          <SwiperSlide className="relative text-white">
            <img
              src={Slide4}
              alt="Background to the problematization"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <Slide4Content />
          </SwiperSlide>

          {/* ===================== SLIDE 5 ===================== */}
          <SwiperSlide className="relative text-white">
            <img
              src={Slide5}
              alt="Interviewee list background"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <Slide5Content />
          </SwiperSlide>

          {/* ===================== SLIDE 6 (Proposition) ===================== */}
          <SwiperSlide className="relative text-white">
            <img
              src={Slide6}
              alt="Proposition background"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <Slide6Content />
          </SwiperSlide>
		 {/* ===================== SLIDE 7 (Argument 1) använder 6.png ===================== */}
		  <SwiperSlide className="relative text-white">
  			<img
   			 src={Slide6}
   			 alt="Argument 1 background"
  		     className="absolute inset-0 w-full h-full object-cover -z-10"
 			 />
 			 <Slide7Content />
			</SwiperSlide>
			{/* ===================== SLIDE 8 (Argument 1 – continued) använder 6.png ===================== */}
			<SwiperSlide className="relative text-white">
  			<img
   				 src={Slide6}
 			     alt="Argument 1 continued background"
  			     className="absolute inset-0 w-full h-full object-cover -z-10"
 				 />
 				 <Slide8Content />
				</SwiperSlide>
{/* ===================== SLIDE 9 (Argument 2) använder 6.png ===================== */}
<SwiperSlide className="relative text-white">
  <img
    src={Slide6} // 6.png
    alt="Argument 2 background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <Slide9Content />
</SwiperSlide>
{/* ===================== SLIDE 10 (Argument 2 – centered, no diagram) ===================== */}
<SwiperSlide className="relative text-white">
  <img
    src={Slide6}
    alt="Argument 2 background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <Slide10Content />
</SwiperSlide>
{/* ===================== SLIDE 11 (Argument 3) använder 6.png ===================== */}
<SwiperSlide className="relative text-white">
  <img
    src={Slide6}
    alt="Argument 3 background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <Slide11Content />
</SwiperSlide>
{/* ===================== SLIDE 12 (Argument 3 – Example) ===================== */}
<SwiperSlide className="relative text-white">
  <img
    src={Slide6}
    alt="Argument 3 example background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <Slide12Content />
</SwiperSlide>
{/* ===================== SLIDE 13 (Potential Technological Solutions) ===================== */}
<SwiperSlide className="relative text-white">
  <img
    src={Slide6}
    alt="Potential Technological Solutions background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <Slide13Content />
</SwiperSlide>
{/* ===================== SLIDE 14 (Unified Strategy) ===================== */}
<SwiperSlide className="relative text-white">
  <img
    src={Slide6}
    alt="Unified strategy background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <Slide14Content />
</SwiperSlide>
{/* ===================== SLIDE 15 (Final Takeaway) ===================== */}
<SwiperSlide className="relative text-white">
  <img
    src={Slide6} // använd samma bakgrund som övriga argument-slides
    alt="Final takeaway background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <Slide15Content />
</SwiperSlide>


        </SwiperComponent>
      </div>
    </section>
  );
}

/* ===================== SLIDE 3: Agenda ===================== */
function AgendaSlide() {
  const [active, setActive] = useState(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setActive(null);
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div ref={wrapRef} className="h-screen w-full px-16 py-20 flex flex-col">
      <h3 className="text-6xl font-semibold tracking-tight">Agenda</h3>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-5 gap-10 items-center">
          <AgendaStep number="1" label="Background" isActive={active === 1} onToggle={() => setActive(active === 1 ? null : 1)} />
          <AgendaStep number="2" label="Proposition" isActive={active === 2} onToggle={() => setActive(active === 2 ? null : 2)} />
          <AgendaStep number="3" label="Arguments" isActive={active === 3} onToggle={() => setActive(active === 3 ? null : 3)} />
          <AgendaStep
            number="4"
            label={"Potential\nTechnologocal\nSolutions"}
            multiline
            isActive={active === 4}
            onToggle={() => setActive(active === 4 ? null : 4)}
          />
          <AgendaStep number="5" label="Conclusion" isActive={active === 5} onToggle={() => setActive(active === 5 ? null : 5)} />
        </div>
      </div>
    </div>
  );
}

function AgendaStep({ number, label, multiline = false, isActive, onToggle }) {
  return (
    <div className="relative h-[280px] flex items-center justify-center">
      {isActive && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
          <p className={`text-xl font-semibold text-white ${multiline ? "whitespace-pre-line leading-tight" : ""}`}>
            {label}
          </p>
        </div>
      )}

      {isActive && (
        <div className="absolute top-[92px] left-1/2 -translate-x-1/2 text-white text-2xl leading-none">
          ↓
        </div>
      )}

      <button
        type="button"
        onClick={onToggle}
        className={[
          "h-28 w-28 rounded-full flex items-center justify-center transition-transform duration-150",
          isActive ? "bg-[#6B8F2A] scale-105 ring-2 ring-white/80" : "bg-[#6B8F2A] hover:scale-105",
        ].join(" ")}
        aria-expanded={isActive}
      >
        <span className="text-5xl font-semibold text-white">{number}</span>
      </button>
    </div>
  );
}

/* ===================== SLIDE 4 ===================== */
function Slide4Content() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="h-screen w-full px-16 py-16 relative">
      <Hotspot
        id="vulnerable"
        iconSrc={IconVulnerable}
        iconAlt="Vulnerable areas icon"
        isOpen={openId === "vulnerable"}
        onToggle={() => toggle("vulnerable")}
        className="absolute left-[70px] top-[220px] w-[760px]"
        panelWidthClass="w-[820px]"
        title="Vulnerable areas:"
        body="Characterized by high resident turnover, significant language diversity, and socio-economic challenges that impact community engagement and communication effectiveness."
        expand="right"
      />

      <Hotspot
        id="costs"
        iconSrc={IconCosts}
        iconAlt="High reactive costs icon"
        isOpen={openId === "costs"}
        onToggle={() => toggle("costs")}
        className="absolute left-[220px] bottom-[160px] w-[640px]"
        panelWidthClass="w-[860px]"
        title="High Reactive Costs:"
        body="Municipalities currently spend vast sums (estimated at 430 million SEK annually across Sweden) on manually cleaning up litter and correctly sorting waste left outside full or perceived-as-full bins."
        expand="right"
      />

      {/* Flyttad upp + mer inåt för att panelen ska synas */}
      <Hotspot
        id="cycle"
        iconSrc={IconCycle}
        iconAlt="Cyclical system failure icon"
        isOpen={openId === "cycle"}
        onToggle={() => toggle("cycle")}
        className="absolute right-[420px] bottom-[380px] w-[700px]"
        panelWidthClass="w-[920px]"
        title="Cyclical System Failure:"
        body="The core issue is a cycle of failure between technology and human behavior. Technical shortcomings cause residents to perceive the system as unreliable. This technical failure then triggers a behavioral response, making the problem worse and escalating operational costs."
        expand="left"
      />
    </div>
  );
}

function Hotspot({
  id,
  iconSrc,
  iconAlt,
  isOpen,
  onToggle,
  className,
  panelWidthClass = "w-[820px]",
  title,
  body,
  expand = "right",
}) {
  const panelAlign = expand === "left" ? "origin-top-right right-0" : "origin-top-left left-0";

  return (
    <div className={`${className} ${isOpen ? "z-30" : "z-10"} pointer-events-none`}>
      <div className="flex items-start gap-10 pointer-events-none">
        <button
          type="button"
          onClick={onToggle}
          className="pointer-events-auto group relative shrink-0 rounded-2xl p-3 transition-transform duration-150 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-white/70"
          aria-expanded={isOpen}
          aria-controls={`hotspot-${id}`}
        >
          <img src={iconSrc} alt={iconAlt} className="h-20 w-20 object-contain opacity-95" />
        </button>

        <div className="pt-3 pointer-events-none relative">
          <h4 className="text-2xl font-semibold text-white pointer-events-none">{title}</h4>

          <div
            id={`hotspot-${id}`}
            className={[
              "pointer-events-auto overflow-hidden transition-all duration-300",
              isOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0",
            ].join(" ")}
          >
            <div
              className={[
                "relative",
                panelWidthClass,
                "max-w-[980px] rounded-2xl bg-black/45 backdrop-blur px-8 py-6 text-base text-white/90 shadow-lg border border-white/10",
                panelAlign,
              ].join(" ")}
            >
              {body}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== SLIDE 5 ===================== */
function Slide5Content() {
  return (
    <div className="h-screen w-full px-16 py-20">
      <h2 className="text-6xl font-semibold mb-16">Interviewee List</h2>

      <div className="grid grid-cols-3 gap-x-12 gap-y-8 max-w-[1500px]">
        {/* Column 1 */}
        <InterviewCard letter="A" title="IT Manager" subtitle="Housing Company A" />
        <InterviewCard letter="D" title="Customer Service and Waste Manager" />
        <InterviewCard letter="G" title="Property Manager 2, Area V" subtitle="Housing Company A" />
        <InterviewCard letter="J" title="Business Developer" subtitle="Social Non-Profit Organization" />
        <InterviewCard letter="M" title="Residents 1–4" />

        {/* Column 2 */}
        <InterviewCard letter="B" title="Community Developer Area V" subtitle="Housing Company A" />
        <InterviewCard letter="E" title="Property Coordinator Area V" subtitle="Housing Company A" />
        <InterviewCard letter="H" title="Business and Technology Consultant" />
        <InterviewCard letter="K" title="Project Manager" subtitle="Green Tech Company" />
        <InterviewCard letter="N" title="Waste Management Expert" />

        {/* Column 3 */}
        <InterviewCard letter="C" title="Environmental Strategist" subtitle="Housing Company A" />
        <InterviewCard letter="F" title="Property Manager 1, Area V" subtitle="Housing Company A" />
        <InterviewCard letter="I" title="Resident Behaviour Specialist & Former CEO" subtitle="Real Estate Company" />
        <InterviewCard letter="L" title="Property Manager" subtitle="Housing Company B" />
      </div>
    </div>
  );
}

function InterviewCard({ letter, title, subtitle }) {
  return (
    <div className="flex items-center gap-6 rounded-full bg-[#6B8F2A] px-8 py-5 shadow-md">
      <div className="text-3xl font-semibold text-[#0B4F3F] w-8">{letter}</div>

      <div className="leading-tight">
        <p className="text-lg font-semibold">{title}</p>
        {subtitle && <p className="text-base opacity-90">{subtitle}</p>}
      </div>
    </div>
  );
}

/* ===================== SLIDE 6 ===================== */
function Slide6Content() {
  const [activeArg, setActiveArg] = useState(null);

  const ARGUMENTS = [
    {
      title: "Argument 1",
      body: "Technological waste solutions will not be effective unless basic waste infrastructure and data handling is functional.",
    },
    {
      title: "Argument 2",
      body: "Waste-handling behavior is shaped by residents motivations and by how clearly and accessible information is communicated.",
    },
    {
      title: "Argument 3",
      body: "Long-term improvement requires that technological solutions are fully aligned with the social and behavioral dynamics of the community.",
    },
  ];

  const active = activeArg != null ? ARGUMENTS[activeArg] : null;

  return (
    <div className="h-screen w-full px-16 py-20 flex flex-col">
      <div className="max-w-[980px]">
        <h2 className="text-6xl font-semibold mb-10">Proposition</h2>

        <p className="text-base leading-relaxed text-white/90 max-w-[900px]">
          Smart waste management solutions have the potential to reduce incorrect waste disposal in vulnerable housing areas,
          yet this potential is realized only when technological interventions are integrated with behavioral and communication
          strategies that reflect residents’ motivations, barriers, and needs.
        </p>
      </div>

      {/* Expanding panel */}
      <div className="mt-10 min-h-[140px]">
        <div
          className={[
            "transition-all duration-300 overflow-hidden",
            active ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          {active && (
            <div className="max-w-[900px] rounded-2xl bg-black/45 backdrop-blur px-10 py-7 border border-white/10 shadow-lg">
              <h4 className="text-2xl font-semibold mb-3">{active.title}</h4>
              <p className="text-white/90 leading-relaxed">{active.body}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="mt-auto pb-10">
        <div className="w-full flex items-center justify-center gap-48">
          {["Argument 1", "Argument 2", "Argument 3"].map((label, idx) => (
            <ArgumentButton
              key={label}
              icon={IconChat}
              label={label}
              isActive={activeArg === idx}
              onClick={() => setActiveArg(activeArg === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ArgumentButton({ icon, label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group flex flex-col items-center gap-4",
        "transition-transform duration-150",
        isActive ? "scale-105" : "hover:scale-105",
      ].join(" ")}
      aria-pressed={isActive}
    >
      <img
        src={icon}
        alt=""
        className={[
          "h-20 w-20 object-contain",
          "opacity-95 transition-opacity duration-150",
          isActive ? "opacity-100" : "opacity-90 group-hover:opacity-100",
        ].join(" ")}
      />
      <span className="text-lg font-semibold">{label}</span>
    </button>
  );
}
function Slide7Content() {
  return (
    <div className="h-screen w-full px-16 py-20 flex flex-col">
      {/* Title + subtitle */}
      <div className="max-w-[1100px]">
        <h2 className="text-6xl font-semibold mb-6">Argument 1:</h2>
        <p className="text-base text-white/90 max-w-[980px] leading-relaxed">
          Technological waste solutions will not be effective unless basic waste infrastructure and data handling is functional
        </p>
      </div>

      {/* Middle content: bullets left, diagram right */}
      <div className="mt-14 flex items-start justify-between gap-16 flex-1">
        {/* Bullets */}
        <div className="max-w-[520px] pt-6">
          <ul className="space-y-6 text-white/90 text-base">
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Technology aims to improve efficiency</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Basic infrastructure matter for accessibility intuitive use</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Current data underused</span>
            </li>
          </ul>
        </div>

        {/* Diagram / Icon */}
        <div className="flex-1 flex justify-end pt-2">
          <img
            src={OperationsEfficiency}
            alt="Operations Efficiency diagram"
            className="w-full max-w-[720px] object-contain"
          />
        </div>
      </div>

      {/* Bottom callout box */}
      <div className="mt-10">
        <div className="max-w-[1250px] rounded-2xl bg-white/15 backdrop-blur px-10 py-8 border border-white/10">
          <p className="text-white/90 leading-relaxed">
            Poorly located waste management stations, unclear signage and hard-to-use bins (small openings, too high up for
            children) lead residents to bypass the system regardless of technological improvements.
          </p>

          <p className="text-white/90 leading-relaxed mt-5">
            If accessibility barriers remain, incorrect disposal persists, creating extra costs and reducing the value of
            technical investments.
          </p>
        </div>
      </div>
    </div>
  );
}
function Slide8Content() {
  return (
    <div className="h-screen w-full px-16 py-20 flex flex-col">
      {/* Title + subtitle */}
      <div className="max-w-[1100px]">
        <h2 className="text-6xl font-semibold mb-6">Argument 1:</h2>
        <p className="text-base text-white/90 max-w-[980px] leading-relaxed">
          Technological waste solutions will not be effective unless basic waste infrastructure and data handling is functional
        </p>
      </div>

      {/* Middle content: bullets left, diagram right */}
      <div className="mt-14 flex items-start justify-between gap-16 flex-1">
        {/* Bullets */}
        <div className="max-w-[520px] pt-6">
          <ul className="space-y-6 text-white/90 text-base">
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span><strong>42%</strong> say bins are regularly too full</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span><strong>33%</strong> say stations are too dirty</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Location affects usage</span>
            </li>
          </ul>
        </div>

        {/* Diagram / Icon (samma som Slide 7) */}
        <div className="flex-1 flex justify-end pt-2">
          <img
            src={OperationsEfficiency}
            alt="Operations Efficiency diagram"
            className="w-full max-w-[720px] object-contain"
          />
        </div>
      </div>

      {/* Bottom callout box */}
      <div className="mt-10">
        <div className="max-w-[1250px] rounded-2xl bg-white/15 backdrop-blur px-10 py-8 border border-white/10">
          <p className="text-white/90 leading-relaxed">
            Users want to sort (<strong>83%</strong> motivated by environment/cleanliness) but hindrances appear if the system
            is dirty, blocked, or poorly designed
          </p>

          <p className="text-white/95 leading-relaxed mt-6 font-semibold">
            Technology alone won’t work unless the infrastructure is functional and accessible
          </p>
        </div>
      </div>
    </div>
  );
}
function Slide9Content() {
  return (
    <div className="h-screen w-full px-16 py-20 flex items-center">
      <div className="w-full max-w-[1100px] mx-auto">
        <h2 className="text-6xl font-semibold mb-6">Argument 2:</h2>

        <p className="text-base leading-relaxed text-white/90 mb-12 max-w-[980px]">
          Waste-handling behavior is shaped by residents motivations and by how clearly and accessible information is
          communicated
        </p>

        <div className="space-y-10 text-white/90 max-w-[980px]">
          <div>
            <h4 className="text-xl font-semibold mb-3">Lack of awareness:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Residents have a limited knowledge of impacts: costs, rats, environment and neighbourhood cleanliness
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Knowledge gap:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Gap in basic knowledge</li>
              <li>Common misinterpretation of recycling rules</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Inefficient communication:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Inconsistent information</li>
              <li>Language barriers can prevent communication from reaching every resident</li>
              <li>Obligations can be understood as recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
function Slide10Content() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen w-full px-16 py-20 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-6xl font-semibold mb-6 text-center">
        Argument 2:
      </h2>

      {/* Subtitle */}
      <p className="text-base text-white/90 max-w-[1000px] text-center leading-relaxed mb-16">
        Waste-handling behavior is shaped by residents motivations and by how clearly
        and accessible information is communicated
      </p>

      {/* Two-column content */}
      <div className="w-full max-w-[1400px] flex gap-16">
        {/* LEFT */}
        <div className="flex-1 rounded-2xl bg-white/15 backdrop-blur px-10 py-8 border border-white/10">
          <h4 className="text-2xl font-semibold mb-6">Lack of engagement</h4>
          <ul className="space-y-4 text-white/90">
            <li>• Sorting waste is perceived as repetitive and low-priority</li>
            <li>• Residents often follow quickest, easiest option instead of correct one</li>
          </ul>

          <h4 className="text-2xl font-semibold mt-10 mb-6">Lack of personal gain</h4>
          <ul className="space-y-4 text-white/90">
            <li>• Many residents do not see how correct sorting benefits them personally</li>
            <li>• Without visible rewards or improvements, motivation stays low</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex-1 rounded-2xl bg-white/15 backdrop-blur px-10 py-8 border border-white/10">
          <h4 className="text-2xl font-semibold mb-6">Lack of consequences</h4>
          <ul className="space-y-4 text-white/90">
            <li>• Residents don’t fear consequences if they don’t follow rules</li>
            <li>• Consequence systems are not applicable to open layouts</li>
          </ul>

          <h4 className="text-2xl font-semibold mt-10 mb-6">Communication challenges</h4>
          <ul className="space-y-4 text-white/90">
            <li>• Inconsistent information creates confusion</li>
            <li>• Language barriers prevent information from reaching all residents</li>
            <li>• Rules are often interpreted as recommendations</li>
          </ul>
        </div>
      </div>

      {/* CLICKABLE REFLECTION (bottom) */}
      <div className="mt-auto w-full max-w-[1200px] pt-14">
        {/* Clickable heading */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full text-left text-3xl font-semibold flex items-center justify-between"
        >
          <span>What if people don’t act as intended?</span>
          <span className="text-2xl">{open ? "−" : "+"}</span>
        </button>

        {/* Expandable content */}
        <div
          className={[
            "overflow-hidden transition-all duration-300",
            open ? "max-h-[300px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0",
          ].join(" ")}
        >
          <div className="rounded-2xl bg-white/15 backdrop-blur px-10 py-8 border border-white/10">
            <p className="text-white/90 leading-relaxed mb-4">
              <strong>In reality,</strong> people interact with the system through their own
              social dynamics like <strong>mistrust, norms, language barriers, and time pressure</strong>,
              meaning that even well-designed and well-explained technology can be
              <strong> used differently than intended.</strong>
            </p>

            <p className="italic text-white/80">
              This shows the limitation of treating technology and behavior separately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Slide11Content() {
  return (
    <div className="h-screen w-full px-16 py-20 flex flex-col">
      {/* Title + subtitle */}
      <div className="max-w-[1100px]">
        <h2 className="text-6xl font-semibold mb-6">Argument 3:</h2>

        <p className="text-base text-white/90 max-w-[980px] leading-relaxed">
          Long-term improvement requires that technological solutions are fully aligned
          with the social and behavioral dynamics of the community.
        </p>

        <p className="text-base text-white/85 max-w-[980px] leading-relaxed mt-6">
          Interviews show that technical challenges (data errors, blockages, cost inefficiencies)
          rarely originate from technology alone. They are triggered or amplified by social and
          behavioral factors such as:
        </p>
      </div>

      {/* Middle content: bullets left, diagram right */}
      <div className="mt-12 flex items-start justify-between gap-16 flex-1">
        {/* Bullets */}
        <div className="max-w-[560px] pt-2">
          <ul className="space-y-6 text-white/90 text-base">
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>low awareness</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>misunderstandings at the bin</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>lack of onboarding</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>incorrect disposal habits</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>limited motivation</span>
            </li>
          </ul>
        </div>

        {/* Diagram */}
        <div className="flex-1 flex justify-end pt-2">
          <img
            src={Littering}
            alt="Littering diagram"
            className="w-full max-w-[760px] object-contain"
          />
        </div>
      </div>

      {/* Bottom paragraph */}
      <div className="mt-6 max-w-[1200px]">
        <p className="text-white/90 leading-relaxed">
          When these social and behavioral factors do not align with how the technology is designed to function,
          the entire system becomes unreliable or not useful, regardless of how advanced or “easy” the technology is to use.
        </p>
      </div>
    </div>
  );
}
function Slide12Content() {
  const [showOutcome, setShowOutcome] = useState(false);

  return (
    <div className="h-screen w-full px-16 py-20 flex flex-col">
      {/* Title */}
      <div className="max-w-[1100px] mb-10">
        <h2 className="text-6xl font-semibold mb-6">Argument 3:</h2>
        <p className="text-base text-white/90 max-w-[980px] leading-relaxed">
          Long-term improvement requires that technological solutions are fully aligned
          with the social and behavioral dynamics of the community.
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-1 items-start gap-20">
        {/* LEFT: Example */}
        <div className="max-w-[520px] text-white/90 space-y-5">
          <h4 className="text-xl font-semibold text-white">Example:</h4>

          <p>
            An app is introduced allowing residents to schedule bulky waste pickups at
            their convenience. The app is technically functional: it allows booking times,
            notifies staff, and sends confirmation messages.
          </p>
        </div>

        {/* CENTER: However arrow */}
        <div className="flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => setShowOutcome((prev) => !prev)}
            className="group flex items-center gap-4 text-white font-semibold text-lg hover:opacity-100 opacity-90 transition"
            aria-expanded={showOutcome}
          >
            <span>However</span>
            <span
              className={[
                "text-3xl transition-transform duration-300",
                showOutcome ? "translate-x-2" : "",
              ].join(" ")}
            >
              →
            </span>
          </button>
        </div>

        {/* RIGHT: Outcome (expandable) */}
        <div
          className={[
            "overflow-hidden transition-all duration-500",
            showOutcome ? "max-w-[520px] opacity-100" : "max-w-0 opacity-0",
          ].join(" ")}
        >
          <div className="text-white/90 space-y-5">
            <p>
              Many residents won’t download or use the app, either because they are unaware
              it exists or don’t find it entertaining.
            </p>

            <p>
              Some residents assume that someone else will handle disposal and therefore
              justify their own wrongdoings.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom conclusion */}
      <div className="mt-10 max-w-[1200px] space-y-4">
        <p className="text-white/90 leading-relaxed">
          <strong>Outcome:</strong> Despite a technically solid solution, incorrect disposal
          persisted, operational inefficiencies remain, and the potential benefits of the
          system are unrealized.
        </p>

        <p className="text-white/95 leading-relaxed font-semibold">
          Lesson: Technology alone cannot change behavior. Tools must be paired with
          effective communication, onboarding, and incentives to ensure that residents
          adopt new practices.
        </p>
      </div>
    </div>
  );
}
function Slide13Content() {
  return (
    <div className="h-screen w-full px-16 py-20">
      <h2 className="text-6xl font-semibold mb-14">Potential Technological Solutions</h2>

      <div className="max-w-[1100px] space-y-12 text-white/90">
        {/* Gamification */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Gamification</h4>
          <ul className="space-y-2 text-base">
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Rewards correct disposal</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Provides instant positive feedback</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Creates positive competition</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Encourages repeated engagement</span>
            </li>
          </ul>
        </div>

        {/* Digital signage */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Digital signage</h4>
          <ul className="space-y-2 text-base">
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Indicate real-time bin fill level</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>
                Helps handle blockages correctly, reducing behaviour of placing trash next to bins
              </span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Guides users to closest available stations when bin is full</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Acts as two-way communication channel, enhancing engagement</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Allows reporting of littering or problems</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Improves data collection</span>
            </li>
          </ul>
        </div>

        {/* Data-driven communication */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Data-driven communication</h4>
          <ul className="space-y-2 text-base">
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Enables targeted communication (e.g. to specific areas or new tenants)</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/90 shrink-0" />
              <span>Raise awareness</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
function Slide14Content() {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
  <div className="h-screen w-full px-16 py-20 flex flex-col items-center">
 <h2 className="text-6xl font-semibold mb-14 text-white w-full max-w-[1400px]">
  A Unified Strategy
</h2>



      {/* Top 3 containers */}
      <div className="grid grid-cols-3 gap-10 max-w-[1400px]">
        <StrategyCard
          title="Smart Bins → Data"
          isOpen={open === 1}
          onClick={() => toggle(1)}
        >
          <p>
            Generate real-time information to improve <strong>efficiency</strong> and{" "}
            <strong>accessibility</strong>.
          </p>
          <p className="mt-4">
            <strong>Foundation for all other solutions</strong> (Digital Signage,
            gamification and even other solutions).
          </p>
        </StrategyCard>

        <StrategyCard
          title="Digital Signage → Communication"
          isOpen={open === 2}
          onClick={() => toggle(2)}
        >
          <p>
            Turns data into clear instructions and feedback.
          </p>
          <p className="mt-4">
            Reduces confusion, <strong>supports multilingual communication</strong>.
          </p>
          <p className="mt-4">
            Guides residents at point of disposal.
          </p>
        </StrategyCard>

        <StrategyCard
          title="Gamification → Motivation"
          isOpen={open === 3}
          onClick={() => toggle(3)}
        >
          <p>
            Uses smart bin data to provide progress, goals and small wins.
          </p>
          <p className="mt-4">
            <strong>Increases engagement</strong> and personal relevance.
          </p>
        </StrategyCard>
      </div>

      {/* Bottom container */}
      <div className="mt-16 max-w-[1400px]">
        <StrategyCard
          title="Why they must work together"
          dark
          isOpen={open === 4}
          onClick={() => toggle(4)}
        >
          <p className="italic">
            None of these solutions work independently.
          </p>
          <p className="mt-4">
            They rely on each other to address the technical, social, and communication
            barriers identified in our findings.
          </p>
        </StrategyCard>
      </div>
    </div>
  );
}
function StrategyCard({ title, children, isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        rounded-2xl
        px-10 py-8
        bg-white
        shadow-lg
        border border-black/5
      "
    >
      <h4 className="text-2xl font-semibold mb-6 text-[#0B1F5B]">
        {title}
      </h4>

      {isOpen && (
        <div className="text-[#0B1F5B]/90 text-lg leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
function Slide15Content() {
  return (
    <div className="h-screen w-full px-16 py-20 flex flex-col items-center">
      {/* Centered title */}
      <h2 className="text-6xl font-semibold mb-16 text-center">
        Final Takeaway
      </h2>

      {/* Takeaway box */}
      <div className="max-w-[1100px] w-full rounded-3xl bg-white/90 text-black px-14 py-16 shadow-lg">
        <p className="text-3xl leading-snug text-center font-medium">
          Smart waste management is not just about upgrading bins; it is about
          upgrading the relationship between the resident and the system
        </p>
      </div>
    </div>
  );
}


