import { Plus, Search, Wallet } from "lucide-react";

import { TableActions } from "@/components/ui/table-actions";

import Link from "next/link";

import { capitalAccounts, capitalMovements } from "@/data/capital";

export default function CapitalPage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">
            Capital
          </h1>
          <p className="mt-2 text-zinc-500">
            Resumen general del capital por inversionista.
          </p>
        </div>

        <Link
  href="/capital/movements/new"
  className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
>
  <Plus size={18} />
  Nuevo ajuste
</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card title="Capital total" value="$3,250,000" />
        <Card title="Capital invertido" value="$2,180,000" />
        <Card title="Capital disponible" value="$1,070,000" />
        <Card title="Utilidad acumulada" value="$302,000" />
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              Cuentas de capital
            </h2>
            <p className="text-sm text-zinc-500">
              Control por inversionista.
            </p>
          </div>

          <div className="relative w-full max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              placeholder="Buscar inversionista..."
              className="h-11 w-full rounded-xl border border-zinc-200 pl-10 pr-4 text-sm outline-none focus:border-zinc-400"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Clave</th>
                <th className="px-4 py-3 font-medium">Nombre</th>
                <th className="px-4 py-3 font-medium">Capital total</th>
                <th className="px-4 py-3 font-medium">Invertido</th>
                <th className="px-4 py-3 font-medium">Disponible</th>
                <th className="px-4 py-3 font-medium">Utilidad</th>
                <th className="px-4 py-3 text-right font-medium">Acciones</th>  
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {capitalAccounts.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-50">
                  <td className="px-4 py-4 font-semibold text-zinc-900">
                    {item.investor}
                  </td>
                  <td className="px-4 py-4 text-zinc-600">{item.name}</td>
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {item.totalCapital}
                  </td>
                  <td className="px-4 py-4 text-zinc-600">
                    {item.investedCapital}
                  </td>
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {item.availableCapital}
                  </td>
                  <td className="px-4 py-4 font-medium text-emerald-600">
                    {item.profit}
                  </td>
                  <td className="px-4 py-4 text-right">
  <TableActions
    viewHref={`/capital/${item.id}`}
    editHref={`/capital/${item.id}/edit`}
  />
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-zinc-900">
          Movimientos generales de capital
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Inversionista</th>
                <th className="px-4 py-3 font-medium">Concepto</th>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 text-right font-medium">Monto</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {capitalMovements.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 text-zinc-600">{item.date}</td>
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {item.investor}
                  </td>
                  <td className="px-4 py-4 text-zinc-600">{item.concept}</td>
                  <td className="px-4 py-4 text-zinc-600">{item.type}</td>
                  <td
                    className={
                      item.type === "Ingreso"
                        ? "px-4 py-4 text-right font-semibold text-emerald-600"
                        : "px-4 py-4 text-right font-semibold text-red-600"
                    }
                  >
                    {item.amount}
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
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
        <Wallet size={22} />
      </div>
      <p className="text-sm text-zinc-500">{title}</p>
      <h2 className="mt-2 text-2xl font-bold text-zinc-900">{value}</h2>
    </article>
  );
}