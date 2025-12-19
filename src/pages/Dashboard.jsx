import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import Internetstiftelsen from "../assets/logos/Internetstiftelsen.svg";
import Knowit from "../assets/logos/Knowit.svg";
import ÖrebroBostäder from "../assets/logos/ÖrebroBostäder.svg";
import Grupp1 from "../assets/grupp1/1.png";
import Grupp2 from "../assets/grupp2/1.png";
import Grupp3 from "../assets/grupp3/1.png";
import Grupp4 from "../assets/grupp4/1.png";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* Header */}
      <Header />

      {/* Korten */}
      <main className="mx-auto py-6 px-16">
        <section className="">
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 text-white">
            <DashboardCard
              title="Evaluating IoT Water-Efficiency Pilots in Sweden"
              logos={[
                {src: Internetstiftelsen, alt: "Internetstiftelsen logo"},
                {src: Knowit, alt: "Knowit logo"}
              ]}
              background={Grupp1}
              navigateTo="/grupp1"
            />
            <DashboardCard
              title="Sustainable Community Development"
              leadingText="A Data-Driven Strategy for 2050"
              logos={[
                {src: Internetstiftelsen, alt: "Internetstiftelsen logo"},
                {src: Knowit, alt: "Knowit logo"}
              ]}
              background={Grupp2}
              navigateTo="/grupp2"
            />
            <DashboardCard
              title="Smart Waste Management in Vulnerable Residential Areas"
              logos={[
                {src: Internetstiftelsen, alt: "Internetstiftelsen logo"},
                {src: Knowit, alt: "Knowit logo"},
                {src: ÖrebroBostäder, alt: "Örebro Bostäder logo"}
              ]}
              background={Grupp3}
              navigateTo="/grupp3"
            />
            <DashboardCard
              title="National IoT Infrastructures"
              leadingText="Exploring Requirements of Data Sharing"
              logos={[
                {src: Internetstiftelsen, alt: "Internetstiftelsen logo"},
                {src: Knowit, alt: "Knowit logo"}
              ]}
              background={Grupp4}
              navigateTo="/grupp4"
            />
            {/* <Link
              to="/grupp1"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 min-h-[180px] hover:border-sky-400 hover:bg-slate-900/80 transition-all shadow-md hover:shadow-xl"
            >
              <h2 className="text-lg font-medium text-slate-50">
                Grupp 1
              </h2>
              <p className="text-sm text-slate-400 mt-3">Test</p>
            </Link>

            <Link
              to="/grupp2"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 min-h-[180px] hover:border-emerald-400 hover:bg-slate-900/80 transition-all shadow-md hover:shadow-xl"
            >
              <h2 className="text-lg font-medium text-slate-50">
                Grupp 2
              </h2>
              <p className="text-sm text-slate-400 mt-3">Test</p>
            </Link>

            <Link
              to="/grupp3"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 min-h-[180px] hover:border-violet-400 hover:bg-slate-900/80 transition-all shadow-md hover:shadow-xl"
            >
              <h2 className="text-lg font-medium text-slate-50">
                Grupp 3
              </h2>
              <p className="text-sm text-slate-400 mt-3">Test</p>
            </Link>

            <Link
              to="/grupp4"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 min-h-[180px] hover:border-orange-400 hover:bg-slate-900/80 transition-all shadow-md hover:shadow-xl"
            >
              <h2 className="text-lg font-medium text-slate-50">
                Grupp 4
              </h2>
              <p className="text-sm text-slate-400 mt-3">Test</p>
            </Link> */}

          </div>
        </section>
      </main>
    </div>
  );
}
