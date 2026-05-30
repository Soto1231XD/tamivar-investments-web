import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NewProjectTaskPage({ params }: PageProps) {
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
          Agregar proceso
        </h1>

        <p className="mt-2 text-zinc-500">
          Proyecto: {project.name}
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Título del proceso"
            name="title"
            placeholder="Ej. Instrucción a notaría"
          />

          <Field
  label="Plazo estimado"
  name="estimatedTime"
  placeholder="Ej. 8 meses, 18 meses, sin fecha"
/>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Estado
            </label>

            <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
              <option>Seleccionar estado</option>
              <option>Pendiente</option>
              <option>En proceso</option>
              <option>Completado</option>
              <option>Detenido</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">
              Descripción
            </label>

            <textarea
              rows={4}
              placeholder="Describe el seguimiento o pendiente..."
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
            Guardar proceso
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