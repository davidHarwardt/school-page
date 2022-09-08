import { defineConfig } from 'astro/config';
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
    server: { port: 5000 },
    output: "server",
    adapter: deno(),
});
