import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NewProjectMovementPage({ params }: PageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href={`/projects/${project.id}`}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver al proyecto
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">
          Agregar movimiento al proyecto
        </h1>

        <p className="mt-2 text-zinc-500">
          Proyecto: {project.name}
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Fecha" name="date" placeholder="Ej. 02/07/2024" />
          <Field label="Tienda / proveedor" name="provider" placeholder="Ej. Notaría, BBVA, Municipio" />
          <Field label="Concepto" name="concept" placeholder="Ej. Compra, predial, cesión de derechos" />
          <Field label="Monto" name="amount" placeholder="$0.00" />

          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-medium text-zinc-700">
              Tipo
            </label>

            <div className="space-y-2">
  <label className="text-sm font-medium text-zinc-700">
    Factura
  </label>

  <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
    <option>No aplica</option>
    <option>Con factura</option>
    <option>Sin factura</option>
  </select>
</div>

<Field label="IVA" name="ivaAmount" placeholder="$0.00" />
<Field label="Comisión" name="commissionAmount" placeholder="$0.00" />

<div className="space-y-2">
  <label className="text-sm font-medium text-zinc-700">
    Pagaré
  </label>

  <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
    <option>No aplica</option>
    <option>Pendiente</option>
    <option>Firmado</option>
  </select>
</div>

            <select
              id="type"
              name="type"
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            >
              <option value="">Seleccionar tipo</option>
              <option value="Gasto">Gasto</option>
              <option value="Ingreso">Ingreso</option>
              <option value="Compra">Compra</option>
              <option value="Venta">Venta</option>
              <option value="Comisión">Comisión</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3 border-t border-zinc-200 pt-6">
          <Link
            href={`/projects/${project.id}`}
            className="rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Cancelar
          </Link>

          <button
            type="button"
            className="rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Guardar movimiento
          </button>
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-zinc-700">
        {label}
      </label>

      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
      />
    </div>
  );
}