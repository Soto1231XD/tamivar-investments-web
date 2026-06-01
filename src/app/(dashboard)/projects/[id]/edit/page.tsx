import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";

type EditProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProjectPage({
  params,
}: EditProjectPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl space-y-8">
      <div>
        <Link
          href={`/projects/${project.id}`}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver al detalle
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">
          Editar proyecto
        </h1>

        <p className="mt-2 text-zinc-500">
          Modifica los datos generales, financieros y de venta del proyecto.
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Nombre del proyecto"
            name="name"
            defaultValue={project.name}
          />

          <div className="space-y-2">
            <label
              htmlFor="type"
              className="text-sm font-medium text-zinc-700"
            >
              Tipo de proyecto
            </label>

            <select
              id="type"
              name="type"
              defaultValue={project.type}
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            >
              <option value="Individual">Individual</option>
              <option value="Paquete">Paquete</option>
            </select>
          </div>

          <Field
            label="Código / expediente"
            name="code"
            defaultValue={project.code}
          />

          <Field
            label="Responsable"
            name="responsible"
            defaultValue={project.responsible}
          />

          <Field
            label="Ubicación"
            name="location"
            defaultValue={project.location}
          />

          <Field
            label="Meses"
            name="months"
            defaultValue={project.months}
          />

          <Field
            label="Costo total"
            name="totalCost"
            defaultValue={project.totalCost}
          />

          <Field
            label="Venta estimada"
            name="estimatedSaleAmount"
            defaultValue={project.estimatedSaleAmount}
          />

          <Field
            label="Venta real"
            name="realSaleAmount"
            defaultValue={project.realSaleAmount}
          />

          <Field
            label="Utilidad"
            name="profit"
            defaultValue={project.profit}
          />

          <Field
            label="Regla de inversión"
            name="investmentRule"
            defaultValue={project.investmentRule}
          />

          <Field
            label="Regla de utilidad"
            name="profitRule"
            defaultValue={project.profitRule}
          />

          <div className="space-y-2">
            <label
              htmlFor="status"
              className="text-sm font-medium text-zinc-700"
            >
              Estado del proyecto
            </label>

            <select
              id="status"
              name="status"
              defaultValue={project.status}
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            >
              <option value="Activo">Activo</option>
              <option value="En proceso">En proceso</option>
              <option value="Pausado">Pausado</option>
              <option value="Finalizado">Finalizado</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="saleStatus"
              className="text-sm font-medium text-zinc-700"
            >
              Estado de venta
            </label>

            <select
              id="saleStatus"
              name="saleStatus"
              defaultValue={project.saleStatus}
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            >
              <option value="Sin vender">Sin vender</option>
              <option value="En negociación">En negociación</option>
              <option value="Vendida">Vendida</option>
              <option value="Cancelada">Cancelada</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label
              htmlFor="notes"
              className="text-sm font-medium text-zinc-700"
            >
              Notas internas
            </label>

            <textarea
              id="notes"
              name="notes"
              rows={5}
              defaultValue={project.notes}
              className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400"
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
      <label
        htmlFor={name}
        className="text-sm font-medium text-zinc-700"
      >
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