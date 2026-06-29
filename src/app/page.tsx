import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

const contractAddress = "0x867776d88DfD7061324FD97C8e03fb2DcC29a024";
const baseScanUrl = `https://basescan.org/token/${contractAddress}`;
const githubUrl = "https://github.com/eicfoundations/eic";

export default function Home() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="space-y-10">
        <section className="rise grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-cyan-200/20 bg-cyan-100/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/85">
              Live on Base Mainnet
            </div>
            <SectionHeader
              eyebrow="Energy Intelligence Coin (EIC)"
              title="Public documentation for a live Base Mainnet asset."
              description="Energy Intelligence Coin (EIC) is the live Base Mainnet token. Energy Intelligence Coin Emergent Technologies maintains the asset framework, while EIC Foundations serves as the public documentation, governance, and stewardship identity in Observed Mode."
            />
            <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.18em]">
              <Link
                className="rounded-full bg-cyan-100 px-6 py-3 text-slate-950 transition hover:bg-white"
                href="/docs"
              >
                Read Docs
              </Link>
              <Link
                className="rounded-full border border-cyan-200/20 px-6 py-3 text-cyan-50 transition hover:border-cyan-100/40 hover:bg-white/5"
                href="/transparency"
              >
                Transparency
              </Link>
            </div>
          </div>

          <Card className="space-y-6">
            <div className="space-y-4">
              <Image
                src="/eic-logo.svg"
                alt="EIC logo"
                width={96}
                height={96}
                priority
                className="h-24 w-24 rounded-2xl"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Token status
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-stone-900">
                  Market Discovery
                </h2>
              </div>
            </div>
            <dl className="grid gap-4 text-sm text-stone-700">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Digital asset
                </dt>
                <dd className="mt-1 text-base text-stone-900">
                  Energy Intelligence Coin (EIC)
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Organization
                </dt>
                <dd className="mt-1 text-base text-stone-900">
                  Energy Intelligence Coin Emergent Technologies
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Stewardship arm
                </dt>
                <dd className="mt-1 text-base text-stone-900">
                  EIC Foundations
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Network
                </dt>
                <dd className="mt-1 text-base text-stone-900">Base Mainnet</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Canonical contract
                </dt>
                <dd className="mt-1 break-all text-base text-stone-900">
                  {contractAddress}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Public posture
                </dt>
                <dd className="mt-1 text-base text-stone-900">
                  Observed Mode remains active.
                </dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
              <a
                className="transition hover:text-stone-900"
                href={baseScanUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View on BaseScan
              </a>
              <a
                className="transition hover:text-stone-900"
                href={githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Source Repository
              </a>
            </div>
          </Card>
        </section>

        <section
          className="rise grid gap-6 md:grid-cols-3"
          style={{ ["--delay" as string]: "120ms" }}
        >
          <Card className="space-y-3">
            <h3 className="text-lg font-semibold text-stone-900">
              Documentation-first
            </h3>
            <p className="text-sm leading-6 text-stone-700">
              The public site prioritizes verified references, governance
              documents, and neutral explanations over promotional or interactive
              flows.
            </p>
          </Card>
          <Card className="space-y-3">
            <h3 className="text-lg font-semibold text-stone-900">
              Maintained and stewarded distinctly
            </h3>
            <p className="text-sm leading-6 text-stone-700">
              Energy Intelligence Coin Emergent Technologies maintains the asset
              framework, while EIC Foundations carries the public community,
              documentation, governance, and stewardship posture.
            </p>
          </Card>
          <Card className="space-y-3">
            <h3 className="text-lg font-semibold text-stone-900">
              Conservative by design
            </h3>
            <p className="text-sm leading-6 text-stone-700">
              No wallet connection, claims, commerce, investor activation, or
              token interaction modules are enabled here at this stage.
            </p>
          </Card>
        </section>
      </Container>
    </div>
  );
}
