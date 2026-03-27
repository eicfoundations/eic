import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold">E</div>
            <span className="font-semibold text-2xl tracking-tight">EIC</span>
          </div>

          <div className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#token" className="hover:text-blue-400 transition-colors">
              Token
            </a>
            <a href="#grid" className="hover:text-blue-400 transition-colors">
              The Grid
            </a>
          </div>

          <a
            href="https://x.com/kommanderaeon"
            target="_blank"
            className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-zinc-200 transition"
          >
            Follow on X
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-700 rounded-full text-sm mb-8">
            Live on Base • Contract Verified
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-6xl font-black text-white tracking-tighter">EIC</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            Energy Intelligence Coin
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
            A transparent digital asset in market discovery phase.
            <br />
            No promises. No hype. Just on-chain reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#token"
              className="px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-zinc-100 transition text-lg"
            >
              View Contract
            </a>
            <a
              href="https://basescan.org/address/0x867776d88DfD7061324FD97C8e03fb2DcC29a024"
              target="_blank"
              className="px-10 py-4 border border-zinc-700 rounded-2xl font-semibold hover:bg-zinc-900 transition text-lg"
            >
              Basescan
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 border-t border-zinc-800 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-semibold mb-10 text-center md:text-left">Philosophy</h2>
          <div className="prose prose-invert text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto md:mx-0 space-y-6">
            <p>EIC is intentionally launched without fixed narratives, promises, or forced utility.</p>
            <p>
              We prioritize transparency, stability, and organic participation while the market determines direction
              and value.
            </p>
            <p>There are no guarantees, no profit claims, and no exaggerated roadmaps. EIC exists openly on-chain.</p>
          </div>
        </div>
      </section>

      {/* Token Info */}
      <section id="token" className="py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-semibold mb-12 text-center">Token Details</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-10">
              <p className="text-zinc-500 text-sm mb-3">CONTRACT ADDRESS</p>
              <p className="font-mono text-sm break-all text-blue-400 leading-relaxed">
                0x867776d88DfD7061324FD97C8e03fb2DcC29a024
              </p>
              <a
                href="https://basescan.org/address/0x867776d88DfD7061324FD97C8e03fb2DcC29a024"
                target="_blank"
                className="text-blue-400 text-sm mt-6 inline-block hover:underline"
              >
                View on Basescan ?
              </a>
            </div>

            <div className="space-y-10 pt-3">
              <div>
                <p className="text-zinc-500 text-sm">TOTAL SUPPLY</p>
                <p className="text-4xl font-medium">1,000,000,000 EIC</p>
              </div>
              <div>
                <p className="text-zinc-500 text-sm">CURRENT PHASE</p>
                <p className="text-3xl">Market Discovery</p>
              </div>
              <div>
                <p className="text-zinc-500 text-sm">UTILITY</p>
                <p className="text-3xl text-zinc-400">To be determined by the market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Grid */}
      <section id="grid" className="py-20 border-t border-zinc-800 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold mb-6">Light The Grid</h2>
          <p className="text-xl text-zinc-400 max-w-xl mx-auto">
            EIC Emergent Technology explores present and future technological directions around the EIC asset.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 text-sm mb-8">
            <a href="https://x.com/kommanderaeon" target="_blank" className="hover:text-white transition">
              X
            </a>
            <a
              href="https://basescan.org/address/0x867776d88DfD7061324FD97C8e03fb2DcC29a024"
              target="_blank"
              className="hover:text-white transition"
            >
              Basescan
            </a>
          </div>

          <p className="text-zinc-500 text-sm">
            Energy Intelligence Coin (EIC) — Transparent by design.
            <br />
            No promises. No guarantees. Just on-chain truth.
          </p>

          <p className="text-xs text-zinc-600 mt-10">
            Contact:{" "}
            <a href="mailto:eicgrid@proton.me" className="hover:text-zinc-400">
              eicgrid@proton.me
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
