import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: "",
//   resolve: {
//     alias: {
//       "@shared": path.resolve(__dirname, "../packages/shared"),
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       css: {
//         // Needed for @import aliases to resolve properly
//         additionalData: "",
//       },
//     },
//   },
// });

export default defineConfig(({ mode }) => {
  let base = "/";
  if (mode === "development") {
    base = "/"; // Local dev server
  } else if (mode === "staging") {
    base = "/admin/";
  } else if (mode === "admin-prod") {
    base = "/"; // Hosted on admin.xyz.com
  }

  return {
    plugins: [react(), tailwindcss()],
    base,
    resolve: {
      alias: {
        "@shared": path.resolve(__dirname, "../packages/shared"),
      },
    },
    css: {
      preprocessorOptions: {
        css: {
          // Needed for @import aliases to resolve properly
          additionalData: "",
        },
      },
    },
  };
});
