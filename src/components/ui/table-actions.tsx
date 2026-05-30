import Link from "next/link";
import { Eye, Pencil } from "lucide-react";

import { DeleteButton } from "@/components/ui/delete-button";

type TableActionsProps = {
  viewHref?: string;
  editHref?: string;
  deleteLabel?: string;
};

export function TableActions({
  viewHref,
  editHref,
  deleteLabel = "registro",
}: TableActionsProps) {
  return (
    <div className="flex justify-end gap-2">
      {viewHref && (
        <Link
          href={viewHref}
          className="rounded-lg border border-zinc-200 p-2 text-zinc-600 hover:bg-zinc-50"
          title="Ver"
        >
          <Eye size={16} />
        </Link>
      )}

      {editHref && (
        <Link
          href={editHref}
          className="rounded-lg border border-zinc-200 p-2 text-zinc-600 hover:bg-zinc-50"
          title="Editar"
        >
          <Pencil size={16} />
        </Link>
      )}

      <DeleteButton label={deleteLabel} />
    </div>
  );
}