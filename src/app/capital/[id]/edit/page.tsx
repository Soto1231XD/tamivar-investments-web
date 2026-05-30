import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { capitalAccounts } from "@/data/capital";

type EditCapitalPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditCapitalPage({
  params,
}: EditCapitalPageProps) {
  const { id } = await params;

  const account = capitalAccounts.find((item) => item.id === Number(id));

  if (!account) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href={`/capital/${account.id}`}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver al detalle
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">
          Editar cuenta de capital
        </h1>

        <p className="mt-2 text-zinc-500">
          Actualiza el resumen financiero del inversionista.
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Clave" name="investor" defaultValue={account.investor} />
          <Field label="Nombre" name="name" defaultValue={account.name} />
          <Field label="Capital total" name="totalCapital" defaultValue={account.totalCapital} />
          <Field label="Capital invertido" name="investedCapital" defaultValue={account.investedCapital} />
          <Field label="Capital disponible" name="availableCapital" defaultValue={account.availableCapital} />
          <Field label="Utilidad" name="profit" defaultValue={account.profit} />
        </div>

        <div className="mt-8 flex justify-end gap-3 border-t border-zinc-200 pt-6">
          <Link
            href={`/capital/${account.id}`}
            className="rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Cancelar
          </Link>

          <button
            type="button"
            className="rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Guardar cambios
          </button>
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  defaultValue,
}: {
  label: string;
  name: string;
  defaultValue: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-zinc-700">
        {label}
      </label>

      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
      />
    </div>
  );
}