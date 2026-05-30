import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";

type CloseProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CloseProjectPage({
  params,
}: CloseProjectPageProps) {
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
          Cerrar proyecto / marcar como vendido
        </h1>

        <p className="mt-2 text-zinc-500">
          Registra la venta final y el cierre financiero del proyecto.
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Proyecto"
            name="project"
            defaultValue={project.name}
          />

          <Field
            label="Costo total"
            name="totalCost"
            defaultValue={project.totalCost}
          />

          <Field
            label="Venta real"
            name="realSaleAmount"
            defaultValue={project.realSaleAmount}
          />

          <Field
            label="Utilidad final"
            name="profit"
            defaultValue={project.profit}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Estado de venta
            </label>

            <select
              defaultValue="Vendida"
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            >
              <option>Sin vender</option>
              <option>En negociación</option>
              <option>Vendida</option>
              <option>Cancelada</option>
            </select>
          </div>

          <Field
            label="Fecha de cierre"
            name="closeDate"
            defaultValue="30/05/2026"
          />

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">
              Observaciones del cierre
            </label>

            <textarea
              rows={4}
              placeholder="Notas sobre la venta, cierre, pagos pendientes o reparto final..."
              className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
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
            Guardar cierre
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