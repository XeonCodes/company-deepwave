const CHUNK_PUBLIC_PATH = "server/pages/dashboard.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__c81b25._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_8c2685._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__4ddf35._.css");
runtime.loadChunk("server/chunks/ssr/node_modules_react-toastify_dist_ReactToastify_6adb28.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/dashboard/index.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
