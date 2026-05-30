import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { movements } from "@/data/movements";

type EditMovementPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditMovementPage({
  params,
}: EditMovementPageProps) {
  const { id } = await params;

  const movement = movements.find((item) => item.id === Number(id));

  if (!movement) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href={`/movements/${movement.id}`}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver al detalle
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">
          Editar movimiento
        </h1>
        <p className="mt-2 text-zinc-500">
          Modifica los datos del movimiento seleccionado.
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Fecha" name="date" defaultValue={movement.date} />
          <Field label="Concepto" name="concept" defaultValue={movement.concept} />
          <Field label="Proyecto" name="project" defaultValue={movement.project} />
          <Field label="Inversionista" name="investor" defaultValue={movement.investor} />
          <Field label="Categoría" name="category" defaultValue={movement.category} />
          <Field label="Monto" name="amount" defaultValue={movement.amount} />

          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-medium text-zinc-700">
              Tipo
            </label>

            <select
              id="type"
              name="type"
              defaultValue={movement.type}
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            >
              <option value="Ingreso">Ingreso</option>
              <option value="Gasto">Gasto</option>
              <option value="Aportación">Aportación</option>
              <option value="Retiro">Retiro</option>
              <option value="Compra">Compra</option>
              <option value="Venta">Venta</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3 border-t border-zinc-200 pt-6">
          <Link
            href={`/movements/${movement.id}`}
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