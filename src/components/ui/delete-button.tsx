"use client"

import { Trash2 } from "lucide-react";

type DeleteButtonProps = {
    label?: string;
};

export function DeleteButton({ label = "Eliminar" }: DeleteButtonProps) {
    function handleDelete() {
        const confirmed = window.confirm(
            `¿Estás seguro de que deseas eliminar este ${label}? Esta acción no se puede deshacer.`
        );

        if (!confirmed) return;

        alert(`Aquí se eleminará el ${label}. Implementa la lógica de eliminación según tu backend o estado.`);
    }

    return (
        <button
        type="button"
        onClick={handleDelete}
        className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
        >
        <Trash2 size={16} />
        </button>
    );
}