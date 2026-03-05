(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/oAuth/src/context/WishlistContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistProvider",
    ()=>WishlistProvider,
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const WishlistContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function WishlistProvider({ children }) {
    _s();
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addToWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[addToWishlist]": (product)=>{
            setWishlistItems({
                "WishlistProvider.useCallback[addToWishlist]": (prev)=>{
                    if (prev.find({
                        "WishlistProvider.useCallback[addToWishlist]": (item)=>item.id === product.id
                    }["WishlistProvider.useCallback[addToWishlist]"])) return prev;
                    return [
                        ...prev,
                        product
                    ];
                }
            }["WishlistProvider.useCallback[addToWishlist]"]);
        }
    }["WishlistProvider.useCallback[addToWishlist]"], []);
    const removeFromWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[removeFromWishlist]": (id)=>{
            setWishlistItems({
                "WishlistProvider.useCallback[removeFromWishlist]": (prev)=>prev.filter({
                        "WishlistProvider.useCallback[removeFromWishlist]": (item)=>item.id !== id
                    }["WishlistProvider.useCallback[removeFromWishlist]"])
            }["WishlistProvider.useCallback[removeFromWishlist]"]);
        }
    }["WishlistProvider.useCallback[removeFromWishlist]"], []);
    const toggleWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[toggleWishlist]": (product)=>{
            setWishlistItems({
                "WishlistProvider.useCallback[toggleWishlist]": (prev)=>{
                    const exists = prev.find({
                        "WishlistProvider.useCallback[toggleWishlist].exists": (item)=>item.id === product.id
                    }["WishlistProvider.useCallback[toggleWishlist].exists"]);
                    if (exists) return prev.filter({
                        "WishlistProvider.useCallback[toggleWishlist]": (item)=>item.id !== product.id
                    }["WishlistProvider.useCallback[toggleWishlist]"]);
                    return [
                        ...prev,
                        product
                    ];
                }
            }["WishlistProvider.useCallback[toggleWishlist]"]);
        }
    }["WishlistProvider.useCallback[toggleWishlist]"], []);
    const isInWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[isInWishlist]": (id)=>{
            return wishlistItems.some({
                "WishlistProvider.useCallback[isInWishlist]": (item)=>item.id === id
            }["WishlistProvider.useCallback[isInWishlist]"]);
        }
    }["WishlistProvider.useCallback[isInWishlist]"], [
        wishlistItems
    ]);
    const wishlistCount = wishlistItems.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WishlistContext.Provider, {
        value: {
            wishlistItems,
            addToWishlist,
            removeFromWishlist,
            toggleWishlist,
            isInWishlist,
            wishlistCount
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/oAuth/src/context/WishlistContext.js",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(WishlistProvider, "F0KBtnGX16mnxbVyRHAkpeZeWXo=");
_c = WishlistProvider;
function useWishlist() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WishlistContext);
    if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
    return ctx;
}
_s1(useWishlist, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "WishlistProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/context/ThemeContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const ThemeProvider = ({ children })=>{
    _s();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                // Using requestAnimationFrame to avoid synchronous setState in effect
                requestAnimationFrame({
                    "ThemeProvider.useEffect": ()=>{
                        setDarkMode(true);
                        document.documentElement.classList.add('dark-mode');
                    }
                }["ThemeProvider.useEffect"]);
            }
        }
    }["ThemeProvider.useEffect"], []);
    const toggleTheme = ()=>{
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            darkMode,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/oAuth/src/context/ThemeContext.js",
        lineNumber: 32,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "n2P3coCVngntCnyS/Nqj+dgR7+U=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/common/Toast/Toast.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "close": "Toast-module__8On53G__close",
  "container": "Toast-module__8On53G__container",
  "error": "Toast-module__8On53G__error",
  "icon": "Toast-module__8On53G__icon",
  "info": "Toast-module__8On53G__info",
  "message": "Toast-module__8On53G__message",
  "slideIn": "Toast-module__8On53G__slideIn",
  "success": "Toast-module__8On53G__success",
  "toast": "Toast-module__8On53G__toast",
});
}),
"[project]/Desktop/oAuth/src/components/common/Toast/Toast.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/Toast/Toast.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ToastProvider({ children }) {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[addToast]": (message, type = 'success', duration = 3000)=>{
            const id = Date.now();
            setToasts({
                "ToastProvider.useCallback[addToast]": (prev)=>[
                        ...prev,
                        {
                            id,
                            message,
                            type
                        }
                    ]
            }["ToastProvider.useCallback[addToast]"]);
            setTimeout({
                "ToastProvider.useCallback[addToast]": ()=>{
                    setToasts({
                        "ToastProvider.useCallback[addToast]": (prev)=>prev.filter({
                                "ToastProvider.useCallback[addToast]": (t)=>t.id !== id
                            }["ToastProvider.useCallback[addToast]"])
                    }["ToastProvider.useCallback[addToast]"]);
                }
            }["ToastProvider.useCallback[addToast]"], duration);
        }
    }["ToastProvider.useCallback[addToast]"], []);
    const removeToast = (id)=>{
        setToasts((prev)=>prev.filter((t)=>t.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            addToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toast} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][toast.type]}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                                children: [
                                    toast.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckCircle, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
                                        lineNumber: 30,
                                        columnNumber: 58
                                    }, this),
                                    toast.type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertCircle, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
                                        lineNumber: 31,
                                        columnNumber: 56
                                    }, this),
                                    toast.type === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
                                        lineNumber: 32,
                                        columnNumber: 55
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
                                lineNumber: 29,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$Toast$2f$Toast$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].close,
                                onClick: ()=>removeToast(toast.id),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
                                    lineNumber: 36,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this)
                        ]
                    }, toast.id, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/oAuth/src/components/common/Toast/Toast.js",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(ToastProvider, "7ptjiGVSLHTrkxtrbfHuIUEk43c=");
_c = ToastProvider;
function useToast() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!ctx) throw new Error('useToast must be used within ToastProvider');
    return ctx;
}
_s1(useToast, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/context/CartContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CartProvider({ children }) {
    _s();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Add item to cart (or increase qty if already exists with same size & color)
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[addToCart]": (product, quantity = 1, selectedSize = null, selectedColor = null)=>{
            setCartItems({
                "CartProvider.useCallback[addToCart]": (prev)=>{
                    const size = selectedSize || product.sizes?.[0] || 'One Size';
                    const color = selectedColor || product.colors?.[0] || '#000';
                    const existing = prev.find({
                        "CartProvider.useCallback[addToCart].existing": (item)=>item.id === product.id && item.selectedSize === size && item.selectedColor === color
                    }["CartProvider.useCallback[addToCart].existing"]);
                    if (existing) {
                        return prev.map({
                            "CartProvider.useCallback[addToCart]": (item)=>item.id === product.id && item.selectedSize === size && item.selectedColor === color ? {
                                    ...item,
                                    quantity: item.quantity + quantity
                                } : item
                        }["CartProvider.useCallback[addToCart]"]);
                    }
                    return [
                        ...prev,
                        {
                            ...product,
                            quantity,
                            selectedSize: size,
                            selectedColor: color
                        }
                    ];
                }
            }["CartProvider.useCallback[addToCart]"]);
        }
    }["CartProvider.useCallback[addToCart]"], []);
    // Remove one specific item variant
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[removeFromCart]": (id, selectedSize, selectedColor)=>{
            setCartItems({
                "CartProvider.useCallback[removeFromCart]": (prev)=>prev.filter({
                        "CartProvider.useCallback[removeFromCart]": (item)=>!(item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
                    }["CartProvider.useCallback[removeFromCart]"])
            }["CartProvider.useCallback[removeFromCart]"]);
        }
    }["CartProvider.useCallback[removeFromCart]"], []);
    // Update quantity by delta (+1 or -1)
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[updateQuantity]": (id, selectedSize, selectedColor, delta)=>{
            setCartItems({
                "CartProvider.useCallback[updateQuantity]": (prev)=>prev.map({
                        "CartProvider.useCallback[updateQuantity]": (item)=>{
                            if (item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor) {
                                return {
                                    ...item,
                                    quantity: Math.max(1, item.quantity + delta)
                                };
                            }
                            return item;
                        }
                    }["CartProvider.useCallback[updateQuantity]"])
            }["CartProvider.useCallback[updateQuantity]"]);
        }
    }["CartProvider.useCallback[updateQuantity]"], []);
    // Clear entire cart
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[clearCart]": ()=>setCartItems([])
    }["CartProvider.useCallback[clearCart]"], []);
    const cartCount = cartItems.reduce((acc, item)=>acc + item.quantity, 0);
    const cartSubtotal = cartItems.reduce((acc, item)=>acc + item.price * item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartSubtotal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/oAuth/src/context/CartContext.js",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
_s(CartProvider, "egGQ324HUA/M3OnaqRcit4bKcXw=");
_c = CartProvider;
function useCart() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
_s1(useCart, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "Navbar-module__Ssv6GG__badge",
  "badgeWrap": "Navbar-module__Ssv6GG__badgeWrap",
  "fadeIn": "Navbar-module__Ssv6GG__fadeIn",
  "hamburger": "Navbar-module__Ssv6GG__hamburger",
  "iconBtn": "Navbar-module__Ssv6GG__iconBtn",
  "logo": "Navbar-module__Ssv6GG__logo",
  "navActions": "Navbar-module__Ssv6GG__navActions",
  "navContainer": "Navbar-module__Ssv6GG__navContainer",
  "navLinks": "Navbar-module__Ssv6GG__navLinks",
  "navbar": "Navbar-module__Ssv6GG__navbar",
  "noResults": "Navbar-module__Ssv6GG__noResults",
  "open": "Navbar-module__Ssv6GG__open",
  "resultCategory": "Navbar-module__Ssv6GG__resultCategory",
  "resultItem": "Navbar-module__Ssv6GG__resultItem",
  "resultName": "Navbar-module__Ssv6GG__resultName",
  "scrolled": "Navbar-module__Ssv6GG__scrolled",
  "searchBox": "Navbar-module__Ssv6GG__searchBox",
  "searchClose": "Navbar-module__Ssv6GG__searchClose",
  "searchForm": "Navbar-module__Ssv6GG__searchForm",
  "searchIcon": "Navbar-module__Ssv6GG__searchIcon",
  "searchInput": "Navbar-module__Ssv6GG__searchInput",
  "searchOverlay": "Navbar-module__Ssv6GG__searchOverlay",
  "searchResults": "Navbar-module__Ssv6GG__searchResults",
  "slideDown": "Navbar-module__Ssv6GG__slideDown",
  "themeWrap": "Navbar-module__Ssv6GG__themeWrap",
  "transparent": "Navbar-module__Ssv6GG__transparent",
});
}),
"[project]/Desktop/oAuth/src/components/common/ThemeToggle/ThemeToggle.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dark": "ThemeToggle-module___Z8nzW__dark",
  "iconWrapper": "ThemeToggle-module___Z8nzW__iconWrapper",
  "light": "ThemeToggle-module___Z8nzW__light",
  "toggle": "ThemeToggle-module___Z8nzW__toggle",
});
}),
"[project]/Desktop/oAuth/src/components/common/ThemeToggle/ThemeToggle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/context/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/ThemeToggle/ThemeToggle.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeToggle() {
    _s();
    const { darkMode, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        suppressHydrationWarning: true,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle,
        onClick: toggleTheme,
        "aria-label": "Toggle Theme",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconWrapper} ${darkMode ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dark : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light}`,
            children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sun, {
                size: 20
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/common/ThemeToggle/ThemeToggle.js",
                lineNumber: 17,
                columnNumber: 29
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Moon, {
                size: 20
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/common/ThemeToggle/ThemeToggle.js",
                lineNumber: 17,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/oAuth/src/components/common/ThemeToggle/ThemeToggle.js",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/oAuth/src/components/common/ThemeToggle/ThemeToggle.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(ThemeToggle, "Sv+UslXnmVr1RWTZDTazV04asPE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/data/mockData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "heroSlides",
    ()=>heroSlides,
    "products",
    ()=>products,
    "reviews",
    ()=>reviews
]);
const products = [
    {
        id: 1,
        name: "Classic Silk Dress",
        price: 299,
        oldPrice: 399,
        category: "Women",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Indulge in the ultimate luxury with our Classic Silk Dress. Crafted from 100% pure mulberry silk, this piece offers a delicate touch and a flattering silhouette that moves with grace.",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            "#000000",
            "#FFFFFF",
            "#C5A059"
        ],
        trending: true,
        date: "2024-01-15"
    },
    {
        id: 2,
        name: "Midnight Suit",
        price: 450,
        oldPrice: 599,
        category: "Men",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
        ],
        description: "The Midnight Suit is the epitome of modern tailoring. Featuring a slim-fit silhouette and premium Italian wool construction.",
        sizes: [
            "48",
            "50",
            "52",
            "54"
        ],
        colors: [
            "#191970",
            "#000000"
        ],
        trending: true,
        date: "2024-02-10"
    },
    {
        id: 3,
        name: "Gold Accent Watch",
        price: 890,
        oldPrice: 1200,
        category: "Accessories",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?q=80&w=800&auto=format&fit=crop"
        ],
        description: "A masterpiece of horology. This Gold Accent Watch combines precision Swiss movement with a stunning 18k gold-plated bezel.",
        sizes: [
            "One Size"
        ],
        colors: [
            "#FFD700",
            "#C0C0C0"
        ],
        trending: true,
        date: "2023-12-05"
    },
    {
        id: 4,
        name: "Cashmere Wrap Scarf",
        price: 120,
        oldPrice: 180,
        category: "Accessories",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Wrap yourself in pure comfort with our ethically sourced Cashmere Scarf. Impossibly soft and endlessly versatile.",
        sizes: [
            "One Size"
        ],
        colors: [
            "#D2B48C",
            "#8B4513"
        ],
        trending: false,
        date: "2024-02-20"
    },
    {
        id: 5,
        name: "Emerald Evening Gown",
        price: 550,
        oldPrice: 750,
        category: "Women",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Make an unforgettable entrance with this emerald gown. Hand-beaded accents and premium satin finish make it truly remarkable.",
        sizes: [
            "S",
            "M",
            "L"
        ],
        colors: [
            "#004d40",
            "#000000"
        ],
        trending: true,
        date: "2024-03-10"
    },
    {
        id: 6,
        name: "Urban Leather Jacket",
        price: 380,
        oldPrice: 490,
        category: "Men",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Tough yet stylish, this genuine leather jacket is crafted for the modern explorer. Butter-soft finish, clean lines.",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        colors: [
            "#000000",
            "#3E2723"
        ],
        trending: false,
        date: "2024-03-12"
    },
    {
        id: 7,
        name: "Pearl Drop Earrings",
        price: 190,
        oldPrice: 250,
        category: "Accessories",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Classic South Sea pearls set with 14k white gold backings. A timeless addition to any jewellery collection.",
        sizes: [
            "One Size"
        ],
        colors: [
            "#FFFFFF"
        ],
        trending: true,
        date: "2024-02-28"
    },
    {
        id: 8,
        name: "Linen Summer Blazer",
        price: 280,
        oldPrice: 380,
        category: "Men",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Breathable linen fabric in a relaxed fit, ideal for beach weddings and warm-weather elegance.",
        sizes: [
            "48",
            "50",
            "52",
            "54"
        ],
        colors: [
            "#F5F5DC",
            "#87CEEB"
        ],
        trending: false,
        date: "2024-03-15"
    },
    {
        id: 9,
        name: "Kids Velvet Blazer",
        price: 155,
        oldPrice: 210,
        category: "Kids",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Sophisticated velvet blazer for young gentlemen. Perfect for family celebrations and school events.",
        sizes: [
            "4Y",
            "6Y",
            "8Y",
            "10Y"
        ],
        colors: [
            "#2c3e50",
            "#c0392b"
        ],
        trending: true,
        date: "2024-03-20"
    },
    {
        id: 10,
        name: "Girls Floral Party Dress",
        price: 135,
        oldPrice: 195,
        category: "Kids",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Dreamy tulle dress with hand-stitched floral embroidery. Perfect for birthday parties and special moments.",
        sizes: [
            "3Y",
            "5Y",
            "7Y",
            "9Y"
        ],
        colors: [
            "#ffc0cb",
            "#ffffff"
        ],
        trending: false,
        date: "2024-03-22"
    },
    {
        id: 11,
        name: "Silk Wrap Blouse",
        price: 220,
        oldPrice: 320,
        category: "Women",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop"
        ],
        description: "A contemporary silk blouse with a flowing wrap design. Transitions effortlessly from day to evening.",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        colors: [
            "#000000",
            "#FFC0CB",
            "#FFFFFF"
        ],
        trending: true,
        date: "2024-03-25"
    },
    {
        id: 12,
        name: "Italian Leather Loafers",
        price: 280,
        oldPrice: 380,
        category: "Men",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Handcrafted in Italy using the finest calfskin leather. Comfortable, breathable, and timeless in every setting.",
        sizes: [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        colors: [
            "#6F4E37",
            "#000000"
        ],
        trending: false,
        date: "2024-03-28"
    },
    {
        id: 13,
        name: "Rose Gold Bracelet",
        price: 210,
        oldPrice: 290,
        category: "Accessories",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop"
        ],
        description: "A delicate rose gold chain featuring a single brilliant-cut diamond. Pure understated luxury.",
        sizes: [
            "One Size"
        ],
        colors: [
            "#B76E79"
        ],
        trending: true,
        date: "2024-04-01"
    },
    {
        id: 14,
        name: "Structured Leather Tote",
        price: 450,
        oldPrice: 590,
        category: "Accessories",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
        ],
        description: "A structured leather tote that moves between office and weekend effortlessly. Gold-tone hardware, suede lining.",
        sizes: [
            "One Size"
        ],
        colors: [
            "#3d2b1f",
            "#000000"
        ],
        trending: false,
        date: "2024-04-03"
    },
    {
        id: 15,
        name: "Kids Cashmere Sweater",
        price: 180,
        oldPrice: 240,
        category: "Kids",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Ultra-soft 100% cashmere sweater for the ultimate warmth and comfort of your little ones.",
        sizes: [
            "2Y",
            "4Y",
            "6Y"
        ],
        colors: [
            "#DCDCDC",
            "#ADD8E6"
        ],
        trending: true,
        date: "2024-04-05"
    },
    {
        id: 16,
        name: "Velvet Evening Pumps",
        price: 340,
        oldPrice: 420,
        category: "Women",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Luxurious velvet pumps with a pointed toe and slender heel. The perfect companion for your evening look.",
        sizes: [
            "36",
            "37",
            "38",
            "39",
            "40"
        ],
        colors: [
            "#000000",
            "#4a0080"
        ],
        trending: false,
        date: "2024-04-07"
    }
];
const categories = [
    {
        id: 1,
        name: "Men",
        count: 120,
        image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop",
        description: "Refined elegance for the modern man."
    },
    {
        id: 2,
        name: "Women",
        count: 250,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
        description: "Chic and timeless pieces for every occasion."
    },
    {
        id: 3,
        name: "Kids",
        count: 85,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop",
        description: "Comfortable and stylish wear for the little ones."
    },
    {
        id: 4,
        name: "Accessories",
        count: 140,
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
        description: "The perfect finishing touches to your ensemble."
    }
];
const reviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Fashion Designer",
        comment: "The quality of the silk dress exceeded my expectations. Truly a premium piece that I wear to every event.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Business Consultant",
        comment: "Excellent fit and fast delivery. The suit is absolutely perfect for my professional meetings. I get compliments every time.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Style Influencer",
        comment: "Lumière is my go-to for accessories. The watch is a stunning conversation starter at every occasion.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
];
const heroSlides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
        tag: "New Collection 2024",
        title: "Define Your",
        titleSpan: "Style",
        titleEnd: "with Elegance",
        desc: "Discover our latest arrivals of premium apparel and accessories designed to make you stand out from the crowd."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
        tag: "Exclusive Access",
        title: "Luxury That",
        titleSpan: "Speaks",
        titleEnd: "for Itself",
        desc: "Curated collections from the world's finest ateliers, delivered right to your door with care."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        tag: "Members Only",
        title: "Timeless",
        titleSpan: "Pieces",
        titleEnd: "for Every Season",
        desc: "Join 50,000+ members enjoying exclusive daily deals and premium curation from master artisans."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ThemeToggle$2f$ThemeToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/common/ThemeToggle/ThemeToggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/data/mockData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
;
;
function Navbar({ transparent = false }) {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!transparent);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { cartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { wishlistCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            // If it's NOT a transparent page, it should ALWAYS be scrolled (solid)
            if (!transparent) {
                requestAnimationFrame({
                    "Navbar.useEffect": ()=>{
                        setIsScrolled(true);
                    }
                }["Navbar.useEffect"]);
                return;
            }
            // If it IS a transparent page, handle scroll logic
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 60);
                }
            }["Navbar.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        transparent
    ]);
    // Close search on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClick = {
                "Navbar.useEffect.handleClick": (e)=>{
                    if (searchRef.current && !searchRef.current.contains(e.target)) {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                        setSearchResults([]);
                    }
                }
            }["Navbar.useEffect.handleClick"];
            if (isSearchOpen) document.addEventListener('mousedown', handleClick);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener('mousedown', handleClick)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        isSearchOpen
    ]);
    // Search logic (derived)
    const searchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Navbar.useMemo[searchResults]": ()=>{
            if (!searchQuery.trim()) return [];
            const q = searchQuery.toLowerCase();
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                "Navbar.useMemo[searchResults]": (p)=>p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
            }["Navbar.useMemo[searchResults]"]).slice(0, 5);
        }
    }["Navbar.useMemo[searchResults]"], [
        searchQuery
    ]);
    const handleSearchSubmit = (e)=>{
        e.preventDefault();
        if (!searchQuery.trim()) return;
        setIsSearchOpen(false);
        setSearchQuery('');
        router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbar} ${isScrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrolled : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].transparent}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navContainer}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: "LUMIÈRE"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                lineNumber: 80,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLinks} ${isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shop",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Shop"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 86,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/collections",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Collections"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 89,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    suppressHydrationWarning: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                    "aria-label": "Search",
                                    onClick: ()=>setIsSearchOpen(true),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Search, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 100,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                    "aria-label": "Account",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(User, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/wishlist",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeWrap}`,
                                    "aria-label": "Wishlist",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Heart, {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, this),
                                        wishlistCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                                            children: wishlistCount
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                            lineNumber: 107,
                                            columnNumber: 51
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cart",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeWrap}`,
                                    "aria-label": "Cart",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShoppingCart, {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, this),
                                        cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                                            children: cartCount
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                            lineNumber: 111,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeWrap,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$common$2f$ThemeToggle$2f$ThemeToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    suppressHydrationWarning: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger,
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    "aria-label": "Toggle Menu",
                                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 126,
                                        columnNumber: 43
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Menu, {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 126,
                                        columnNumber: 61
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                    lineNumber: 76,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            isSearchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchOverlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBox,
                    ref: searchRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSearchSubmit,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchForm,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Search, {
                                    size: 20,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 137,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: true,
                                    type: "text",
                                    placeholder: "Search products, categories...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 138,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchClose,
                                    onClick: ()=>{
                                        setIsSearchOpen(false);
                                        setSearchQuery('');
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 151,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 146,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                            lineNumber: 136,
                            columnNumber: 25
                        }, this),
                        searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchResults,
                            children: searchResults.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/product/${p.id}`,
                                        onClick: ()=>{
                                            setIsSearchOpen(false);
                                            setSearchQuery('');
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultName,
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                                lineNumber: 163,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultCategory,
                                                children: [
                                                    p.category,
                                                    " · $",
                                                    p.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                                lineNumber: 164,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                        lineNumber: 158,
                                        columnNumber: 41
                                    }, this)
                                }, p.id, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                                    lineNumber: 157,
                                    columnNumber: 37
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                            lineNumber: 155,
                            columnNumber: 29
                        }, this),
                        searchQuery && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noResults,
                            children: [
                                'No products found for "',
                                searchQuery,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                            lineNumber: 171,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                    lineNumber: 135,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js",
                lineNumber: 134,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "qFk/yzxNDqbdd36YXbxQKlGgg/I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$context$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/layout/Footer/Footer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "brandInfo": "Footer-module__4GD4DW__brandInfo",
  "contactList": "Footer-module__4GD4DW__contactList",
  "description": "Footer-module__4GD4DW__description",
  "footer": "Footer-module__4GD4DW__footer",
  "footerBottom": "Footer-module__4GD4DW__footerBottom",
  "footerGrid": "Footer-module__4GD4DW__footerGrid",
  "footerLinks": "Footer-module__4GD4DW__footerLinks",
  "linksColumn": "Footer-module__4GD4DW__linksColumn",
  "logo": "Footer-module__4GD4DW__logo",
  "socialIcon": "Footer-module__4GD4DW__socialIcon",
  "socials": "Footer-module__4GD4DW__socials",
});
}),
"[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/layout/Footer/Footer.module.css [app-client] (css module)");
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerGrid}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                                children: "LUMIÈRE"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                lineNumber: 12,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                children: "Elevate your lifestyle with our curated collection of premium essentials. Quality meets elegance in every piece we offer."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://facebook.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Facebook",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Facebook, {
                                            size: 18,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIcon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 19,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 18,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://instagram.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Instagram",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Instagram, {
                                            size: 18,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIcon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 22,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 21,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://twitter.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Twitter",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Twitter, {
                                            size: 18,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIcon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 25,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://youtube.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "YouTube",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Youtube, {
                                            size: 18,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIcon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 27,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                lineNumber: 17,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linksColumn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Collections"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/category/men",
                                            children: "Men"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 37,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/category/women",
                                            children: "Women"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/category/kids",
                                            children: "Kids"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 39,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 39,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/category/accessories",
                                            children: "Accessories"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linksColumn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Quick Links"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 48,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 48,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/cart",
                                            children: "Shopping Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 49,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/wishlist",
                                            children: "Wishlist"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 50,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 50,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            children: "My Account"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                            lineNumber: 51,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linksColumn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPin, {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                                lineNumber: 60,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "123 Elegance St, Beverly Hills, CA"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                                lineNumber: 61,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Phone, {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                                lineNumber: 64,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "+1 (555) 123-4567"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                                lineNumber: 65,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mail, {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                                lineNumber: 68,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "care@lumiere.com"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                                lineNumber: 69,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerBottom,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " LUMIÈRE. All Rights Reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerLinks,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/collections",
                                    children: "Collections"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                    lineNumber: 79,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                    lineNumber: 76,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
                lineNumber: 75,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/oAuth/src/components/layout/AppWrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/layout/Navbar/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/oAuth/src/components/layout/Footer/Footer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AppWrapper({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Pages where the navbar starts transparent (like Home)
    const isTransparentPage = pathname === '/';
    // Pages without Navbar/Footer (Auth pages)
    const isAuthPage = pathname?.startsWith('/login') || pathname?.startsWith('/signup') || pathname?.startsWith('/forgot-password');
    if (isAuthPage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                transparent: isTransparentPage
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/layout/AppWrapper.js",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    minHeight: '80vh',
                    width: '100%',
                    // Add padding top for fixed navbar on non-transparent pages
                    paddingTop: isTransparentPage ? '0' : '80px'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/layout/AppWrapper.js",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$oAuth$2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/oAuth/src/components/layout/AppWrapper.js",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/oAuth/src/components/layout/AppWrapper.js",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_s(AppWrapper, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AppWrapper;
var _c;
__turbopack_context__.k.register(_c, "AppWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D_Desktop_oAuth_src_d904c7c8._.js.map