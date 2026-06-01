import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewProjectPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-8">
      <div>
        <Link
          href="/projects"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver a proyectos
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">
          Nuevo proyecto
        </h1>

        <p className="mt-2 text-zinc-500">
          Registra propiedades, paquetes o proyectos de inversión.
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Nombre del proyecto
            </label>

            <input
              type="text"
              placeholder="Ej. SM 101, Paquete 3"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Tipo de proyecto
            </label>

            <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
              <option>Seleccionar tipo</option>
              <option>Individual</option>
              <option>Paquete</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Estado
            </label>

            <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
              <option>Seleccionar estado</option>
              <option>Activo</option>
              <option>En proceso</option>
              <option>Pausado</option>
              <option>Finalizado</option>
              <option>Cancelado</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Responsable
            </label>

            <input
              type="text"
              placeholder="Ej. HENRY, TAMIVAR"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">
              Ubicación
            </label>

            <input
              type="text"
              placeholder="Ej. Cancún, Quintana Roo"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Costo total / precio de compra
            </label>

            <input
              type="number"
              placeholder="0.00"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Venta estimada
            </label>

            <input
              type="number"
              placeholder="0.00"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Regla de inversión
            </label>

            <input
              type="text"
              placeholder="Ej. 50/50, 60 inversionistas / 40 Tamivar"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Regla de utilidad
            </label>

            <input
              type="text"
              placeholder="Ej. 40/60, 60/40"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">
              Descripción
            </label>

            <textarea
              rows={4}
              placeholder="Descripción general del proyecto..."
              className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">
              Observaciones
            </label>

            <textarea
              rows={4}
              placeholder="Notas internas del proyecto..."
              className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3 border-t border-zinc-200 pt-6">
          <Link
            href="/projects"
            className="rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Cancelar
          </Link>

          <button
            type="button"
            className="rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Guardar proyecto
          </button>
        </div>
      </form>
    </section>
  );
}