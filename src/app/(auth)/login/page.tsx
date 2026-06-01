import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Lock,
  Mail,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8">
      <section className="mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl sm:min-h-[650px] sm:rounded-[1.75rem] lg:grid-cols-[1fr_0.9fr]">
        <div className="relative hidden overflow-hidden bg-zinc-950 p-8 text-white lg:block">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-zinc-950">
                  <Wallet size={23} />
                </div>

                <div>
                  <h1 className="text-base font-bold">
                    TAMIVAR Investments
                  </h1>
                  <p className="text-xs text-zinc-400">
                    Gestor interno
                  </p>
                </div>
              </div>

              <div className="mt-12 max-w-md">
                <p className="mb-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
                  Sistema privado de administración
                </p>

                <h2 className="text-4xl font-bold tracking-tight">
                  Control claro para inversiones inmobiliarias.
                </h2>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  Administra capital, proyectos, movimientos, inversionistas,
                  utilidades y seguimiento desde un solo lugar.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              <Feature icon={TrendingUp} text="Seguimiento de utilidad y capital" />
              <Feature icon={Building2} text="Proyectos individuales y paquetes" />
              <Feature icon={ShieldCheck} text="Acceso interno protegido" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-8">
          <div className="w-full max-w-sm">
            <div className="mb-7 lg:hidden">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                <Wallet size={23} />
              </div>

              <h1 className="text-2xl font-bold text-zinc-900">
                TAMIVAR Investments
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                Gestor interno de inversiones inmobiliarias.
              </p>
            </div>

            <div className="mb-7">
              <p className="text-sm font-medium text-zinc-500">
                Bienvenido de nuevo
              </p>
              <h2 className="mt-2 text-3xl font-bold text-zinc-900">
                Iniciar sesión
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Ingresa tus credenciales para acceder.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700">
                  Correo electrónico
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    type="email"
                    placeholder="admin@tamivar.com"
                    className="h-11 w-full rounded-2xl border border-zinc-200 bg-white pl-11 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700">
                  Contraseña
                </label>

                <div className="relative">
                  <Lock
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="h-11 w-full rounded-2xl border border-zinc-200 bg-white pl-11 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                  />
                </div>
              </div>

              <Link
                href="/dashboard"
                className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Entrar al sistema
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
        <Icon size={18} />
      </div>

      <p className="text-sm font-medium text-zinc-200">{text}</p>
    </div>
  );
}
