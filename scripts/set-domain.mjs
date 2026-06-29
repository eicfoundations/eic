#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const domain = process.argv[2]?.trim().toLowerCase();

if (!domain) {
  console.error("Usage: node scripts/set-domain.mjs <domain> [www-domain]");
  process.exit(1);
}

const wwwDomain = (process.argv[3]?.trim().toLowerCase() || `www.${domain}`)
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");
const normalizedDomain = domain.replace(/^https?:\/\//, "").replace(/\/$/, "");
const siteUrl = `https://${normalizedDomain}`;

const replacements = [
  {
    file: path.join(repoRoot, ".env.example"),
    update: (content) =>
      content
        .replace(/^NEXT_PUBLIC_SITE_URL=.*/m, `NEXT_PUBLIC_SITE_URL=${siteUrl}`)
        .replace(
          /^EIC_CANONICAL_DOMAIN=.*/m,
          `EIC_CANONICAL_DOMAIN=${normalizedDomain}`,
        )
        .replace(/^EIC_WWW_DOMAIN=.*/m, `EIC_WWW_DOMAIN=${wwwDomain}`)
        .replace(
          /^EIC_EMAIL_FROM=.*/m,
          `EIC_EMAIL_FROM=info@${normalizedDomain}`,
        )
        .replace(
          /^EIC_EMAIL_DMARC_REPORT_TO=.*/m,
          `EIC_EMAIL_DMARC_REPORT_TO=dmarc@${normalizedDomain}`,
        ),
  },
  {
    file: path.join(repoRoot, "docs", "OFFICIAL_LINKS.md"),
    update: () => `# Official Links

This file is the single source of truth for official EIC references. If a link
is not listed here, it is not official.

## Website
- Primary domain target: \`${normalizedDomain}\`
- Redirect / alias domain: \`${wwwDomain}\`
- Registration status: update after domain registration is complete.

## Public Stewardship Identity
- EIC Foundations
- Role: public community, documentation, governance, and stewardship identity

## Organization
- Energy Intelligence Coin Emergent Technologies
- Role: maintaining organization for the Energy Intelligence Coin asset

## GitHub
- Repository: https://github.com/eicfoundations/eic
- Repository identity: EIC Foundations

## BaseScan
- Token contract:
  https://basescan.org/token/0x867776d88DfD7061324FD97C8e03fb2DcC29a024
- Contract address:
  \`0x867776d88DfD7061324FD97C8e03fb2DcC29a024\`
- Asset: Energy Intelligence Coin (EIC)
- Network: Base Mainnet

## Socials
- No social channels are published here yet. Any account not listed in this file
  should be treated as unofficial.
`,
  },
  {
    file: path.join(repoRoot, "docs", "DOMAIN_DEPLOYMENT_PACKAGE.md"),
    update: (content) =>
      content
        .replace(/eicfoundations\.org/g, normalizedDomain)
        .replace(/eicfoundations\.com/g, wwwDomain)
        .replace(/info@eicfoundations\.org/g, `info@${normalizedDomain}`)
        .replace(/dmarc@eicfoundations\.org/g, `dmarc@${normalizedDomain}`),
  },
];

for (const target of replacements) {
  const current = fs.readFileSync(target.file, "utf8");
  fs.writeFileSync(target.file, target.update(current), "utf8");
  console.log(`Updated ${path.relative(repoRoot, target.file)}`);
}
