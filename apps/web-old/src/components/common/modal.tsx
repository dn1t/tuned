import { type ComponentProps, createEffect, createSignal, type Signal } from "solid-js";

interface ModalProps extends Omit<ComponentProps<"dialog">, "open"> {
  open: Signal<boolean>;
}

export function Modal(props: ModalProps) {
  let ref!: HTMLDialogElement;
  const [_open, _setOpen] = createSignal(false);
  const [open, setOpen] = props.open;

  createEffect(() => {
    if (open() && !_open()) {
      _setOpen(true);
      ref.showModal();
    } else if (!open() && _open()) {
      setTimeout(() => ref.close(), 150);
      _setOpen(false);
    }
  });

  return (
    <dialog
      ref={ref}
      class="inset-0 h-screen max-h-full w-screen max-w-full items-center justify-center bg-zinc-950/25 p-0 opacity-0 backdrop-blur-[2px] transition-discrete transition-opacity backdrop:h-0 backdrop:w-0 backdrop:bg-transparent open:flex data-open:opacity-100"
      onClose={() => setOpen(false)}
      onClick={(e) => {
        if (e.target === ref) {
          setOpen(false);
        }
      }}
      data-open={_open() ? "" : undefined}
    >
      {props.children}
    </dialog>
  );
}
