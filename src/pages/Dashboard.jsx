import Header from "../components/Header.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import Internetstiftelsen from "../assets/logos/Internetstiftelsen.svg";
import Knowit from "../assets/logos/Knowit.svg";
import ÖrebroBostäder from "../assets/logos/ÖrebroBostäder.svg";
import Rymd from "../assets/logos/Rymd.svg";
import Haninge from "../assets/logos/Haninge1.svg";
import Grupp1 from "../assets/grupp1/1.png";
import Grupp2 from "../assets/grupp2/1.png";
import Grupp3 from "../assets/grupp3/1.png";
import Grupp4 from "../assets/grupp4/card-bg.png";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* Header */}
      <Header />

      {/* Korten */}
      <main className="max-w-[1920px] mx-auto py-6 md:px-8 xl:px-16">
        <section>
          <div className="mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 text-white">
            <DashboardCard
              title="Evaluating IoT Water-Efficiency Pilots in Sweden"
              description="Hållbar vattenförsörjning: En vetenskaplig analys av hur lokala IoT-projekt kan skalas upp till en standardiserad nationell modell baserat på IoT Sveriges projektbank."
              logos={[
                { src: Internetstiftelsen, alt: "Internetstiftelsen logo" },
                { src: Knowit, alt: "Knowit logo" }
              ]}
              background={Grupp1}
              navigateTo="/grupp1"
            />
            <DashboardCard
              title="Sustainable Community Development"
              leadingText="Exploring Smart City Development and Sustainable Living Towards 2050"
              description="Smart stadsplanering: Nya sätt att använda data från IoT, satelliter, geografiska verktyg och digitala tvillingar för hållbart byggande."
              logos={[
                { src: Knowit, alt: "Knowit logo" },
                { src: Haninge, alt: "Haninge logo" },
                { src: Rymd, alt: "Rymdstyrelsen logo" },
              ]}
              background={Grupp2}
              navigateTo="/grupp2"
            />
            <DashboardCard
              title="Smart Waste Management in Vulnerable Residential Areas"
              description="Trygga livsmiljöer: hållbara strategier för effektiv avfallshantering med stöd av tekniska lösningar och avancerade analyser - fördelar och nackdelar."
              logos={[
                { src: Internetstiftelsen, alt: "Internetstiftelsen logo" },
                { src: Knowit, alt: "Knowit logo" },
                { src: ÖrebroBostäder, alt: "Örebro Bostäder logo" }
              ]}
              background={Grupp3}
              navigateTo="/grupp3"
            />
            <DashboardCard
              title="National IoT Infrastructures"
              leadingText="Exploring Requirements of Data Sharing"
              description="Nationell IoT-infrastruktur: Tekniska och organisatoriska krav för robusthet, säkerhet och skalbarhet – viktiga pusselbitar i arbetet med framtidens styrning och uppföljning."
              logos={[
                { src: Internetstiftelsen, alt: "Internetstiftelsen logo" },
                { src: Knowit, alt: "Knowit logo" }
              ]}
              background={Grupp4}
              navigateTo="/grupp4"
            />
          </div>
        </section>
      </main>
      <div className="h-full mt-2 mb-32 shadow-[0_-2px_4px_rgba(0,0,0,0.10)]">
        <div className="px-16 pt-6">
          <span className="text-sm font-medium uppercase">Hållbar samhällsutveckling</span>
          <h1 className="font-medium leading-snug text-3xl">Event hos Internetstiftelsen</h1>
          <p className="w-2/4 pt-2 text-lg">I samarbete med <span className="font-bold">Knowit</span>, <span className="font-bold">KTH</span>, <span className="font-bold">Örebrobostäder</span>, <span className="font-bold">Internetstiftelsen</span> och fler får du ta del av praktiska erfarenheter och kreativa diskussioner. Studenter från <span className="font-bold">KTH:s Masterprogram</span> <span className="font-semibold">Industriell ekonomi</span> har utforskat hur Internet of Things <span className="font-bold">(IoT)</span> bidrar till hållbar samhällsutveckling.</p>
          <p className="w-2/4 pt-2 text-lg">Under hösten 2025 har studenterna utforskat hur Internet of Things <span className="font-bold">(IoT)</span> kan bidra till hållbar samhällsutveckling. Du får ta del av analyser och rekommendationer.</p>
        </div>
      </div>
    </div>
  );
}
