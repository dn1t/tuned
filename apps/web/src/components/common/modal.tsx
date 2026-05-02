import { useEffect, useRef, useState } from "react";
import { cn } from "tailwind-variants";

interface ModalProps {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  className?: string;
  children: React.ReactNode;
}

export function Modal({ openState, className, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [_open, _setOpen] = useState(false);
  const [open, setOpen] = openState;

  useEffect(() => {
    if (!ref.current) return;
    if (open && !_open) {
      _setOpen(true);
      ref.current.showModal();
    } else if (!open && _open) {
      setTimeout(() => ref.current?.close(), 300);
      _setOpen(false);
    }
  }, [open, _open]);

  return (
    <dialog
      ref={ref}
      className="h-full max-h-none w-full max-w-none items-center justify-center bg-zinc-900/20 opacity-0 backdrop-blur-md transition-discrete transition-opacity duration-300 backdrop:h-0 backdrop:w-0 backdrop:bg-transparent open:flex data-open:opacity-100"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
      onCancel={(e) => {
        e.preventDefault();
        setOpen(false);
      }}
      onClose={() => setOpen(false)}
      data-open={_open ? "" : undefined}
    >
      <div className={cn("flex flex-col rounded-[20px] border border-zinc-800 bg-zinc-950", className)}>{children}</div>
    </dialog>
  );
}
