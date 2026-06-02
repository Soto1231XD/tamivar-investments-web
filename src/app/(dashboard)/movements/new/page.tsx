import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewMovementPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href="/movements"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver a movimientos
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">
          Nuevo movimiento
        </h1>
        <p className="mt-2 text-zinc-500">
          Registra ingresos, gastos, aportaciones o retiros relacionados con un
          proyecto.
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Tipo de movimiento
            </label>
            <select className="h-11 w-full rounded-xl border border-zinc-900 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
              <option>Seleccionar tipo</option>
              <option>Ingreso</option>
              <option>Gasto</option>
              <option>Aportación</option>
              <option>Retiro</option>
              <option>Compra</option>
              <option>Venta</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-900">
              Fecha
            </label>
            <input
              type="date"
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">
              Concepto
            </label>
            <input
              type="text"
              placeholder="Ej. Pago de notaría, compra de material, aportación..."
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
  <label className="text-sm font-medium text-zinc-700">
    Tienda / proveedor
  </label>
  <input
    type="text"
    placeholder="Ej. Notaría, Municipio, BBVA, Abogado..."
    className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
  />
</div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Proyecto
            </label>
            <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
              <option>Seleccionar proyecto</option>
              <option>SM 101</option>
              <option>Popolvuh</option>
              <option>Bosques San Miguel</option>
              <option>Los Héroes</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Inversionista
            </label>
            <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
              <option>Seleccionar inversionista</option>
              <option>Alfonso</option>
              <option>Carlos</option>
              <option>Gerardo</option>
              <option>María</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Categoría
            </label>
            <select className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400">
              <option>Seleccionar categoría</option>
              <option>Materiales</option>
              <option>Legal</option>
              <option>Impuestos</option>
              <option>Comisión</option>
              <option>Aportación</option>
              <option>Venta</option>
              <option>Otro</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Monto
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-zinc-700">
              Notas
            </label>
            <textarea
              rows={4}
              placeholder="Agrega observaciones adicionales..."
              className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3 border-t border-zinc-200 pt-6">
          <Link
            href="/movements"
            className="rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Cancelar
          </Link>

          <button
            type="button"
            className="rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Guardar movimiento
          </button>
        </div>
      </form>
    </section>
  );
}