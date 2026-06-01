import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

import { movements } from "@/data/movements";

type MovementDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovementDetailPage({
  params,
}: MovementDetailPageProps) {
  const { id } = await params;

  const movement = movements.find((item) => item.id === Number(id));

  if (!movement) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl space-y-8">
      <div>
        <Link
          href="/movements"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver a movimientos
        </Link>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              {movement.concept}
            </h1>
            <p className="mt-2 text-zinc-500">
              {movement.project} · {movement.date}
            </p>
          </div>

          <Link
            href={`/movements/${movement.id}/edit`}
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            <Pencil size={18} />
            Editar
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Monto" value={movement.amount} />
        <Card title="Tipo" value={movement.type} />
        <Card title="Categoría" value={movement.category} />
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-zinc-900">
          Información del movimiento
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Info label="Fecha" value={movement.date} />
          <Info label="Concepto" value={movement.concept} />
          <Info label="Proyecto" value={movement.project} />
          <Info label="Inversionista" value={movement.investor} />
          <Info label="Tipo" value={movement.type} />
          <Info label="Categoría" value={movement.category} />
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