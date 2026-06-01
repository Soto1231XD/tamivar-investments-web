export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between gap-4 border-b border-zinc-200 bg-white px-4 py-3 sm:px-6 lg:h-20 lg:px-8 lg:py-0">
      <div className="min-w-0">
        <p className="text-sm text-zinc-500">Sistema interno</p>
        <h2 className="truncate text-lg font-semibold text-zinc-900 sm:text-xl">
          Gestor de inversiones
        </h2>
      </div>

      <div className="shrink-0 rounded-full bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 sm:px-4">
        Admin
      </div>
    </header>
  );
}
