import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CircleDollarSign,
  History,
  Users,
} from "lucide-react";

const reportSections = [
  {
    title: "Reportes de inversionistas",
    description:
      "Consulta historial, capital, utilidad y proyectos por inversionista.",
    href: "/reports/investors",
    icon: Users,
  },
  {
    title: "Reportes de proyectos",
    description:
      "Consulta costos, movimientos, inversionistas, utilidad y seguimiento por proyecto.",
    href: "/reports/projects",
    icon: Building2,
  },
  {
    title: "Reporte de capital",
    description:
      "Revisa capital total, disponible, invertido, aportaciones y retiros.",
    href: "/reports/capital",
    icon: CircleDollarSign,
  },
  {
    title: "Reporte de movimientos",
    description:
      "Filtra movimientos por proyecto, tipo, proveedor o periodo.",
    href: "/reports/movements",
    icon: History,
  },
];

export default function ReportsPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Reportes</h1>
        <p className="mt-2 text-zinc-500">
          Genera reportes específicos usando filtros por inversionista,
          proyecto, capital o movimientos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reportSections.map((section) => {
          const Icon = section.icon;

          return (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-700">
                <Icon size={23} />
              </div>

              <h2 className="text-lg font-semibold text-zinc-900">
                {section.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {section.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900">
                Abrir reporte
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}