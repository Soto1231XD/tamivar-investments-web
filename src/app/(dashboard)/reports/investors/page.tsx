import { Download, FileText, Search } from "lucide-react";

import { investors } from "@/data/investors";
import { projectInvestors, projects } from "@/data/projects";

export default function InvestorReportsPage() {
  const selectedInvestor = investors[0];

  const investorProjects = projectInvestors.filter(
    (item) => item.investor === selectedInvestor.alias
  );

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">
          Reporte por inversionista
        </h1>
        <p className="mt-2 text-zinc-500">
          Selecciona un inversionista para consultar su historial de inversiones.
        </p>
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Inversionista
            </label>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
              />

              <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
                {investors.map((investor) => (
                  <option key={investor.id}>
                    {investor.name} ({investor.alias})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-3 sm:flex">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800">
              <FileText size={17} />
              Generar
            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
              <Download size={17} />
              PDF
            </button>
          </div>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Capital total" value={selectedInvestor.totalCapital} />
        <Card title="Capital invertido" value={selectedInvestor.investedCapital} />
        <Card title="Capital disponible" value={selectedInvestor.availableCapital} />
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-lg font-semibold text-zinc-900">
          Historial de inversiones
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Proyectos donde participa el inversionista seleccionado.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Proyecto</th>
                <th className="px-4 py-3 font-medium">Inversión</th>
                <th className="px-4 py-3 font-medium">% inversión</th>
                <th className="px-4 py-3 font-medium">% utilidad</th>
                <th className="px-4 py-3 font-medium">Utilidad mensual</th>
                <th className="px-4 py-3 font-medium">Total a recibir</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {investorProjects.map((item) => {
                const project = projects.find(
                  (project) => project.id === item.projectId
                );

                return (
                  <tr key={item.id}>
                    <td className="px-4 py-4 font-medium text-zinc-900">
                      {project?.name}
                    </td>
                    <td className="px-4 py-4 text-zinc-600">
                      {item.investmentAmount}
                    </td>
                    <td className="px-4 py-4 text-zinc-600">
                      {item.investmentPercentage}
                    </td>
                    <td className="px-4 py-4 text-zinc-600">
                      {item.profitPercentage}
                    </td>
                    <td className="px-4 py-4 text-zinc-600">
                      {item.monthlyProfit}
                    </td>
                    <td className="px-4 py-4 font-semibold text-zinc-900">
                      {item.totalToReceive}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="text-sm text-zinc-500">{title}</p>
      <h2 className="mt-2 text-2xl font-bold text-zinc-900">{value}</h2>
    </article>
  );
}
