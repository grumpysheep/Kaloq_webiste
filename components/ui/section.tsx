import { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
