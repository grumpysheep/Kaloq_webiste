import type { FeeRow } from "@/lib/content";

export function FeeTable({ heading, rows }: { heading?: string; rows: FeeRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      {heading && (
        <div className="border-b border-border bg-background-subtle px-6 py-4">
          <h3 className="text-sm font-semibold text-foreground">{heading}</h3>
        </div>
      )}
      <table className="w-full text-left">
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="px-6 py-4 align-top">
                <div className="text-sm font-medium text-foreground">{row.label}</div>
                <div className="mt-0.5 text-xs leading-relaxed text-foreground-muted">{row.note}</div>
              </td>
              <td className="px-6 py-4 text-right align-top">
                <span className="tabular-figures text-sm font-medium text-foreground whitespace-nowrap">
                  {row.value}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
