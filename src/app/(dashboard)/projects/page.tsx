import Link from "next/link";
import { Building2, Plus, Search } from "lucide-react";

import { TableActions } from "@/components/ui/table-actions";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Proyectos</h1>
          <p className="mt-2 text-zinc-500">
            Administra propiedades, inversiones y avances por proyecto.
          </p>
        </div>

        <Link
          href="/projects/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          <Plus size={18} />
          Nuevo proyecto
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
              <Building2 size={22} />
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-zinc-900">
                {project.name}
              </h2>
              <p className="text-sm text-zinc-500">{project.location}</p>

              <span className="mt-3 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                {project.type}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Costo total</span>
                <span className="font-semibold text-zinc-900">
                  {project.totalCost}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Utilidad</span>
                <span className="font-semibold text-zinc-900">
                  {project.profit}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                {project.status}
              </span>
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
            >
              Ver detalle
            </Link>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              Lista de proyectos
            </h2>
            <p className="text-sm text-zinc-500">
              Vista general de los proyectos registrados.
            </p>
          </div>

          <div className="relative w-full md:max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              placeholder="Buscar proyecto..."
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Proyecto</th>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 font-medium">Ubicación</th>
                <th className="px-4 py-3 font-medium">Costo total</th>
                <th className="px-4 py-3 font-medium">Utilidad</th>
                <th className="px-4 py-3 font-medium">Estado</th>
                <th className="px-4 py-3 text-right font-medium">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-zinc-50">
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {project.name}
                  </td>

                  <td className="px-4 py-4 text-zinc-600">
                    {project.type}
                  </td>

                  <td className="px-4 py-4 text-zinc-600">
                    {project.location}
                  </td>

                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {project.totalCost}
                  </td>

                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {project.profit}
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                      {project.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-right">
                    <TableActions
                      viewHref={`/projects/${project.id}`}
                      editHref={`/projects/${project.id}/edit`}
                      deleteLabel="proyecto"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}