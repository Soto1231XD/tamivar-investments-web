import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import {
  projectInvestors,
  projectMovements,
  projectProperties,
  projectTasks,
  projects,
} from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    notFound();
  }

  const movements = projectMovements.filter(
    (item) => item.projectId === project.id
  );

  const investors = projectInvestors.filter(
    (item) => item.projectId === project.id
  );

  const properties = projectProperties.filter(
    (item) => item.projectId === project.id
  );

  const tasks = projectTasks.filter((item) => item.projectId === project.id);

  return (
    <section className="space-y-8">
      <div>
        <Link
          href="/projects"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft size={18} />
          Volver a proyectos
        </Link>

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              {project.name}
            </h1>
            <p className="mt-2 text-zinc-500">
              {project.code} · {project.responsible}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
  <Link
    href={`/projects/${project.id}/movements/new`}
    className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
  >
    Agregar movimiento
  </Link>

  <Link
    href={`/projects/${project.id}/close`}
    className="rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
  >
    Marcar como vendido
  </Link>
</div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        <Card title="Tipo" value={project.type} />
        <Card title="Meses" value={project.months} />
        <Card title="Costo total" value={project.totalCost} />
        <Card title="Venta estimada" value={project.estimatedSaleAmount} />
        <Card title="Venta real" value={project.realSaleAmount} />
        <Card title="Utilidad" value={project.profit} />
        <Card title="Estado de venta" value={project.saleStatus} />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <InfoBox title="Utilidad" value={project.profit} />
        <InfoBox title="Regla de inversión" value={project.investmentRule} />
        <InfoBox title="Regla de utilidad" value={project.profitRule} />
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              Inversionistas del proyecto
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Control de inversión, porcentaje, utilidad y total a recibir.
            </p>
          </div>

          <Link
            href={`/projects/${project.id}/investors/new`}
            className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Agregar inversionista
          </Link>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Inversionista</th>
                <th className="px-4 py-3 font-medium">Inversión</th>
                <th className="px-4 py-3 font-medium">% inversión</th>
                <th className="px-4 py-3 font-medium">% utilidad</th>
                <th className="px-4 py-3 font-medium">Utilidad</th>
                <th className="px-4 py-3 font-medium">Meses</th>
                <th className="px-4 py-3 font-medium">Utilidad mensual</th>
                <th className="px-4 py-3 font-medium">Utilidad + inversión</th>
                <th className="px-4 py-3 text-right font-medium">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {investors.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {item.investor}
                  </td>
                  <td className="px-4 py-4 text-zinc-900">{item.investmentAmount}</td>
                  <td className="px-4 py-4 text-zinc-900">{item.investmentPercentage}</td>
                  <td className="px-4 py-4 text-zinc-900">{item.profitPercentage}</td>
                  <td className="px-4 py-4 text-zinc-900">{item.profitAmount}</td>
                  <td className="px-4 py-4 text-zinc-900">{item.months}</td>
                  <td className="px-4 py-4 text-zinc-900">{item.monthlyProfit}</td>
                  <td className="px-4 py-4 font-semibold text-zinc-900">
                    {item.profitPlusInvestment}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/projects/${project.id}/investors/${item.id}/edit`}
                        className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
                      >
                        Editar
                      </Link>

                      <button className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50">
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {project.type === "Paquete" && (
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-zinc-900">
              Propiedades del paquete
            </h2>

            <Link
              href={`/projects/${project.id}/properties/new`}
              className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Agregar propiedad
            </Link>
          </div>

          {properties.length === 0 && (
            <div className="mt-6 rounded-xl border border-dashed border-zinc-300 p-6 text-center">
              <p className="text-sm text-zinc-500">
                Este paquete todavía no tiene propiedades registradas.
              </p>
            </div>
          )}

          {properties.length > 0 && (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {properties.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-zinc-200 p-4"
                >
                  <h3 className="font-semibold text-zinc-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Expediente: {item.process}
                  </p>
                  <span className="mt-4 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                    {item.status}
                  </span>

                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/projects/${project.id}/properties/${item.id}/edit`}
                      className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
                    >
                      Editar
                    </Link>

                    <button className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50">
                      Eliminar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              Movimientos del proyecto
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Gastos, ingresos, compras y pagos del proyecto.
            </p>
          </div>

          <Link
            href={`/projects/${project.id}/movements/new`}
            className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Agregar movimiento
          </Link>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Tienda / proveedor</th>
                <th className="px-4 py-3 font-medium">Concepto</th>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 text-right font-medium">Monto</th>
                <th className="px-4 py-3 text-right font-medium">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {movements.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 text-zinc-600">{item.date}</td>
                  <td className="px-4 py-4 font-medium text-zinc-900">
                    {item.provider}
                  </td>
                  <td className="px-4 py-4 text-zinc-600">{item.concept}</td>
                  <td className="px-4 py-4 text-zinc-600">{item.type}</td>
                  <td className="px-4 py-4 text-right font-semibold text-zinc-600">
                    {item.amount}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/projects/${project.id}/movements/${item.id}/edit`}
                        className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
                      >
                        Editar
                      </Link>

                      <button className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50">
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
  <div className="flex items-center justify-between gap-4">
    <div>
      <h2 className="text-lg font-semibold text-zinc-900">
        Seguimiento / procesos
      </h2>
      <p className="mt-1 text-sm text-zinc-500">
        Control de trámites, procesos legales y pendientes.
      </p>
    </div>

    <Link
      href={`/projects/${project.id}/tasks/new`}
      className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
    >
      Agregar proceso
    </Link>
  </div>

  <div className="mt-5 space-y-3">
    {tasks.map((item) => (
      <div
        key={item.id}
        className="rounded-xl border border-zinc-200 p-4"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium text-zinc-900">
              {item.title}
              </p>

            <p className="mt-1 text-sm text-zinc-500">
              {item.status}
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Plazo estimado: {item.estimatedTime}
            </p>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/projects/${project.id}/tasks/${item.id}/edit`}
              className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Editar
            </Link>

            <button className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">
            Notas internas
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            {project.notes}
          </p>
        </div>
      </section>
    </section>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-zinc-500">{title}</p>
      <h2 className="mt-2 text-xl font-bold text-zinc-900">{value}</h2>
    </article>
  );
}

function InfoBox({ title, value }: { title: string; value: string }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-zinc-500">{title}</p>
      <h2 className="mt-2 text-lg font-semibold text-zinc-900">{value}</h2>
    </article>
  );
}