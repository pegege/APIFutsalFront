module.exports = {

"[project]/.next-internal/server/app/matches/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/matches/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
const MatchPage = async ({ params })=>{
    if (!params?.id) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const res = await fetch(`${("TURBOPACK compile-time value", "https://fantasyfutsal.onrender.com")}/api/matches/${params.id}`, {
        cache: "no-store"
    });
    if (!res.ok) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const match = await res.json();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative p-8 pt-4 pb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center space-x-9 mb-4 ml-30",
                children: [
                    typeof match.homeTeam === "object" && typeof match.homeTeam.logoLink === "string" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: match.homeTeam.logoLink,
                        alt: match.homeTeam.name,
                        className: "w-16 h-16"
                    }, void 0, false, {
                        fileName: "[project]/app/matches/[id]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-center flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: typeof match.homeTeam === "object" ? match.homeTeam.name : match.homeTeam
                            }, void 0, false, {
                                fileName: "[project]/app/matches/[id]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text text-blue-600",
                                children: match.score
                            }, void 0, false, {
                                fileName: "[project]/app/matches/[id]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: typeof match.awayTeam === "object" ? match.awayTeam.name : match.awayTeam
                            }, void 0, false, {
                                fileName: "[project]/app/matches/[id]/page.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/matches/[id]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 7
                    }, this),
                    typeof match.awayTeam === "object" && typeof match.awayTeam.logoLink === "string" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: match.awayTeam.logoLink,
                        alt: match.awayTeam.name,
                        className: "w-16 h-16"
                    }, void 0, false, {
                        fileName: "[project]/app/matches/[id]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/matches/[id]/page.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 p-2 text-sm text-gray-500",
                children: [
                    "Temporada ",
                    match.season
                ]
            }, void 0, true, {
                fileName: "[project]/app/matches/[id]/page.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "my-4 border-gray-300"
            }, void 0, false, {
                fileName: "[project]/app/matches/[id]/page.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-none mb-4 grid grid-cols-2 ml-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-md rounded-lg p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-2 py-2",
                                    children: "Cinco inicial"
                                }, void 0, false, {
                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-none list-inside mb-4 divide-y divide-gray-300",
                                    children: match.startingPlayersHome.map((player, index)=>{
                                        const playerEvents = match.events.filter((event)=>event.player === player._id || event.playerId === player._id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: player?.nickname || player?.name || "Jugador desconocido"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: player?.position || "?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this),
                                                playerEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2 mt-1",
                                                    children: playerEvents.map((event)=>{
                                                        if (event.type === "goal") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black text-xs font-bold",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: "/images/balon.png",
                                                                        alt: "Goal",
                                                                        className: "w-4 h-4 inline-block mr-1"
                                                                    }, event._id, false, {
                                                                        fileName: "[project]/app/matches/[id]/page.tsx",
                                                                        lineNumber: 89,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 31
                                                            }, this);
                                                        } else if (event.type === "yellow") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-500 text-xs font-bold",
                                                                children: [
                                                                    "🟨 ",
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 31
                                                            }, this);
                                                        } else if (event.type === "redCard") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 text-xs font-bold",
                                                                children: [
                                                                    "🟥 ",
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 31
                                                            }, this);
                                                        }
                                                        return null;
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, player?._id?.toString() || index, true, {
                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-2 py-2",
                                    children: "Suplentes"
                                }, void 0, false, {
                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-none list-inside mb-4 divide-y divide-gray-300",
                                    children: match.substitutesHome.map((player, index)=>{
                                        const playerEvents = match.events.filter((event)=>event.player === player._id || event.playerId === player._id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: player?.nickname || player?.name || "Jugador desconocido"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: player?.position || "?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this),
                                                playerEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2 mt-1",
                                                    children: playerEvents.map((event)=>{
                                                        if (event.type === "goal") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black text-xs font-bold",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: "/images/balon.png",
                                                                        alt: "Goal",
                                                                        className: "w-4 h-4 inline-block mr-1"
                                                                    }, event._id, false, {
                                                                        fileName: "[project]/app/matches/[id]/page.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 31
                                                            }, this);
                                                        } else if (event.type === "yellow") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-500 text-xs font-bold",
                                                                children: [
                                                                    "🟨 ",
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 31
                                                            }, this);
                                                        } else if (event.type === "red") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 text-xs font-bold",
                                                                children: [
                                                                    "🟥 ",
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 31
                                                            }, this);
                                                        }
                                                        return null;
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, player?._id?.toString() || index, true, {
                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/matches/[id]/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/matches/[id]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-md rounded-lg p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-2 py-2",
                                    children: "Cinco inicial"
                                }, void 0, false, {
                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-none list-inside mb-4 divide-y divide-gray-300",
                                    children: match.startingPlayersAway.map((player, index)=>{
                                        const playerEvents = match.events.filter((event)=>event.player === player._id || event.playerId === player._id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: player?.nickname || player?.name || "Jugador desconocido"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: player?.position || "?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this),
                                                playerEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2 mt-1",
                                                    children: playerEvents.map((event)=>{
                                                        if (event.type === "goal") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black text-xs font-bold",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: "/images/balon.png",
                                                                        alt: "Goal",
                                                                        className: "w-4 h-4 inline-block mr-1"
                                                                    }, event._id, false, {
                                                                        fileName: "[project]/app/matches/[id]/page.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 31
                                                            }, this);
                                                        } else if (event.type === "yellow") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-500 text-xs font-bold",
                                                                children: [
                                                                    "🟨 ",
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 31
                                                            }, this);
                                                        } else if (event.type === "red") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 text-xs font-bold",
                                                                children: [
                                                                    "🟥 ",
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 31
                                                            }, this);
                                                        }
                                                        return null;
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, player?._id?.toString() || index, true, {
                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-2 py-2",
                                    children: "Suplentes"
                                }, void 0, false, {
                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-none list-inside mb-4 divide-y divide-gray-300",
                                    children: match.substitutesAway.map((player, index)=>{
                                        const playerEvents = match.events.filter((event)=>event.player === player._id || event.playerId === player._id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: player?.nickname || player?.name || "Jugador desconocido"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: player?.position || "?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 21
                                                }, this),
                                                playerEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2 mt-1",
                                                    children: playerEvents.map((event)=>{
                                                        if (event.type === "goal") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black text-xs font-bold",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: "/images/balon.png",
                                                                        alt: "Goal",
                                                                        className: "w-4 h-4 inline-block mr-1"
                                                                    }, event._id, false, {
                                                                        fileName: "[project]/app/matches/[id]/page.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 31
                                                            }, this);
                                                        } else if (event.type === "yellow") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-500 text-xs font-bold",
                                                                children: [
                                                                    "🟨 ",
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 31
                                                            }, this);
                                                        } else if (event.type === "red") {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 text-xs font-bold",
                                                                children: [
                                                                    "🟥 ",
                                                                    event.minute,
                                                                    "'"
                                                                ]
                                                            }, event._id, true, {
                                                                fileName: "[project]/app/matches/[id]/page.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 31
                                                            }, this);
                                                        }
                                                        return null;
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, player?._id?.toString() || index, true, {
                                            fileName: "[project]/app/matches/[id]/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/matches/[id]/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/matches/[id]/page.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/matches/[id]/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/matches/[id]/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/matches/[id]/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = MatchPage;
}}),
"[project]/app/matches/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/matches/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_90fbc6a8._.js.map