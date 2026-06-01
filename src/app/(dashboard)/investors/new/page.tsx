import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewInvestorPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href="/investors"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver a inversionistas
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">
          Nuevo inversionista
        </h1>
        <p className="mt-2 text-zinc-500">
          Registra la información principal y el capital inicial del inversionista.
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Ej. Alfonso Pérez"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Alias
            </label>
            <input
              type="text"
              placeholder="Ej. A"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Teléfono
            </label>
            <input
              type="tel"
              placeholder="998 000 0000"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">
              Capital inicial
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">
              Notas
            </label>
            <textarea
              rows={4}
              placeholder="Observaciones del inversionista..."
              className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3 border-t border-zinc-200 pt-6">
          <Link
            href="/investors"
            className="rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Cancelar
          </Link>

          <button
            type="button"
            className="rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Guardar inversionista
          </button>
        </div>
      </form>
    </section>
  );
}