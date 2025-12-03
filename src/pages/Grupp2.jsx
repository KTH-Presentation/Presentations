import { Link } from "react-router-dom";

export default function Grupp2() {
	return (
		<div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl font-semibold mb-4">Presentation Grupp 2</h1>
				<p className="text-sm text-slate-400 mb-6">Det här är sidan för Grupp 2.</p>
				<Link to="/" className="text-emerald-400 hover:underline">← Tillbaka till Dashboard</Link>
			</div>
		</div>
	);
}

