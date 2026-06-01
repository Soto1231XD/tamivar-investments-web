import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { projectInvestors, projects } from "@/data/projects";

type EditProjectInvestorPageProps = {
  params: Promise<{
    id: string;
    investorId: string;
  }>;
};

export default async function EditProjectInvestorPage({
  params,
}: EditProjectInvestorPageProps) {
  const { id, investorId } = await params;

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    notFound();
  }

  const investor = projectInvestors.find(
    (item) =>
      item.projectId === project.id && item.id === Number(investorId)
  );

  if (!investor) {
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
          Editar inversionista del proyecto
        </h1>

        <p className="mt-2 text-zinc-500">
          Proyecto: {project.name}
        </p>
      </div>

      <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Inversionista"
            name="investor"
            defaultValue={investor.investor}
          />

          <Field
            label="Monto invertido"
            name="investmentAmount"
            defaultValue={investor.investmentAmount}
          />

          <Field
            label="% inversión"
            name="investmentPercentage"
            defaultValue={investor.investmentPercentage}
          />

          <Field
            label="% utilidad"
            name="profitPercentage"
            defaultValue={investor.profitPercentage}
          />

          <Field
            label="Utilidad"
            name="profitAmount"
            defaultValue={investor.profitAmount}
          />

          <Field
            label="Meses"
            name="months"
            defaultValue={investor.months}
          />

          <Field
            label="Utilidad mensual"
            name="monthlyProfit"
            defaultValue={investor.monthlyProfit}
          />

          <Field
            label="Utilidad + inversión"
            name="profitPlusInvestment"
            defaultValue={investor.profitPlusInvestment}
          />

          <Field
            label="Total a recibir"
            name="totalToReceive"
            defaultValue={investor.totalToReceive}
          />
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