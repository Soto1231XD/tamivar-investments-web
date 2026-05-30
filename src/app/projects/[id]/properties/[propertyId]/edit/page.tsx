import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { projectProperties, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    id: string;
    propertyId: string;
  }>;
};

export default async function EditProjectPropertyPage({ params }: PageProps) {
  const { id, propertyId } = await params;

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    notFound();
  }

  const property = projectProperties.find(
    (item) => item.projectId === project.id && item.id === Number(propertyId)
  );

  if (!property) {
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
          Editar propiedad
        </h1>

        <p className="mt-2 text-zinc-500">
          Proyecto: {project.name}
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Nombre de la propiedad"
            name="name"
            defaultValue={property.name}
          />

          <Field
            label="Expediente / proceso"
            name="process"
            defaultValue={property.process}
          />

          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-medium text-zinc-700">
              Estado
            </label>

            <select
              id="status"
              name="status"
              defaultValue={property.status}
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            >
              <option value="Instrucción a notaría">Instrucción a notaría</option>
              <option value="Entrega / fuerza pública">Entrega / fuerza pública</option>
              <option value="Toma de posesión">Toma de posesión</option>
              <option value="Adjudicar">Adjudicar</option>
              <option value="Finalizado">Finalizado</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="notes" className="text-sm font-medium text-zinc-700">
              Notas
            </label>

            <textarea
              id="notes"
              name="notes"
              rows={4}
              defaultValue=""
              placeholder="Observaciones de la propiedad..."
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