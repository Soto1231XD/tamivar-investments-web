import Link from "next/link";

import { TableActions } from "@/components/ui/table-actions";

import {
  ArrowDownCircle,
  ArrowUpCircle,
  Plus,
  Search,
} from "lucide-react";

import { movements } from "@/data/movements";

export default function MovementsPage() {
  const totalIncome = "$230,000";
  const totalExpenses = "$36,700";
  const balance = "$193,300";

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">
            Movimientos
          </h1>
          <p className="mt-2 text-zinc-500">
            Registro de ingresos, gastos, aportaciones y retiros.
          </p>
        </div>

        <Link
  href="/movements/new"
  className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
>
  <Plus size={18} />
  Nuevo movimiento
</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <ArrowUpCircle size={22} />
          </div>

          <p className="text-sm font-medium text-zinc-500">
            Ingresos
          </p>
          <h2 className="mt-3 text-2xl font-bold text-zinc-900">
            {totalIncome}
          </h2>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
            <ArrowDownCircle size={22} />
          </div>

          <p className="text-sm font-medium text-zinc-500">
            Gastos
          </p>
          <h2 className="mt-3 text-2xl font-bold text-zinc-900">
            {totalExpenses}
          </h2>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">
            Balance
          </p>
          <h2 className="mt-3 text-2xl font-bold text-zinc-900">
            {balance}
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Ingresos menos gastos registrados.
          </p>
        </article>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              Historial de movimientos
            </h2>
            <p className="text-sm text-zinc-500">
              Movimientos recientes registrados en el sistema.
            </p>
          </div>

          <div className="relative w-full md:max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              placeholder="Buscar movimiento..."
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Concepto</th>
                <th className="px-4 py-3 font-medium">Proyecto</th>
                <th className="px-4 py-3 font-medium">Inversionista</th>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 font-medium">Categoría</th>
                <th className="px-4 py-3 text-right font-medium">Monto</th>
                <th className="px-4 py-3 text-right font-medium">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {movements.map((movement) => (
                <tr key={movement.id} className="hover:bg-zinc-50">
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
                    {movement.investor}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={
                        movement.type === "Ingreso"
                          ? "rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                          : "rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700"
                      }
                    >
                      {movement.type}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-zinc-600">
                    {movement.category}
                  </td>

                  <td
                    className={
                      movement.type === "Ingreso"
                        ? "px-4 py-4 text-right font-semibold text-emerald-600"
                        : "px-4 py-4 text-right font-semibold text-red-600"
                    }
                  >
                    {movement.amount}
                  </td>

                  <td className="px-4 py-4 text-right">
  <TableActions
    viewHref={`/movements/${movement.id}`}
    editHref={`/movements/${movement.id}/edit`}
  />
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}