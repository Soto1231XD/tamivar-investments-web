import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

import { capitalAccounts, capitalMovements } from "@/data/capital";

type CapitalDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CapitalDetailPage({
  params,
}: CapitalDetailPageProps) {
  const { id } = await params;

  const account = capitalAccounts.find((item) => item.id === Number(id));

  if (!account) {
    notFound();
  }

  const movements = capitalMovements.filter(
    (item) => item.investor === account.investor
  );

  return (
    <section className="mx-auto max-w-5xl space-y-8">
      <div>
        <Link
          href="/capital"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver a capital
        </Link>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              Capital de {account.name}
            </h1>
            <p className="mt-2 text-zinc-500">
              Clave: {account.investor}
            </p>
          </div>

          <Link
            href={`/capital/${account.id}/edit`}
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            <Pencil size={18} />
            Editar
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card title="Capital total" value={account.totalCapital} />
        <Card title="Invertido" value={account.investedCapital} />
        <Card title="Disponible" value={account.availableCapital} />
        <Card title="Utilidad" value={account.profit} />
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-zinc-900">
          Movimientos de capital
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Concepto</th>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 text-right font-medium">Monto</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {movements.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 text-zinc-600">{item.date}</td>
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {item.concept}
                  </td>
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
      <p className="text-sm text-zinc-500">{title}</p>
      <h2 className="mt-2 text-2xl font-bold text-zinc-900">{value}</h2>
    </article>
  );
}