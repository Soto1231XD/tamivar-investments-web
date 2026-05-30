import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewCapitalMovementPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href="/capital"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver a capital
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">
          Nuevo ajuste de capital
        </h1>

        <p className="mt-2 text-zinc-500">
          Registra ingresos, retiros o gastos generales que no pertenecen a un proyecto.
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Fecha" name="date" placeholder="Ej. 30/05/2026" />
          <Field label="Inversionista" name="investor" placeholder="Ej. A, C, G, Alfonso" />
          <Field label="Concepto" name="concept" placeholder="Ej. Gasto extra, aportación, retiro" />
          <Field label="Monto" name="amount" placeholder="$0.00" />

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">Tipo</label>
            <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
              <option>Seleccionar tipo</option>
              <option>Ingreso</option>
              <option>Gasto</option>
              <option>Retiro</option>
              <option>Utilidad</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">Notas</label>
            <textarea
              rows={4}
              placeholder="Observaciones del ajuste..."
              className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3 border-t border-zinc-200 pt-6">
          <Link
            href="/capital"
            className="rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Cancelar
          </Link>

          <button
            type="button"
            className="rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Guardar ajuste
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