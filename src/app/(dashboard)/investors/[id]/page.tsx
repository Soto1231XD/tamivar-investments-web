import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

import { investors } from "@/data/investors";

type InvestorDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function InvestorDetailPage({
  params,
}: InvestorDetailPageProps) {
  const { id } = await params;

  const investor = investors.find((item) => item.id === Number(id));

  if (!investor) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl space-y-8">
      <div>
        <Link
          href="/investors"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver a inversionistas
        </Link>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              {investor.name}
            </h1>
            <p className="mt-2 text-zinc-500">
              Alias: {investor.alias}
            </p>
          </div>

          <Link
            href={`/investors/${investor.id}/edit`}
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            <Pencil size={18} />
            Editar
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Capital total" value={investor.totalCapital} />
        <Card title="Capital invertido" value={investor.investedCapital} />
        <Card title="Capital disponible" value={investor.availableCapital} />
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-zinc-900">
          Información general
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Info label="Nombre" value={investor.name} />
          <Info label="Alias" value={investor.alias} />
          <Info label="Estado" value={investor.status} />
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

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-1 font-medium text-zinc-900">{value}</p>
    </div>
  );
}