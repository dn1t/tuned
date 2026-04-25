<script lang="ts" module>
  export interface Item {}

  export interface CupInfo {
    title: string;
    items: Item[];
  }
</script>

<script lang="ts">
  import Nav from "../../components/editor/nav.svelte";
  import Sidebar from "../../components/editor/sidebar.svelte";

  let info: CupInfo = $state({
    title: "이상형 월드컵",
    items: [],
  });
</script>

<Nav {info} />
{info.title}
<div class="flex">
  <Sidebar {info} />
  <main>
    <div>Editor</div>
  </main>
</div>
