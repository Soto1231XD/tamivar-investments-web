import { Download, FileText } from "lucide-react";

import {
  projectInvestors,
  projectMovements,
  projectTasks,
  projects,
} from "@/data/projects";

export default function ProjectReportsPage() {
  const selectedProject = projects[0];

  const investors = projectInvestors.filter(
    (item) => item.projectId === selectedProject.id
  );

  const movements = projectMovements.filter(
    (item) => item.projectId === selectedProject.id
  );

  const tasks = projectTasks.filter(
    (item) => item.projectId === selectedProject.id
  );

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">
          Reporte por proyecto
        </h1>
        <p className="mt-2 text-zinc-500">
          Selecciona un proyecto para consultar su resumen financiero completo.
        </p>
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Proyecto
            </label>

            <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
              {projects.map((project) => (
                <option key={project.id}>{project.name}</option>
              ))}
            </select>
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

      <div className="grid gap-6 md:grid-cols-4">
        <Card title="Costo total" value={selectedProject.totalCost} />
        <Card
          title="Venta estimada"
          value={selectedProject.estimatedSaleAmount}
        />
        <Card title="Venta real" value={selectedProject.realSaleAmount} />
        <Card title="Utilidad" value={selectedProject.profit} />
      </div>

      <section className="grid gap-6 xl:grid-cols-2">
        <ReportTable
          title="Inversionistas"
          columns={["Inversionista", "Inversión", "% utilidad", "Total"]}
          rows={investors.map((item) => [
            item.investor,
            item.investmentAmount,
            item.profitPercentage,
            item.totalToReceive,
          ])}
        />

        <ReportTable
          title="Movimientos"
          columns={["Fecha", "Proveedor", "Concepto", "Monto"]}
          rows={movements.map((item) => [
            item.date,
            item.provider,
            item.concept,
            item.amount,
          ])}
        />
      </section>

      <ReportTable
        title="Seguimiento"
        columns={["Proceso", "Estado", "Plazo estimado"]}
        rows={tasks.map((item) => [
          item.title,
          item.status,
          item.estimatedTime,
        ])}
      />
    </section>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="text-sm text-zinc-500">{title}</p>
      <h2 className="mt-2 text-xl font-bold text-zinc-900">{value}</h2>
    </article>
  );
}

function ReportTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: string[][];
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
      <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>

      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 text-zinc-500">
            <tr>
              {columns.map((column, columnIndex) => (
                <th
                  key={`column-${columnIndex}-${column}`}
                  className="px-4 py-3 font-medium"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-200">
            {rows.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`cell-${rowIndex}-${cellIndex}`}
                    className="px-4 py-4 text-zinc-600"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
