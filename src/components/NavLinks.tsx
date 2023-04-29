// import "solid-js";
/** @jsxImportSource solid-js */
import { For, createSignal, onMount } from "solid-js";
import { navLinks } from "@utils/constants";
import "@styles/logo.css";
export default function Navbar() {
  const [active, setActive] = createSignal("");
  console.log(active());

  onMount(() => {
    setActive(window.location.pathname);
    console.log(window.location.pathname);
  });

  return (
    <For each={navLinks}>
      {(link) => (
        <li
          // class="block capitalize sm:inline-block sm:mt-0 hover:text-gray-400"
          // TODO: for some reason JS not working
          // TODO: reverse the hover effect
          class={`${active() === link.title ? "text-gray-400" : "text-white"
            } capitalize hover:text-gray-400 text-[18px] font-medium cursor-pointer block sm:inline-block`}
          onClick={() => setActive(link.title)}
        >
          <a href={link.href}>{link.title}</a>
        </li>
      )}
    </For>
  );
}
