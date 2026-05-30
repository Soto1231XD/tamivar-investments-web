export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-zinc-200 bg-white px-8">
      <div>
        <p className="text-sm text-zinc-500">Sistema interno</p>
        <h2 className="text-xl font-semibold text-zinc-900">
          Gestor de inversiones
        </h2>
      </div>

      <div className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
        Admin
      </div>
    </header>
  );
}