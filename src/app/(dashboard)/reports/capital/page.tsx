import { Download, FileText } from "lucide-react";

import { capitalAccounts } from "@/data/capital";

export default function CapitalReportsPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">
          Reporte de capital
        </h1>
        <p className="mt-2 text-zinc-500">
          Consulta el resumen general de capital y sus movimientos.
        </p>
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr_auto] md:items-end">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Fecha inicio
            </label>
            <input
              type="date"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Fecha fin
            </label>
            <input
              type="date"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
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
        <Card title="Capital total" value="$3,250,000" />
        <Card title="Capital invertido" value="$2,180,000" />
        <Card title="Capital disponible" value="$1,070,000" />
        <Card title="Utilidad acumulada" value="$302,000" />
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-lg font-semibold text-zinc-900">
          Cuentas de capital
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Clave</th>
                <th className="px-4 py-3 font-medium">Nombre</th>
                <th className="px-4 py-3 font-medium">Total</th>
                <th className="px-4 py-3 font-medium">Invertido</th>
                <th className="px-4 py-3 font-medium">Disponible</th>
                <th className="px-4 py-3 font-medium">Utilidad</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {capitalAccounts.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {item.investor}
                  </td>
                  <td className="px-4 py-4 text-zinc-600">{item.name}</td>
                  <td className="px-4 py-4 text-zinc-600">{item.totalCapital}</td>
                  <td className="px-4 py-4 text-zinc-600">{item.investedCapital}</td>
                  <td className="px-4 py-4 text-zinc-600">{item.availableCapital}</td>
                  <td className="px-4 py-4 font-semibold text-emerald-600">
                    {item.profit}
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

function Card({ title, value }: { title: string; value: string }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="text-sm text-zinc-500">{title}</p>
      <h2 className="mt-2 text-xl font-bold text-zinc-900">{value}</h2>
    </article>
  );
}
