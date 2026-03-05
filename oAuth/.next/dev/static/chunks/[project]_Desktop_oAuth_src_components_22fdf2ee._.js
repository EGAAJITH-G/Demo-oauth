(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/oAuth/src/components/home/Hero/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Hero-module__-4cbBa__actions",
  "activeDot": "Hero-module__-4cbBa__activeDot",
  "description": "Hero-module__-4cbBa__description",
  "dot": "Hero-module__-4cbBa__dot",
  "hero": "Hero-module__-4cbBa__hero",
  "heroContent": "Hero-module__-4cbBa__heroContent",
  "heroImage": "Hero-module__-4cbBa__heroImage",
  "heroImageWrapper": "Hero-module__-4cbBa__heroImageWrapper",
  "heroOverlay": "Hero-module__-4cbBa__heroOverlay",
  "indicators": "Hero-module__-4cbBa__indicators",
  "info": "Hero-module__-4cbBa__info",
  "line": "Hero-module__-4cbBa__line",
  "primaryBtn": "Hero-module__-4cbBa__primaryBtn",
  "scrollIndicator": "Hero-module__-4cbBa__scrollIndicator",
  "scrollPulse": "Hero-module__-4cbBa__scrollPulse",
  "secondaryBtn": "Hero-module__-4cbBa__secondaryBtn",
  "subtitle": "Hero-module__-4cbBa__subtitle",
  "title": "Hero-module__-4cbBa__title",
});
}),
"[project]/Desktop/oAuth/src/components/home/Hero/Hero.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/home/Hero/Hero.module.css [app-client] (css module)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/data/mockData.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Hero() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timer = setInterval({
                "Hero.useEffect.timer": ()=>{
                    setCurrent({
                        "Hero.useEffect.timer": (prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSlides"].length
                    }["Hero.useEffect.timer"]);
                }
            }["Hero.useEffect.timer"], 5000);
            return ({
                "Hero.useEffect": ()=>clearInterval(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    const slide = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSlides"][current];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroImageWrapper,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: slide.image,
                        alt: slide.title,
                        fill: true,
                        priority: true,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroImage,
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this)
                }, slide.id, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroOverlay
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContent}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        transition: {
                            duration: 0.7,
                            ease: "easeOut"
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                children: slide.tag
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                                lineNumber: 56,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: [
                                    slide.title,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                                        lineNumber: 58,
                                        columnNumber: 43
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: slide.titleSpan
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                                        lineNumber: 59,
                                        columnNumber: 29
                                    }, this),
                                    " ",
                                    slide.titleEnd
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                                lineNumber: 57,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                children: slide.desc
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shop",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryBtn,
                                        children: "Shop Now"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                                        lineNumber: 63,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryBtn,
                                        children: "Our Story"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                                        lineNumber: 64,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                                lineNumber: 62,
                                columnNumber: 25
                            }, this)
                        ]
                    }, `content-${slide.id}`, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].indicators,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSlides"].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        suppressHydrationWarning: true,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${i === current ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeDot : ''}`,
                        onClick: ()=>setCurrent(i),
                        "aria-label": `Go to slide ${i + 1}`
                    }, i, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollIndicator,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
                lineNumber: 83,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/oAuth/src/components/home/Hero/Hero.js",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_s(Hero, "Ce5S7Zpl2S4YgGoPn+G4m52qKq8=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "featured": "FeaturedProducts-module__VKx2ZW__featured",
  "grid": "FeaturedProducts-module__VKx2ZW__grid",
  "header": "FeaturedProducts-module__VKx2ZW__header",
  "line": "FeaturedProducts-module__VKx2ZW__line",
  "subtitle": "FeaturedProducts-module__VKx2ZW__subtitle",
  "title": "FeaturedProducts-module__VKx2ZW__title",
  "viewAll": "FeaturedProducts-module__VKx2ZW__viewAll",
  "viewBtn": "FeaturedProducts-module__VKx2ZW__viewBtn",
});
}),
"[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "ProductCard-module__dTwC9W__actions",
  "addToCartBtn": "ProductCard-module__dTwC9W__addToCartBtn",
  "badge": "ProductCard-module__dTwC9W__badge",
  "card": "ProductCard-module__dTwC9W__card",
  "category": "ProductCard-module__dTwC9W__category",
  "iconBtn": "ProductCard-module__dTwC9W__iconBtn",
  "image": "ProductCard-module__dTwC9W__image",
  "imageWrapper": "ProductCard-module__dTwC9W__imageWrapper",
  "info": "ProductCard-module__dTwC9W__info",
  "name": "ProductCard-module__dTwC9W__name",
  "overlay": "ProductCard-module__dTwC9W__overlay",
  "price": "ProductCard-module__dTwC9W__price",
  "rating": "ProductCard-module__dTwC9W__rating",
  "topInfo": "ProductCard-module__dTwC9W__topInfo",
});
}),
"[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/Toast/Toast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/context/CartContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/context/WishlistContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ProductCard({ product }) {
    _s();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { toggleWishlist, isInWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const inWishlist = isInWishlist(product.id);
    const handleAddToCart = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
        addToast(`"${product.name}" added to cart!`, 'success');
    };
    const handleWishlist = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
        if (inWishlist) {
            addToast(`"${product.name}" removed from wishlist`, 'info');
        } else {
            addToast(`"${product.name}" saved to wishlist ❤️`, 'success');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: product.image,
                        alt: product.name,
                        width: 400,
                        height: 500,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image,
                        priority: product.trending
                    }, void 0, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        suppressHydrationWarning: true,
                                        title: inWishlist ? "Remove from Wishlist" : "Add to Wishlist",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn} ${inWishlist ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wishlisted : ''}`,
                                        onClick: handleWishlist,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Heart, {
                                            size: 18,
                                            fill: inWishlist ? 'currentColor' : 'none'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                            lineNumber: 54,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                        lineNumber: 48,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/product/${product.id}`,
                                        title: "Quick View",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Eye, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                            lineNumber: 57,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                suppressHydrationWarning: true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addToCartBtn,
                                onClick: handleAddToCart,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShoppingCart, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add to Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    product.trending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                        children: "Trending"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                        lineNumber: 65,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/product/${product.id}`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
                                children: product.category
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rating,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                        size: 12,
                                        fill: "var(--accent)",
                                        color: "var(--accent)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: product.rating
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                        lineNumber: 72,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                        children: [
                            "$",
                            product.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(ProductCard, "u/1XIwijt/kwR/rwzTo7Sys2iJQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accent": "SectionHeader-module__q3AB6a__accent",
  "centered": "SectionHeader-module__q3AB6a__centered",
  "header": "SectionHeader-module__q3AB6a__header",
  "line": "SectionHeader-module__q3AB6a__line",
  "subtitle": "SectionHeader-module__q3AB6a__subtitle",
  "title": "SectionHeader-module__q3AB6a__title",
});
}),
"[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.module.css [app-client] (css module)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
function SectionHeader({ subtitle, title, centered = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6
        },
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} ${centered ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centered : ''}`,
        children: [
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.js",
                lineNumber: 14,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: title.split(' ').map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: i === title.split(' ').length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accent,
                            children: word
                        }, void 0, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.js",
                            lineNumber: 19,
                            columnNumber: 29
                        }, this) : word + ' '
                    }, i, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.js",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.js",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.js",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.js",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$FeaturedProducts$2f$FeaturedProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/data/mockData.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function FeaturedProducts() {
    const featured = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].slice(0, 8);
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$FeaturedProducts$2f$FeaturedProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featured,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    subtitle: "Handpicked for you",
                    title: "Featured Products"
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.js",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    variants: containerVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$FeaturedProducts$2f$FeaturedProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    children: featured.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            variants: itemVariants,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.js",
                                lineNumber: 44,
                                columnNumber: 29
                            }, this)
                        }, product.id, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.js",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.js",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    viewport: {
                        once: true
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$FeaturedProducts$2f$FeaturedProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewAll,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$FeaturedProducts$2f$FeaturedProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewBtn,
                        children: "View All Products"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.js",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.js",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.js",
            lineNumber: 29,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/oAuth/src/components/home/FeaturedProducts/FeaturedProducts.js",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_c = FeaturedProducts;
var _c;
__turbopack_context__.k.register(_c, "FeaturedProducts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/home/Categories/Categories.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "categories": "Categories-module__R0Ilpq__categories",
  "categoryCard": "Categories-module__R0Ilpq__categoryCard",
  "categoryGrid": "Categories-module__R0Ilpq__categoryGrid",
  "header": "Categories-module__R0Ilpq__header",
  "image": "Categories-module__R0Ilpq__image",
  "info": "Categories-module__R0Ilpq__info",
  "overlay": "Categories-module__R0Ilpq__overlay",
  "shopBtn": "Categories-module__R0Ilpq__shopBtn",
  "title": "Categories-module__R0Ilpq__title",
});
}),
"[project]/Desktop/oAuth/src/components/home/Categories/Categories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Categories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/home/Categories/Categories.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/data/mockData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
function Categories() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categories,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "Shop by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Category"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                                lineNumber: 19,
                                columnNumber: 58
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryGrid,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((cat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: index * 0.1
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryCard} ${index === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].large : ''}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/category/${cat.name.toLowerCase()}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: cat.image,
                                        alt: cat.name,
                                        fill: true,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image,
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                                        lineNumber: 33,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: cat.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                                                    lineNumber: 42,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        cat.count,
                                                        " Items"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                                                    lineNumber: 43,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Categories$2f$Categories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shopBtn,
                                                    children: "Discover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                                                    lineNumber: 44,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                                            lineNumber: 41,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                                        lineNumber: 40,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                                lineNumber: 32,
                                columnNumber: 29
                            }, this)
                        }, cat.id, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
                    lineNumber: 22,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/oAuth/src/components/home/Categories/Categories.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Categories;
var _c;
__turbopack_context__.k.register(_c, "Categories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "header": "TrendingCarousel-module__00pTKW__header",
  "swiper": "TrendingCarousel-module__00pTKW__swiper",
  "title": "TrendingCarousel-module__00pTKW__title",
  "trending": "TrendingCarousel-module__00pTKW__trending",
});
}),
"[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendingCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'swiper/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/modules'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css/navigation'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css/pagination'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$TrendingCarousel$2f$TrendingCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/ProductCard/ProductCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/SectionHeader/SectionHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/data/mockData.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function TrendingCarousel() {
    const trending = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.trending);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$TrendingCarousel$2f$TrendingCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trending,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$SectionHeader$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Trending Now"
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.js",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$TrendingCarousel$2f$TrendingCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                    children: "The most loved pieces from our current collection"
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8,
                        delay: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Swiper, {
                        modules: [
                            Navigation,
                            Pagination,
                            Autoplay
                        ],
                        spaceBetween: 30,
                        slidesPerView: 1,
                        navigation: true,
                        pagination: {
                            clickable: true
                        },
                        autoplay: {
                            delay: 3000
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 4
                            }
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$TrendingCarousel$2f$TrendingCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swiper,
                        children: trending.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwiperSlide, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ProductCard$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    product: product
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.js",
                                    lineNumber: 46,
                                    columnNumber: 33
                                }, this)
                            }, product.id, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.js",
                                lineNumber: 45,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.js",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.js",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/oAuth/src/components/home/TrendingCarousel/TrendingCarousel.js",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = TrendingCarousel;
var _c;
__turbopack_context__.k.register(_c, "TrendingCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "author": "Reviews-module__WTLinG__author",
  "authorInfo": "Reviews-module__WTLinG__authorInfo",
  "avatar": "Reviews-module__WTLinG__avatar",
  "comment": "Reviews-module__WTLinG__comment",
  "header": "Reviews-module__WTLinG__header",
  "quoteIcon": "Reviews-module__WTLinG__quoteIcon",
  "reviewCard": "Reviews-module__WTLinG__reviewCard",
  "reviewGrid": "Reviews-module__WTLinG__reviewGrid",
  "reviews": "Reviews-module__WTLinG__reviews",
  "stars": "Reviews-module__WTLinG__stars",
  "tag": "Reviews-module__WTLinG__tag",
  "title": "Reviews-module__WTLinG__title",
});
}),
"[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/data/mockData.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
function Reviews() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviews,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                            children: "Client Stories"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "What Our Clients ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Say"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                    lineNumber: 19,
                                    columnNumber: 67
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                            lineNumber: 19,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewGrid,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].map((review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Quote, {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quoteIcon,
                                    size: 40
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                    lineNumber: 32,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stars,
                                    children: [
                                        ...Array(5)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                            size: 16,
                                            fill: i < review.rating ? "var(--accent)" : "none",
                                            color: i < review.rating ? "var(--accent)" : "#ddd"
                                        }, i, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                            lineNumber: 35,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                    lineNumber: 33,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comment,
                                    children: [
                                        '"',
                                        review.comment,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].author,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarWrapper,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: review.avatar,
                                                alt: review.name,
                                                width: 50,
                                                height: 50,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                                lineNumber: 46,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                            lineNumber: 45,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Reviews$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: review.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                                    lineNumber: 55,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: review.role
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                                    lineNumber: 56,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                            lineNumber: 54,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, review.id, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
                    lineNumber: 22,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/oAuth/src/components/home/Reviews/Reviews.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Reviews;
var _c;
__turbopack_context__.k.register(_c, "Reviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "benefits": "Newsletter-module__6Q_hCW__benefits",
  "bgImage": "Newsletter-module__6Q_hCW__bgImage",
  "contentSide": "Newsletter-module__6Q_hCW__contentSide",
  "description": "Newsletter-module__6Q_hCW__description",
  "disclaimer": "Newsletter-module__6Q_hCW__disclaimer",
  "dot": "Newsletter-module__6Q_hCW__dot",
  "form": "Newsletter-module__6Q_hCW__form",
  "imageOverlay": "Newsletter-module__6Q_hCW__imageOverlay",
  "imageQuote": "Newsletter-module__6Q_hCW__imageQuote",
  "imageSide": "Newsletter-module__6Q_hCW__imageSide",
  "input": "Newsletter-module__6Q_hCW__input",
  "inputWrapper": "Newsletter-module__6Q_hCW__inputWrapper",
  "newsletter": "Newsletter-module__6Q_hCW__newsletter",
  "newsletterBox": "Newsletter-module__6Q_hCW__newsletterBox",
  "submitBtn": "Newsletter-module__6Q_hCW__submitBtn",
  "successIcon": "Newsletter-module__6Q_hCW__successIcon",
  "successMsg": "Newsletter-module__6Q_hCW__successMsg",
  "tag": "Newsletter-module__6Q_hCW__tag",
  "title": "Newsletter-module__6Q_hCW__title",
});
}),
"[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Newsletter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Newsletter() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newsletter,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newsletterBox,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageSide,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop",
                            alt: "Luxury Fashion Newsletter",
                            fill: true,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgImage,
                            sizes: "50vw"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageOverlay
                        }, void 0, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                            lineNumber: 32,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageQuote,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "“Style is a way to say who you are without having to speak.”"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "— Rachel Zoe"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentSide,
                    initial: {
                        opacity: 0,
                        x: -40
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.7,
                        ease: "easeOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                            children: "Members Only"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "Join Our ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Exclusive"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 50,
                                    columnNumber: 34
                                }, this),
                                " List"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: "Get early access to new arrivals, exclusive sales, and fashion inspiration curated just for you."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefits,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, this),
                                        "Early access to new collections"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, this),
                                        "Members-only discounts up to 30%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                            lineNumber: 61,
                                            columnNumber: 29
                                        }, this),
                                        "Personalized style recommendations"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this),
                        !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            suppressHydrationWarning: true,
                                            type: "email",
                                            placeholder: "Your email address",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            suppressHydrationWarning: true,
                                            type: "submit",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitBtn,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Subscribe"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                                    lineNumber: 78,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Send, {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                                    lineNumber: 79,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                            lineNumber: 77,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 67,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disclaimer,
                                    children: "*By subscribing you agree to our Terms and Privacy Policy."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 82,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                            lineNumber: 66,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successMsg,
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$home$2f$Newsletter$2f$Newsletter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Check, {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                        lineNumber: 93,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 92,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "You're in!"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                            lineNumber: 96,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Welcome to the Lumière circle. Check your inbox."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                            lineNumber: 97,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                                    lineNumber: 95,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                            lineNumber: 87,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/oAuth/src/components/home/Newsletter/Newsletter.js",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s(Newsletter, "77YcRx86nYJXLJuPvA7ar5BPIqU=");
_c = Newsletter;
var _c;
__turbopack_context__.k.register(_c, "Newsletter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D_Desktop_oAuth_src_components_22fdf2ee._.js.map