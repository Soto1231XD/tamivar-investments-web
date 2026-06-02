import {
  activeProjects,
  dashboardStats,
  recentMovements,
} from "@/data/dashboard";

export default function DashboardPage() {
  return (
    <section className="min-w-0 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">
          Dashboard
        </h1>
        <p className="mt-2 text-zinc-500">
          Resumen general del capital, proyectos y movimientos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6"
          >
            <p className="text-sm font-medium text-zinc-500">
              {item.title}
            </p>

            <h2 className="mt-3 text-2xl font-bold text-zinc-900">
              {item.value}
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div className="grid min-w-0 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">
                Proyectos activos
              </h2>
              <p className="text-sm text-zinc-500">
                Inversiones actualmente en seguimiento.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:hidden">
            {activeProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-zinc-200 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate font-medium text-zinc-900">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      {project.investor}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-sm font-semibold text-zinc-900">
                  {project.invested}
                </p>
              </article>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-xl border border-zinc-200 sm:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 text-zinc-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Proyecto</th>
                  <th className="px-4 py-3 font-medium">Inversionista</th>
                  <th className="px-4 py-3 font-medium">Invertido</th>
                  <th className="px-4 py-3 font-medium">Estado</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-zinc-200">
                {activeProjects.map((project) => (
                  <tr key={project.name}>
                    <td className="px-4 py-4 font-medium text-zinc-900">
                      {project.name}
                    </td>
                    <td className="px-4 py-4 text-zinc-600">
                      {project.investor}
                    </td>
                    <td className="px-4 py-4 font-medium text-zinc-900">
                      {project.invested}
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-zinc-900">
              Últimos movimientos
            </h2>
            <p className="text-sm text-zinc-500">
              Registro reciente de ingresos y gastos.
            </p>
          </div>

          <div className="space-y-4">
            {recentMovements.map((movement) => (
              <article
                key={`${movement.concept}-${movement.date}`}
                className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200 p-4"
              >
                <div className="min-w-0">
                  <h3 className="truncate font-medium text-zinc-900">
                    {movement.concept}
                  </h3>
                  <p className="mt-1 break-words text-sm text-zinc-500">
                    {movement.project} · {movement.date}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p
                    className={
                      movement.type === "Ingreso"
                        ? "font-semibold text-emerald-600"
                        : "font-semibold text-red-600"
                    }
                  >
                    {movement.amount}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {movement.type}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
