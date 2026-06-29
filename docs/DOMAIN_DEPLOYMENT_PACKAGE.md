# Domain Deployment Package

This package prepares `eic-site` for the approved public domain target.
It assumes **Vercel** as the default deployment target because no other provider
configuration exists in the repository today. If a different host is selected,
keep the repository update steps and replace only the host-specific DNS records.

The identity hierarchy this package supports is:
- Digital Asset: Energy Intelligence Coin (EIC)
- Organization: Energy Intelligence Coin Emergent Technologies
- Community / Stewardship Arm: EIC Foundations

## Approved Domain Targets

- Primary domain: `eicfoundations.org`
- Status: Registered and DNS-connected to Vercel
- Future redirect domain: `eicfoundations.com`

## DNS Records For Vercel Hosting

### Website

| Type | Name | Value | Purpose |
| --- | --- | --- | --- |
| A | `@` | `76.76.21.21` | Vercel apex routing for `eicfoundations.org` |
| CNAME | `www` | `cname.vercel-dns.com.` | Optional alias if `www.eicfoundations.org` is later attached |
| A or ALIAS | `@` on `eicfoundations.com` | registrar / DNS provider dependent | Future redirect-domain support |
| CNAME | `www` on `eicfoundations.com` | `cname.vercel-dns.com.` | Future redirect-domain support |

### Recommended Redirect Behavior In Vercel

- `eicfoundations.org` is the active **primary** domain in Vercel.
- Add `eicfoundations.com` later as a secondary domain and redirect it to
  `eicfoundations.org`.
- If `www.eicfoundations.org` is attached, redirect it to the chosen canonical
  hostname under the `.org` domain.

## Email Authentication Records

These are templates only. Email remains inactive until explicitly enabled.
Replace provider-specific placeholder values once the mail service is selected.

### SPF

| Type | Name | Value |
| --- | --- | --- |
| TXT | `@` | `v=spf1 include:mail.example-provider.com -all` |

### DKIM

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `s1._domainkey` | `s1.domainkey.example-provider.com.` |
| CNAME | `s2._domainkey` | `s2.domainkey.example-provider.com.` |

### DMARC

| Type | Name | Value |
| --- | --- | --- |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; adkim=s; aspf=s; pct=100; rua=mailto:dmarc@eicfoundations.org` |

### Optional MX Records

MX records are email-provider specific and should be copied from the provider
console once the mailbox platform is chosen. They are intentionally not guessed
here.

## Hosting Configuration Included In Repo

- `vercel.json`: baseline security headers for the public site.
- `next.config.ts`: sets `turbopack.root` to the repo directory.
- `.env.example`: prepared for `eicfoundations.org` as primary and
  `eicfoundations.com` as future redirect.
- `scripts/set-domain.mjs`: can still stamp a final domain choice if policy
  changes later.
- `package.json`: includes `npm run set:domain -- <domain> [www-domain]`.

## Canonical Asset Reference

- Asset: Energy Intelligence Coin (EIC)
- Contract: `0x867776d88DfD7061324FD97C8e03fb2DcC29a024`
- Network: Base Mainnet

## Domain Binding Checklist

1. `eicfoundations.org` is registered.
2. The Vercel project exists and is connected to the site.
3. `eicfoundations.org` is added in Vercel as the primary domain.
4. The required DNS records for `eicfoundations.org` are connected.
5. Vercel domain verification and TLS issuance are complete.
6. Canonical HTTPS behavior on `eicfoundations.org` is confirmed.
7. Register `eicfoundations.com` later when redirect-domain protection is desired.
8. Add `eicfoundations.com` in Vercel and configure it to redirect to
   `eicfoundations.org`.
9. Select the email provider only when email activation is approved.
10. Add SPF, DKIM, DMARC, and provider MX records after email approval.
11. Keep `docs/OFFICIAL_LINKS.md` aligned with live domain status.
12. Deploy site updates through the connected Vercel project as needed.

## Repository Files Reflecting The Approved Domain Plan

- `.env.example`
- `docs/OFFICIAL_LINKS.md`
- `docs/DOMAIN_DEPLOYMENT_PACKAGE.md`
- `CANONICAL_IDENTITY.md`

## Post-Registration Review

Confirm these remain accurate for the live domain:

- `src/app/layout.tsx` metadata should continue using `NEXT_PUBLIC_SITE_URL`.
- `docs/OFFICIAL_LINKS.md` should reflect live registration status.
- Any external deployment console should use `eicfoundations.org` as primary.
- `eicfoundations.com` should remain documented as future redirect until added.
