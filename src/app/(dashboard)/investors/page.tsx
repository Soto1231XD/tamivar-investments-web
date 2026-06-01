import Link from "next/link";

import { TableActions } from "@/components/ui/table-actions";

import { Plus, Search } from "lucide-react";

import { investors } from "@/data/investors";

export default function InvestorsPage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">
            Inversionistas
          </h1>
          <p className="mt-2 text-zinc-500">
            Control del capital registrado, invertido y disponible.
          </p>
        </div>

        <Link
  href="/investors/new"
  className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
>
  <Plus size={18} />
  Nuevo inversionista
</Link>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              placeholder="Buscar inversionista..."
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <p className="text-sm text-zinc-500">
            {investors.length} inversionistas registrados
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Nombre</th>
                <th className="px-4 py-3 font-medium">Alias</th>
                <th className="px-4 py-3 font-medium">Capital total</th>
                <th className="px-4 py-3 font-medium">Invertido</th>
                <th className="px-4 py-3 font-medium">Disponible</th>
                <th className="px-4 py-3 font-medium">Estado</th>
                <th className="px-4 py-3 text-right font-medium">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {investors.map((investor) => (
                <tr key={investor.id} className="hover:bg-zinc-50">
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {investor.name}
                  </td>

                  <td className="px-4 py-4 text-zinc-600">
                    {investor.alias}
                  </td>

                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {investor.totalCapital}
                  </td>

                  <td className="px-4 py-4 text-zinc-600">
                    {investor.investedCapital}
                  </td>

                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {investor.availableCapital}
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                      {investor.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-right">
  <TableActions
    viewHref={`/investors/${investor.id}`}
    editHref={`/investors/${investor.id}/edit`}
    deleteLabel="inversionistas"
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