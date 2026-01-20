import { AnchorHTMLAttributes } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ExternalLink({
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
