import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-footer-foreground">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-footer-foreground-muted hover:text-footer-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="space-y-2 text-xs leading-relaxed text-footer-foreground-muted">
            <p>{footer.legalBlock.entity}</p>
            <p>{footer.legalBlock.msb}</p>
            <p>{footer.legalBlock.issuer}</p>
            <p>{footer.legalBlock.notBank}</p>
          </div>
          <p className="mt-6 text-xs text-footer-foreground-muted">{footer.legalBlock.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
