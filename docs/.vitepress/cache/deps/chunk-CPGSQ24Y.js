// docs/node_modules/@vexip-ui/utils/dist/index.mjs
var y = typeof window < "u";
var At;
var gn = y && ((At = window == null ? void 0 : window.navigator) == null ? void 0 : At.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
var te = Object.prototype.toString;
var ee = Object.prototype.hasOwnProperty;
function B(t, e) {
  return te.call(t) === `[object ${e}]`;
}
function pn(t, e) {
  return ee.call(t, e);
}
function w(t) {
  return t != null;
}
function ne(t) {
  return t == null;
}
function mn(t) {
  return typeof t == "number";
}
function re(t) {
  return Number.isNaN(t);
}
function bn(t) {
  return typeof t == "string";
}
function yn(t) {
  return typeof t == "boolean";
}
function Mn(t) {
  return t === true;
}
function Sn(t) {
  return t === false;
}
function wn(t) {
  return typeof t == "symbol";
}
function En(t) {
  return typeof t == "bigint";
}
function Nn(t) {
  return Array.isArray(t);
}
function Y(t) {
  return B(t, "Object");
}
function An(t) {
  return !!t && typeof t.then == "function" && typeof t.catch == "function";
}
function Ft(t) {
  return typeof t == "function";
}
function Fn(t) {
  return B(t, "Set");
}
function Tn(t) {
  return B(t, "Map");
}
function On(t) {
  return B(t, "Date");
}
function $n(t) {
  return B(t, "RegExp");
}
function Rn(t) {
  return Array.isArray(t) || typeof t == "string" ? t.length === 0 : t instanceof Map || t instanceof Set ? t.size === 0 : Y(t) ? Object.keys(t).length === 0 : typeof t == "number" ? re(t) : ne(t);
}
function _n(t, e = false) {
  return !e && !y ? false : !!(t && "nodeType" in t);
}
function W(t) {
  return w(t) && typeof t[Symbol.iterator] == "function";
}
function ot() {
}
function oe() {
  return true;
}
function kn() {
  return false;
}
function Cn(t, e = 1, n = 1) {
  const r = [];
  for (let o = 0; o < t; ++o)
    r.push(e + o * n);
  return r;
}
function ie(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function xn(t = 16) {
  const e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", n = e.length;
  let r = "";
  for (; t--; )
    r += e.charAt(Math.floor(Math.random() * n));
  return r;
}
async function Dn(t, e = {}) {
  if (t.length) {
    for (const [n, r] of t)
      if (typeof n == "function" ? n() : n)
        return typeof e.beforeMatchAny == "function" && await e.beforeMatchAny(), await r(), typeof e.afterMatchAny == "function" && await e.afterMatchAny(), true;
  }
  return false;
}
async function In(t) {
  if (!y)
    return false;
  try {
    return await navigator.clipboard.writeText(t), true;
  } catch {
    let e = false;
    const n = document.createElement("textarea"), r = document.activeElement;
    n.value = t, n.setAttribute("readonly", ""), n.style.contain = "strict", n.style.position = "absolute", n.style.height = "0", n.style.fontSize = "12pt";
    const o = document.getSelection(), i = o ? o.rangeCount > 0 && o.getRangeAt(0) : null;
    return document.body.appendChild(n), n.select(), n.selectionStart = 0, n.selectionEnd = t.length, e = document.execCommand("copy"), document.body.removeChild(n), i && (o.removeAllRanges(), o.addRange(i)), r && r.focus(), e;
  }
}
var se = "[-\\+]?\\d+%?";
var ce = "[-\\+]?\\d*\\.\\d+%?";
var F = `(?:${ce})|(?:${se})`;
var ae = `[\\s|\\(]+(${F})[,|\\s]+(${F})[,|\\s]+(${F})\\s*\\)?`;
var U = `[\\s|\\(]+(${F})[,|\\s]+(${F})[,|\\s]+(${F})[,|\\s]+(${F})\\s*\\)?`;
var Tt = new RegExp(`rgb${ae}`);
var Ot = new RegExp(`rgba${U}`);
var $t = new RegExp(`hsl${U}`);
var Rt = new RegExp(`hsla${U}`);
var _t = new RegExp(`hsv${U}`);
var kt = new RegExp(`hsva${U}`);
var Ct = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var xt = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var Dt = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
var It = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
var G = Object.freeze({
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
var fe = Object.freeze(new Set(Object.keys(G)));
function Ln(t) {
  return t = String(t).trim().toLowerCase(), t ? t === "transparent" || G[t] ? true : t === "transparent" || fe.has(t) || Tt.test(t) || Ot.test(t) || $t.test(t) || Rt.test(t) || _t.test(t) || kt.test(t) || Ct.test(t) || xt.test(t) || Dt.test(t) || It.test(t) : false;
}
function ue(t) {
  if (t = t.toString().trim().toLowerCase(), t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name", toString: M };
  let e = false;
  G[t] && (t = G[t], e = true);
  let n;
  if (n = Tt.exec(t)) {
    const { r, g: o, b: i } = _(n[1], n[2], n[3]);
    return {
      r: r * 255,
      g: o * 255,
      b: i * 255,
      format: "rgb",
      toString: M
    };
  }
  if (n = Ot.exec(t)) {
    const { r, g: o, b: i } = _(n[1], n[2], n[3]);
    return {
      r: r * 255,
      g: o * 255,
      b: i * 255,
      a: R(n[4]),
      format: "rgba",
      toString: M
    };
  }
  if (n = $t.exec(t)) {
    const { h: r, s: o, l: i } = z(n[0], n[1], n[3]);
    return { h: r * 360, s: o, l: i, format: "hsl", toString: H };
  }
  if (n = Rt.exec(t)) {
    const { h: r, s: o, l: i } = z(n[0], n[1], n[3]);
    return {
      h: r * 360,
      s: o,
      l: i,
      a: R(n[4]),
      format: "hsla",
      toString: H
    };
  }
  if (n = _t.exec(t)) {
    const { h: r, s: o, v: i } = q(n[0], n[1], n[3]);
    return { h: r * 360, s: o, v: i, format: "hsv", toString: j };
  }
  if (n = kt.exec(t)) {
    const { h: r, s: o, v: i } = q(n[0], n[1], n[3]);
    return {
      h: r * 360,
      s: o,
      v: i,
      a: R(n[4]),
      format: "hsva",
      toString: j
    };
  }
  return (n = Ct.exec(t)) ? {
    r: parseInt(`${n[1]}${n[1]}`, 16),
    g: parseInt(`${n[2]}${n[2]}`, 16),
    b: parseInt(`${n[3]}${n[3]}`, 16),
    format: e ? "name" : "hex3",
    toString: M
  } : (n = xt.exec(t)) ? {
    r: parseInt(`${n[1]}${n[1]}`, 16),
    g: parseInt(`${n[2]}${n[2]}`, 16),
    b: parseInt(`${n[3]}${n[3]}`, 16),
    a: pt(`${n[4]}${n[4]}`),
    format: e ? "name" : "hex4",
    toString: M
  } : (n = Dt.exec(t)) ? {
    r: parseInt(n[1], 16),
    g: parseInt(n[2], 16),
    b: parseInt(n[3], 16),
    format: e ? "name" : "hex6",
    toString: M
  } : (n = It.exec(t)) ? {
    r: parseInt(n[1], 16),
    g: parseInt(n[2], 16),
    b: parseInt(n[3], 16),
    a: pt(n[4]),
    format: e ? "name" : "hex8",
    toString: M
  } : null;
}
function Hn(t) {
  const { a: e, ...n } = T(t);
  delete n.format;
  const r = Ht(n.r, n.g, n.b), o = Pt(n.r, n.g, n.b), i = it(n.r, n.g, n.b), s = st(n.r, n.g, n.b, e);
  return {
    rgb: n,
    hsl: r,
    hsv: o,
    hex: i,
    alpha: e,
    rgba: { ...n, a: e, format: "rgba" },
    hsla: { ...r, a: e, format: "hsla" },
    hsva: { ...o, a: e, format: "hsva" },
    hex8: s,
    gray: Ut(n),
    origin: t
  };
}
function T(t) {
  let e = { r: 0, g: 0, b: 0 }, n = 1, r;
  return typeof t == "string" ? r = ue(t) : r = t, r !== null && typeof r == "object" && ("l" in r ? e = Lt(r.h, r.s, r.l) : "v" in r && (e = de(r.h, r.s, r.v)), "a" in r && (n = R(r.a ?? 1), Number.isNaN(n) && (n = 1)), e = r), { ...e, a: n, format: "rgba", toString: M };
}
function z(t, e, n) {
  return {
    h: S(t, 0, 360) / 360,
    s: S(I(e) ? L(e) : e, 0, 1),
    l: S(I(n) ? L(n) : n, 0, 1)
  };
}
function _(t, e, n) {
  return {
    r: S(t, 0, 255) / 255,
    g: S(e, 0, 255) / 255,
    b: S(n, 0, 255) / 255
  };
}
function q(t, e, n) {
  return {
    h: S(t, 0, 360) / 360,
    s: S(I(e) ? L(e) : e, 0, 1),
    v: S(I(n) ? L(n) : n, 0, 1)
  };
}
function R(t) {
  return S(I(t) ? L(t) : t, 0, 1);
}
function Lt(t, e, n) {
  let r, o, i;
  if ({ h: t, s: e, l: n } = z(t, e, n), e === 0)
    r = o = i = n;
  else {
    const s = n < 0.5 ? 1 * (1 + e) : n + e - n * e, c = 2 * n - s;
    r = tt(c, s, t + 1 / 3), o = tt(c, s, t), i = tt(c, s, t - 1 / 3);
  }
  return r *= 255, o *= 255, i *= 255, { r, g: o, b: i, toString: M };
}
function Ht(t, e, n) {
  ({ r: t, g: e, b: n } = _(t, e, n));
  const r = Math.max(t, e, n), o = Math.min(t, e, n);
  let i, s;
  const c = (r + o) / 2;
  if (r === o)
    i = s = 0;
  else {
    const a = r - o;
    switch (s = c > 0.5 ? a / (2 - r - o) : a / (r + o), r) {
      case t: {
        i = (e - n) / a + (e < n ? 6 : 0);
        break;
      }
      case e: {
        i = (n - t) / a + 2;
        break;
      }
      case n: {
        i = (t - e) / a + 4;
        break;
      }
      default:
        i = 0;
    }
    i *= 60;
  }
  return { h: i, s, l: c, toString: H };
}
function le(t, e, n) {
  ({ h: t, s: e, l: n } = z(t, e, n));
  const r = 0.5 * (2 * n + e * (1 - Math.abs(2 * n - 1)));
  return e = 2 * (r - n) / r, { h: t * 360, s: e, v: r, toString: j };
}
function Pn(t, e, n) {
  ({ h: t, s: e, v: n } = q(t, e, n));
  const r = 0.5 * n * (2 - e);
  return e = n * e / (1 - Math.abs(2 * r - 1)), { h: t * 360, s: e, l: r, toString: H };
}
function de(t, e, n) {
  ({ h: t, s: e, v: n } = q(t, e, n)), t *= 6;
  const r = Math.floor(t), o = t - r, i = n * (1 - e), s = n * (1 - o * e), c = n * (1 - (1 - o) * e), a = r % 6;
  let f = [n, s, i, i, c, n][a], u = [c, n, n, s, i, i][a], d = [i, i, c, n, n, s][a];
  return f *= 255, u *= 255, d *= 255, { r: f, g: u, b: d, toString: M };
}
function Pt(t, e, n) {
  ({ r: t, g: e, b: n } = _(t, e, n));
  const r = Math.max(t, e, n), o = Math.min(t, e, n);
  let i;
  const s = r, c = r - o, a = r === 0 ? 0 : c / r;
  if (r === o)
    i = 0;
  else {
    switch (r) {
      case t: {
        i = (e - n) / c + (e < n ? 6 : 0);
        break;
      }
      case e: {
        i = (n - t) / c + 2;
        break;
      }
      case n: {
        i = (t - e) / c + 4;
        break;
      }
      default:
        i = 0;
    }
    i *= 60;
  }
  return { h: i, s: a, v: s, toString: j };
}
function it(t, e, n, r = false) {
  ({ r: t, g: e, b: n } = _(t, e, n));
  const o = [
    O(Math.round(t * 255).toString(16)),
    O(Math.round(e * 255).toString(16)),
    O(Math.round(n * 255).toString(16))
  ];
  return r && $(o[0]) && $(o[1]) && $(o[2]) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : "#" + o.join("");
}
function st(t, e, n, r, o = false) {
  ({ r: t, g: e, b: n } = _(t, e, n));
  const i = [
    O(Math.round(t * 255).toString(16)),
    O(Math.round(e * 255).toString(16)),
    O(Math.round(n * 255).toString(16)),
    O(he(R(r)))
  ];
  return o && $(i[0]) && $(i[1]) && $(i[2]) && $(i[3]) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : "#" + i.join("");
}
function Bn(t, e, n = 0.5) {
  if (!t && !e)
    return { r: 0, g: 0, b: 0, a: 1 };
  if (!t)
    return T(e);
  if (!e)
    return T(t);
  const r = T(t), o = T(e), i = S(n, 0, 1), s = i * 2 - 1, c = r.a - o.a, f = ((s * c === -1 ? s : (s + c) / (1 + s * c)) + 1) / 2, u = 1 - f;
  return {
    r: Math.round(r.r * f + o.r * u),
    g: Math.round(r.g * f + o.g * u),
    b: Math.round(r.b * f + o.b * u),
    a: Math.round(r.a * i + o.a * (1 - i)),
    format: "rgba",
    toString: M
  };
}
function Un(t, e) {
  const n = T(t);
  return n.a = R(e), n;
}
function Yn(t = false, e = "hex") {
  const n = Math.round(Math.random() * 255), r = Math.round(Math.random() * 255), o = Math.round(Math.random() * 255);
  if (e === "hex")
    return t ? st(n, r, o, Math.random()) : it(n, r, o);
  let i;
  return e === "hsl" ? i = Ht(n, r, o) : e === "hsv" ? i = Pt(n, r, o) : i = /* @__PURE__ */ Object.create({ r: n, g: r, b: o, toString: M }), t && (i.a = Math.random()), i.toString();
}
function Bt(t, e = false, n = "hex") {
  const r = Math.round(Math.random() * 360), o = Math.round(t === "hard" ? 80 + Math.random() * 20 : 20 + Math.random() * 70) / 100, i = Math.round(t === "hard" ? 40 + Math.random() * 20 : 80 + Math.random() * 15) / 100;
  if (n === "hsl")
    return H.bind({ h: r, s: o, l: i })();
  let s;
  if (n === "hex" || n === "rgb") {
    if (s = Lt(r, o, i), n === "hex") {
      const { r: c, g: a, b: f } = s;
      return e ? st(c, a, f, Math.random()) : it(c, a, f);
    }
  } else
    n === "hsv" && (s = le(r, o, i));
  return e && (s.a = Math.random()), s.toString();
}
function Wn(t = false, e = "hex") {
  return Bt("hard", t, e);
}
function Gn(t = false, e = "hex") {
  return Bt("soft", t, e);
}
function zn(t) {
  return Ut(T(t));
}
function O(t) {
  return t.length === 1 ? `0${t}` : t.toString();
}
function $(t) {
  return t.charAt(0) === t.charAt(1);
}
function he(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function pt(t) {
  return parseInt(t, 16) / 255;
}
function S(t, e, n) {
  return Math.max(e, Math.min(n, parseFloat(t)));
}
function tt(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function I(t) {
  return String(t).trim().includes("%");
}
function L(t) {
  const e = parseFloat(t) / 100;
  return Number.isNaN(e) ? 0 : e;
}
function M() {
  return w(this.a) && this.a >= 0 && this.a < 1 ? `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})` : `rgb(${this.r}, ${this.g}, ${this.b})`;
}
function H() {
  const t = `${this.s * 100}%`, e = `${this.l * 100}%`;
  return w(this.a) && this.a >= 0 && this.a < 1 ? `hsla(${this.h}, ${t}, ${e}, ${this.a})` : `hsl(${this.h}, ${t}, ${e})`;
}
function j() {
  const t = `${this.s * 100}%`, e = `${this.v * 100}%`;
  return w(this.a) && this.a >= 0 && this.a < 1 ? `hsva(${this.h}, ${t}, ${e}, ${this.a})` : `hsv(${this.h}, ${t}, ${e})`;
}
function Ut(t) {
  return (t.r * 0.2126 + t.g * 0.7152 + t.b * 0.0722) / 255;
}
function mt(t) {
  return t & -t;
}
function qn(t, e = 0) {
  const n = new Array(t + 1).fill(0);
  function r(c, a) {
    if (!(!a || c >= t))
      for (c += 1; c <= t; )
        n[c] += a, c += mt(c);
  }
  function o(c = t) {
    if (c <= 0)
      return 0;
    c > t && (c = t);
    let a = c * e;
    for (; c > 0; )
      a += n[c], c -= mt(c);
    return a;
  }
  function i(c) {
    return o(c + 1) - o(c);
  }
  function s(c) {
    let a = 0, f = t;
    for (; f > a; ) {
      const u = Math.floor((a + f) / 2), d = o(u);
      if (d > c) {
        f = u;
        continue;
      } else if (d < c) {
        if (a === u)
          return o(a + 1) <= c ? a + 1 : a;
        a = u;
      } else
        return u;
    }
    return a;
  }
  return { tree: n, add: r, sum: o, get: i, boundIndex: s };
}
var ge = /^\s*[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?\s*$/;
function pe(t, e = false) {
  return typeof t == "number" ? !Number.isNaN(t) : e ? ge.test(String(t)) : !Number.isNaN(parseFloat(t)) || !Number.isNaN(Number(t));
}
function me(t) {
  let e = parseFloat(t);
  return Number.isNaN(e) && (e = Number(t)), Number.isNaN(e) ? 0 : e;
}
function be(t, e) {
  return e <= 0 ? t.toString() : `${t < 0 ? "-" : ""}${String(Math.abs(Math.round(t))).padStart(e, "0")}`;
}
function N(t) {
  return be(t, 2);
}
function E(t) {
  const e = t.toString().split(/[eE]/), n = (e[0].split(".")[1] || "").length - +(e[1] || 0);
  return n > 0 ? n : 0;
}
function jn(t) {
  return E(t);
}
function Kn(t, e = 3, n = ",") {
  if (typeof t != "number" && (t = parseFloat(t)), Number.isNaN(t))
    return "0";
  let [r, o] = String(t).split(".");
  const i = new RegExp(`(\\d+)(\\d{${e}})`);
  for (; i.test(r); )
    r = r.replace(i, `$1${n}$2`);
  return o = o ? `.${o}` : "", `${r}${o}`;
}
function Yt(t, e) {
  if (e === 0)
    return Math.round(t);
  let n = t.toFixed(E(t));
  const r = n.indexOf(".");
  if (r === -1)
    return t;
  const o = n.replace(".", "").split(""), i = r + e;
  return o[i] ? (n.charAt(i + 1) === "5" ? n = n.substring(0, i + 1) + "6" : n = n.substring(0, i + 2), parseFloat(Number(n).toFixed(e))) : t;
}
function Qn(t, e, n) {
  return Yt(t * e, n);
}
function Xn(t, e) {
  if (e < 0 || e > 1)
    return Math.round(t);
  const n = Math.ceil(t);
  return t + 1 - e >= n ? n : Math.floor(t);
}
function Zn(t, e, n) {
  return Math.max(e, Math.min(n, parseFloat(t)));
}
function Vn(t, e, n = 0) {
  if (t <= 0 || e <= 1)
    return [t];
  n < 1 && (n = 1 / 0);
  const r = [];
  let o = 0;
  for (; t >= e && o < n; )
    r.push(t % e), t = Math.floor(t / e), ++o;
  return r.push(t), r.reverse();
}
var bt = Object.freeze([
  "B",
  "KB",
  "MB",
  "GB",
  "TB",
  "AUTO"
]);
function vn(t, e = "AUTO", n = false, r) {
  typeof r > "u" && (typeof n == "number" ? (r = n, n = false) : r = 2);
  let o = e.toUpperCase();
  o = bt.includes(o) ? o : "AUTO";
  let i;
  switch (o) {
    case "AUTO":
      i = 0;
      break;
    case "KB":
      i = 1;
      break;
    case "MB":
      i = 2;
      break;
    case "GB":
      i = 3;
      break;
    case "TB":
      i = 4;
      break;
    default:
      return t;
  }
  let s;
  if (i)
    s = t / 1024 ** i;
  else
    for (s = t; s > 1024 && !(i > 4); ++i)
      s = s / 1024;
  return s = Yt(s, r), n ? `${s}${o === "AUTO" ? bt[Math.min(i, 4)] : o}` : s;
}
function Jn(t, e = 0) {
  return e === t ? e : (e > t && ([e, t] = [t, e]), Math.random() * (t - e) + e);
}
function Wt(t, e = 15) {
  return +parseFloat(Number(t).toPrecision(e));
}
function K(t) {
  const e = String(t);
  if (!e.includes("e"))
    return Number(e.replace(".", ""));
  const n = E(t);
  return n > 0 ? Wt(Number(t) * 10 ** n) : Number(t);
}
function Q(t) {
  return (...e) => {
    let n = e[0];
    for (let r = 1, o = e.length; r < o; ++r)
      n = t(n, e[r]);
    return n;
  };
}
var P = Q((t, e) => {
  const n = K(t), r = K(e), o = E(t) + E(e);
  return n * r / 10 ** o;
});
var tr = Q((t, e) => {
  const n = 10 ** Math.max(E(t), E(e));
  return (P(t, n) + P(e, n)) / n;
});
var er = Q((t, e) => {
  const n = 10 ** Math.max(E(t), E(e));
  return (P(t, n) - P(e, n)) / n;
});
var nr = Q((t, e) => {
  const n = K(t), r = K(e);
  return P(n / r, Wt(10 ** (E(e) - E(t))));
});
var ye = 1e3;
var A = 1e3;
var C = 60;
var Me = C * A;
var rr = C * A;
var X = 60;
var Gt = X * C;
var Se = Gt * A;
var or = Gt * A;
var zt = 24;
var we = zt * X;
var qt = we * C;
var Ee = qt * A;
var ir = qt * A;
var ct = 7;
var Ne = ct * zt;
var Ae = Ne * X;
var jt = Ae * C;
var Fe = jt * A;
var sr = jt * A;
var Kt = 3;
var Te = 4;
var Oe = Te * Kt;
var $e = {
  y(t, e) {
    const n = t.getFullYear();
    return e.length === 4 ? n : n % 1e3 % 100;
  },
  M(t, e) {
    const n = t.getMonth() + 1;
    return e.length === 2 ? N(n) : n;
  },
  d(t, e) {
    const n = t.getDate();
    return e.length === 2 ? N(n) : n;
  },
  H(t, e) {
    const n = t.getHours();
    return e.length === 2 ? N(n) : n;
  },
  m(t, e) {
    const n = t.getMinutes();
    return e.length === 2 ? N(n) : n;
  },
  s(t, e) {
    const n = t.getSeconds();
    return e.length === 2 ? N(n) : n;
  },
  q(t, e) {
    const n = Math.ceil((t.getMonth() + 1) / 3);
    return e.length === 2 ? N(n) : n;
  }
};
var Re = /[yMdHmsq](\w)*|./g;
var _e = /'(.+?)'/g;
function h(t, e = false) {
  const n = new Date(t);
  if (e && Number.isNaN(+n))
    throw new RangeError("Invalid date value");
  return typeof t == "string" && !t.includes(":") && (n.setHours(0), n.setMinutes(0), n.setSeconds(0)), n;
}
function cr(t, e = "yyyy-MM-dd HH:mm:ss") {
  t = h(t);
  const n = e.match(Re), r = n == null ? void 0 : n.length;
  if (!r)
    return e;
  let o = 0, i = "";
  for (; o < r; ) {
    const s = n[o], c = s[0], a = $e[c];
    a ? i += a(t, s) : i += s, ++o;
  }
  return i.replace(_e, "$1");
}
function ar(t) {
  return t = h(t), `${N(t.getHours())}:${N(t.getMinutes())}:${N(
    t.getSeconds()
  )}`;
}
function rt(t) {
  return t = h(t), Math.floor(t.getMonth() / 3) + 1;
}
var ke = ["日", "一", "二", "三", "四", "五", "六"];
function fr(t) {
  return ke[t.getDay()];
}
function Ce(t, e) {
  return t = h(t), t.setTime(t.getTime() + e), t;
}
function xe(t, e) {
  return e *= A, Ce(t, e);
}
function De(t, e) {
  return e *= C, xe(t, e);
}
function Ie(t, e) {
  return e *= X, De(t, e);
}
function ur(t, e) {
  return e *= 12, Ie(t, e);
}
function at(t, e) {
  return t = h(t), e = ~~e, t.setDate(t.getDate() + e), t;
}
function lr(t, e) {
  return e *= ct, at(t, e);
}
function ft(t, e) {
  return t = h(t), e = ~~e, t.setMonth(t.getMonth() + e), t;
}
function dr(t, e) {
  return e *= Kt, ft(t, e);
}
function hr(t, e) {
  return e *= Oe, ft(t, e);
}
function gr(t, e = 42, n = 1) {
  t = h(t);
  const r = [];
  for (let o = 0; o < e; ++o)
    r.push(at(t, o * n));
  return r;
}
function pr(t, e = 12, n = 1) {
  t = h(t);
  const r = [];
  for (let o = 0; o < e; ++o)
    r.push(ft(t, o * n));
  return r;
}
function mr(t) {
  const e = t.getDay() ?? 7;
  return at(t, -e);
}
function yt(t) {
  return t = h(t), t.setMilliseconds(0), t;
}
function Mt(t) {
  return t = h(t), t.setSeconds(0, 0), t;
}
function St(t) {
  return t = h(t), t.setMinutes(0, 0, 0), t;
}
function wt(t) {
  return t = h(t), t.setHours(0, 0, 0, 0), t;
}
function br(t) {
  return t = h(t), t.setHours(23, 59, 59, 999), t;
}
function Et(t, e = 0) {
  e = e % 7, e < 0 && (e += 7), t = h(t);
  const n = t.getDay(), r = (n < e ? 7 : 0) + n - e;
  return t.setDate(t.getDate() - r), t.setHours(0, 0, 0, 0), t;
}
function Le(t) {
  return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
}
function yr(t, e = 1) {
  t = h(t);
  const n = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate();
  let i;
  return r < 7 ? r !== 2 ? i = 30 + r % 2 : Le(n) ? i = 29 : i = 28 : i = 31 - r % 2, e = e % i, e < 0 && (e += i), o < e && t.setMonth(r - 1), t.setDate(e), t.setHours(0, 0, 0, 0), t;
}
function Mr(t) {
  t = h(t);
  const e = rt(t);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t.setMonth((e - 1) * 3), t;
}
function Sr(t, e = 0) {
  e = e % 11, e < 0 && (e += 11), t = h(t);
  const n = t.getMonth(), r = (n < e ? 11 : 0) + n - e;
  return t.setMonth(t.getMonth() - r), t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function ut(t, e) {
  return t = h(t), e = h(e), e.getTime() - t.getTime();
}
function He(t, e) {
  const n = ut(t, e) / ye;
  return n > 0 ? Math.floor(n) : Math.ceil(n);
}
function Pe(t, e) {
  const n = ut(t, e) / Me;
  return n > 0 ? Math.floor(n) : Math.ceil(n);
}
function Be(t, e) {
  const n = ut(t, e) / Se;
  return n > 0 ? Math.floor(n) : Math.ceil(n);
}
function Ue(t, e) {
  return t = wt(t), e = wt(e), (e.getTime() - t.getTime()) / Ee;
}
function wr(t, e, n = 0) {
  return t = Et(t, n), e = Et(e, n), (e.getTime() - t.getTime()) / Fe;
}
function Ye(t, e) {
  t = h(t), e = h(e);
  const n = e.getFullYear() - t.getFullYear(), r = e.getMonth() - t.getMonth();
  return n * 12 + r;
}
function Er(t, e) {
  t = h(t), e = h(e);
  const n = e.getFullYear() - t.getFullYear(), r = rt(e) - rt(t);
  return n * 4 + r;
}
function We(t, e) {
  return t = h(t), e = h(e), e.getFullYear() - t.getFullYear();
}
function Ge(t, e) {
  t = h(t), e = h(e);
  const n = t.getTime() - e.getTime();
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function k(t, e) {
  return -Ge(t, e);
}
function Nr(t, e) {
  return t = yt(t), e = yt(e), He(t, e);
}
function Ar(t, e) {
  return t = Mt(t), e = Mt(e), Pe(t, e);
}
function Fr(t, e) {
  return t = St(t), e = St(e), Be(t, e);
}
function ze(t, e) {
  const n = k(t, e), r = Math.abs(Ue(t, e));
  t = h(t), t.setDate(t.getDate() + n * r);
  const o = k(t, e) === -n;
  return n * (r - (o ? 1 : 0));
}
function Tr(t, e) {
  const n = ze(t, e) / ct;
  return n > 0 ? Math.floor(n) : Math.ceil(n);
}
function qe(t, e) {
  const n = k(t, e), r = Math.abs(Ye(t, e));
  t = h(t), t.setMonth(t.getMonth() + n * r);
  const o = k(t, e) === -n;
  return n * (r - (o ? 1 : 0));
}
function Or(t, e) {
  const n = qe(t, e) / 3;
  return n > 0 ? Math.floor(n) : Math.ceil(n);
}
function $r(t, e) {
  const n = k(t, e), r = Math.abs(We(t, e));
  t = h(t), t.setFullYear(t.getFullYear() + n * r);
  const o = k(t, e) === -n;
  return n * (r - (o ? 1 : 0));
}
function je(t, e = {}) {
  if (t == null || typeof t != "object")
    return t;
  const { cloneObject: n = ot } = e, r = {}, o = [
    {
      parent: r,
      prop: "root",
      data: t
    }
  ], i = /* @__PURE__ */ new WeakMap(), s = [], c = [];
  for (; o.length; ) {
    const { parent: a, prop: f, data: u } = o.pop();
    if (!a)
      continue;
    const d = ie(u);
    if (d === "Date") {
      a[f] = new Date(u);
      continue;
    }
    if (d !== "Array") {
      const l = n(d, u);
      if (l != null) {
        a[f] = l;
        continue;
      }
    }
    const g = a[f] = d === "Array" || d === "Set" || d === "Map" ? [] : {};
    if (d === "Set" || d === "Map") {
      let l = 0;
      if (d === "Set") {
        for (const p of u)
          i.has(p) ? g[l] = i.get(p) : p !== null && typeof p == "object" ? o.push({
            parent: g,
            prop: l,
            data: p
          }) : g[l] = p, ++l;
        s.push({ parent: a, prop: f });
      } else {
        for (const p of u) {
          const b = [];
          l = 0;
          for (const m of p)
            i.has(m) ? b[l] = i.get(m) : m !== null && typeof m == "object" ? o.push({
              parent: b,
              prop: l,
              data: m
            }) : b[l] = m, ++l;
          g.push(b);
        }
        c.push({ parent: a, prop: f });
      }
    } else
      for (const l of Object.keys(u)) {
        const p = u[l];
        i.has(p) ? g[l] = i.get(p) : p !== null && typeof p == "object" ? o.push({
          parent: g,
          prop: l,
          data: p
        }) : g[l] = p;
      }
    i.set(u, g);
  }
  for (const { parent: a, prop: f } of s)
    a[f] = new Set(a[f]);
  for (const { parent: a, prop: f } of c)
    a[f] = new Map(a[f]);
  return r.root;
}
var Ke = "This object was destroyed, do not use it anywhere";
var Qe = () => true;
function Rr(t, e = Ke) {
  const n = () => {
    throw new Error(e);
  };
  Object.keys(t).forEach((r) => {
    typeof t[r] == "function" ? t[r] = n.bind(t) : t[r] = null;
  }), Object.getOwnPropertyNames(t.constructor.prototype).forEach((r) => {
    r !== "constructor" && typeof t[r] == "function" && (t[r] = n.bind(t));
  }), t.isDestroyed = Qe;
}
var Xe = y && ("ontouchstart" in window || Ze() > 0);
var _r = Xe ? "pointerdown" : "click";
function Ze() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function kr(t, e, n = window.Event) {
  const { type: r, bubbles: o = false, cancelable: i = false, ...s } = e;
  if (!w(r) || r === "")
    return false;
  let c;
  return w(n) ? c = new n(r, { bubbles: o, cancelable: i }) : (c = document.createEvent("HTMLEvents"), c.initEvent(r, o, i)), Object.assign(c, s), t.dispatchEvent(c);
}
var Ve = [
  "button",
  "[href]:not(.disabled)",
  "input",
  "select",
  "textarea",
  "[tabindex]",
  "[contenteditable]"
].map((t) => `${t}:not(:disabled):not([disabled])`).join(", ");
function Z(t) {
  return !!t && t.nodeType === 1;
}
function ve(t) {
  return Z(t) ? t : document.body;
}
function Je(t, e) {
  return !y || !t ? [] : Array.from(ve(e).querySelectorAll(t));
}
function Cr(t) {
  if (!y)
    return false;
  const e = document.activeElement;
  return !Z(t) || !e ? false : t === e || Qt(e, t);
}
function Qt(t, e) {
  if (!t || !e)
    return false;
  const n = e.__transferElement;
  return e.contains(t) || !!n && (n === t || n.contains(t));
}
function tn(t) {
  if (!y || !Z(t) || !t.parentNode || !Qt(t, document.body) || t.style.display === "none")
    return true;
  const e = t.getBoundingClientRect();
  return !(e && e.width > 0 && e.height > 0);
}
function en(t) {
  return !tn(t);
}
function nn(t) {
  return !Z(t) || t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false" || t.disabled;
}
function xr(t, e = false) {
  const n = e ? () => false : nn;
  return Je(Ve, t).filter(
    (r) => en(r) && r.tabIndex > -1 && !n(r)
  );
}
function rn(t) {
  if (!y || !t)
    return 0;
  const e = getComputedStyle(t);
  return parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) || 0;
}
function Dr(t) {
  if (!y || !t)
    return 0;
  const e = getComputedStyle(t);
  return parseFloat(e.paddingTop) + parseFloat(e.paddingBottom) || 0;
}
function Ir(t) {
  if (!y || !t)
    return 0;
  const e = getComputedStyle(t);
  return parseFloat(e.marginLeft) + parseFloat(e.marginRight) || 0;
}
function Lr(t) {
  if (!y || !t)
    return 0;
  const e = getComputedStyle(t);
  return parseFloat(e.marginTop) + parseFloat(e.marginBottom) || 0;
}
function Hr(t) {
  if (!y || !t)
    return 0;
  const e = getComputedStyle(t);
  return parseFloat(e.borderLeftWidth) + parseFloat(e.borderRightWidth) || 0;
}
function Pr(t) {
  if (!y || !t)
    return 0;
  const e = getComputedStyle(t);
  return parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth) || 0;
}
function Br(t) {
  if (!y || !t)
    return 0;
  const e = document.createRange();
  e.setStart(t, 0), e.setEnd(t, t.childNodes.length);
  const n = e.getBoundingClientRect().width, r = rn(t);
  return n + r;
}
function Ur(t) {
  return pe(t, true) ? `${me(t)}px` : String(t).trim();
}
var on = /["'&<>]/;
function Yr(t) {
  const e = "" + t, n = on.exec(e);
  if (!n)
    return e;
  let r = "", o, i, s = 0;
  for (i = n.index; i < e.length; i++) {
    switch (e.charCodeAt(i)) {
      case 34:
        o = "&quot;";
        break;
      case 38:
        o = "&amp;";
        break;
      case 39:
        o = "&#39;";
        break;
      case 60:
        o = "&lt;";
        break;
      case 62:
        o = "&gt;";
        break;
      default:
        continue;
    }
    s !== i && (r += e.substring(s, i)), s = i + 1, r += o;
  }
  return s !== i ? r + e.substring(s, i) : r;
}
function Wr() {
  const t = /* @__PURE__ */ new Map();
  return {
    on(e, n) {
      const r = t.get(e);
      (r == null ? void 0 : r.add(n)) || t.set(e, /* @__PURE__ */ new Set([n]));
    },
    off(e, n) {
      const r = t.get(e);
      r && r.delete(n);
    },
    clear(e) {
      const n = t.get(e);
      n && n.clear();
    },
    clearAll() {
      t.clear();
    },
    emit(e, ...n) {
      const r = t.get(e);
      r && r.forEach((o) => {
        o(...n);
      });
    }
  };
}
function lt(t, e, n) {
  t && !e.has(t) && (n(t), e.add(t));
}
var sn = /* @__PURE__ */ new Set();
function Gr(t, e = console.info) {
  lt(t, sn, e);
}
var cn = /* @__PURE__ */ new Set();
function zr(t, e = console.warn) {
  lt(t, cn, e);
}
var an = /* @__PURE__ */ new Set();
function qr(t, e = console.warn) {
  lt(t, an, e);
}
var dt = y ? requestAnimationFrame : (t) => {
  setTimeout(t, 16);
};
function jr(t, e = 16) {
  if (typeof t != "function")
    return ot;
  const n = (...i) => {
    t(...i);
  };
  if (e <= 0)
    return Xt(n);
  let r = 0, o;
  return function(...i) {
    const s = Date.now(), c = s - r;
    clearTimeout(o), c >= e ? (r = s, n(...i)) : o = setTimeout(
      () => {
        r = Date.now(), n(...i);
      },
      Math.max(0, e - c)
    );
  };
}
function Kr(t, e = 100) {
  if (typeof t != "function")
    return ot;
  const n = (...o) => {
    t(...o);
  };
  if (e <= 0)
    return Xt(n);
  let r;
  return function(...o) {
    clearTimeout(r), r = setTimeout(() => {
      n(...o);
    }, e);
  };
}
function Xt(t) {
  if (typeof t != "function")
    return t;
  let e = false, n, r;
  return function(...o) {
    return n = o, e || (e = true, r = Promise.resolve().then(() => (e = false, r = void 0, t(...n)))), r;
  };
}
function Qr(t) {
  if (typeof t != "function")
    return t;
  let e = false, n, r;
  return function(...o) {
    return n = o, e || (e = true, r = new Promise(
      (i) => dt(() => {
        e = false, r = void 0, i(t(...n));
      })
    )), r;
  };
}
var x = /* @__PURE__ */ new Set();
var Zt = /* @__PURE__ */ new WeakMap();
function fn() {
  x.forEach((t) => {
    t(...Zt.get(t));
  }), x.clear();
}
function Xr(t, ...e) {
  if (typeof t != "function")
    return t;
  Zt.set(t, e), !x.has(t) && (x.add(t), x.size === 1 && Promise.resolve().then(fn));
}
var D = /* @__PURE__ */ new Set();
var Vt = /* @__PURE__ */ new WeakMap();
function un() {
  D.forEach((t) => {
    t(...Vt.get(t));
  }), D.clear();
}
function Zr(t, ...e) {
  if (typeof t != "function")
    return t;
  Vt.set(t, e), !D.has(t) && (D.add(t), D.size === 1 && dt(un));
}
async function Vr(t, e, n) {
  const r = [], o = [];
  for (const i of e) {
    const s = Promise.resolve().then(() => n(i, e));
    if (r.push(s), t <= e.length) {
      const c = s.then(() => o.splice(o.indexOf(c), 1));
      o.push(c), o.length >= t && await Promise.race(o);
    }
  }
  return Promise.all(r);
}
var et = null;
function vr() {
  if (!y)
    return true;
  if (et === null) {
    const t = document.createElement("div");
    t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), et = t.scrollHeight === 1, document.body.removeChild(t);
  }
  return et;
}
var nt = null;
function Jr() {
  return y ? (nt === null && (nt = "loading" in document.createElement("img")), nt) : true;
}
function to(t) {
  return Array.isArray(t) ? t : [t];
}
function eo(t, ...e) {
  return Ft(t) ? t(...e) : t;
}
function no(t) {
  return t.replace(/[\\/]+/g, "/");
}
function ro(t) {
  return t[t.length - 1];
}
function oo(t, e, n = (o) => o, r = false) {
  const o = r ? /* @__PURE__ */ new Map() : {};
  if (!w(e))
    return o;
  const i = r ? (c, a) => o.set(c, a) : (c, a) => o[c] = a, s = Ft(e) ? e : (c) => c[e];
  return t.forEach((c) => {
    const a = s(c);
    w(a) && i(a, n(c));
  }), o;
}
function io(t, e, n = false) {
  let r = -1;
  return n || typeof e != "function" ? r = t.findIndex((o) => o === e) : r = t.findIndex(e), ~r ? t.splice(r, 1)[0] : null;
}
function so(t, e = []) {
  (typeof e == "string" || typeof e == "function") && (e = [e]);
  const n = e.length, r = {};
  for (const o of t) {
    let i;
    for (let s = 0; s < n; ++s) {
      const c = s === n - 1, a = e[s], f = typeof a == "function" ? a(o) : o[a];
      i ? (i[f] || (i[f] = c ? [] : {}), i = i[f]) : (r[f] || (r[f] = c ? [] : {}), i = r[f]);
    }
    i.push(o);
  }
  return r;
}
function co(t, e = {}) {
  const {
    keyField: n = "id",
    childField: r = "children",
    parentField: o = "parent",
    rootId: i = null
  } = e, s = w(i) && i !== "", c = [], a = /* @__PURE__ */ new Map();
  for (let f = 0, u = t.length; f < u; ++f) {
    const d = t[f], g = d[n];
    if (!(s ? g === i : !w(g)))
      if (a.has(g) ? d[r] = a.get(g) : (d[r] = [], a.set(g, d[r])), d[o] && (!s || d[o] !== i)) {
        const l = d[o];
        a.has(l) || a.set(l, []), a.get(l).push(d);
      } else
        c.push(d);
  }
  return c;
}
function ao(t, e = {}) {
  const {
    keyField: n = "id",
    childField: r = "children",
    parentField: o = "parent",
    rootId: i = null,
    depthFirst: s = false,
    injectId: c = true,
    buildId: a = (m) => m,
    filter: f = oe,
    cascaded: u = false,
    forceInject: d = false
  } = e;
  let g = 1;
  const l = w(i) && i !== "", p = [], b = [...t];
  for (; b.length; ) {
    const m = b.shift(), V = m[r], v = Array.isArray(V) && V.length ? V : [];
    c && (d || !m[n]) && (m[n] = a(g++));
    const vt = m[n];
    c && o && (l ? m[o] === i : !m[o]) && (m[o] = i);
    const ht = f(m);
    if (ht && p.push(m), ht || !u) {
      for (let J = 0, Jt = v.length; J < Jt; ++J) {
        const gt = v[J];
        c && o && (gt[o] = vt), !s && b.push(gt);
      }
      s && b.unshift(...v);
    }
  }
  return p;
}
function fo(t, e, n = {}) {
  const { childField: r = "children", depthFirst: o = false } = n, i = [...t.map((s) => ({ item: s, depth: 0, parent: null }))];
  for (; i.length; ) {
    const { item: s, depth: c, parent: a } = i.shift(), f = s[r];
    e(s, c, a), W(f) && i[o ? "unshift" : "push"](
      ...Array.from(f).map((u) => ({ item: u, depth: c + 1, parent: s }))
    );
  }
}
function uo(t, e, n = {}) {
  const { childField: r = "children", depthFirst: o = false, clearChildren: i = true } = n, s = [], c = [...t.map((a) => ({ item: a, depth: 0, parent: null, result: s }))];
  for (; c.length; ) {
    const { item: a, depth: f, parent: u, result: d } = c.shift(), g = a[r], l = e(a, f, u) ?? {};
    i && (l[r] = []), d.push(l), W(g) && Array.from(g).length && (l[r] = [], c[o ? "unshift" : "push"](
      ...Array.from(g).map((b) => ({
        item: b,
        depth: f + 1,
        parent: a,
        result: l[r]
      }))
    ));
  }
  return s;
}
function lo(t, e, n = {}) {
  const {
    childField: r = "children",
    leafOnly: o = false,
    isLeaf: i = (c) => !W(c[r])
  } = n, s = (c, a, f) => c.map((u) => ({ ...u })).filter((u) => {
    const d = u[r], g = i(u), l = W(d) && Array.from(d);
    if (o && !g) {
      if (l && l.length) {
        const b = s(l, a + 1, u);
        return u[r] = b, !!b.length;
      }
      return false;
    }
    const p = e(u, a, f);
    if (g)
      return p;
    if (!o && p)
      return true;
    if (l && l.length) {
      const b = s(l, a + 1, u);
      return u[r] = b, !!b.length;
    }
    return p;
  });
  return s(t, 0, null);
}
var Nt = (t, e) => Number.isNaN(Number(t) - Number(e)) ? String(t).localeCompare(e) : t - e;
function ho(t, e) {
  if (!t.sort || Y(e) && !e.key || !e.length)
    return t;
  const n = Array.from(t);
  Array.isArray(e) || (e = [e]);
  const r = e.map(
    (o) => typeof o == "string" ? {
      key: o,
      method: Nt,
      type: "asc"
    } : o
  ).map((o) => (typeof o.accessor != "function" && (o.accessor = (i) => i[o.key]), typeof o.method != "function" && (o.method = Nt), o.params = Array.isArray(o.params) ? o.params : [], o));
  return n.sort((o, i) => {
    let s = 0;
    for (const c of r) {
      const { method: a, type: f, accessor: u, params: d } = c, g = f === "desc", l = a(u(o, ...d), u(i, ...d));
      if (s = g ? -l : l, s)
        break;
    }
    return s;
  }), n;
}
function go(t, e, n = true) {
  t = n ? je(t) : t;
  const r = [
    {
      source: t,
      target: e
    }
  ];
  for (; r.length; ) {
    const { source: o, target: i } = r.pop();
    Object.keys(i).forEach((s) => {
      Y(i[s]) ? (Y(o[s]) || (o[s] = {}), r.push({
        source: o[s],
        target: i[s]
      })) : Array.isArray(i[s]) ? (Array.isArray(o[s]) || (o[s] = []), r.push({
        source: o[s],
        target: i[s]
      })) : o[s] = i[s];
    });
  }
  return t;
}
function po(t) {
  t = Array.from(t);
  let e = false;
  const n = () => {
    var r;
    e || ((r = t.shift()) == null || r(), t.length && dt(n));
  };
  return n(), () => e = true;
}
function ln(t) {
  const e = t.match(/[A-Z]+/);
  return e && e[0] === t;
}
var dn = /\B([A-Z])(?=[^A-Z_-])/g;
function mo(t) {
  return t.replace(dn, "-$1").toLowerCase();
}
function hn(t) {
  return t = t.trim().replace(/\s+/g, "-"), t = t.replace(/-+(\w)/g, (e, n) => n ? n.toUpperCase() : ""), (t.charAt(0).toLocaleUpperCase() + t.slice(1)).replace(
    /[^\w]/g,
    ""
  );
}
function bo(t) {
  const e = hn(t);
  return ln(e) ? e.toLocaleLowerCase() : e.charAt(0).toLowerCase() + e.slice(1);
}

export {
  y,
  gn,
  B,
  pn,
  w,
  ne,
  mn,
  re,
  bn,
  yn,
  Mn,
  Sn,
  wn,
  En,
  Nn,
  Y,
  An,
  Ft,
  Fn,
  Tn,
  On,
  $n,
  Rn,
  _n,
  W,
  ot,
  oe,
  kn,
  Cn,
  ie,
  xn,
  Dn,
  In,
  Tt,
  Ot,
  $t,
  Rt,
  _t,
  kt,
  Ct,
  xt,
  Dt,
  It,
  G,
  fe,
  Ln,
  ue,
  Hn,
  T,
  z,
  _,
  q,
  R,
  Lt,
  Ht,
  le,
  Pn,
  de,
  Pt,
  it,
  st,
  Bn,
  Un,
  Yn,
  Bt,
  Wn,
  Gn,
  zn,
  qn,
  ge,
  pe,
  me,
  be,
  N,
  E,
  jn,
  Kn,
  Yt,
  Qn,
  Xn,
  Zn,
  Vn,
  vn,
  Jn,
  Wt,
  P,
  tr,
  er,
  nr,
  ye,
  A,
  C,
  Me,
  rr,
  X,
  Gt,
  Se,
  or,
  zt,
  we,
  qt,
  Ee,
  ir,
  ct,
  Ne,
  Ae,
  jt,
  Fe,
  sr,
  Kt,
  Te,
  Oe,
  h,
  cr,
  ar,
  rt,
  fr,
  Ce,
  xe,
  De,
  Ie,
  ur,
  at,
  lr,
  ft,
  dr,
  hr,
  gr,
  pr,
  mr,
  yt,
  Mt,
  St,
  wt,
  br,
  Et,
  Le,
  yr,
  Mr,
  Sr,
  ut,
  He,
  Pe,
  Be,
  Ue,
  wr,
  Ye,
  Er,
  We,
  Ge,
  k,
  Nr,
  Ar,
  Fr,
  ze,
  Tr,
  qe,
  Or,
  $r,
  je,
  Rr,
  Xe,
  _r,
  kr,
  Je,
  Cr,
  Qt,
  tn,
  en,
  nn,
  xr,
  rn,
  Dr,
  Ir,
  Lr,
  Hr,
  Pr,
  Br,
  Ur,
  Yr,
  Wr,
  Gr,
  zr,
  qr,
  dt,
  jr,
  Kr,
  Xt,
  Qr,
  Xr,
  Zr,
  Vr,
  vr,
  Jr,
  to,
  eo,
  no,
  ro,
  oo,
  io,
  so,
  co,
  ao,
  fo,
  uo,
  lo,
  ho,
  go,
  po,
  mo,
  hn,
  bo
};
//# sourceMappingURL=chunk-CPGSQ24Y.js.map
