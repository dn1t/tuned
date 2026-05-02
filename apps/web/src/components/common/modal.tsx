import { useCallback, useEffect, useRef } from "react";
import { cn } from "tailwind-variants";

interface ModalProps {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  className?: string;
  children: React.ReactNode;
}

export function Modal({ openState, className, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = openState;

  useEffect(() => {
    if (!ref.current) return;
    if (open && !ref.current.open) ref.current.showModal();
    else if (!open && ref.current.open) ref.current.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="h-full max-h-none w-full max-w-none items-center justify-center bg-transparent backdrop:bg-zinc-900/20 backdrop:backdrop-blur-md open:flex"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
      onClose={() => setOpen(false)}
    >
      <div className={cn("flex flex-col rounded-[20px] border border-zinc-800 bg-zinc-950", className)}>{children}</div>
    </dialog>
  );
}
