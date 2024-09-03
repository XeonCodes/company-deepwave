(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/_f62f70._.js", {

"[project]/config/site.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "siteConfig": ()=>siteConfig
});
const siteConfig = {
    name: "Deep",
    description: "Meeting your everyday payment solution needs",
    pathLinks: {
        landingPage: "/",
        signin: "/signin",
        register: "/register",
        trainingDashboard: "/dashboard",
        trainingMessage: "/dashboard/messages",
        trainingCourses: "/dashboard/courses",
        trainingTools: "/dashboard/tools",
        trainingPurchase: "/dashboard/purchase",
        trainingNotificaiton: "/dashboard/notification",
        trainingProfile: "/dashboard/profile"
    },
    appColors: {
        primaryColor: "#0982ff"
    }
};

})()),
"[project]/middleware.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

// middleware.ts
__turbopack_esm__({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/config/site.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function middleware(request) {
    const { pathname } = request.nextUrl;
    // Define routes that require authentication
    const protectedRoutes = [
        "/dashboard"
    ];
    const protectOnboard = [
        "/signin",
        "/register"
    ];
    // Check if the request is for a protected route
    if (protectedRoutes.some((route)=>pathname.startsWith(route))) {
        // Check for the session data (you can use cookies or headers)
        const session = request.cookies.get(process.env.COOKIE_NAME); // Or use another method to check session
        // If session does not exist, redirect to the login page
        if (!session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["siteConfig"].pathLinks.signin}`, request.url));
        }
    } else if (protectOnboard.some((route)=>pathname.startsWith(route))) {
        // Check for the session data (you can use cookies or headers)
        const session = request.cookies.get(process.env.COOKIE_NAME); // Or use another method to check session
        // If session exists, redirect to the training dashboard
        if (session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["siteConfig"].pathLinks.trainingDashboard}`, request.url));
        }
    }
    // Allow the request to proceed if all checks pass
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/dashboard/:path*",
        "/dashboard",
        "/signin",
        "/register"
    ]
};

})()),
}]);

//# sourceMappingURL=_f62f70._.js.map