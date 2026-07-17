import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-zinc-950 text-white">
      <h1 className="text-8xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">404</h1>
      <h2 className="mt-4 text-2xl font-sora font-semibold">Page Not Found</h2>
      <p className="mt-2 text-zinc-400 max-w-md mx-auto">
        The page you are looking for does not exist, has been removed, name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
