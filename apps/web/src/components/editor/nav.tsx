import { A } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";
import type { SetStoreFunction, Store } from "solid-js/store";
import { cn } from "tailwind-variants";
import type { CupInfo } from "~/routes/editor";
import PlusIcon from "~icons/ph/plus-bold";
import { Button } from "../common/button";
import { GeniusLogo } from "../common/genius";
import { Logo } from "../common/logo";
import { Modal } from "../common/modal";
import { GeniusModal } from "./genius-modal";

interface NavProps {
  info: [Store<CupInfo>, SetStoreFunction<CupInfo>];
}

export function Nav(props: NavProps) {
  const [info, setInfo] = props.info;
  const [modalOpen, setModalOpen] = createSignal(false);
  let inputRef!: HTMLInputElement;

  onMount(() => {
    inputRef.select();

    setModalOpen(true);
  });

  return (
    <nav>
      <section class="flex items-center px-5 py-2.5">
        <div class="flex items-center gap-x-2 font-display font-semibold text-[19px]">
          <A href="/">
            <Logo class="-mt-px h-5.75 w-5.75" />
          </A>
          에디터
        </div>
        <input
          ref={inputRef}
          class="ml-7 w-64 rounded-[10px] border border-zinc-200 bg-zinc-100 px-3 py-2 font-medium leading-none caret-underscore focus:outline-none focus:ring-2 focus:ring-brand-400"
          placeholder="제목"
          autofocus
          autocomplete="off"
          value={info.title}
          onInput={(e) => setInfo("title", e.currentTarget.value)}
        />
      </section>
      <section class="mx-2 flex items-center rounded-xl border border-zinc-200 bg-zinc-100 p-1.5">
        <Button
          class="focus:z-0"
          icon={(props) => (
            <div class={cn(props.class, "flex items-center justify-center")}>
              <GeniusLogo class="h-3.5 w-3.5" />
            </div>
          )}
          onClick={() => setModalOpen(true)}
        >
          Genius에서 추가
        </Button>
        <Button icon={(props) => <PlusIcon {...props} />}>직접 추가</Button>
        <Modal open={[modalOpen, setModalOpen]}>
          <GeniusModal />
        </Modal>
        {modalOpen() ? "open" : "closed"}
      </section>
    </nav>
  );
}
