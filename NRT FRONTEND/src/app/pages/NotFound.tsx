import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="pt-32 min-h-screen bg-[#F2F2F2] text-slate-900 flex items-center justify-center text-center px-4">
      <Helmet>
        <title>404 - Page Not Found | Next Revolution Tech</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-2xl">
        <div className="text-[10rem] font-black leading-none tracking-tighter text-primary/10 mb-8 select-none">
          404
        </div>
        <h1 className="hero-heading mb-8">Page <span className="text-orange-600">Not Found</span></h1>
        <p className="text-xl font-bold text-muted-foreground mb-12">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/" className="btn-glossy px-10 py-5 text-xl">
            <Home className="w-5 h-5 mr-2" /> Back Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline-nrt px-10 py-5 text-xl">
            <ArrowLeft className="w-5 h-5 mr-2" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
