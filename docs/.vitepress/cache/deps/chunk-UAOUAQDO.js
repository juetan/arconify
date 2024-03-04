import {
  Comment,
  Fragment,
  computed,
  createTextVNode,
  customRef,
  getCurrentScope,
  isRef,
  isVNode,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  reactive,
  readonly,
  ref,
  renderSlot,
  shallowRef,
  unref,
  watch,
  watchEffect
} from "./chunk-IMLQGPPH.js";

// docs/node_modules/@vexip-ui/hooks/dist/index.mjs
var D = typeof window < "u";
var ft;
D && ((ft = window == null ? void 0 : window.navigator) != null && ft.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xe(e) {
  return e != null;
}
function P() {
}
var mn = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(mn)));
function ut(e) {
  return e & -e;
}
function pn(e, t = 0) {
  const n = new Array(e + 1).fill(0);
  function r(c, a) {
    if (!(!a || c >= e))
      for (c += 1; c <= e; )
        n[c] += a, c += ut(c);
  }
  function o(c = e) {
    if (c <= 0)
      return 0;
    c > e && (c = e);
    let a = c * t;
    for (; c > 0; )
      a += n[c], c -= ut(c);
    return a;
  }
  function i(c) {
    return o(c + 1) - o(c);
  }
  function s(c) {
    let a = 0, l = e;
    for (; l > a; ) {
      const f = Math.floor((a + l) / 2), p = o(f);
      if (p > c) {
        l = f;
        continue;
      } else if (p < c) {
        if (a === f)
          return o(a + 1) <= c ? a + 1 : a;
        a = f;
      } else
        return f;
    }
    return a;
  }
  return { tree: n, add: r, sum: o, get: i, boundIndex: s };
}
function vn(e) {
  let t = parseFloat(e);
  return Number.isNaN(t) && (t = Number(e)), Number.isNaN(t) ? 0 : t;
}
var gn = D && ("ontouchstart" in window || yn() > 0);
var bn = gn ? "pointerdown" : "click";
function yn() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function wn(e, t, n = window.Event) {
  const { type: r, bubbles: o = false, cancelable: i = false, ...s } = t;
  if (!Xe(r) || r === "")
    return false;
  let c;
  return Xe(n) ? c = new n(r, { bubbles: o, cancelable: i }) : (c = document.createEvent("HTMLEvents"), c.initEvent(r, o, i)), Object.assign(c, s), e.dispatchEvent(c);
}
var xn = D ? requestAnimationFrame : (e) => {
  setTimeout(e, 16);
};
function Pt(e, t = 16) {
  if (typeof e != "function")
    return P;
  const n = (...i) => {
    e(...i);
  };
  if (t <= 0)
    return En(n);
  let r = 0, o;
  return function(...i) {
    const s = Date.now(), c = s - r;
    clearTimeout(o), c >= t ? (r = s, n(...i)) : o = setTimeout(
      () => {
        r = Date.now(), n(...i);
      },
      Math.max(0, t - c)
    );
  };
}
function En(e) {
  if (typeof e != "function")
    return e;
  let t = false, n, r;
  return function(...o) {
    return n = o, t || (t = true, r = Promise.resolve().then(() => (t = false, r = void 0, e(...n)))), r;
  };
}
var he = /* @__PURE__ */ new Set();
var Dt = /* @__PURE__ */ new WeakMap();
function Rn() {
  he.forEach((e) => {
    e(...Dt.get(e));
  }), he.clear();
}
function Tn(e, ...t) {
  if (typeof e != "function")
    return e;
  Dt.set(e, t), !he.has(e) && (he.add(e), he.size === 1 && xn(Rn));
}
function Ft(e) {
  return Array.isArray(e) ? e : [e];
}
function q(e, t, n, r) {
  if (!e)
    return P;
  let o = P;
  const i = watch(
    () => unref(e),
    (c) => {
      o(), c && (c.addEventListener(t, n, r), o = () => {
        c.removeEventListener(t, n, r), o = P;
      });
    },
    { immediate: true, flush: "post" }
  ), s = () => {
    i(), o();
  };
  return getCurrentScope() && onScopeDispose(s), s;
}
var _t = "clickoutside";
var je = /* @__PURE__ */ new Set();
D && document.addEventListener(
  bn,
  (e) => {
    const t = e.target, n = e.composedPath && e.composedPath();
    je.forEach((r) => {
      r !== t && (n ? !n.includes(r) : !r.contains(t)) && (!r.__transferElement || r.__transferElement !== t && !r.__transferElement.contains(t)) && wn(r, { type: _t });
    });
  },
  true
);
function jr(e, t = ref(null)) {
  let n = P;
  const r = watch(
    () => unref(t),
    (i) => {
      n(), i && (je.add(i), n = () => {
        je.delete(i), n = P;
      });
    },
    { immediate: true, flush: "post" }
  ), o = () => {
    r(), n();
  };
  return getCurrentScope() && onScopeDispose(o), q(t, _t, e), t;
}
function Yr(e = P, t = ref(null)) {
  let n;
  return onMounted(() => {
    nextTick(() => {
      const r = Nt(t.value);
      r ? (n = new MutationObserver(() => {
        r.style.display !== "none" && (typeof e == "function" && e(), n == null || n.disconnect(), n = null);
      }), n.observe(r, {
        attributes: true,
        childList: true,
        characterData: true,
        attributeFilter: ["style"]
      })) : typeof e == "function" && e();
    });
  }), onBeforeUnmount(() => {
    n == null || n.disconnect(), n = null;
  }), t;
}
function Nt(e) {
  if (e) {
    let t = e.parentElement;
    for (; t && t !== document.body; ) {
      if (t.style.display === "none")
        return t;
      t = t.parentElement;
    }
  }
  return null;
}
function dt(e) {
  return (e == null ? void 0 : e.style.display) !== "none" ? !!Nt(e) : true;
}
function Kr(e, t, n) {
  for (const r of t)
    if (e[r])
      return (o) => renderSlot(e, r, o, () => {
        const i = n == null ? void 0 : n(o);
        return i ? Ft(i) : [];
      });
  return n || null;
}
function Ur(e) {
  const t = [], n = Array.isArray(e) ? [...e] : [];
  for (; n.length; ) {
    const r = n.shift();
    r !== null && (Array.isArray(r) && n.unshift(...r), !(typeof r != "string" && typeof r != "number" && (!isVNode(r) || r.type === Comment)) && (typeof r == "string" || typeof r == "number" ? t.push(createTextVNode(String(r))) : r.type === Fragment && Array.isArray(r.children) ? n.unshift(r.children) : t.push(r)));
  }
  return t;
}
function we(e) {
  const t = unref(e);
  return typeof t == "string" ? D ? document.querySelector(t) : null : (t == null ? void 0 : t.$el) ?? t;
}
function Gr(e) {
  return new Proxy({}, {
    get(t, n) {
      var r, o, i;
      if (e.component)
        return ((r = e.component.proxy) == null ? void 0 : r[n]) ?? ((o = e.component.exposeProxy) == null ? void 0 : o[n]) ?? ((i = e.component.exposed) == null ? void 0 : i[n]);
    }
  });
}
function Jr(...e) {
  const t = ref(true), n = e[1] || P;
  function r() {
    t.value = false;
  }
  function o() {
    t.value = true;
  }
  const i = watch(
    e[0],
    (...s) => new Promise((c, a) => {
      t.value && Promise.resolve(n(...s)).then(c).catch(a);
    }),
    e[2]
  );
  return { active: readonly(t), pause: r, resume: o, stop: i };
}
var Sn = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
var ie;
if (D) {
  for (const e of Sn)
    if (e[1] in document) {
      ie = e;
      break;
    }
}
var Ye = !!ie;
var On = {
  supported: Ye,
  full: computed(() => false),
  enter: P,
  exit: P,
  toggle: P
};
var Wt = /* @__PURE__ */ new Set();
var Ke = /* @__PURE__ */ new WeakMap();
if (D && ie) {
  const e = ie[2], t = ie[4];
  document.addEventListener(
    t,
    () => {
      debugger;
      if (Wt.forEach((n) => {
        n.value = false;
      }), document[e]) {
        const n = Ke.get(document[e]);
        n && (n.value = true);
      }
    },
    false
  );
}
function Zr(e = ref(null)) {
  const t = computed({
    get: () => we(e),
    set: (l) => {
      isRef(e) && (e.value = l);
    }
  });
  if (!D || !Ye)
    return { ...On, target: t };
  const [n, r, o] = ie, i = ref(false);
  watch(
    () => we(e),
    (l, f) => {
      f && Ke.delete(f), l && Ke.set(l, i);
    },
    { immediate: true, flush: "post" }
  ), Wt.add(i), getCurrentScope() && onScopeDispose(c);
  async function s(l = false) {
    await c();
    const f = we(e);
    if (f && (l || !document[o])) {
      debugger;
      return await f[n](), i.value = true, document[o] === f;
    }
    return false;
  }
  async function c(l = false) {
    const f = we(e);
    if (l || document[o] && document[o] === f) {
      debugger;
      return await document[r](), i.value = false, document[o] !== f;
    }
    return false;
  }
  async function a(l = false) {
    return i.value ? await c(l) : await s(l);
  }
  return {
    supported: Ye,
    target: t,
    full: computed(() => i.value),
    enter: s,
    exit: c,
    toggle: a
  };
}
function Qr(e = ref(null)) {
  const t = ref(false);
  q(e, "mouseenter", n), q(e, "mouseleave", r);
  function n() {
    t.value = true;
  }
  function r() {
    t.value = false;
  }
  return { wrapper: e, isHover: t };
}
var xe = /* @__PURE__ */ new WeakMap();
var kn = /\s+/g;
var zn = /(px|%)$/;
function eo(e) {
  const t = e.target || ref(null);
  if (!D)
    return { target: t, disconnect: P };
  const { handler: n } = e;
  let r = e.root ?? document;
  const o = Ft(e.threshold || 0).join() || "0", i = m(e.rootMargin);
  xe.has(r) || xe.set(r, /* @__PURE__ */ new Map());
  const s = xe.get(r);
  s.has(o) || s.set(o, /* @__PURE__ */ new Map());
  const c = s.get(o);
  c.has(i) || c.set(i, {
    ob: new IntersectionObserver(v, { ...e, rootMargin: i }),
    count: 0,
    handlers: /* @__PURE__ */ new WeakMap()
  });
  let a = c.get(i), { ob: l, handlers: f } = a, p = P;
  const b = watch(
    () => unref(t),
    (d) => {
      p(), !(!d || !l) && (f.set(d, n), l.observe(d), a && a.count++, p = () => {
        l.unobserve(d), f.delete(d), a && a.count--, p = P;
      });
    },
    { immediate: true, flush: "post" }
  );
  getCurrentScope() && onScopeDispose(u);
  function m(d) {
    if (!d || !d.trim())
      return "_";
    const h = d.trim().split(kn, 4);
    h.length = 4;
    for (let g = 0; g < 4; ++g) {
      const w = h[g];
      h[g] = zn.test(w) ? w : `${vn(w)}px`;
    }
    return h.join(" ");
  }
  function v(d) {
    for (let h = 0, g = d.length; h < g; ++h) {
      const w = d[h], O = f.get(w.target);
      typeof O == "function" && O(w);
    }
  }
  function u() {
    b(), p(), a && (a.count <= 0 && (c.delete(i), c.size || (s.delete(o), s.size || xe.delete(r))), a = void 0, l = void 0, f = void 0, r = void 0);
  }
  return { target: t, disconnect: u };
}
function to() {
  const e = /* @__PURE__ */ new Set();
  function t(r) {
    return customRef((o, i) => {
      let s = r;
      const c = () => {
        r !== s && (s = r, i());
      };
      return {
        // eslint-disable-next-line no-sequences
        get: () => (o(), r),
        set: (a) => {
          a !== r && (r = a, e.add(c));
        }
      };
    });
  }
  function n() {
    for (const r of e)
      r();
    e.clear();
  }
  return { updateSet: e, manualRef: t, triggerUpdate: n };
}
var Cn = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
var An = /[+_-]/;
var Mn = /[+_-]/g;
var Ln = ["activeKeys", "resetAll"];
function no(e = {}) {
  const {
    autoReset: t = true,
    capture: n = false,
    passive: r = true,
    onKeyDown: o = P,
    onKeyUp: i = P
  } = e, s = e.target || ref(null), c = { ...Cn, ...e.aliasMap || {} }, a = reactive(/* @__PURE__ */ new Set()), l = /* @__PURE__ */ new Set(), f = reactive({ activeKeys: a, resetAll: m });
  function p(u, d) {
    u in f && (f[u] = d);
  }
  function b(u, d) {
    var O, S;
    const h = (O = u.key) == null ? void 0 : O.toLocaleLowerCase(), w = [(S = u.code) == null ? void 0 : S.toLocaleLowerCase(), h].filter(Boolean);
    for (const R of w)
      a[d ? "add" : "delete"](R), p(R, d);
    if (!d && h === "meta") {
      for (const R of l)
        a.delete(R), p(R, false);
      l.clear();
    } else if (d && typeof u.getModifierState == "function" && u.getModifierState("Meta"))
      for (const R of [...a, ...w])
        l.add(R);
  }
  function m() {
    Object.keys(f).forEach((u) => {
      f[u] = false;
    }), f.activeKeys = a, f.resetAll = m;
  }
  const v = new Proxy(f, {
    get(u, d, h) {
      if (typeof d != "string" || Ln.includes(d))
        return Reflect.get(u, d, h);
      if (d = d.toLocaleLowerCase(), d in c && (d = c[d]), !(d in f))
        if (An.test(d)) {
          const g = d.split(Mn).map((w) => w.trim());
          f[d] = computed(() => g.every((w) => unref(v[w])));
        } else
          f[d] = ref(a.has(d));
      return unref(Reflect.get(u, d, h));
    }
  });
  return q(
    s,
    "keydown",
    (u) => {
      b(u, true), o(u, v);
    },
    { capture: n, passive: r }
  ), q(
    s,
    "keyup",
    (u) => {
      b(u, false), i(u, v);
    },
    { capture: n, passive: r }
  ), t && q(s, "blur", m, { capture: n, passive: r }), { target: s, modifier: v };
}
function ro(e) {
  const t = ref(false), n = () => t.value = true;
  return onMounted(() => {
    e === "tick" ? nextTick(n) : e === "frame" ? requestAnimationFrame(n) : n();
  }), onBeforeUnmount(() => {
    t.value = false;
  }), { isMounted: readonly(t) };
}
function He(e) {
  e.cancelable && (e.stopPropagation(), e.preventDefault());
}
function oo(e) {
  const t = e.target || ref(null), n = isRef(e.x) ? e.x : ref(0), r = isRef(e.y) ? e.y : ref(0), o = isRef(e.lazy) ? e.lazy : ref(false), { capture: i = true, stopMouse: s = true, stopTouch: c = true } = e, a = ref(false), l = {
    xStart: 0,
    yStart: 0,
    xEnd: 0,
    yEnd: 0,
    clientX: 0,
    clientY: 0,
    deltaX: 0,
    deltaY: 0,
    lazy: false
  };
  let f = 0, p = 0;
  const b = Pt((h) => {
    var g;
    p < f || (d(h), l.lazy || (n.value = l.xEnd, r.value = l.yEnd), (g = e.onMove) == null || g.call(e, l, h));
  });
  function m(h) {
    var g;
    Object.assign(l, {
      xStart: n.value,
      yStart: r.value,
      xEnd: n.value,
      yEnd: r.value,
      clientX: h.clientX,
      clientY: h.clientY,
      lazy: o.value
    }), ((g = e.onStart) == null ? void 0 : g.call(e, l, h)) !== false && (document.addEventListener("pointermove", v, { capture: i }), document.addEventListener("pointerup", u, { capture: i }), p = f, a.value = true);
  }
  function v(h) {
    He(h), b(h);
  }
  function u(h) {
    var g;
    document.removeEventListener("pointermove", v, { capture: i }), document.removeEventListener("pointerup", u, { capture: i }), d(h), l.lazy && (n.value = l.xEnd, r.value = l.yEnd), a.value = false, ++f, (g = e.onEnd) == null || g.call(e, l, h);
  }
  function d(h) {
    const { clientX: g, clientY: w } = h, { xStart: O, yStart: S, clientX: R, clientY: M } = l, A = g - R, B = w - M;
    l.deltaX = A, l.deltaY = B, l.xEnd = O + A, l.yEnd = S + B;
  }
  return q(t, "pointerdown", m, { capture: i }), s && q(t, "mousedown", He, { capture: i }), c && q(t, "touchstart", He, { capture: i }), {
    target: t,
    moving: computed(() => a.value),
    x: n,
    y: r,
    lazy: o
  };
}
var pe = /* @__PURE__ */ new Set();
var K = /* @__PURE__ */ new Map();
K.set("x", 0);
K.set("y", 0);
function Bn(e) {
  const { pageX: t, pageY: n } = e;
  K.set("x", t), K.set("y", n), pe.forEach((r) => {
    r.x.value = t, r.y.value = n;
  });
}
var It = Pt(Bn);
function Pn(e) {
  !pe.size && window && (K.set("x", 0), K.set("y", 0), window.addEventListener("pointermove", It, { passive: true })), pe.add(e);
}
function ht(e) {
  pe.delete(e), !pe.size && window && window.removeEventListener("pointermove", It);
}
function io(e = {}) {
  const t = ref(e.x ?? K.get("x")), n = ref(e.y ?? K.get("y")), r = { x: t, y: n };
  return Pn(r), e.manualStop || onBeforeUnmount(() => {
    ht(r);
  }), { ...r, unregister: () => ht(r) };
}
var Dn = ["top", "right", "bottom", "left"];
var ae = Math.min;
var ee = Math.max;
var Ce = Math.round;
var Ee = Math.floor;
var U = (e) => ({
  x: e,
  y: e
});
var Fn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var _n = {
  start: "end",
  end: "start"
};
function Ue(e, t, n) {
  return ee(e, ae(t, n));
}
function fe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function re(e) {
  return e.split("-")[0];
}
function be(e) {
  return e.split("-")[1];
}
function Ht(e) {
  return e === "x" ? "y" : "x";
}
function tt(e) {
  return e === "y" ? "height" : "width";
}
function Fe(e) {
  return ["top", "bottom"].includes(re(e)) ? "y" : "x";
}
function nt(e) {
  return Ht(Fe(e));
}
function Nn(e, t, n) {
  n === void 0 && (n = false);
  const r = be(e), o = nt(e), i = tt(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ae(s)), [s, Ae(s)];
}
function Wn(e) {
  const t = Ae(e);
  return [Ge(e), t, Ge(t)];
}
function Ge(e) {
  return e.replace(/start|end/g, (t) => _n[t]);
}
function In(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Hn(e, t, n, r) {
  const o = be(e);
  let i = In(re(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ge)))), i;
}
function Ae(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Fn[t]);
}
function $n(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $t(e) {
  return typeof e != "number" ? $n(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Me(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function mt(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Fe(t), s = nt(t), c = tt(s), a = re(t), l = i === "y", f = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, b = r[c] / 2 - o[c] / 2;
  let m;
  switch (a) {
    case "top":
      m = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (be(t)) {
    case "start":
      m[s] -= b * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += b * (n && l ? -1 : 1);
      break;
  }
  return m;
}
var qn = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: p
  } = mt(l, r, a), b = r, m = {}, v = 0;
  for (let u = 0; u < c.length; u++) {
    const {
      name: d,
      fn: h
    } = c[u], {
      x: g,
      y: w,
      data: O,
      reset: S
    } = await h({
      x: f,
      y: p,
      initialPlacement: r,
      placement: b,
      strategy: o,
      middlewareData: m,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (f = g ?? f, p = w ?? p, m = {
      ...m,
      [d]: {
        ...m[d],
        ...O
      }
    }, S && v <= 50) {
      v++, typeof S == "object" && (S.placement && (b = S.placement), S.rects && (l = S.rects === true ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: f,
        y: p
      } = mt(l, b, a)), u = -1;
      continue;
    }
  }
  return {
    x: f,
    y: p,
    placement: b,
    strategy: o,
    middlewareData: m
  };
};
async function Le(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: c,
    strategy: a
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: b = false,
    padding: m = 0
  } = fe(t, e), v = $t(m), d = c[b ? p === "floating" ? "reference" : "floating" : p], h = Me(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(d))) == null || n ? d : d.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: a
  })), g = p === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), O = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Me(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: a
  }) : g);
  return {
    top: (h.top - S.top + v.top) / O.y,
    bottom: (S.bottom - h.bottom + v.bottom) / O.y,
    left: (h.left - S.left + v.left) / O.x,
    right: (S.right - h.right + v.right) / O.x
  };
}
var Vn = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: a
    } = t, {
      element: l,
      padding: f = 0
    } = fe(e, t) || {};
    if (l == null)
      return {};
    const p = $t(f), b = {
      x: n,
      y: r
    }, m = nt(o), v = tt(m), u = await s.getDimensions(l), d = m === "y", h = d ? "top" : "left", g = d ? "bottom" : "right", w = d ? "clientHeight" : "clientWidth", O = i.reference[v] + i.reference[m] - b[m] - i.floating[v], S = b[m] - i.reference[m], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let M = R ? R[w] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(R))) && (M = c.floating[w] || i.floating[v]);
    const A = O / 2 - S / 2, B = M / 2 - u[v] / 2 - 1, F = ae(p[h], B), N = ae(p[g], B), L = F, y = M - u[v] - N, x = M / 2 - u[v] / 2 + A, E = Ue(L, x, y), C = !a.arrow && be(o) != null && x != E && i.reference[v] / 2 - (x < L ? F : N) - u[v] / 2 < 0, k = C ? x < L ? x - L : x - y : 0;
    return {
      [m]: b[m] + k,
      data: {
        [m]: E,
        centerOffset: x - E - k,
        ...C && {
          alignmentOffset: k
        }
      },
      reset: C
    };
  }
});
var Xn = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: a,
        elements: l
      } = t, {
        mainAxis: f = true,
        crossAxis: p = true,
        fallbackPlacements: b,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: u = true,
        ...d
      } = fe(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const h = re(o), g = re(c) === c, w = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), O = b || (g || !u ? [Ae(c)] : Wn(c));
      !b && v !== "none" && O.push(...Hn(c, u, v, w));
      const S = [c, ...O], R = await Le(t, d), M = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && M.push(R[h]), p) {
        const L = Nn(o, s, w);
        M.push(R[L[0]], R[L[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: M
      }], !M.every((L) => L <= 0)) {
        var B, F;
        const L = (((B = i.flip) == null ? void 0 : B.index) || 0) + 1, y = S[L];
        if (y)
          return {
            data: {
              index: L,
              overflows: A
            },
            reset: {
              placement: y
            }
          };
        let x = (F = A.filter((E) => E.overflows[0] <= 0).sort((E, C) => E.overflows[1] - C.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!x)
          switch (m) {
            case "bestFit": {
              var N;
              const E = (N = A.map((C) => [C.placement, C.overflows.filter((k) => k > 0).reduce((k, j) => k + j, 0)]).sort((C, k) => C[1] - k[1])[0]) == null ? void 0 : N[0];
              E && (x = E);
              break;
            }
            case "initialPlacement":
              x = c;
              break;
          }
        if (o !== x)
          return {
            reset: {
              placement: x
            }
          };
      }
      return {};
    }
  };
};
function pt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function vt(e) {
  return Dn.some((t) => e[t] >= 0);
}
var jn = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = fe(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Le(t, {
            ...o,
            elementContext: "reference"
          }), s = pt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: vt(s)
            }
          };
        }
        case "escaped": {
          const i = await Le(t, {
            ...o,
            altBoundary: true
          }), s = pt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: vt(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Yn(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = re(n), c = be(n), a = Fe(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, f = i && a ? -1 : 1, p = fe(t, e);
  let {
    mainAxis: b,
    crossAxis: m,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return c && typeof v == "number" && (m = c === "end" ? v * -1 : v), a ? {
    x: m * f,
    y: b * l
  } : {
    x: b * l,
    y: m * f
  };
}
var Kn = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: c
      } = t, a = await Yn(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
};
var Un = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = true,
        crossAxis: s = false,
        limiter: c = {
          fn: (d) => {
            let {
              x: h,
              y: g
            } = d;
            return {
              x: h,
              y: g
            };
          }
        },
        ...a
      } = fe(e, t), l = {
        x: n,
        y: r
      }, f = await Le(t, a), p = Fe(re(o)), b = Ht(p);
      let m = l[b], v = l[p];
      if (i) {
        const d = b === "y" ? "top" : "left", h = b === "y" ? "bottom" : "right", g = m + f[d], w = m - f[h];
        m = Ue(g, m, w);
      }
      if (s) {
        const d = p === "y" ? "top" : "left", h = p === "y" ? "bottom" : "right", g = v + f[d], w = v - f[h];
        v = Ue(g, v, w);
      }
      const u = c.fn({
        ...t,
        [b]: m,
        [p]: v
      });
      return {
        ...u,
        data: {
          x: u.x - n,
          y: u.y - r
        }
      };
    }
  };
};
function G(e) {
  return qt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function _(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function X(e) {
  var t;
  return (t = (qt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function qt(e) {
  return e instanceof Node || e instanceof _(e).Node;
}
function V(e) {
  return e instanceof Element || e instanceof _(e).Element;
}
function $(e) {
  return e instanceof HTMLElement || e instanceof _(e).HTMLElement;
}
function gt(e) {
  return typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof _(e).ShadowRoot;
}
function ye(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = I(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Gn(e) {
  return ["table", "td", "th"].includes(G(e));
}
function rt(e) {
  const t = ot(), n = I(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Jn(e) {
  let t = le(e);
  for (; $(t) && !_e(t); ) {
    if (rt(t))
      return t;
    t = le(t);
  }
  return null;
}
function ot() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function _e(e) {
  return ["html", "body", "#document"].includes(G(e));
}
function I(e) {
  return _(e).getComputedStyle(e);
}
function Ne(e) {
  return V(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function le(e) {
  if (G(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    gt(e) && e.host || // Fallback.
    X(e)
  );
  return gt(t) ? t.host : t;
}
function Vt(e) {
  const t = le(e);
  return _e(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $(t) && ye(t) ? t : Vt(t);
}
function ve(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const o = Vt(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = _(o);
  return i ? t.concat(s, s.visualViewport || [], ye(o) ? o : [], s.frameElement && n ? ve(s.frameElement) : []) : t.concat(o, ve(o, [], n));
}
function Xt(e) {
  const t = I(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = $(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = Ce(n) !== i || Ce(r) !== s;
  return c && (n = i, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function it(e) {
  return V(e) ? e : e.contextElement;
}
function se(e) {
  const t = it(e);
  if (!$(t))
    return U(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Xt(t);
  let s = (i ? Ce(n.width) : n.width) / r, c = (i ? Ce(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
var Zn = U(0);
function jt(e) {
  const t = _(e);
  return !ot() || !t.visualViewport ? Zn : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qn(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== _(e) ? false : t;
}
function oe(e, t, n, r) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const o = e.getBoundingClientRect(), i = it(e);
  let s = U(1);
  t && (r ? V(r) && (s = se(r)) : s = se(e));
  const c = Qn(i, n, r) ? jt(i) : U(0);
  let a = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, f = o.width / s.x, p = o.height / s.y;
  if (i) {
    const b = _(i), m = r && V(r) ? _(r) : r;
    let v = b.frameElement;
    for (; v && r && m !== b; ) {
      const u = se(v), d = v.getBoundingClientRect(), h = I(v), g = d.left + (v.clientLeft + parseFloat(h.paddingLeft)) * u.x, w = d.top + (v.clientTop + parseFloat(h.paddingTop)) * u.y;
      a *= u.x, l *= u.y, f *= u.x, p *= u.y, a += g, l += w, v = _(v).frameElement;
    }
  }
  return Me({
    width: f,
    height: p,
    x: a,
    y: l
  });
}
function er(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = $(n), i = X(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = U(1);
  const a = U(0);
  if ((o || !o && r !== "fixed") && ((G(n) !== "body" || ye(i)) && (s = Ne(n)), $(n))) {
    const l = oe(n);
    c = se(n), a.x = l.x + n.clientLeft, a.y = l.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + a.x,
    y: t.y * c.y - s.scrollTop * c.y + a.y
  };
}
function tr(e) {
  return Array.from(e.getClientRects());
}
function Yt(e) {
  return oe(X(e)).left + Ne(e).scrollLeft;
}
function nr(e) {
  const t = X(e), n = Ne(e), r = e.ownerDocument.body, o = ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Yt(e);
  const c = -n.scrollTop;
  return I(r).direction === "rtl" && (s += ee(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: c
  };
}
function rr(e, t) {
  const n = _(e), r = X(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, c = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = ot();
    (!l || l && t === "fixed") && (c = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c,
    y: a
  };
}
function or(e, t) {
  const n = oe(e, true, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = $(e) ? se(e) : U(1), s = e.clientWidth * i.x, c = e.clientHeight * i.y, a = o * i.x, l = r * i.y;
  return {
    width: s,
    height: c,
    x: a,
    y: l
  };
}
function bt(e, t, n) {
  let r;
  if (t === "viewport")
    r = rr(e, n);
  else if (t === "document")
    r = nr(X(e));
  else if (V(t))
    r = or(t, n);
  else {
    const o = jt(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Me(r);
}
function Kt(e, t) {
  const n = le(e);
  return n === t || !V(n) || _e(n) ? false : I(n).position === "fixed" || Kt(n, t);
}
function ir(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ve(e, [], false).filter((c) => V(c) && G(c) !== "body"), o = null;
  const i = I(e).position === "fixed";
  let s = i ? le(e) : e;
  for (; V(s) && !_e(s); ) {
    const c = I(s), a = rt(s);
    !a && c.position === "fixed" && (o = null), (i ? !a && !o : !a && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ye(s) && !a && Kt(e, s)) ? r = r.filter((f) => f !== s) : o = c, s = le(s);
  }
  return t.set(e, r), r;
}
function sr(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ir(t, this._c) : [].concat(n), r], c = s[0], a = s.reduce((l, f) => {
    const p = bt(t, f, o);
    return l.top = ee(p.top, l.top), l.right = ae(p.right, l.right), l.bottom = ae(p.bottom, l.bottom), l.left = ee(p.left, l.left), l;
  }, bt(t, c, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function cr(e) {
  return Xt(e);
}
function ar(e, t, n) {
  const r = $(t), o = X(t), i = n === "fixed", s = oe(e, true, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = U(0);
  if (r || !r && !i)
    if ((G(t) !== "body" || ye(o)) && (c = Ne(t)), r) {
      const l = oe(t, true, i, t);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      o && (a.x = Yt(o));
  return {
    x: s.left + c.scrollLeft - a.x,
    y: s.top + c.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function yt(e, t) {
  return !$(e) || I(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Ut(e, t) {
  const n = _(e);
  if (!$(e))
    return n;
  let r = yt(e, t);
  for (; r && Gn(r) && I(r).position === "static"; )
    r = yt(r, t);
  return r && (G(r) === "html" || G(r) === "body" && I(r).position === "static" && !rt(r)) ? n : r || Jn(e) || n;
}
var lr = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Ut, i = this.getDimensions;
  return {
    reference: ar(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function fr(e) {
  return I(e).direction === "rtl";
}
var Gt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: er,
  getDocumentElement: X,
  getClippingRect: sr,
  getOffsetParent: Ut,
  getElementRects: lr,
  getClientRects: tr,
  getDimensions: cr,
  getScale: se,
  isElement: V,
  isRTL: fr
};
function ur(e, t) {
  let n = null, r;
  const o = X(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, a) {
    c === void 0 && (c = false), a === void 0 && (a = 1), i();
    const {
      left: l,
      top: f,
      width: p,
      height: b
    } = e.getBoundingClientRect();
    if (c || t(), !p || !b)
      return;
    const m = Ee(f), v = Ee(o.clientWidth - (l + p)), u = Ee(o.clientHeight - (f + b)), d = Ee(l), g = {
      rootMargin: -m + "px " + -v + "px " + -u + "px " + -d + "px",
      threshold: ee(0, ae(1, a)) || 1
    };
    let w = true;
    function O(S) {
      const R = S[0].intersectionRatio;
      if (R !== a) {
        if (!w)
          return s();
        R ? s(false, R) : r = setTimeout(() => {
          s(false, 1e-7);
        }, 100);
      }
      w = false;
    }
    try {
      n = new IntersectionObserver(O, {
        ...g,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, g);
    }
    n.observe(e);
  }
  return s(true), i;
}
function dr(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = true,
    ancestorResize: i = true,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: a = false
  } = r, l = it(e), f = o || i ? [...l ? ve(l) : [], ...ve(t)] : [];
  f.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: true
    }), i && h.addEventListener("resize", n);
  });
  const p = l && c ? ur(l, n) : null;
  let b = -1, m = null;
  s && (m = new ResizeObserver((h) => {
    let [g] = h;
    g && g.target === l && m && (m.unobserve(t), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !a && m.observe(l), m.observe(t));
  let v, u = a ? oe(e) : null;
  a && d();
  function d() {
    const h = oe(e);
    u && (h.x !== u.x || h.y !== u.y || h.width !== u.width || h.height !== u.height) && n(), u = h, v = requestAnimationFrame(d);
  }
  return n(), () => {
    f.forEach((h) => {
      o && h.removeEventListener("scroll", n), i && h.removeEventListener("resize", n);
    }), p && p(), m && m.disconnect(), m = null, a && cancelAnimationFrame(v);
  };
}
var hr = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Gt,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return qn(e, t, {
    ...o,
    platform: i
  });
};
var te = [];
var mr = function() {
  return te.some(function(e) {
    return e.activeTargets.length > 0;
  });
};
var pr = function() {
  return te.some(function(e) {
    return e.skippedTargets.length > 0;
  });
};
var wt = "ResizeObserver loop completed with undelivered notifications.";
var vr = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: wt
  }) : (e = document.createEvent("Event"), e.initEvent("error", false, false), e.message = wt), window.dispatchEvent(e);
};
var ge;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ge || (ge = {}));
var ne = function(e) {
  return Object.freeze(e);
};
var gr = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, ne(this);
  }
  return e;
}();
var Jt = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, ne(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, o = t.top, i = t.right, s = t.bottom, c = t.left, a = t.width, l = t.height;
    return { x: n, y: r, top: o, right: i, bottom: s, left: c, width: a, height: l };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}();
var st = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
};
var Zt = function(e) {
  if (st(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var o = e, i = o.offsetWidth, s = o.offsetHeight;
  return !(i || s || e.getClientRects().length);
};
var xt = function(e) {
  var t;
  if (e instanceof Element)
    return true;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
};
var br = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};
var me = typeof window < "u" ? window : {};
var Re = /* @__PURE__ */ new WeakMap();
var Et = /auto|scroll/;
var yr = /^tb|vertical/;
var wr = /msie|trident/i.test(me.navigator && me.navigator.userAgent);
var H = function(e) {
  return parseFloat(e || "0");
};
var ce = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = false), new gr((n ? t : e) || 0, (n ? e : t) || 0);
};
var Rt = ne({
  devicePixelContentBoxSize: ce(),
  borderBoxSize: ce(),
  contentBoxSize: ce(),
  contentRect: new Jt(0, 0, 0, 0)
});
var Qt = function(e, t) {
  if (t === void 0 && (t = false), Re.has(e) && !t)
    return Re.get(e);
  if (Zt(e))
    return Re.set(e, Rt), Rt;
  var n = getComputedStyle(e), r = st(e) && e.ownerSVGElement && e.getBBox(), o = !wr && n.boxSizing === "border-box", i = yr.test(n.writingMode || ""), s = !r && Et.test(n.overflowY || ""), c = !r && Et.test(n.overflowX || ""), a = r ? 0 : H(n.paddingTop), l = r ? 0 : H(n.paddingRight), f = r ? 0 : H(n.paddingBottom), p = r ? 0 : H(n.paddingLeft), b = r ? 0 : H(n.borderTopWidth), m = r ? 0 : H(n.borderRightWidth), v = r ? 0 : H(n.borderBottomWidth), u = r ? 0 : H(n.borderLeftWidth), d = p + l, h = a + f, g = u + m, w = b + v, O = c ? e.offsetHeight - w - e.clientHeight : 0, S = s ? e.offsetWidth - g - e.clientWidth : 0, R = o ? d + g : 0, M = o ? h + w : 0, A = r ? r.width : H(n.width) - R - S, B = r ? r.height : H(n.height) - M - O, F = A + d + S + g, N = B + h + O + w, L = ne({
    devicePixelContentBoxSize: ce(Math.round(A * devicePixelRatio), Math.round(B * devicePixelRatio), i),
    borderBoxSize: ce(F, N, i),
    contentBoxSize: ce(A, B, i),
    contentRect: new Jt(p, a, A, B)
  });
  return Re.set(e, L), L;
};
var en = function(e, t, n) {
  var r = Qt(e, n), o = r.borderBoxSize, i = r.contentBoxSize, s = r.devicePixelContentBoxSize;
  switch (t) {
    case ge.DEVICE_PIXEL_CONTENT_BOX:
      return s;
    case ge.BORDER_BOX:
      return o;
    default:
      return i;
  }
};
var xr = /* @__PURE__ */ function() {
  function e(t) {
    var n = Qt(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = ne([n.borderBoxSize]), this.contentBoxSize = ne([n.contentBoxSize]), this.devicePixelContentBoxSize = ne([n.devicePixelContentBoxSize]);
  }
  return e;
}();
var tn = function(e) {
  if (Zt(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
};
var Er = function() {
  var e = 1 / 0, t = [];
  te.forEach(function(s) {
    if (s.activeTargets.length !== 0) {
      var c = [];
      s.activeTargets.forEach(function(l) {
        var f = new xr(l.target), p = tn(l.target);
        c.push(f), l.lastReportedSize = en(l.target, l.observedBox), p < e && (e = p);
      }), t.push(function() {
        s.callback.call(s.observer, c, s.observer);
      }), s.activeTargets.splice(0, s.activeTargets.length);
    }
  });
  for (var n = 0, r = t; n < r.length; n++) {
    var o = r[n];
    o();
  }
  return e;
};
var Tt = function(e) {
  te.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (tn(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
};
var Rr = function() {
  var e = 0;
  for (Tt(e); mr(); )
    e = Er(), Tt(e);
  return pr() && vr(), e > 0;
};
var $e;
var nn = [];
var Tr = function() {
  return nn.splice(0).forEach(function(e) {
    return e();
  });
};
var Sr = function(e) {
  if (!$e) {
    var t = 0, n = document.createTextNode(""), r = { characterData: true };
    new MutationObserver(function() {
      return Tr();
    }).observe(n, r), $e = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  nn.push(e), $e();
};
var Or = function(e) {
  Sr(function() {
    requestAnimationFrame(e);
  });
};
var ke = 0;
var kr = function() {
  return !!ke;
};
var zr = 250;
var Cr = { attributes: true, characterData: true, childList: true, subtree: true };
var St = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var Ot = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
};
var qe = false;
var Ar = function() {
  function e() {
    var t = this;
    this.stopped = true, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = zr), !qe) {
      qe = true;
      var r = Ot(t);
      Or(function() {
        var o = false;
        try {
          o = Rr();
        } finally {
          if (qe = false, t = r - Ot(), !kr())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, Cr);
    };
    document.body ? n() : me.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), St.forEach(function(n) {
      return me.addEventListener(n, t.listener, true);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), St.forEach(function(n) {
      return me.removeEventListener(n, t.listener, true);
    }), this.stopped = true);
  }, e;
}();
var Je = new Ar();
var kt = function(e) {
  !ke && e > 0 && Je.start(), ke += e, !ke && Je.stop();
};
var Mr = function(e) {
  return !st(e) && !br(e) && getComputedStyle(e).display === "inline";
};
var Lr = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ge.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = en(this.target, this.observedBox, true);
    return Mr(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}();
var Br = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}();
var Te = /* @__PURE__ */ new WeakMap();
var zt = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
};
var Se = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new Br(t, n);
    Te.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = Te.get(t), i = o.observationTargets.length === 0;
    zt(o.observationTargets, n) < 0 && (i && te.push(o), o.observationTargets.push(new Lr(n, r && r.box)), kt(1), Je.schedule());
  }, e.unobserve = function(t, n) {
    var r = Te.get(t), o = zt(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && te.splice(te.indexOf(r), 1), r.observationTargets.splice(o, 1), kt(-1));
  }, e.disconnect = function(t) {
    var n = this, r = Te.get(t);
    r.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}();
var Ct = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Se.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!xt(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Se.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!xt(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Se.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Se.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
var Be = /* @__PURE__ */ new WeakMap();
function Pr(e) {
  for (let t = 0, n = e.length; t < n; ++t) {
    const r = e[t], o = Be.get(r.target);
    typeof o == "function" && o(r);
  }
}
var rn = new (D && window.ResizeObserver || Ct)(
  Pr
);
function We(e, t) {
  Be.set(e, t), rn.observe(e);
}
function on(e) {
  Be.has(e) && (rn.unobserve(e), Be.delete(e));
}
function so() {
  return {
    observeResize: We,
    unobserveResize: on
  };
}
var sn = ref(false);
var Dr = computed(() => sn.value);
var de = "__rtl_observer__";
function Fr() {
  return D && !document.querySelector(`#${de}`) && _r(), { isRtl: Dr };
}
function _r() {
  if (!D)
    return;
  const e = document.createElement("style"), t = `#${de} { width: 1px } html.rtl #${de}, html[dir='rtl'] #${de} { width: 2px }`;
  e.textContent = t, document.head.appendChild(e);
  const n = document.createElement("div");
  n.id = de, n.role = "none", n.style.cssText = "position: fixed; top -10px; left: -10px; height: 1px; visibility: hidden;", We(n, () => {
    D && (sn.value = document.documentElement.classList.contains("rtl") || document.documentElement.getAttribute("dir") === "rtl");
  }), document.body.appendChild(n);
}
var co = Object.freeze([
  "top",
  "top-start",
  "top-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
  "right",
  "right-start",
  "right-end"
]);
function ao(e) {
  const { transfer: t, wrapper: n, isDrop: r = false } = e, o = e.reference ?? shallowRef(null), i = e.popper ?? shallowRef(null), s = e.arrow ?? shallowRef(null), c = ref(unref(e.placement)), a = ref(""), l = e.isRtl ?? Fr().isRtl;
  n && watchEffect(() => {
    const u = unref(n), d = unref(i);
    u && (u.__transferElement = d);
  }), t != null && (watch(
    () => unref(t),
    (u) => {
      m(u), b();
    }
  ), m(unref(t))), onMounted(() => {
    requestAnimationFrame(() => {
      watchEffect(p);
    });
  });
  let f;
  async function p() {
    if (!D)
      return;
    f == null || f();
    const u = unref(o), d = unref(i);
    if (!u || !d)
      return;
    const h = unref(s), g = [Xn()];
    if (r && g.push({
      name: "origin",
      fn({ placement: R, elements: M }) {
        const A = v(R);
        return A && (M.floating.style.transformOrigin = A), {};
      }
    }), e.offset) {
      let R = unref(e.offset);
      Array.isArray(R) && (R = {
        mainAxis: R[1],
        crossAxis: R[0]
      }), g.push(Kn(R));
    }
    if (e.shift) {
      let R = unref(e.shift);
      typeof R == "boolean" && (R = {}), g.push(Un(R));
    }
    h && g.push(Vn({ element: h })), g.push(jn({ strategy: "escaped" }));
    const w = unref(l) || false, O = {
      middleware: g,
      placement: unref(e.placement),
      platform: {
        ...Gt,
        isRTL: async () => w
      }
    }, S = async () => {
      const {
        x: R,
        y: M,
        placement: A,
        strategy: B,
        middlewareData: F
      } = await hr(u, d, O);
      if (unref(o) !== u) {
        unref(i) === d && Object.assign(d.style, {
          position: "",
          top: "",
          left: ""
        });
        return;
      }
      const N = {
        position: B,
        top: `${M}px`,
        left: `${R}px`
      };
      if (h)
        if (F.arrow) {
          const { x: L, y } = F.arrow;
          Object.assign(h.style, {
            top: y != null ? `${y}px` : "",
            left: L != null ? `${L}px` : ""
          });
        } else
          Object.assign(h.style, { top: "", left: "" });
      Object.assign(d.style, N), d.dataset.popperPlacement = A, c.value = A;
    };
    e.autoUpdate && (f = dr(u, d, S)), await S();
  }
  const b = () => new Promise((u) => {
    requestAnimationFrame(() => {
      p().then(u);
    });
  });
  function m(u) {
    a.value = typeof u == "boolean" ? u ? "body" : "" : u;
  }
  function v(u) {
    if (u !== "left" && u !== "right") {
      const [d, h] = u.split("-");
      return d === "bottom" || d !== "top" && h === "start" ? "center top" : "center bottom";
    }
  }
  return {
    wrapper: n,
    reference: o,
    popper: i,
    placement: c,
    transferTo: a,
    updatePopper: b
  };
}
var At = "__theme_style__";
var ze = "__theme_observer__";
var Mt = /* @__PURE__ */ new WeakMap();
function lo(e) {
  const t = ref();
  if (D) {
    e = e || document.body;
    let n = Mt.get(e);
    n || (n = Hr(t), e.appendChild(n), Mt.set(e, n));
  }
  return { theme: t };
}
var Pe = reactive(/* @__PURE__ */ new Map());
var Ze = /* @__PURE__ */ new Map();
watch(Pe, () => {
  if (!D)
    return;
  Ze.clear();
  const e = document.head.querySelector(`#${At}`);
  e && document.head.removeChild(e);
  const t = document.createElement("style");
  let n = `.${ze} { width: 1px }`, r = 1;
  for (const [o, [i, s]] of Pe.entries())
    n += ` html.${i} .${ze}, .${s} .${ze} { width: ${++r}px }`, Ze.set(r, o);
  t.textContent = n, t.id = At, document.head.appendChild(t);
});
function Nr(e) {
  for (const t of e) {
    const {
      name: n,
      rootClass: r = n,
      varsClass: o = `vxp-theme-vars-${r}`
    } = typeof t == "string" ? { name: t } : t;
    Pe.set(n, [r, o]);
  }
}
function fo(e) {
  Pe.clear(), Nr(e);
}
var Wr = 0;
function Ir() {
  return `__theme_observer_${Wr++}__`;
}
function Hr(e) {
  if (!D)
    return;
  const t = document.createElement("div");
  return t.id = Ir(), t.className = ze, t.role = "none", t.style.cssText = "position: fixed; top -10px; left: -10px; height: 1px; visibility: hidden;", We(t, (n) => {
    var o;
    if (!D)
      return;
    const r = ((o = n.borderBoxSize) == null ? void 0 : o[0].inlineSize) ?? n.contentRect.width;
    e.value = Ze.get(r);
  }), t;
}
function $r() {
  const e = {};
  return onScopeDispose(() => {
    Object.keys(e).forEach((t) => {
      clearTimeout(e[t]);
    });
  }), { timer: e };
}
function qr() {
  const e = {};
  return onScopeDispose(() => {
    Object.keys(e).forEach((t) => {
      clearInterval(e[t]);
    });
  }), { timer: e };
}
function Vr() {
  const e = {};
  return onScopeDispose(() => {
    Object.keys(e).forEach((t) => {
      cancelAnimationFrame(e[t]);
    });
  }), { timer: e };
}
function uo() {
  const { timer: e } = $r(), { timer: t } = qr(), { timer: n } = Vr();
  return { timeout: e, interval: t, raf: n };
}
function ho(e, t, n = 100) {
  let r;
  function o() {
    e.value === "hover" && (clearTimeout(r), r = setTimeout(() => {
      t.value = true;
    }, n));
  }
  function i() {
    e.value === "hover" && (clearTimeout(r), r = setTimeout(() => {
      t.value = false;
    }, n));
  }
  function s() {
    e.value === "click" && (t.value = !t.value);
  }
  return {
    handleTriggerEnter: o,
    handleTriggerLeave: i,
    handleTriggerClick: s
  };
}
function mo(e) {
  const {
    items: t,
    itemSize: n,
    itemFixed: r,
    idKey: o,
    defaultKeyAt: i,
    bufferSize: s = ref(5),
    wrapper: c = ref(null),
    autoResize: a = true
  } = e, l = computed(() => {
    const y = unref(t), x = y.length, E = unref(o), C = /* @__PURE__ */ new Map();
    for (let k = 0; k < x; ++k)
      C.set(y[k][E], k);
    return C;
  }), f = ref(0), p = /* @__PURE__ */ new Map(), b = computed(() => {
    const y = unref(t), x = y.length, E = unref(o), C = pn(x, unref(n));
    for (let k = 0; k < x; ++k) {
      const j = y[k][E], Y = p.get(j);
      Y && C.add(k, Y);
    }
    return C;
  }), m = ref(0), v = ref(0), u = computed(() => Math.max(
    b.value.boundIndex(v.value) - Math.max(unref(s), 0),
    0
  )), d = computed(() => {
    if (!f.value || f.value < 0)
      return [];
    const y = unref(t), x = Math.min(
      b.value.boundIndex(v.value + f.value) + 1 + Math.max(unref(s), 0),
      y.length
    );
    return y.slice(u.value, x);
  }), h = computed(() => {
    m.value;
    const y = b.value.sum(), x = unref(r);
    return {
      height: x ? `${y}px` : void 0,
      minHeight: x ? void 0 : `${y}px`,
      boxSizing: "content-box"
    };
  }), g = computed(() => (m.value, {
    transform: `translate3d(0, ${b.value.sum(u.value)}px, 0)`
  }));
  if (a) {
    let y = P;
    const x = watch(
      () => unref(c),
      (E) => {
        y(), E && (We(E, S), y = () => {
          on(E), y = P;
        }, Xe(i) && B(i));
      },
      { immediate: true, flush: "post" }
    );
    onScopeDispose(() => {
      x(), y();
    });
  }
  function w() {
    const y = unref(c);
    y && (v.value = y.scrollTop);
  }
  function O() {
    Tn(w);
  }
  function S(y) {
    dt(y.target) || y.contentRect.height === f.value || (f.value = y.contentRect.height);
  }
  function R(y, x) {
    var ct, at;
    if (unref(r))
      return;
    const E = l.value.get(y), C = b.value, k = C.get(E), j = ((at = (ct = x.borderBoxSize) == null ? void 0 : ct[0]) == null ? void 0 : at.blockSize) ?? x.contentRect.height;
    if (j === k)
      return;
    if (dt(x.target)) {
      k && (C.add(E, -k), m.value++);
      return;
    }
    const Y = j - unref(n), ue = j - k;
    if (Y ? p.set(y, Y) : p.delete(y), !ue)
      return;
    C.add(E, ue), m.value++;
    const Q = unref(c);
    if (Q) {
      const cn = C.sum(E);
      Q.scrollTop > cn && Q.scrollBy(0, ue), v.value = Q.scrollTop;
    }
  }
  function M(y, x) {
    const E = unref(c);
    E && E.scrollTo({
      behavior: x,
      top: y,
      left: 0
    });
  }
  function A(y, x) {
    const E = unref(c);
    E && E.scrollBy({
      behavior: x,
      top: y,
      left: 0
    });
  }
  function B(y, x) {
    const E = l.value.get(y);
    E != null && F(E, x);
  }
  function F(y, x) {
    const E = unref(c);
    E && E.scrollTo({
      behavior: x,
      top: b.value.sum(y),
      left: 0
    });
  }
  function N(y, x) {
    const E = unref(c);
    if (!E)
      return;
    const C = b.value, k = E.scrollTop;
    if (C.sum(y) < k) {
      F(y, x);
      return;
    }
    const Y = E.offsetHeight, ue = k + Y, Q = C.sum(y + 1);
    Q > ue && M(Q - Y, x);
  }
  function L(y, x) {
    const E = l.value.get(y);
    E != null && N(E, x);
  }
  return {
    wrapper: c,
    indexMap: l,
    heightTree: b,
    startIndex: u,
    scrollOffset: v,
    visibleItems: d,
    listStyle: h,
    itemsStyle: g,
    handleScroll: O,
    handleResize: S,
    handleItemResize: R,
    scrollTo: M,
    scrollBy: A,
    scrollToKey: B,
    scrollToIndex: F,
    ensureIndexInView: N,
    ensureKeyInView: L
  };
}

export {
  q,
  _t,
  jr,
  Yr,
  Nt,
  dt,
  Kr,
  Ur,
  we,
  Gr,
  Jr,
  Zr,
  Qr,
  eo,
  to,
  no,
  ro,
  oo,
  io,
  We,
  on,
  so,
  Fr,
  co,
  ao,
  lo,
  Nr,
  fo,
  $r,
  qr,
  Vr,
  uo,
  ho,
  mo
};
//# sourceMappingURL=chunk-UAOUAQDO.js.map
