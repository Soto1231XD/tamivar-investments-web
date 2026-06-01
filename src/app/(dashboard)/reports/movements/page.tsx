import { Download, FileText } from "lucide-react";

import { movements } from "@/data/movements";
import { projects } from "@/data/projects";

export default function MovementReportsPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">
          Reporte de movimientos
        </h1>
        <p className="mt-2 text-zinc-500">
          Filtra ingresos, gastos, aportaciones y movimientos generales.
        </p>
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-6 md:grid-cols-4">
          <Select label="Proyecto">
            <option>Todos</option>
            {projects.map((project) => (
              <option key={project.id}>{project.name}</option>
            ))}
          </Select>

          <Select label="Tipo">
            <option>Todos</option>
            <option>Ingreso</option>
            <option>Gasto</option>
            <option>Aportación</option>
            <option>Retiro</option>
          </Select>

          <Input label="Fecha inicio" type="date" />
          <Input label="Fecha fin" type="date" />
        </div>

        <div className="mt-6 grid gap-3 sm:flex sm:justify-end">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800">
            <FileText size={17} />
            Generar
          </button>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
            <Download size={17} />
            PDF
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-lg font-semibold text-zinc-900">
          Resultado del reporte
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Concepto</th>
                <th className="px-4 py-3 font-medium">Proyecto</th>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 text-right font-medium">Monto</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {movements.map((movement) => (
                <tr key={movement.id}>
                  <td className="px-4 py-4 text-zinc-600">
                    {movement.date}
                  </td>
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {movement.concept}
                  </td>
                  <td className="px-4 py-4 text-zinc-600">
                    {movement.project}
                  </td>
                  <td className="px-4 py-4 text-zinc-600">
                    {movement.type}
                  </td>
                  <td className="px-4 py-4 text-right font-semibold text-zinc-900">
                    {movement.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

function Select({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-700">{label}</label>
      <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
        {children}
      </select>
    </div>
  );
}

function Input({ label, type }: { label: string; type: string }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-700">{label}</label>
      <input
        type={type}
        className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
      />
    </div>
  );
}
