import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
            KTH-Presentationer
          </h1>

          {/* NAVBAR */}
          <nav className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/grupp1"
              className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900 hover:border-sky-400 hover:text-sky-300 transition"
            >
              Grupp 1
            </Link>
            <Link
              to="/grupp2"
              className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900 hover:border-emerald-400 hover:text-emerald-300 transition"
            >
              Grupp 2
            </Link>
            <Link
              to="/grupp3"
              className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900 hover:border-violet-400 hover:text-violet-300 transition"
            >
              Grupp 3
            </Link>
            <Link
              to="/grupp4"
              className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900 hover:border-orange-400 hover:text-orange-300 transition"
            >
              Grupp 4
            </Link>
          </nav>
        </div>
      </header>

      {/* Korten */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="mt-6">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

            <Link
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
            </Link>

          </div>
        </section>
      </main>
    </div>
  );
}
