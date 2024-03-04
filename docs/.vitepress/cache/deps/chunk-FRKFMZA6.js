import {
  c
} from "./chunk-NEZZFGIA.js";
import {
  Ft,
  Y,
  go,
  ne,
  pn,
  to,
  w,
  y
} from "./chunk-CPGSQ24Y.js";
import {
  computed,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  markRaw,
  provide,
  reactive,
  unref,
  watch
} from "./chunk-IMLQGPPH.js";

// docs/node_modules/lucide-vue-next/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// docs/node_modules/lucide-vue-next/dist/esm/createLucideIcon.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var createLucideIcon = (iconName, iconNode) => ({ size, strokeWidth = 2, absoluteStrokeWidth, color, class: classes, ...props }, { attrs, slots }) => {
  return h(
    "svg",
    {
      ...defaultAttributes,
      width: size || defaultAttributes.width,
      height: size || defaultAttributes.height,
      stroke: color || defaultAttributes.stroke,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      ...attrs,
      class: ["lucide", `lucide-${toKebabCase(iconName)}`],
      ...props
    },
    [
      ...iconNode.map((child) => h(...child)),
      ...slots.default ? [slots.default()] : []
    ]
  );
};

// docs/node_modules/lucide-vue-next/dist/esm/icons/a-arrow-down.js
var AArrowDown = createLucideIcon("AArrowDownIcon", [
  ["path", { d: "M3.5 13h6", key: "p1my2r" }],
  ["path", { d: "m2 16 4.5-9 4.5 9", key: "ndf0b3" }],
  ["path", { d: "M18 7v9", key: "pknjwm" }],
  ["path", { d: "m14 12 4 4 4-4", key: "buelq4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/a-arrow-up.js
var AArrowUp = createLucideIcon("AArrowUpIcon", [
  ["path", { d: "M3.5 13h6", key: "p1my2r" }],
  ["path", { d: "m2 16 4.5-9 4.5 9", key: "ndf0b3" }],
  ["path", { d: "M18 16V7", key: "ty0viw" }],
  ["path", { d: "m14 11 4-4 4 4", key: "1pu57t" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/a-large-small.js
var ALargeSmall = createLucideIcon("ALargeSmallIcon", [
  ["path", { d: "M21 14h-5", key: "1vh23k" }],
  ["path", { d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16", key: "1wh10o" }],
  ["path", { d: "M4.5 13h6", key: "dfilno" }],
  ["path", { d: "m3 16 4.5-9 4.5 9", key: "2dxa0e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/accessibility.js
var Accessibility = createLucideIcon("AccessibilityIcon", [
  ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
  ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
  ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
  ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
  ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/activity-square.js
var ActivitySquare = createLucideIcon("ActivitySquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7", key: "15hlnc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/activity.js
var Activity = createLucideIcon("ActivityIcon", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/air-vent.js
var AirVent = createLucideIcon("AirVentIcon", [
  [
    "path",
    {
      d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "larmp2"
    }
  ],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12", key: "1bo8pg" }],
  ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5", key: "t9h90c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/airplay.js
var Airplay = createLucideIcon("AirplayIcon", [
  [
    "path",
    {
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
      key: "ns4c3b"
    }
  ],
  ["polygon", { points: "12 15 17 21 7 21 12 15", key: "1sy95i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/alarm-clock-check.js
var AlarmClockCheck = createLucideIcon("AlarmClockCheckIcon", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/alarm-clock-minus.js
var AlarmClockMinus = createLucideIcon("AlarmClockMinusIcon", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/alarm-clock-off.js
var AlarmClockOff = createLucideIcon("AlarmClockOffIcon", [
  ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26", key: "3on8tj" }],
  ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15", key: "15ghsc" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.26 18.67 4 21", key: "yzmioq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M4 4 2 6", key: "1ycko6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/alarm-clock-plus.js
var AlarmClockPlus = createLucideIcon("AlarmClockPlusIcon", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/alarm-clock.js
var AlarmClock = createLucideIcon("AlarmClockIcon", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/alarm-smoke.js
var AlarmSmoke = createLucideIcon("AlarmSmokeIcon", [
  ["path", { d: "M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z", key: "2c4fvq" }],
  ["path", { d: "m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8", key: "1vrndv" }],
  ["path", { d: "M16 21c0-2.5 2-2.5 2-5", key: "1o3eny" }],
  ["path", { d: "M11 21c0-2.5 2-2.5 2-5", key: "1sicvv" }],
  ["path", { d: "M6 21c0-2.5 2-2.5 2-5", key: "i3w1gp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/album.js
var Album = createLucideIcon("AlbumIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/alert-circle.js
var AlertCircle = createLucideIcon("AlertCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/alert-octagon.js
var AlertOctagon = createLucideIcon("AlertOctagonIcon", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/alert-triangle.js
var AlertTriangle = createLucideIcon("AlertTriangleIcon", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-center-horizontal.js
var AlignCenterHorizontal = createLucideIcon("AlignCenterHorizontalIcon", [
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4", key: "11f1s0" }],
  ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4", key: "t14dx9" }],
  ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1", key: "1w07xs" }],
  ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1", key: "1apec2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-center-vertical.js
var AlignCenterVertical = createLucideIcon("AlignCenterVerticalIcon", [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4", key: "14d6g8" }],
  ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4", key: "1e2lrw" }],
  ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1", key: "1fkdwx" }],
  ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1", key: "1euafb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-center.js
var AlignCenter = createLucideIcon("AlignCenterIcon", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
  ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-end-horizontal.js
var AlignEndHorizontal = createLucideIcon("AlignEndHorizontalIcon", [
  ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2", key: "z5wdxg" }],
  ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2", key: "um7a8w" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-end-vertical.js
var AlignEndVertical = createLucideIcon("AlignEndVerticalIcon", [
  ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2", key: "10wcwx" }],
  ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2", key: "4p5bwg" }],
  ["path", { d: "M22 22V2", key: "12ipfv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-horizontal-distribute-center.js
var AlignHorizontalDistributeCenter = createLucideIcon("AlignHorizontalDistributeCenterIcon", [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M17 22v-5", key: "4b6g73" }],
  ["path", { d: "M17 7V2", key: "hnrr36" }],
  ["path", { d: "M7 22v-3", key: "1r4jpn" }],
  ["path", { d: "M7 5V2", key: "liy1u9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-horizontal-distribute-end.js
var AlignHorizontalDistributeEnd = createLucideIcon("AlignHorizontalDistributeEndIcon", [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M10 2v20", key: "uyc634" }],
  ["path", { d: "M20 2v20", key: "1tx262" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-horizontal-distribute-start.js
var AlignHorizontalDistributeStart = createLucideIcon("AlignHorizontalDistributeStartIcon", [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M4 2v20", key: "gtpd5x" }],
  ["path", { d: "M14 2v20", key: "tg6bpw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-horizontal-justify-center.js
var AlignHorizontalJustifyCenter = createLucideIcon("AlignHorizontalJustifyCenterIcon", [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
  ["path", { d: "M12 2v20", key: "t6zp3m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-horizontal-justify-end.js
var AlignHorizontalJustifyEnd = createLucideIcon("AlignHorizontalJustifyEndIcon", [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
  ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2", key: "1ht384" }],
  ["path", { d: "M22 2v20", key: "40qfg1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-horizontal-justify-start.js
var AlignHorizontalJustifyStart = createLucideIcon("AlignHorizontalJustifyStartIcon", [
  ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2", key: "hsirpf" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
  ["path", { d: "M2 2v20", key: "1ivd8o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-horizontal-space-around.js
var AlignHorizontalSpaceAround = createLucideIcon("AlignHorizontalSpaceAroundIcon", [
  ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2", key: "yn7j0q" }],
  ["path", { d: "M4 22V2", key: "tsjzd3" }],
  ["path", { d: "M20 22V2", key: "1bnhr8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-horizontal-space-between.js
var AlignHorizontalSpaceBetween = createLucideIcon("AlignHorizontalSpaceBetweenIcon", [
  ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2", key: "j77dae" }],
  ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2", key: "bq30hj" }],
  ["path", { d: "M3 2v20", key: "1d2pfg" }],
  ["path", { d: "M21 2v20", key: "p059bm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-justify.js
var AlignJustify = createLucideIcon("AlignJustifyIcon", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-left.js
var AlignLeft = createLucideIcon("AlignLeftIcon", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
  ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-right.js
var AlignRight = createLucideIcon("AlignRightIcon", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-start-horizontal.js
var AlignStartHorizontal = createLucideIcon("AlignStartHorizontalIcon", [
  ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2", key: "1n4dg1" }],
  ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2", key: "17khns" }],
  ["path", { d: "M22 2H2", key: "fhrpnj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-start-vertical.js
var AlignStartVertical = createLucideIcon("AlignStartVerticalIcon", [
  ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2", key: "lpm2y7" }],
  ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2", key: "rdj6ps" }],
  ["path", { d: "M2 2v20", key: "1ivd8o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-vertical-distribute-center.js
var AlignVerticalDistributeCenter = createLucideIcon("AlignVerticalDistributeCenterIcon", [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M22 7h-5", key: "o2endc" }],
  ["path", { d: "M7 7H1", key: "105l6j" }],
  ["path", { d: "M22 17h-3", key: "1lwga1" }],
  ["path", { d: "M5 17H2", key: "1gx9xc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-vertical-distribute-end.js
var AlignVerticalDistributeEnd = createLucideIcon("AlignVerticalDistributeEndIcon", [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M2 20h20", key: "owomy5" }],
  ["path", { d: "M2 10h20", key: "1ir3d8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-vertical-distribute-start.js
var AlignVerticalDistributeStart = createLucideIcon("AlignVerticalDistributeStartIcon", [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M2 4h20", key: "mda7wb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-vertical-justify-center.js
var AlignVerticalJustifyCenter = createLucideIcon("AlignVerticalJustifyCenterIcon", [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-vertical-justify-end.js
var AlignVerticalJustifyEnd = createLucideIcon("AlignVerticalJustifyEndIcon", [
  ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2", key: "4l4tp2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
  ["path", { d: "M2 22h20", key: "272qi7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-vertical-justify-start.js
var AlignVerticalJustifyStart = createLucideIcon("AlignVerticalJustifyStartIcon", [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
  ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2", key: "13squh" }],
  ["path", { d: "M2 2h20", key: "1ennik" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-vertical-space-around.js
var AlignVerticalSpaceAround = createLucideIcon("AlignVerticalSpaceAroundIcon", [
  ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2", key: "b1zbii" }],
  ["path", { d: "M22 20H2", key: "1p1f7z" }],
  ["path", { d: "M22 4H2", key: "1b7qnq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/align-vertical-space-between.js
var AlignVerticalSpaceBetween = createLucideIcon("AlignVerticalSpaceBetweenIcon", [
  ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2", key: "1w91an" }],
  ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2", key: "17wqzy" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M2 3h20", key: "91anmk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ampersand.js
var Ampersand = createLucideIcon("AmpersandIcon", [
  [
    "path",
    {
      d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",
      key: "1o9ehi"
    }
  ],
  ["path", { d: "M16 12h3", key: "4uvgyw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ampersands.js
var Ampersands = createLucideIcon("AmpersandsIcon", [
  [
    "path",
    {
      d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
      key: "12lh1k"
    }
  ],
  [
    "path",
    {
      d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
      key: "173c68"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/anchor.js
var Anchor = createLucideIcon("AnchorIcon", [
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "8", key: "abakz7" }],
  ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3", key: "1hv3nh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/angry.js
var Angry = createLucideIcon("AngryIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["path", { d: "M7.5 8 10 9", key: "olxxln" }],
  ["path", { d: "m14 9 2.5-1", key: "1j6cij" }],
  ["path", { d: "M9 10h0", key: "1vxvly" }],
  ["path", { d: "M15 10h0", key: "1j6oav" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/annoyed.js
var Annoyed = createLucideIcon("AnnoyedIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 15h8", key: "45n4r" }],
  ["path", { d: "M8 9h2", key: "1g203m" }],
  ["path", { d: "M14 9h2", key: "116p9w" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/antenna.js
var Antenna = createLucideIcon("AntennaIcon", [
  ["path", { d: "M2 12 7 2", key: "117k30" }],
  ["path", { d: "m7 12 5-10", key: "1tvx22" }],
  ["path", { d: "m12 12 5-10", key: "ev1o1a" }],
  ["path", { d: "m17 12 5-10", key: "1e4ti3" }],
  ["path", { d: "M4.5 7h15", key: "vlsxkz" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/anvil.js
var Anvil = createLucideIcon("AnvilIcon", [
  ["path", { d: "M7 10c-2.8 0-5-2.2-5-5h5", key: "1d6adc" }],
  ["path", { d: "M7 4v8h7a8 8 0 0 0 8-8Z", key: "uu98hv" }],
  ["path", { d: "M9 12v5", key: "3anwtq" }],
  ["path", { d: "M15 12v5", key: "5xh3zn" }],
  ["path", { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H5Z", key: "10a9tj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/aperture.js
var Aperture = createLucideIcon("ApertureIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "14.31", x2: "20.05", y1: "8", y2: "17.94", key: "jdes2e" }],
  ["line", { x1: "9.69", x2: "21.17", y1: "8", y2: "8", key: "1gubuk" }],
  ["line", { x1: "7.38", x2: "13.12", y1: "12", y2: "2.06", key: "1m4d1n" }],
  ["line", { x1: "9.69", x2: "3.95", y1: "16", y2: "6.06", key: "1wye2p" }],
  ["line", { x1: "14.31", x2: "2.83", y1: "16", y2: "16", key: "1l9f4x" }],
  ["line", { x1: "16.62", x2: "10.88", y1: "12", y2: "21.94", key: "1jjvfs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/app-window.js
var AppWindow = createLucideIcon("AppWindowIcon", [
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ["path", { d: "M10 4v4", key: "pp8u80" }],
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["path", { d: "M6 4v4", key: "1svtjw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/apple.js
var Apple = createLucideIcon("AppleIcon", [
  [
    "path",
    {
      d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
      key: "3s7exb"
    }
  ],
  ["path", { d: "M10 2c1 .5 2 2 2 5", key: "fcco2y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/archive-restore.js
var ArchiveRestore = createLucideIcon("ArchiveRestoreIcon", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2", key: "tvwodi" }],
  ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2", key: "1gkqxj" }],
  ["path", { d: "m9 15 3-3 3 3", key: "1pd0qc" }],
  ["path", { d: "M12 12v9", key: "192myk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/archive-x.js
var ArchiveX = createLucideIcon("ArchiveXIcon", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "m9.5 17 5-5", key: "nakeu6" }],
  ["path", { d: "m9.5 12 5 5", key: "1hccrj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/archive.js
var Archive = createLucideIcon("ArchiveIcon", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/area-chart.js
var AreaChart = createLucideIcon("AreaChartIcon", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M7 12v5h12V8l-5 5-4-4Z", key: "zxz28u" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/armchair.js
var Armchair = createLucideIcon("ArmchairIcon", [
  ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" }],
  [
    "path",
    {
      d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",
      key: "1e01m0"
    }
  ],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-big-down-dash.js
var ArrowBigDownDash = createLucideIcon("ArrowBigDownDashIcon", [
  ["path", { d: "M15 5H9", key: "1tp3ed" }],
  ["path", { d: "M15 9v3h4l-7 7-7-7h4V9h6z", key: "oscb9h" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-big-down.js
var ArrowBigDown = createLucideIcon("ArrowBigDownIcon", [
  ["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z", key: "1thax2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-big-left-dash.js
var ArrowBigLeftDash = createLucideIcon("ArrowBigLeftDashIcon", [
  ["path", { d: "M19 15V9", key: "1hci5f" }],
  ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z", key: "16tjna" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-big-left.js
var ArrowBigLeft = createLucideIcon("ArrowBigLeftIcon", [
  ["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z", key: "lbrdak" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-big-right-dash.js
var ArrowBigRightDash = createLucideIcon("ArrowBigRightDashIcon", [
  ["path", { d: "M5 9v6", key: "158jrl" }],
  ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z", key: "1sg2xn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-big-right.js
var ArrowBigRight = createLucideIcon("ArrowBigRightIcon", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-big-up-dash.js
var ArrowBigUpDash = createLucideIcon("ArrowBigUpDashIcon", [
  ["path", { d: "M9 19h6", key: "456am0" }],
  ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z", key: "1r2uve" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-big-up.js
var ArrowBigUp = createLucideIcon("ArrowBigUpIcon", [
  ["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z", key: "1x06kx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-0-1.js
var ArrowDown01 = createLucideIcon("ArrowDown01Icon", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
  ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
  ["path", { d: "M15 20h4", key: "1j968p" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-1-0.js
var ArrowDown10 = createLucideIcon("ArrowDown10Icon", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
  ["path", { d: "M15 10h4", key: "id2lce" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-a-z.js
var ArrowDownAZ = createLucideIcon("ArrowDownAZIcon", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M20 8h-5", key: "1vsyxs" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
  ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-circle.js
var ArrowDownCircle = createLucideIcon("ArrowDownCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-from-line.js
var ArrowDownFromLine = createLucideIcon("ArrowDownFromLineIcon", [
  ["path", { d: "M19 3H5", key: "1236rx" }],
  ["path", { d: "M12 21V7", key: "gj6g52" }],
  ["path", { d: "m6 15 6 6 6-6", key: "h15q88" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-left-from-circle.js
var ArrowDownLeftFromCircle = createLucideIcon("ArrowDownLeftFromCircleIcon", [
  ["path", { d: "M2 12a10 10 0 1 1 10 10", key: "1yn6ov" }],
  ["path", { d: "m2 22 10-10", key: "28ilpk" }],
  ["path", { d: "M8 22H2v-6", key: "sulq54" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-left-square.js
var ArrowDownLeftSquare = createLucideIcon("ArrowDownLeftSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 8-8 8", key: "166keh" }],
  ["path", { d: "M16 16H8V8", key: "1w2ppm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-left.js
var ArrowDownLeft = createLucideIcon("ArrowDownLeftIcon", [
  ["path", { d: "M17 7 7 17", key: "15tmo1" }],
  ["path", { d: "M17 17H7V7", key: "1org7z" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-narrow-wide.js
var ArrowDownNarrowWide = createLucideIcon("ArrowDownNarrowWideIcon", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h4", key: "6d7r33" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h10", key: "1438ji" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-right-from-circle.js
var ArrowDownRightFromCircle = createLucideIcon("ArrowDownRightFromCircleIcon", [
  ["path", { d: "M12 22a10 10 0 1 1 10-10", key: "130bv5" }],
  ["path", { d: "M22 22 12 12", key: "131aw7" }],
  ["path", { d: "M22 16v6h-6", key: "1gvm70" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-right-square.js
var ArrowDownRightSquare = createLucideIcon("ArrowDownRightSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m8 8 8 8", key: "1imecy" }],
  ["path", { d: "M16 8v8H8", key: "1lbpgo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-right.js
var ArrowDownRight = createLucideIcon("ArrowDownRightIcon", [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-square.js
var ArrowDownSquare = createLucideIcon("ArrowDownSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-to-dot.js
var ArrowDownToDot = createLucideIcon("ArrowDownToDotIcon", [
  ["path", { d: "M12 2v14", key: "jyx4ut" }],
  ["path", { d: "m19 9-7 7-7-7", key: "1oe3oy" }],
  ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-to-line.js
var ArrowDownToLine = createLucideIcon("ArrowDownToLineIcon", [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-up.js
var ArrowDownUp = createLucideIcon("ArrowDownUpIcon", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }],
  ["path", { d: "M17 4v16", key: "7dpous" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-wide-narrow.js
var ArrowDownWideNarrow = createLucideIcon("ArrowDownWideNarrowIcon", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down-z-a.js
var ArrowDownZA = createLucideIcon("ArrowDownZAIcon", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
  ["path", { d: "M20 18h-5", key: "18j1r2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-down.js
var ArrowDown = createLucideIcon("ArrowDownIcon", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-left-circle.js
var ArrowLeftCircle = createLucideIcon("ArrowLeftCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-left-from-line.js
var ArrowLeftFromLine = createLucideIcon("ArrowLeftFromLineIcon", [
  ["path", { d: "m9 6-6 6 6 6", key: "7v63n9" }],
  ["path", { d: "M3 12h14", key: "13k4hi" }],
  ["path", { d: "M21 19V5", key: "b4bplr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-left-right.js
var ArrowLeftRight = createLucideIcon("ArrowLeftRightIcon", [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-left-square.js
var ArrowLeftSquare = createLucideIcon("ArrowLeftSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-left-to-line.js
var ArrowLeftToLine = createLucideIcon("ArrowLeftToLineIcon", [
  ["path", { d: "M3 19V5", key: "rwsyhb" }],
  ["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }],
  ["path", { d: "M7 12h14", key: "uoisry" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-left.js
var ArrowLeft = createLucideIcon("ArrowLeftIcon", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-right-circle.js
var ArrowRightCircle = createLucideIcon("ArrowRightCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-right-from-line.js
var ArrowRightFromLine = createLucideIcon("ArrowRightFromLineIcon", [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-right-left.js
var ArrowRightLeft = createLucideIcon("ArrowRightLeftIcon", [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-right-square.js
var ArrowRightSquare = createLucideIcon("ArrowRightSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-right-to-line.js
var ArrowRightToLine = createLucideIcon("ArrowRightToLineIcon", [
  ["path", { d: "M17 12H3", key: "8awo09" }],
  ["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }],
  ["path", { d: "M21 5v14", key: "nzette" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-right.js
var ArrowRight = createLucideIcon("ArrowRightIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-0-1.js
var ArrowUp01 = createLucideIcon("ArrowUp01Icon", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
  ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
  ["path", { d: "M15 20h4", key: "1j968p" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-1-0.js
var ArrowUp10 = createLucideIcon("ArrowUp10Icon", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
  ["path", { d: "M15 10h4", key: "id2lce" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-a-z.js
var ArrowUpAZ = createLucideIcon("ArrowUpAZIcon", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M20 8h-5", key: "1vsyxs" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
  ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-circle.js
var ArrowUpCircle = createLucideIcon("ArrowUpCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-down.js
var ArrowUpDown = createLucideIcon("ArrowUpDownIcon", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-from-dot.js
var ArrowUpFromDot = createLucideIcon("ArrowUpFromDotIcon", [
  ["path", { d: "m5 9 7-7 7 7", key: "1hw5ic" }],
  ["path", { d: "M12 16V2", key: "ywoabb" }],
  ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-from-line.js
var ArrowUpFromLine = createLucideIcon("ArrowUpFromLineIcon", [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-left-from-circle.js
var ArrowUpLeftFromCircle = createLucideIcon("ArrowUpLeftFromCircleIcon", [
  ["path", { d: "M2 8V2h6", key: "hiwtdz" }],
  ["path", { d: "m2 2 10 10", key: "1oh8rs" }],
  ["path", { d: "M12 2A10 10 0 1 1 2 12", key: "rrk4fa" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-left-square.js
var ArrowUpLeftSquare = createLucideIcon("ArrowUpLeftSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 16V8h8", key: "19xb1h" }],
  ["path", { d: "M16 16 8 8", key: "1qdy8n" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-left.js
var ArrowUpLeft = createLucideIcon("ArrowUpLeftIcon", [
  ["path", { d: "M7 17V7h10", key: "11bw93" }],
  ["path", { d: "M17 17 7 7", key: "2786uv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-narrow-wide.js
var ArrowUpNarrowWide = createLucideIcon("ArrowUpNarrowWideIcon", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h10", key: "jvxblo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-right-from-circle.js
var ArrowUpRightFromCircle = createLucideIcon("ArrowUpRightFromCircleIcon", [
  ["path", { d: "M22 12A10 10 0 1 1 12 2", key: "1fm58d" }],
  ["path", { d: "M22 2 12 12", key: "yg2myt" }],
  ["path", { d: "M16 2h6v6", key: "zan5cs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-right-square.js
var ArrowUpRightSquare = createLucideIcon("ArrowUpRightSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 8h8v8", key: "b65dnt" }],
  ["path", { d: "m8 16 8-8", key: "13b9ih" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-right.js
var ArrowUpRight = createLucideIcon("ArrowUpRightIcon", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-square.js
var ArrowUpSquare = createLucideIcon("ArrowUpSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-to-line.js
var ArrowUpToLine = createLucideIcon("ArrowUpToLineIcon", [
  ["path", { d: "M5 3h14", key: "7usisc" }],
  ["path", { d: "m18 13-6-6-6 6", key: "1kf1n9" }],
  ["path", { d: "M12 7v14", key: "1akyts" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-wide-narrow.js
var ArrowUpWideNarrow = createLucideIcon("ArrowUpWideNarrowIcon", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h4", key: "1krc32" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up-z-a.js
var ArrowUpZA = createLucideIcon("ArrowUpZAIcon", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
  ["path", { d: "M20 18h-5", key: "18j1r2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrow-up.js
var ArrowUp = createLucideIcon("ArrowUpIcon", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/arrows-up-from-line.js
var ArrowsUpFromLine = createLucideIcon("ArrowsUpFromLineIcon", [
  ["path", { d: "m4 6 3-3 3 3", key: "9aidw8" }],
  ["path", { d: "M7 17V3", key: "19qxw1" }],
  ["path", { d: "m14 6 3-3 3 3", key: "6iy689" }],
  ["path", { d: "M17 17V3", key: "o0fmgi" }],
  ["path", { d: "M4 21h16", key: "1h09gz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/asterisk.js
var Asterisk = createLucideIcon("AsteriskIcon", [
  ["path", { d: "M12 6v12", key: "1vza4d" }],
  ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }],
  ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/at-sign.js
var AtSign = createLucideIcon("AtSignIcon", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/atom.js
var Atom = createLucideIcon("AtomIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
      key: "1l2ple"
    }
  ],
  [
    "path",
    {
      d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
      key: "1wam0m"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/audio-lines.js
var AudioLines = createLucideIcon("AudioLinesIcon", [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/audio-waveform.js
var AudioWaveform = createLucideIcon("AudioWaveformIcon", [
  [
    "path",
    {
      d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
      key: "57tc96"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/award.js
var Award = createLucideIcon("AwardIcon", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/axe.js
var Axe = createLucideIcon("AxeIcon", [
  ["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9", key: "csbz4o" }],
  ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z", key: "113wfo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/axis-3d.js
var Axis3d = createLucideIcon("Axis3dIcon", [
  ["path", { d: "M4 4v16h16", key: "1s015l" }],
  ["path", { d: "m4 20 7-7", key: "17qe9y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/baby.js
var Baby = createLucideIcon("BabyIcon", [
  ["path", { d: "M9 12h.01", key: "157uk2" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  [
    "path",
    {
      d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "5yv0yz"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/backpack.js
var Backpack = createLucideIcon("BackpackIcon", [
  [
    "path",
    { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z", key: "wvr1b5" }
  ],
  ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" }],
  ["path", { d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5", key: "xk3gvk" }],
  ["path", { d: "M8 10h8", key: "c7uz4u" }],
  ["path", { d: "M8 18h8", key: "1no2b1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-alert.js
var BadgeAlert = createLucideIcon("BadgeAlertIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-cent.js
var BadgeCent = createLucideIcon("BadgeCentIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M15.4 10a4 4 0 1 0 0 4", key: "2eqtx8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-check.js
var BadgeCheck = createLucideIcon("BadgeCheckIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-dollar-sign.js
var BadgeDollarSign = createLucideIcon("BadgeDollarSignIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-euro.js
var BadgeEuro = createLucideIcon("BadgeEuroIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M7 12h5", key: "gblrwe" }],
  ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-help.js
var BadgeHelp = createLucideIcon("BadgeHelpIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17", key: "io3f8k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-indian-rupee.js
var BadgeIndianRupee = createLucideIcon("BadgeIndianRupeeIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M8 8h8", key: "1bis0t" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8", key: "nu2bwa" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-info.js
var BadgeInfo = createLucideIcon("BadgeInfoIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "12", key: "1y1yb1" }],
  ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8", key: "110wyk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-japanese-yen.js
var BadgeJapaneseYen = createLucideIcon("BadgeJapaneseYenIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 8 3 3v7", key: "17yadx" }],
  ["path", { d: "m12 11 3-3", key: "p4cfq1" }],
  ["path", { d: "M9 12h6", key: "1c52cq" }],
  ["path", { d: "M9 16h6", key: "8wimt3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-minus.js
var BadgeMinus = createLucideIcon("BadgeMinusIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-percent.js
var BadgePercent = createLucideIcon("BadgePercentIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-plus.js
var BadgePlus = createLucideIcon("BadgePlusIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "16", key: "10p56q" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-pound-sterling.js
var BadgePoundSterling = createLucideIcon("BadgePoundSterlingIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M8 12h4", key: "qz6y1c" }],
  ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0", key: "3mlbjk" }],
  ["path", { d: "M8 16h7", key: "sbedsn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-russian-ruble.js
var BadgeRussianRuble = createLucideIcon("BadgeRussianRubleIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M9 16h5", key: "1syiyw" }],
  ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9", key: "1ge9c1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-swiss-franc.js
var BadgeSwissFranc = createLucideIcon("BadgeSwissFrancIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M11 17V8h4", key: "1bfq6y" }],
  ["path", { d: "M11 12h3", key: "2eqnfz" }],
  ["path", { d: "M9 16h4", key: "1skf3a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge-x.js
var BadgeX = createLucideIcon("BadgeXIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/badge.js
var Badge = createLucideIcon("BadgeIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/baggage-claim.js
var BaggageClaim = createLucideIcon("BaggageClaimIcon", [
  ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2", key: "4irg2o" }],
  ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10", key: "14fcyx" }],
  ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1", key: "o6oiis" }],
  ["circle", { cx: "18", cy: "20", r: "2", key: "t9985n" }],
  ["circle", { cx: "9", cy: "20", r: "2", key: "e5v82j" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ban.js
var Ban = createLucideIcon("BanIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/banana.js
var Banana = createLucideIcon("BananaIcon", [
  ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5", key: "1cscit" }],
  [
    "path",
    {
      d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
      key: "1y1nbv"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/banknote.js
var Banknote = createLucideIcon("BanknoteIcon", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bar-chart-2.js
var BarChart2 = createLucideIcon("BarChart2Icon", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bar-chart-3.js
var BarChart3 = createLucideIcon("BarChart3Icon", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bar-chart-4.js
var BarChart4 = createLucideIcon("BarChart4Icon", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M13 17V9", key: "1fwyjl" }],
  ["path", { d: "M18 17V5", key: "sfb6ij" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bar-chart-big.js
var BarChartBig = createLucideIcon("BarChartBigIcon", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["rect", { width: "4", height: "7", x: "7", y: "10", rx: "1", key: "14u6mf" }],
  ["rect", { width: "4", height: "12", x: "15", y: "5", rx: "1", key: "b3pek6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bar-chart-horizontal-big.js
var BarChartHorizontalBig = createLucideIcon("BarChartHorizontalBigIcon", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["rect", { width: "12", height: "4", x: "7", y: "5", rx: "1", key: "936jl1" }],
  ["rect", { width: "7", height: "4", x: "7", y: "13", rx: "1", key: "jqfkpy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bar-chart-horizontal.js
var BarChartHorizontal = createLucideIcon("BarChartHorizontalIcon", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M7 16h8", key: "srdodz" }],
  ["path", { d: "M7 11h12", key: "127s9w" }],
  ["path", { d: "M7 6h3", key: "w9rmul" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bar-chart.js
var BarChart = createLucideIcon("BarChartIcon", [
  ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/barcode.js
var Barcode = createLucideIcon("BarcodeIcon", [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M8 5v14", key: "1ybrkv" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "M17 5v14", key: "ycjyhj" }],
  ["path", { d: "M21 5v14", key: "nzette" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/baseline.js
var Baseline = createLucideIcon("BaselineIcon", [
  ["path", { d: "M4 20h16", key: "14thso" }],
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bath.js
var Bath = createLucideIcon("BathIcon", [
  [
    "path",
    {
      d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
      key: "1r8yf5"
    }
  ],
  ["line", { x1: "10", x2: "8", y1: "5", y2: "7", key: "h5g8z4" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "7", x2: "7", y1: "19", y2: "21", key: "16jp00" }],
  ["line", { x1: "17", x2: "17", y1: "19", y2: "21", key: "1pxrnk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/battery-charging.js
var BatteryCharging = createLucideIcon("BatteryChargingIcon", [
  ["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2", key: "1sdynx" }],
  ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1", key: "1gkd3k" }],
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/battery-full.js
var BatteryFull = createLucideIcon("BatteryFullIcon", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "13", key: "c6fn6x" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/battery-low.js
var BatteryLow = createLucideIcon("BatteryLowIcon", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/battery-medium.js
var BatteryMedium = createLucideIcon("BatteryMediumIcon", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/battery-warning.js
var BatteryWarning = createLucideIcon("BatteryWarningIcon", [
  ["path", { d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2", key: "1if82c" }],
  ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2", key: "2pdlyl" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "10", x2: "10", y1: "7", y2: "13", key: "1uzyus" }],
  ["line", { x1: "10", x2: "10", y1: "17", y2: "17.01", key: "1y8k4g" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/battery.js
var Battery = createLucideIcon("BatteryIcon", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/beaker.js
var Beaker = createLucideIcon("BeakerIcon", [
  ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
  ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bean-off.js
var BeanOff = createLucideIcon("BeanOffIcon", [
  [
    "path",
    {
      d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",
      key: "bq3udt"
    }
  ],
  ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66", key: "17ccse" }],
  [
    "path",
    {
      d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",
      key: "18zqgq"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bean.js
var Bean = createLucideIcon("BeanIcon", [
  [
    "path",
    {
      d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
      key: "1tvzk7"
    }
  ],
  ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28", key: "2cyri2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bed-double.js
var BedDouble = createLucideIcon("BedDoubleIcon", [
  ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" }],
  ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" }],
  ["path", { d: "M12 4v6", key: "1dcgq2" }],
  ["path", { d: "M2 18h20", key: "ajqnye" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bed-single.js
var BedSingle = createLucideIcon("BedSingleIcon", [
  ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8", key: "1wm6mi" }],
  ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4", key: "4k93s5" }],
  ["path", { d: "M3 18h18", key: "1h113x" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bed.js
var Bed = createLucideIcon("BedIcon", [
  ["path", { d: "M2 4v16", key: "vw9hq8" }],
  ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
  ["path", { d: "M2 17h20", key: "18nfp3" }],
  ["path", { d: "M6 8v9", key: "1yriud" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/beef.js
var Beef = createLucideIcon("BeefIcon", [
  ["circle", { cx: "12.5", cy: "8.5", r: "2.5", key: "9738u8" }],
  [
    "path",
    {
      d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",
      key: "o0f6za"
    }
  ],
  [
    "path",
    {
      d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
      key: "k7p6i0"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/beer.js
var Beer = createLucideIcon("BeerIcon", [
  ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1", key: "1yp76v" }],
  ["path", { d: "M9 12v6", key: "1u1cab" }],
  ["path", { d: "M13 12v6", key: "1sugkk" }],
  [
    "path",
    {
      d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
      key: "1510fo"
    }
  ],
  ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "19jb7n" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bell-dot.js
var BellDot = createLucideIcon("BellDotIcon", [
  [
    "path",
    {
      d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",
      key: "xcehk"
    }
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["circle", { cx: "18", cy: "8", r: "3", key: "1g0gzu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bell-electric.js
var BellElectric = createLucideIcon("BellElectricIcon", [
  ["path", { d: "M18.8 4A6.3 8.7 0 0 1 20 9", key: "xve1fh" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
  ["rect", { width: "10", height: "6", x: "4", y: "16", rx: "2", key: "17f3te" }],
  ["path", { d: "M14 19c3 0 4.6-1.6 4.6-1.6", key: "n7odp6" }],
  ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bell-minus.js
var BellMinus = createLucideIcon("BellMinusIcon", [
  [
    "path",
    { d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2", key: "eck70s" }
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M15 8h6", key: "8ybuxh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bell-off.js
var BellOff = createLucideIcon("BellOffIcon", [
  ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
  ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bell-plus.js
var BellPlus = createLucideIcon("BellPlusIcon", [
  [
    "path",
    {
      d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",
      key: "guizqy"
    }
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M15 8h6", key: "8ybuxh" }],
  ["path", { d: "M18 5v6", key: "g5ayrv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bell-ring.js
var BellRing = createLucideIcon("BellRingIcon", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bell.js
var Bell = createLucideIcon("BellIcon", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bike.js
var Bike = createLucideIcon("BikeIcon", [
  ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
  ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/binary.js
var Binary = createLucideIcon("BinaryIcon", [
  ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2", key: "p02svl" }],
  ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2", key: "xm4xkj" }],
  ["path", { d: "M6 20h4", key: "1i6q5t" }],
  ["path", { d: "M14 10h4", key: "ru81e7" }],
  ["path", { d: "M6 14h2v6", key: "16z9wg" }],
  ["path", { d: "M14 4h2v6", key: "1idq9u" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/biohazard.js
var Biohazard = createLucideIcon("BiohazardIcon", [
  ["circle", { cx: "12", cy: "11.9", r: "2", key: "e8h31w" }],
  ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6", key: "17bolr" }],
  ["path", { d: "m8.9 10.1 1.4.8", key: "15ezny" }],
  ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5", key: "wtwa5u" }],
  ["path", { d: "m15.1 10.1-1.4.8", key: "1r0b28" }],
  ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2", key: "m7qszh" }],
  ["path", { d: "M12 13.9v1.6", key: "zfyyim" }],
  ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0", key: "1bi9q0" }],
  ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5", key: "1rhjqw" }],
  ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5", key: "8gsud3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bird.js
var Bird = createLucideIcon("BirdIcon", [
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20", key: "oj1oa8" }],
  ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }],
  ["path", { d: "M10 18v3", key: "1yea0a" }],
  ["path", { d: "M14 17.75V21", key: "1pymcb" }],
  ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bitcoin.js
var Bitcoin = createLucideIcon("BitcoinIcon", [
  [
    "path",
    {
      d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
      key: "yr8idg"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/blinds.js
var Blinds = createLucideIcon("BlindsIcon", [
  ["path", { d: "M3 3h18", key: "o7r712" }],
  ["path", { d: "M20 7H8", key: "gd2fo2" }],
  ["path", { d: "M20 11H8", key: "1ynp89" }],
  ["path", { d: "M10 19h10", key: "19hjk5" }],
  ["path", { d: "M8 15h12", key: "1yqzne" }],
  ["path", { d: "M4 3v14", key: "fggqzn" }],
  ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/blocks.js
var Blocks = createLucideIcon("BlocksIcon", [
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  [
    "path",
    {
      d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
      key: "1fpvtg"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bluetooth-connected.js
var BluetoothConnected = createLucideIcon("BluetoothConnectedIcon", [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "12", key: "1rsjjs" }],
  ["line", { x1: "3", x2: "6", y1: "12", y2: "12", key: "11yl8c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bluetooth-off.js
var BluetoothOff = createLucideIcon("BluetoothOffIcon", [
  ["path", { d: "m17 17-5 5V12l-5 5", key: "v5aci6" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M14.5 9.5 17 7l-5-5v4.5", key: "1kddfz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bluetooth-searching.js
var BluetoothSearching = createLucideIcon("BluetoothSearchingIcon", [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
  ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66", key: "k8tn1j" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bluetooth.js
var Bluetooth = createLucideIcon("BluetoothIcon", [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bold.js
var Bold = createLucideIcon("BoldIcon", [
  ["path", { d: "M14 12a4 4 0 0 0 0-8H6v8", key: "v2sylx" }],
  ["path", { d: "M15 20a4 4 0 0 0 0-8H6v8Z", key: "1ef5ya" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bomb.js
var Bomb = createLucideIcon("BombIcon", [
  ["circle", { cx: "11", cy: "13", r: "9", key: "hd149" }],
  [
    "path",
    {
      d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",
      key: "jp4j1b"
    }
  ],
  ["path", { d: "m22 2-1.5 1.5", key: "ay92ug" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bone.js
var Bone = createLucideIcon("BoneIcon", [
  [
    "path",
    {
      d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
      key: "w610uw"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-a.js
var BookA = createLucideIcon("BookAIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "m8 13 4-7 4 7", key: "4rari8" }],
  ["path", { d: "M9.1 11h5.7", key: "1gkovt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-audio.js
var BookAudio = createLucideIcon("BookAudioIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M8 8v3", key: "1qzp49" }],
  ["path", { d: "M12 6v7", key: "1f6ttz" }],
  ["path", { d: "M16 8v3", key: "gejaml" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-check.js
var BookCheck = createLucideIcon("BookCheckIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "m9 9.5 2 2 4-4", key: "1dth82" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-copy.js
var BookCopy = createLucideIcon("BookCopyIcon", [
  ["path", { d: "M2 16V4a2 2 0 0 1 2-2h11", key: "spzkk5" }],
  ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1", key: "16gqf9" }],
  ["path", { d: "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12", key: "1owzki" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-dashed.js
var BookDashed = createLucideIcon("BookDashedIcon", [
  ["path", { d: "M20 22h-2", key: "1rpnb6" }],
  ["path", { d: "M20 15v2h-2", key: "fph276" }],
  ["path", { d: "M4 19.5V15", key: "6gr39e" }],
  ["path", { d: "M20 8v3", key: "deu0bs" }],
  ["path", { d: "M18 2h2v2", key: "180o53" }],
  ["path", { d: "M4 11V9", key: "v3xsx8" }],
  ["path", { d: "M12 2h2", key: "cvn524" }],
  ["path", { d: "M12 22h2", key: "kn7ki6" }],
  ["path", { d: "M12 17h2", key: "13u4lk" }],
  ["path", { d: "M8 22H6.5a2.5 2.5 0 0 1 0-5H8", key: "fiseg2" }],
  ["path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8", key: "wywhs9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-down.js
var BookDown = createLucideIcon("BookDownIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m9 10 3 3 3-3", key: "zt5b4y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-headphones.js
var BookHeadphones = createLucideIcon("BookHeadphonesIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2", key: "1vsqkj" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-heart.js
var BookHeart = createLucideIcon("BookHeartIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  [
    "path",
    {
      d: "M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",
      key: "1dlbw1"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-image.js
var BookImage = createLucideIcon("BookImageIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["circle", { cx: "10", cy: "8", r: "2", key: "2qkj4p" }],
  ["path", { d: "m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17", key: "160say" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-key.js
var BookKey = createLucideIcon("BookKeyIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14", key: "1gfsgw" }],
  ["path", { d: "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20", key: "zb0ngp" }],
  ["circle", { cx: "14", cy: "8", r: "2", key: "u49eql" }],
  ["path", { d: "m20 2-4.5 4.5", key: "1sppr8" }],
  ["path", { d: "m19 3 1 1", key: "ze14oc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-lock.js
var BookLock = createLucideIcon("BookLockIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10", key: "18wgow" }],
  ["path", { d: "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20", key: "dpch1j" }],
  ["rect", { width: "8", height: "5", x: "12", y: "6", rx: "1", key: "9nqwug" }],
  ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2", key: "1aquzs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-marked.js
var BookMarked = createLucideIcon("BookMarkedIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["polyline", { points: "10 2 10 10 13 7 16 10 16 2", key: "13o6vz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-minus.js
var BookMinus = createLucideIcon("BookMinusIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-open-check.js
var BookOpenCheck = createLucideIcon("BookOpenCheckIcon", [
  ["path", { d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z", key: "1i8u0n" }],
  ["path", { d: "m16 12 2 2 4-4", key: "mdajum" }],
  ["path", { d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3", key: "jb5l51" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-open-text.js
var BookOpenText = createLucideIcon("BookOpenTextIcon", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
  ["path", { d: "M6 8h2", key: "30oboj" }],
  ["path", { d: "M6 12h2", key: "32wvfc" }],
  ["path", { d: "M16 8h2", key: "msurwy" }],
  ["path", { d: "M16 12h2", key: "7q9ll5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-open.js
var BookOpen = createLucideIcon("BookOpenIcon", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-plus.js
var BookPlus = createLucideIcon("BookPlusIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-text.js
var BookText = createLucideIcon("BookTextIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M8 7h6", key: "1f0q6e" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-type.js
var BookType = createLucideIcon("BookTypeIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M16 8V6H8v2", key: "x8j6u4" }],
  ["path", { d: "M12 6v7", key: "1f6ttz" }],
  ["path", { d: "M10 13h4", key: "ytezjc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-up-2.js
var BookUp2 = createLucideIcon("BookUp2Icon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2", key: "1lorq7" }],
  ["path", { d: "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "1nfm9i" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
  ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-up.js
var BookUp = createLucideIcon("BookUpIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-user.js
var BookUser = createLucideIcon("BookUserIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M15 13a3 3 0 1 0-6 0", key: "10j68g" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book-x.js
var BookX = createLucideIcon("BookXIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "m14.5 7-5 5", key: "dy991v" }],
  ["path", { d: "m9.5 7 5 5", key: "s45iea" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/book.js
var Book = createLucideIcon("BookIcon", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bookmark-check.js
var BookmarkCheck = createLucideIcon("BookmarkCheckIcon", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bookmark-minus.js
var BookmarkMinus = createLucideIcon("BookmarkMinusIcon", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
  ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bookmark-plus.js
var BookmarkPlus = createLucideIcon("BookmarkPlusIcon", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
  ["line", { x1: "12", x2: "12", y1: "7", y2: "13", key: "1cppfj" }],
  ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bookmark-x.js
var BookmarkX = createLucideIcon("BookmarkXIcon", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
  ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
  ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bookmark.js
var Bookmark = createLucideIcon("BookmarkIcon", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/boom-box.js
var BoomBox = createLucideIcon("BoomBoxIcon", [
  ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "vvzvr1" }],
  ["path", { d: "M8 8v1", key: "xcqmfk" }],
  ["path", { d: "M12 8v1", key: "1rj8u4" }],
  ["path", { d: "M16 8v1", key: "1q12zr" }],
  ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2", key: "igpb89" }],
  ["circle", { cx: "8", cy: "15", r: "2", key: "fa4a8s" }],
  ["circle", { cx: "16", cy: "15", r: "2", key: "14c3ya" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bot.js
var Bot = createLucideIcon("BotIcon", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/box-select.js
var BoxSelect = createLucideIcon("BoxSelectIcon", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M21 14v1", key: "169vum" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/box.js
var Box = createLucideIcon("BoxIcon", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/boxes.js
var Boxes = createLucideIcon("BoxesIcon", [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/braces.js
var Braces = createLucideIcon("BracesIcon", [
  [
    "path",
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/brackets.js
var Brackets = createLucideIcon("BracketsIcon", [
  ["path", { d: "M16 3h3v18h-3", key: "1yor1f" }],
  ["path", { d: "M8 21H5V3h3", key: "1qrfwo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/brain-circuit.js
var BrainCircuit = createLucideIcon("BrainCircuitIcon", [
  [
    "path",
    {
      d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z",
      key: "ixwj2a"
    }
  ],
  ["path", { d: "M16 8V5c0-1.1.9-2 2-2", key: "13dx7u" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "1s25gz" }],
  ["path", { d: "M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "127460" }],
  ["path", { d: "M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "fys062" }],
  ["path", { d: "M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "1vib61" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/brain-cog.js
var BrainCog = createLucideIcon("BrainCogIcon", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  [
    "path",
    {
      d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5",
      key: "1f4le0"
    }
  ],
  ["path", { d: "m15.7 10.4-.9.4", key: "ayzo6p" }],
  ["path", { d: "m9.2 13.2-.9.4", key: "1uzb3g" }],
  ["path", { d: "m13.6 15.7-.4-.9", key: "11ifqf" }],
  ["path", { d: "m10.8 9.2-.4-.9", key: "1pmk2v" }],
  ["path", { d: "m15.7 13.5-.9-.4", key: "7ng02m" }],
  ["path", { d: "m9.2 10.9-.9-.4", key: "1x66zd" }],
  ["path", { d: "m10.5 15.7.4-.9", key: "3js94g" }],
  ["path", { d: "m13.1 9.2.4-.9", key: "18n7mc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/brain.js
var Brain = createLucideIcon("BrainIcon", [
  [
    "path",
    {
      d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",
      key: "1mhkh5"
    }
  ],
  [
    "path",
    {
      d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",
      key: "1d6s00"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/brick-wall.js
var BrickWall = createLucideIcon("BrickWallIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 9v6", key: "199k2o" }],
  ["path", { d: "M16 15v6", key: "8rj2es" }],
  ["path", { d: "M16 3v6", key: "1j6rpj" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M8 15v6", key: "1stoo3" }],
  ["path", { d: "M8 3v6", key: "vlvjmk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/briefcase.js
var Briefcase = createLucideIcon("BriefcaseIcon", [
  ["rect", { width: "20", height: "14", x: "2", y: "7", rx: "2", ry: "2", key: "eto64e" }],
  ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bring-to-front.js
var BringToFront = createLucideIcon("BringToFrontIcon", [
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2", key: "yj20xf" }],
  ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2", key: "1ltk23" }],
  ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2", key: "1q24h9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/brush.js
var Brush = createLucideIcon("BrushIcon", [
  ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08", key: "1styjt" }],
  [
    "path",
    {
      d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      key: "z0l1mu"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bug-off.js
var BugOff = createLucideIcon("BugOffIcon", [
  ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2", key: "vl8zik" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3", key: "1ou0bd" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13", key: "1njkjs" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bug-play.js
var BugPlay = createLucideIcon("BugPlayIcon", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  ["path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5", key: "1tjixy" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "m12 12 8 5-8 5Z", key: "1ydf81" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bug.js
var Bug = createLucideIcon("BugIcon", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7"
    }
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/building-2.js
var Building2 = createLucideIcon("Building2Icon", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/building.js
var Building = createLucideIcon("BuildingIcon", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bus-front.js
var BusFront = createLucideIcon("BusFrontIcon", [
  ["path", { d: "M4 6 2 7", key: "1mqr15" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "m22 7-2-1", key: "1umjhc" }],
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 21v-2", key: "sqyl04" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/bus.js
var Bus = createLucideIcon("BusIcon", [
  ["path", { d: "M8 6v6", key: "18i7km" }],
  ["path", { d: "M15 6v6", key: "1sg6z9" }],
  ["path", { d: "M2 12h19.6", key: "de5uta" }],
  [
    "path",
    {
      d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
      key: "1wwztk"
    }
  ],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ["path", { d: "M9 18h5", key: "lrx6i" }],
  ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cable-car.js
var CableCar = createLucideIcon("CableCarIcon", [
  ["path", { d: "M10 3h.01", key: "lbucoy" }],
  ["path", { d: "M14 2h.01", key: "1k8aa1" }],
  ["path", { d: "m2 9 20-5", key: "1kz0j5" }],
  ["path", { d: "M12 12V6.5", key: "1vbrij" }],
  ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3", key: "if91er" }],
  ["path", { d: "M9 12v5", key: "3anwtq" }],
  ["path", { d: "M15 12v5", key: "5xh3zn" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cable.js
var Cable = createLucideIcon("CableIcon", [
  ["path", { d: "M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z", key: "1s6oa5" }],
  ["path", { d: "M3 5V3", key: "1k5hjh" }],
  ["path", { d: "M7 5V3", key: "1t1388" }],
  ["path", { d: "M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9", key: "1ytv72" }],
  ["path", { d: "M17 21v-2", key: "ds4u3f" }],
  ["path", { d: "M21 21v-2", key: "eo0ou" }],
  ["path", { d: "M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z", key: "sdz6o8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cake-slice.js
var CakeSlice = createLucideIcon("CakeSliceIcon", [
  ["circle", { cx: "9", cy: "7", r: "2", key: "1305pl" }],
  [
    "path",
    { d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6", key: "xle13f" }
  ],
  ["path", { d: "M16 13H3", key: "1wpj08" }],
  ["path", { d: "M16 17H3", key: "3lvfcd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cake.js
var Cake = createLucideIcon("CakeIcon", [
  ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }],
  ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", key: "n2jgmb" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M7 8v3", key: "1qtyvj" }],
  ["path", { d: "M12 8v3", key: "hwp4zt" }],
  ["path", { d: "M17 8v3", key: "1i6e5u" }],
  ["path", { d: "M7 4h0.01", key: "hsw7lv" }],
  ["path", { d: "M12 4h0.01", key: "1e3d8f" }],
  ["path", { d: "M17 4h0.01", key: "p7cxgy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calculator.js
var Calculator = createLucideIcon("CalculatorIcon", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-check-2.js
var CalendarCheck2 = createLucideIcon("CalendarCheck2Icon", [
  ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "bce9hv" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-check.js
var CalendarCheck = createLucideIcon("CalendarCheckIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-clock.js
var CalendarClock = createLucideIcon("CalendarClockIcon", [
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.25V14", key: "re2vv1" }],
  ["path", { d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z", key: "ame013" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-days.js
var CalendarDays = createLucideIcon("CalendarDaysIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-heart.js
var CalendarHeart = createLucideIcon("CalendarHeartIcon", [
  ["path", { d: "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7", key: "1sfrvf" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  [
    "path",
    {
      d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
      key: "1t7hil"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-minus.js
var CalendarMinus = createLucideIcon("CalendarMinusIcon", [
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["line", { x1: "16", x2: "22", y1: "19", y2: "19", key: "1g9955" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-off.js
var CalendarOff = createLucideIcon("CalendarOffIcon", [
  [
    "path",
    { d: "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18", key: "1feomx" }
  ],
  ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5", key: "yhw86o" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h7", key: "1wap6i" }],
  ["path", { d: "M21 10h-5.5", key: "quycpq" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-plus.js
var CalendarPlus = createLucideIcon("CalendarPlusIcon", [
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["line", { x1: "19", x2: "19", y1: "16", y2: "22", key: "1ttwzi" }],
  ["line", { x1: "16", x2: "22", y1: "19", y2: "19", key: "1g9955" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-range.js
var CalendarRange = createLucideIcon("CalendarRangeIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "M17 14h-6", key: "bkmgh3" }],
  ["path", { d: "M13 18H7", key: "bb0bb7" }],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 18h.01", key: "1bdyru" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-search.js
var CalendarSearch = createLucideIcon("CalendarSearchIcon", [
  ["path", { d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5", key: "18ncp8" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z", key: "mgbru4" }],
  ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-x-2.js
var CalendarX2 = createLucideIcon("CalendarX2Icon", [
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["line", { x1: "17", x2: "22", y1: "17", y2: "22", key: "xa9o8b" }],
  ["line", { x1: "17", x2: "22", y1: "22", y2: "17", key: "18nitg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar-x.js
var CalendarX = createLucideIcon("CalendarXIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["line", { x1: "10", x2: "14", y1: "14", y2: "18", key: "1g3qc0" }],
  ["line", { x1: "14", x2: "10", y1: "14", y2: "18", key: "1az83m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/calendar.js
var Calendar = createLucideIcon("CalendarIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/camera-off.js
var CameraOff = createLucideIcon("CameraOffIcon", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16", key: "qmtpty" }],
  ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5", key: "1ufyfc" }],
  ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88", key: "11zox6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/camera.js
var Camera = createLucideIcon("CameraIcon", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/candlestick-chart.js
var CandlestickChart = createLucideIcon("CandlestickChartIcon", [
  ["path", { d: "M9 5v4", key: "14uxtq" }],
  ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1", key: "f4fvz0" }],
  ["path", { d: "M9 15v2", key: "r5rk32" }],
  ["path", { d: "M17 3v2", key: "1l2re6" }],
  ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1", key: "z38je5" }],
  ["path", { d: "M17 13v3", key: "5l0wba" }],
  ["path", { d: "M3 3v18h18", key: "1s2lah" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/candy-cane.js
var CandyCane = createLucideIcon("CandyCaneIcon", [
  [
    "path",
    {
      d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",
      key: "isaq8g"
    }
  ],
  ["path", { d: "M17.75 7 15 2.1", key: "12x7e8" }],
  ["path", { d: "M10.9 4.8 13 9", key: "100a87" }],
  ["path", { d: "m7.9 9.7 2 4.4", key: "ntfhaj" }],
  ["path", { d: "M4.9 14.7 7 18.9", key: "1x43jy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/candy-off.js
var CandyOff = createLucideIcon("CandyOffIcon", [
  ["path", { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1", key: "1ff4ui" }],
  [
    "path",
    { d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657", key: "1sbrv4" }
  ],
  ["path", { d: "M14 16.5V14", key: "1maf8j" }],
  ["path", { d: "M14 6.5v1.843", key: "1a6u6t" }],
  ["path", { d: "M10 10v7.5", key: "80pj65" }],
  [
    "path",
    {
      d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",
      key: "11a9mt"
    }
  ],
  [
    "path",
    {
      d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",
      key: "3mjmon"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/candy.js
var Candy = createLucideIcon("CandyIcon", [
  ["path", { d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z", key: "ue6khb" }],
  ["path", { d: "M14 6.5v10", key: "5xnk7c" }],
  ["path", { d: "M10 7.5v10", key: "1uew51" }],
  [
    "path",
    { d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1", key: "b9cp6k" }
  ],
  [
    "path",
    { d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1", key: "5lney8" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/car-front.js
var CarFront = createLucideIcon("CarFrontIcon", [
  [
    "path",
    { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
  ],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/car-taxi-front.js
var CarTaxiFront = createLucideIcon("CarTaxiFrontIcon", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  [
    "path",
    { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
  ],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/car.js
var Car = createLucideIcon("CarIcon", [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/caravan.js
var Caravan = createLucideIcon("CaravanIcon", [
  ["rect", { width: "4", height: "4", x: "2", y: "9", key: "1vcvhd" }],
  ["rect", { width: "4", height: "10", x: "10", y: "9", key: "1b7ev2" }],
  ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2", key: "19jm3t" }],
  ["circle", { cx: "8", cy: "19", r: "2", key: "t8fc5s" }],
  ["path", { d: "M10 19h12v-2", key: "1yu2qx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/carrot.js
var Carrot = createLucideIcon("CarrotIcon", [
  [
    "path",
    {
      d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
      key: "rfqxbe"
    }
  ],
  ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z", key: "6b25w4" }],
  ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z", key: "fn65lo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/case-lower.js
var CaseLower = createLucideIcon("CaseLowerIcon", [
  ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
  ["path", { d: "M10 9v6", key: "17i7lo" }],
  ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
  ["path", { d: "M14 7v8", key: "dl84cr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/case-sensitive.js
var CaseSensitive = createLucideIcon("CaseSensitiveIcon", [
  ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
  ["path", { d: "M4 13h6", key: "1r9ots" }],
  ["circle", { cx: "18", cy: "12", r: "3", key: "1kchzo" }],
  ["path", { d: "M21 9v6", key: "anns31" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/case-upper.js
var CaseUpper = createLucideIcon("CaseUpperIcon", [
  ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
  ["path", { d: "M4 13h6", key: "1r9ots" }],
  ["path", { d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4", key: "1sqfas" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cassette-tape.js
var CassetteTape = createLucideIcon("CassetteTapeIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["circle", { cx: "8", cy: "10", r: "2", key: "1xl4ub" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["circle", { cx: "16", cy: "10", r: "2", key: "r14t7q" }],
  ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3", key: "l01ucn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cast.js
var Cast = createLucideIcon("CastIcon", [
  ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }],
  ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
  ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
  ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/castle.js
var Castle = createLucideIcon("CastleIcon", [
  ["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z", key: "109fe4" }],
  ["path", { d: "M18 11V4H6v7", key: "mon5oj" }],
  ["path", { d: "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4", key: "jdggr9" }],
  ["path", { d: "M22 11V9", key: "3zbp94" }],
  ["path", { d: "M2 11V9", key: "1x5rnq" }],
  ["path", { d: "M6 4V2", key: "1rsq15" }],
  ["path", { d: "M18 4V2", key: "1jsdo1" }],
  ["path", { d: "M10 4V2", key: "75d9ly" }],
  ["path", { d: "M14 4V2", key: "8nj3z6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cat.js
var Cat = createLucideIcon("CatIcon", [
  [
    "path",
    {
      d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",
      key: "x6xyqk"
    }
  ],
  ["path", { d: "M8 14v.5", key: "1nzgdb" }],
  ["path", { d: "M16 14v.5", key: "1lajdz" }],
  ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cctv.js
var Cctv = createLucideIcon("CctvIcon", [
  ["path", { d: "M7 9h.01", key: "19b3jx" }],
  ["path", { d: "M16.75 12H22l-3.5 7-3.09-4.32", key: "1h9vqe" }],
  [
    "path",
    {
      d: "M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",
      key: "q5d122"
    }
  ],
  ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15", key: "19bib8" }],
  ["path", { d: "M2 21v-4", key: "l40lih" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/check-check.js
var CheckCheck = createLucideIcon("CheckCheckIcon", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/check-circle-2.js
var CheckCircle2 = createLucideIcon("CheckCircle2Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/check-circle.js
var CheckCircle = createLucideIcon("CheckCircleIcon", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/check-square-2.js
var CheckSquare2 = createLucideIcon("CheckSquare2Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/check-square.js
var CheckSquare = createLucideIcon("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/check.js
var Check = createLucideIcon("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chef-hat.js
var ChefHat = createLucideIcon("ChefHatIcon", [
  [
    "path",
    {
      d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",
      key: "z3ra2g"
    }
  ],
  ["line", { x1: "6", x2: "18", y1: "17", y2: "17", key: "12q60k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cherry.js
var Cherry = createLucideIcon("CherryIcon", [
  ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "cvxqlc" }],
  ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "1ostrc" }],
  ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12", key: "hqx58h" }],
  ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z", key: "eykp1o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-down-circle.js
var ChevronDownCircle = createLucideIcon("ChevronDownCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-down-square.js
var ChevronDownSquare = createLucideIcon("ChevronDownSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-down.js
var ChevronDown = createLucideIcon("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-first.js
var ChevronFirst = createLucideIcon("ChevronFirstIcon", [
  ["path", { d: "m17 18-6-6 6-6", key: "1yerx2" }],
  ["path", { d: "M7 6v12", key: "1p53r6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-last.js
var ChevronLast = createLucideIcon("ChevronLastIcon", [
  ["path", { d: "m7 18 6-6-6-6", key: "lwmzdw" }],
  ["path", { d: "M17 6v12", key: "1o0aio" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-left-circle.js
var ChevronLeftCircle = createLucideIcon("ChevronLeftCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-left-square.js
var ChevronLeftSquare = createLucideIcon("ChevronLeftSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-left.js
var ChevronLeft = createLucideIcon("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-right-circle.js
var ChevronRightCircle = createLucideIcon("ChevronRightCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-right-square.js
var ChevronRightSquare = createLucideIcon("ChevronRightSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-right.js
var ChevronRight = createLucideIcon("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-up-circle.js
var ChevronUpCircle = createLucideIcon("ChevronUpCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-up-square.js
var ChevronUpSquare = createLucideIcon("ChevronUpSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevron-up.js
var ChevronUp = createLucideIcon("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevrons-down-up.js
var ChevronsDownUp = createLucideIcon("ChevronsDownUpIcon", [
  ["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }],
  ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevrons-down.js
var ChevronsDown = createLucideIcon("ChevronsDownIcon", [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevrons-left-right.js
var ChevronsLeftRight = createLucideIcon("ChevronsLeftRightIcon", [
  ["path", { d: "m9 7-5 5 5 5", key: "j5w590" }],
  ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevrons-left.js
var ChevronsLeft = createLucideIcon("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevrons-right-left.js
var ChevronsRightLeft = createLucideIcon("ChevronsRightLeftIcon", [
  ["path", { d: "m20 17-5-5 5-5", key: "30x0n2" }],
  ["path", { d: "m4 17 5-5-5-5", key: "16spf4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevrons-right.js
var ChevronsRight = createLucideIcon("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevrons-up-down.js
var ChevronsUpDown = createLucideIcon("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chevrons-up.js
var ChevronsUp = createLucideIcon("ChevronsUpIcon", [
  ["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }],
  ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/chrome.js
var Chrome = createLucideIcon("ChromeIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
  ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" }],
  ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/church.js
var Church = createLucideIcon("ChurchIcon", [
  ["path", { d: "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2", key: "gy5gyo" }],
  ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4", key: "cpkuc4" }],
  ["path", { d: "M18 22V5l-6-3-6 3v17", key: "1hsnhq" }],
  ["path", { d: "M12 7v5", key: "ma6bk" }],
  ["path", { d: "M10 9h4", key: "u4k05v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cigarette-off.js
var CigaretteOff = createLucideIcon("CigaretteOffIcon", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M12 12H2v4h14", key: "91gsaq" }],
  ["path", { d: "M22 12v4", key: "142cbu" }],
  ["path", { d: "M18 12h-.5", key: "12ymji" }],
  ["path", { d: "M7 12v4", key: "jqww69" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cigarette.js
var Cigarette = createLucideIcon("CigaretteIcon", [
  ["path", { d: "M18 12H2v4h16", key: "2rt1hm" }],
  ["path", { d: "M22 12v4", key: "142cbu" }],
  ["path", { d: "M7 12v4", key: "jqww69" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-dashed.js
var CircleDashed = createLucideIcon("CircleDashedIcon", [
  ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
  ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
  ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
  ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }],
  ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
  ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
  ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
  ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-dollar-sign.js
var CircleDollarSign = createLucideIcon("CircleDollarSignIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-dot-dashed.js
var CircleDotDashed = createLucideIcon("CircleDotDashedIcon", [
  ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
  ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
  ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
  ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }],
  ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
  ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
  ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
  ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-dot.js
var CircleDot = createLucideIcon("CircleDotIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-ellipsis.js
var CircleEllipsis = createLucideIcon("CircleEllipsisIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-equal.js
var CircleEqual = createLucideIcon("CircleEqualIcon", [
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M7 14h10", key: "1mhdw3" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-off.js
var CircleOff = createLucideIcon("CircleOffIcon", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
  ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-slash-2.js
var CircleSlash2 = createLucideIcon("CircleSlash2Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M22 2 2 22", key: "y4kqgn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-slash.js
var CircleSlash = createLucideIcon("CircleSlashIcon", [
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-user-round.js
var CircleUserRound = createLucideIcon("CircleUserRoundIcon", [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle-user.js
var CircleUser = createLucideIcon("CircleUserIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circle.js
var Circle = createLucideIcon("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/circuit-board.js
var CircuitBoard = createLucideIcon("CircuitBoardIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3", key: "1ve2rv" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4", key: "1fwkro" }],
  ["circle", { cx: "15", cy: "15", r: "2", key: "3i40o0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/citrus.js
var Citrus = createLucideIcon("CitrusIcon", [
  [
    "path",
    {
      d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",
      key: "4ite01"
    }
  ],
  ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34", key: "1gxipu" }],
  ["path", { d: "m14 10-5.5 5.5", key: "92pfem" }],
  ["path", { d: "M14 17.85V10H6.15", key: "xqmtsk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clapperboard.js
var Clapperboard = createLucideIcon("ClapperboardIcon", [
  [
    "path",
    { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" }
  ],
  ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
  ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
  ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clipboard-check.js
var ClipboardCheck = createLucideIcon("ClipboardCheckIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clipboard-copy.js
var ClipboardCopy = createLucideIcon("ClipboardCopyIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", key: "4jdomd" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
  ["path", { d: "M21 14H11", key: "1bme5i" }],
  ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clipboard-edit.js
var ClipboardEdit = createLucideIcon("ClipboardEditIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    { d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z", key: "1rgxu8" }
  ],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5", key: "cereej" }],
  ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2", key: "5ua5vh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clipboard-list.js
var ClipboardList = createLucideIcon("ClipboardListIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clipboard-paste.js
var ClipboardPaste = createLucideIcon("ClipboardPasteIcon", [
  [
    "path",
    { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z", key: "1pp7kr" }
  ],
  [
    "path",
    {
      d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",
      key: "2ik1ml"
    }
  ],
  ["path", { d: "m17 10 4 4-4 4", key: "vp2hj1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clipboard-signature.js
var ClipboardSignature = createLucideIcon("ClipboardSignatureIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5", key: "1but9f" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1", key: "1p8n7l" }],
  [
    "path",
    { d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z", key: "johvi5" }
  ],
  ["path", { d: "M8 18h1", key: "13wk12" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clipboard-type.js
var ClipboardType = createLucideIcon("ClipboardTypeIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M9 12v-1h6v1", key: "iehl6m" }],
  ["path", { d: "M11 17h2", key: "12w5me" }],
  ["path", { d: "M12 11v6", key: "1bwqyc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clipboard-x.js
var ClipboardX = createLucideIcon("ClipboardXIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m15 11-6 6", key: "1toa9n" }],
  ["path", { d: "m9 11 6 6", key: "wlibny" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clipboard.js
var Clipboard = createLucideIcon("ClipboardIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-1.js
var Clock1 = createLucideIcon("Clock1Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 14.5 8", key: "12zbmj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-10.js
var Clock10 = createLucideIcon("Clock10Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 8 10", key: "atfzqc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-11.js
var Clock11 = createLucideIcon("Clock11Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 9.5 8", key: "l5bg6f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-12.js
var Clock12 = createLucideIcon("Clock12Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12", key: "1fub01" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-2.js
var Clock2 = createLucideIcon("Clock2Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 10", key: "1g230d" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-3.js
var Clock3 = createLucideIcon("Clock3Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-4.js
var Clock4 = createLucideIcon("Clock4Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-5.js
var Clock5 = createLucideIcon("Clock5Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 14.5 16", key: "1pcbox" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-6.js
var Clock6 = createLucideIcon("Clock6Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 12 16.5", key: "hb2qv6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-7.js
var Clock7 = createLucideIcon("Clock7Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 9.5 16", key: "ka3394" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-8.js
var Clock8 = createLucideIcon("Clock8Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 8 14", key: "tmc9b4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock-9.js
var Clock9 = createLucideIcon("Clock9Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 7.5 12", key: "1k60p0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clock.js
var Clock = createLucideIcon("ClockIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-cog.js
var CloudCog = createLucideIcon("CloudCogIcon", [
  ["circle", { cx: "12", cy: "17", r: "3", key: "1spfwm" }],
  ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2", key: "zaobp" }],
  ["path", { d: "m15.7 18.4-.9-.3", key: "4qxpbn" }],
  ["path", { d: "m9.2 15.9-.9-.3", key: "17q7o2" }],
  ["path", { d: "m10.6 20.7.3-.9", key: "1pf4s2" }],
  ["path", { d: "m13.1 14.2.3-.9", key: "1mnuqm" }],
  ["path", { d: "m13.6 20.7-.4-1", key: "1jpd1m" }],
  ["path", { d: "m10.8 14.3-.4-1", key: "17ugyy" }],
  ["path", { d: "m8.3 18.6 1-.4", key: "s42vdx" }],
  ["path", { d: "m14.7 15.8 1-.4", key: "2wizun" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-drizzle.js
var CloudDrizzle = createLucideIcon("CloudDrizzleIcon", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M8 19v1", key: "1dk2by" }],
  ["path", { d: "M8 14v1", key: "84yxot" }],
  ["path", { d: "M16 19v1", key: "v220m7" }],
  ["path", { d: "M16 14v1", key: "g12gj6" }],
  ["path", { d: "M12 21v1", key: "q8vafk" }],
  ["path", { d: "M12 16v1", key: "1mx6rx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-fog.js
var CloudFog = createLucideIcon("CloudFogIcon", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 17H7", key: "pygtm1" }],
  ["path", { d: "M17 21H9", key: "1u2q02" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-hail.js
var CloudHail = createLucideIcon("CloudHailIcon", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v2", key: "a1is7l" }],
  ["path", { d: "M8 14v2", key: "1e9m6t" }],
  ["path", { d: "M16 20h.01", key: "xwek51" }],
  ["path", { d: "M8 20h.01", key: "1vjney" }],
  ["path", { d: "M12 16v2", key: "z66u1j" }],
  ["path", { d: "M12 22h.01", key: "1urd7a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-lightning.js
var CloudLightning = createLucideIcon("CloudLightningIcon", [
  ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
  ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-moon-rain.js
var CloudMoonRain = createLucideIcon("CloudMoonRainIcon", [
  [
    "path",
    {
      d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",
      key: "u82z8m"
    }
  ],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
  ["path", { d: "M11 20v2", key: "174qtz" }],
  ["path", { d: "M7 19v2", key: "12npes" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-moon.js
var CloudMoon = createLucideIcon("CloudMoonIcon", [
  ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z", key: "p44pc9" }],
  ["path", { d: "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197", key: "16nha0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-off.js
var CloudOff = createLucideIcon("CloudOffIcon", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }],
  [
    "path",
    { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-rain-wind.js
var CloudRainWind = createLucideIcon("CloudRainWindIcon", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m9.2 22 3-7", key: "sb5f6j" }],
  ["path", { d: "m9 13-3 7", key: "500co5" }],
  ["path", { d: "m17 13-3 7", key: "8t2fiy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-rain.js
var CloudRain = createLucideIcon("CloudRainIcon", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v6", key: "1j4efv" }],
  ["path", { d: "M8 14v6", key: "17c4r9" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-snow.js
var CloudSnow = createLucideIcon("CloudSnowIcon", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M8 19h.01", key: "puxtts" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M12 21h.01", key: "h35vbk" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }],
  ["path", { d: "M16 19h.01", key: "1vcnzz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-sun-rain.js
var CloudSunRain = createLucideIcon("CloudSunRainIcon", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
  ["path", { d: "M11 20v2", key: "174qtz" }],
  ["path", { d: "M7 19v2", key: "12npes" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud-sun.js
var CloudSun = createLucideIcon("CloudSunIcon", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloud.js
var Cloud = createLucideIcon("CloudIcon", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cloudy.js
var Cloudy = createLucideIcon("CloudyIcon", [
  ["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "gqqjvc" }],
  ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5", key: "1p2s76" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/clover.js
var Clover = createLucideIcon("CloverIcon", [
  [
    "path",
    {
      d: "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z",
      key: "1gxwox"
    }
  ],
  [
    "path",
    {
      d: "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16",
      key: "il7z7z"
    }
  ],
  [
    "path",
    {
      d: "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8",
      key: "15bpx2"
    }
  ],
  [
    "path",
    {
      d: "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z",
      key: "v9mug8"
    }
  ],
  ["path", { d: "m7 17-5 5", key: "1py3mz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/club.js
var Club = createLucideIcon("ClubIcon", [
  [
    "path",
    {
      d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",
      key: "27yuqz"
    }
  ],
  ["path", { d: "M12 17.66L12 22", key: "ogfahf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/code-2.js
var Code2 = createLucideIcon("Code2Icon", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/code.js
var Code = createLucideIcon("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/codepen.js
var Codepen = createLucideIcon("CodepenIcon", [
  ["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2", key: "srzb37" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5", key: "1t73f2" }],
  ["polyline", { points: "22 8.5 12 15.5 2 8.5", key: "ajlxae" }],
  ["polyline", { points: "2 15.5 12 8.5 22 15.5", key: "susrui" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5", key: "2cldga" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/codesandbox.js
var Codesandbox = createLucideIcon("CodesandboxIcon", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ],
  ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21", key: "fabo96" }],
  ["polyline", { points: "7.5 19.79 7.5 14.6 3 12", key: "z377f1" }],
  ["polyline", { points: "21 12 16.5 14.6 16.5 19.79", key: "9nrev1" }],
  ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96", key: "1180pa" }],
  ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12", key: "3z3uq6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/coffee.js
var Coffee = createLucideIcon("CoffeeIcon", [
  ["path", { d: "M17 8h1a4 4 0 1 1 0 8h-1", key: "jx4kbh" }],
  ["path", { d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z", key: "1bxrl0" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "4", key: "1cr9l3" }],
  ["line", { x1: "10", x2: "10", y1: "2", y2: "4", key: "170wym" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "4", key: "1c5f70" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cog.js
var Cog = createLucideIcon("CogIcon", [
  ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
  ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/coins.js
var Coins = createLucideIcon("CoinsIcon", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/columns-2.js
var Columns2 = createLucideIcon("Columns2Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/columns-3.js
var Columns3 = createLucideIcon("Columns3Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/columns-4.js
var Columns4 = createLucideIcon("Columns4Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7.5 3v18", key: "w0wo6v" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M16.5 3v18", key: "10tjh1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/combine.js
var Combine = createLucideIcon("CombineIcon", [
  ["rect", { width: "8", height: "8", x: "2", y: "2", rx: "2", key: "z1hh3n" }],
  ["path", { d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "83orz6" }],
  ["path", { d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "k86dmt" }],
  ["path", { d: "M10 18H5c-1.7 0-3-1.3-3-3v-1", key: "6vokjl" }],
  ["polyline", { points: "7 21 10 18 7 15", key: "1k02g0" }],
  ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/command.js
var Command = createLucideIcon("CommandIcon", [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/compass.js
var Compass = createLucideIcon("CompassIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76", key: "m9r19z" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/component.js
var Component = createLucideIcon("ComponentIcon", [
  ["path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z", key: "1kciei" }],
  ["path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z", key: "1ome0g" }],
  ["path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z", key: "vbupec" }],
  ["path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z", key: "16csic" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/computer.js
var Computer = createLucideIcon("ComputerIcon", [
  ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2", key: "wc9tft" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h2", key: "rwmk9e" }],
  ["path", { d: "M12 18h6", key: "aqd8w3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/concierge-bell.js
var ConciergeBell = createLucideIcon("ConciergeBellIcon", [
  ["path", { d: "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z", key: "1co3i8" }],
  ["path", { d: "M20 16a8 8 0 1 0-16 0", key: "1pa543" }],
  ["path", { d: "M12 4v4", key: "1bq03y" }],
  ["path", { d: "M10 4h4", key: "1xpv9s" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cone.js
var Cone = createLucideIcon("ConeIcon", [
  ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98", key: "53pte7" }],
  ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3", key: "1ji25f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/construction.js
var Construction = createLucideIcon("ConstructionIcon", [
  ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" }],
  ["path", { d: "M17 14v7", key: "7m2elx" }],
  ["path", { d: "M7 14v7", key: "1cm7wv" }],
  ["path", { d: "M17 3v3", key: "1v4jwn" }],
  ["path", { d: "M7 3v3", key: "7o6guu" }],
  ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }],
  ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }],
  ["path", { d: "m8 6 8 8", key: "hl96qh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/contact-2.js
var Contact2 = createLucideIcon("Contact2Icon", [
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }],
  ["circle", { cx: "12", cy: "11", r: "3", key: "itu57m" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/contact.js
var Contact = createLucideIcon("ContactIcon", [
  ["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2", key: "1mghuy" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/container.js
var Container = createLucideIcon("ContainerIcon", [
  [
    "path",
    {
      d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
      key: "1t2lqe"
    }
  ],
  ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
  ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
  ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
  ["path", { d: "M18 17.5V9.4", key: "11uown" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/contrast.js
var Contrast = createLucideIcon("ContrastIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 18a6 6 0 0 0 0-12v12z", key: "j4l70d" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cookie.js
var Cookie = createLucideIcon("CookieIcon", [
  ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" }],
  ["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
  ["path", { d: "M16 15.5v.01", key: "14dtrp" }],
  ["path", { d: "M12 12v.01", key: "u5ubse" }],
  ["path", { d: "M11 17v.01", key: "1hyl5a" }],
  ["path", { d: "M7 14v.01", key: "uct60s" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cooking-pot.js
var CookingPot = createLucideIcon("CookingPotIcon", [
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "u0tga0" }],
  ["path", { d: "m4 8 16-4", key: "16g0ng" }],
  [
    "path",
    {
      d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",
      key: "12cejc"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/copy-check.js
var CopyCheck = createLucideIcon("CopyCheckIcon", [
  ["path", { d: "m12 15 2 2 4-4", key: "2c609p" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/copy-minus.js
var CopyMinus = createLucideIcon("CopyMinusIcon", [
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/copy-plus.js
var CopyPlus = createLucideIcon("CopyPlusIcon", [
  ["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }],
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/copy-slash.js
var CopySlash = createLucideIcon("CopySlashIcon", [
  ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/copy-x.js
var CopyX = createLucideIcon("CopyXIcon", [
  ["line", { x1: "12", x2: "18", y1: "12", y2: "18", key: "1rg63v" }],
  ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/copy.js
var Copy = createLucideIcon("CopyIcon", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/copyleft.js
var Copyleft = createLucideIcon("CopyleftIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66", key: "1sveal" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/copyright.js
var Copyright = createLucideIcon("CopyrightIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66", key: "1i56pz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/corner-down-left.js
var CornerDownLeft = createLucideIcon("CornerDownLeftIcon", [
  ["polyline", { points: "9 10 4 15 9 20", key: "r3jprv" }],
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/corner-down-right.js
var CornerDownRight = createLucideIcon("CornerDownRightIcon", [
  ["polyline", { points: "15 10 20 15 15 20", key: "1q7qjw" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/corner-left-down.js
var CornerLeftDown = createLucideIcon("CornerLeftDownIcon", [
  ["polyline", { points: "14 15 9 20 4 15", key: "nkc4i" }],
  ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12", key: "nbpdq2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/corner-left-up.js
var CornerLeftUp = createLucideIcon("CornerLeftUpIcon", [
  ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/corner-right-down.js
var CornerRightDown = createLucideIcon("CornerRightDownIcon", [
  ["polyline", { points: "10 15 15 20 20 15", key: "axus6l" }],
  ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12", key: "wcbgct" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/corner-right-up.js
var CornerRightUp = createLucideIcon("CornerRightUpIcon", [
  ["polyline", { points: "10 9 15 4 20 9", key: "1lr6px" }],
  ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4", key: "1plgdj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/corner-up-left.js
var CornerUpLeft = createLucideIcon("CornerUpLeftIcon", [
  ["polyline", { points: "9 14 4 9 9 4", key: "881910" }],
  ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/corner-up-right.js
var CornerUpRight = createLucideIcon("CornerUpRightIcon", [
  ["polyline", { points: "15 14 20 9 15 4", key: "1tbx3s" }],
  ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cpu.js
var Cpu = createLucideIcon("CpuIcon", [
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", key: "o3kz5p" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/creative-commons.js
var CreativeCommons = createLucideIcon("CreativeCommonsIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1ss3eq" }
  ],
  [
    "path",
    { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1od56t" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/credit-card.js
var CreditCard = createLucideIcon("CreditCardIcon", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/croissant.js
var Croissant = createLucideIcon("CroissantIcon", [
  [
    "path",
    {
      d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
      key: "1ozxlb"
    }
  ],
  [
    "path",
    {
      d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
      key: "ffuyb5"
    }
  ],
  ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4", key: "osnpzi" }],
  [
    "path",
    {
      d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
      key: "1vubaw"
    }
  ],
  ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5", key: "wxr772" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/crop.js
var Crop = createLucideIcon("CropIcon", [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cross.js
var Cross = createLucideIcon("CrossIcon", [
  [
    "path",
    {
      d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",
      key: "1t5g7j"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/crosshair.js
var Crosshair = createLucideIcon("CrosshairIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/crown.js
var Crown = createLucideIcon("CrownIcon", [
  ["path", { d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14", key: "zkxr6b" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cuboid.js
var Cuboid = createLucideIcon("CuboidIcon", [
  [
    "path",
    {
      d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",
      key: "1u2ovd"
    }
  ],
  ["path", { d: "M10 22v-8L2.25 9.15", key: "11pn4q" }],
  ["path", { d: "m10 14 11.77-6.87", key: "1kt1wh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cup-soda.js
var CupSoda = createLucideIcon("CupSodaIcon", [
  ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8", key: "8166m8" }],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "yjz344" }],
  ["path", { d: "m12 8 1-6h2", key: "3ybfa4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/currency.js
var Currency = createLucideIcon("CurrencyIcon", [
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
  ["line", { x1: "3", x2: "6", y1: "3", y2: "6", key: "1jkytn" }],
  ["line", { x1: "21", x2: "18", y1: "3", y2: "6", key: "14zfjt" }],
  ["line", { x1: "3", x2: "6", y1: "21", y2: "18", key: "iusuec" }],
  ["line", { x1: "21", x2: "18", y1: "21", y2: "18", key: "yj2dd7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/cylinder.js
var Cylinder = createLucideIcon("CylinderIcon", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5", key: "aqi0yr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/database-backup.js
var DatabaseBackup = createLucideIcon("DatabaseBackupIcon", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 12a9 3 0 0 0 5 2.69", key: "1ui2ym" }],
  ["path", { d: "M21 9.3V5", key: "6k6cib" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88", key: "i62tjy" }],
  ["path", { d: "M12 12v4h4", key: "1bxaet" }],
  [
    "path",
    {
      d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
      key: "1f4ei9"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/database-zap.js
var DatabaseZap = createLucideIcon("DatabaseZapIcon", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84", key: "14ibmq" }],
  ["path", { d: "M21 5V8", key: "1marbg" }],
  ["path", { d: "M21 12L18 17H22L19 22", key: "zafso" }],
  ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87", key: "1y4wr8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/database.js
var Database = createLucideIcon("DatabaseIcon", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/delete.js
var Delete = createLucideIcon("DeleteIcon", [
  ["path", { d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z", key: "1oy587" }],
  ["line", { x1: "18", x2: "12", y1: "9", y2: "15", key: "1olkx5" }],
  ["line", { x1: "12", x2: "18", y1: "9", y2: "15", key: "1n50pc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dessert.js
var Dessert = createLucideIcon("DessertIcon", [
  ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }],
  [
    "path",
    {
      d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",
      key: "lfo06j"
    }
  ],
  ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0", key: "12xarc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/diameter.js
var Diameter = createLucideIcon("DiameterIcon", [
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
  ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86", key: "xr8kdq" }],
  ["path", { d: "m6.41 6.41 11.18 11.18", key: "uhpjw7" }],
  ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86", key: "cldpwv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/diamond.js
var Diamond = createLucideIcon("DiamondIcon", [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
      key: "1f1r0c"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dice-1.js
var Dice1 = createLucideIcon("Dice1Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dice-2.js
var Dice2 = createLucideIcon("Dice2Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }],
  ["path", { d: "M9 15h.01", key: "fzyn71" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dice-3.js
var Dice3 = createLucideIcon("Dice3Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dice-4.js
var Dice4 = createLucideIcon("Dice4Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dice-5.js
var Dice5 = createLucideIcon("Dice5Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dice-6.js
var Dice6 = createLucideIcon("Dice6Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dices.js
var Dices = createLucideIcon("DicesIcon", [
  ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2", key: "6agr2n" }],
  [
    "path",
    { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6", key: "1o487t" }
  ],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 14h.01", key: "ssrbsk" }],
  ["path", { d: "M15 6h.01", key: "cblpky" }],
  ["path", { d: "M18 9h.01", key: "2061c0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/diff.js
var Diff = createLucideIcon("DiffIcon", [
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/disc-2.js
var Disc2 = createLucideIcon("Disc2Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/disc-3.js
var Disc3 = createLucideIcon("Disc3Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/disc-album.js
var DiscAlbum = createLucideIcon("DiscAlbumIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "12", r: "5", key: "nd82uf" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/disc.js
var Disc = createLucideIcon("DiscIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/divide-circle.js
var DivideCircle = createLucideIcon("DivideCircleIcon", [
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/divide-square.js
var DivideSquare = createLucideIcon("DivideSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/divide.js
var Divide = createLucideIcon("DivideIcon", [
  ["circle", { cx: "12", cy: "6", r: "1", key: "1bh7o1" }],
  ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }],
  ["circle", { cx: "12", cy: "18", r: "1", key: "lqb9t5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dna-off.js
var DnaOff = createLucideIcon("DnaOffIcon", [
  ["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5", key: "sxiaad" }],
  ["path", { d: "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5", key: "yn4bs1" }],
  ["path", { d: "m17 6-2.5-2.5", key: "5cdfhj" }],
  ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
  ["path", { d: "m7 18 2.5 2.5", key: "16tu1a" }],
  ["path", { d: "m3.5 14.5.5.5", key: "hapbhd" }],
  ["path", { d: "m20 9 .5.5", key: "1n7z02" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dna.js
var Dna = createLucideIcon("DnaIcon", [
  ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
  ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }],
  ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }],
  ["path", { d: "m17 6-2.5-2.5", key: "5cdfhj" }],
  ["path", { d: "m14 8-1-1", key: "15nbz5" }],
  ["path", { d: "m7 18 2.5 2.5", key: "16tu1a" }],
  ["path", { d: "m3.5 14.5.5.5", key: "hapbhd" }],
  ["path", { d: "m20 9 .5.5", key: "1n7z02" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dog.js
var Dog = createLucideIcon("DogIcon", [
  [
    "path",
    {
      d: "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",
      key: "19br0u"
    }
  ],
  [
    "path",
    {
      d: "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
      key: "11n1an"
    }
  ],
  ["path", { d: "M8 14v.5", key: "1nzgdb" }],
  ["path", { d: "M16 14v.5", key: "1lajdz" }],
  ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }],
  [
    "path",
    {
      d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",
      key: "wsu29d"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dollar-sign.js
var DollarSign = createLucideIcon("DollarSignIcon", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/donut.js
var Donut = createLucideIcon("DonutIcon", [
  [
    "path",
    {
      d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",
      key: "19sr3x"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/door-closed.js
var DoorClosed = createLucideIcon("DoorClosedIcon", [
  ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "36qu9e" }],
  ["path", { d: "M2 20h20", key: "owomy5" }],
  ["path", { d: "M14 12v.01", key: "xfcn54" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/door-open.js
var DoorOpen = createLucideIcon("DoorOpenIcon", [
  ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
  ["path", { d: "M2 20h3", key: "1gaodv" }],
  ["path", { d: "M13 20h9", key: "s90cdi" }],
  ["path", { d: "M10 12v.01", key: "vx6srw" }],
  [
    "path",
    {
      d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
      key: "199qr4"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dot.js
var Dot = createLucideIcon("DotIcon", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/download-cloud.js
var DownloadCloud = createLucideIcon("DownloadCloudIcon", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M12 12v9", key: "192myk" }],
  ["path", { d: "m8 17 4 4 4-4", key: "1ul180" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/download.js
var Download = createLucideIcon("DownloadIcon", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/drafting-compass.js
var DraftingCompass = createLucideIcon("DraftingCompassIcon", [
  ["circle", { cx: "12", cy: "5", r: "2", key: "f1ur92" }],
  ["path", { d: "m3 21 8.02-14.26", key: "1ssaw4" }],
  ["path", { d: "m12.99 6.74 1.93 3.44", key: "iwagvd" }],
  ["path", { d: "M19 12c-3.87 4-10.13 4-14 0", key: "1tsu18" }],
  ["path", { d: "m21 21-2.16-3.84", key: "vylbct" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/drama.js
var Drama = createLucideIcon("DramaIcon", [
  ["path", { d: "M10 11h.01", key: "d2at3l" }],
  ["path", { d: "M14 6h.01", key: "k028ub" }],
  ["path", { d: "M18 6h.01", key: "1v4wsw" }],
  ["path", { d: "M6.5 13.1h.01", key: "1748ia" }],
  ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3", key: "172yzv" }],
  ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0", key: "1obv0w" }],
  [
    "path",
    {
      d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",
      key: "rqjl8i"
    }
  ],
  ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4", key: "1mr6wy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dribbble.js
var Dribbble = createLucideIcon("DribbbleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94", key: "hpej1" }],
  ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32", key: "1tr44o" }],
  ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72", key: "kbh691" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/droplet.js
var Droplet = createLucideIcon("DropletIcon", [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/droplets.js
var Droplets = createLucideIcon("DropletsIcon", [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/drum.js
var Drum = createLucideIcon("DrumIcon", [
  ["path", { d: "m2 2 8 8", key: "1v6059" }],
  ["path", { d: "m22 2-8 8", key: "173r8a" }],
  ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5", key: "liohsx" }],
  ["path", { d: "M7 13.4v7.9", key: "1yi6u9" }],
  ["path", { d: "M12 14v8", key: "1tn2tj" }],
  ["path", { d: "M17 13.4v7.9", key: "eqz2v3" }],
  ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9", key: "1750ul" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/drumstick.js
var Drumstick = createLucideIcon("DrumstickIcon", [
  [
    "path",
    {
      d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",
      key: "1o96s0"
    }
  ],
  [
    "path",
    {
      d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",
      key: "14vv5h"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/dumbbell.js
var Dumbbell = createLucideIcon("DumbbellIcon", [
  ["path", { d: "m6.5 6.5 11 11", key: "f7oqzb" }],
  ["path", { d: "m21 21-1-1", key: "cpc6if" }],
  ["path", { d: "m3 3 1 1", key: "d3rpuf" }],
  ["path", { d: "m18 22 4-4", key: "1e32o6" }],
  ["path", { d: "m2 6 4-4", key: "189tqz" }],
  ["path", { d: "m3 10 7-7", key: "1bxui2" }],
  ["path", { d: "m14 21 7-7", key: "16x78n" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ear-off.js
var EarOff = createLucideIcon("EarOffIcon", [
  ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46", key: "1qngmn" }],
  ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14", key: "b06bma" }],
  ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76", key: "g10hsz" }],
  ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18", key: "ygzou7" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ear.js
var Ear = createLucideIcon("EarIcon", [
  ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0", key: "1dfaln" }],
  ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/egg-fried.js
var EggFried = createLucideIcon("EggFriedIcon", [
  ["circle", { cx: "11.5", cy: "12.5", r: "3.5", key: "1cl1mi" }],
  [
    "path",
    {
      d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
      key: "165ef9"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/egg-off.js
var EggOff = createLucideIcon("EggOffIcon", [
  [
    "path",
    {
      d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",
      key: "6et380"
    }
  ],
  [
    "path",
    {
      d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",
      key: "gcdc3f"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/egg.js
var Egg = createLucideIcon("EggIcon", [
  [
    "path",
    {
      d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",
      key: "1c39pg"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/equal-not.js
var EqualNot = createLucideIcon("EqualNotIcon", [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }],
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/equal.js
var Equal = createLucideIcon("EqualIcon", [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/eraser.js
var Eraser = createLucideIcon("EraserIcon", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya"
    }
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/euro.js
var Euro = createLucideIcon("EuroIcon", [
  ["path", { d: "M4 10h12", key: "1y6xl8" }],
  ["path", { d: "M4 14h9", key: "1loblj" }],
  [
    "path",
    {
      d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
      key: "1j6lzo"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/expand.js
var Expand = createLucideIcon("ExpandIcon", [
  ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
  ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
  ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
  ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/external-link.js
var ExternalLink = createLucideIcon("ExternalLinkIcon", [
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/eye-off.js
var EyeOff = createLucideIcon("EyeOffIcon", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/eye.js
var Eye = createLucideIcon("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/facebook.js
var Facebook = createLucideIcon("FacebookIcon", [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/factory.js
var Factory = createLucideIcon("FactoryIcon", [
  [
    "path",
    {
      d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "159hny"
    }
  ],
  ["path", { d: "M17 18h1", key: "uldtlt" }],
  ["path", { d: "M12 18h1", key: "s9uhes" }],
  ["path", { d: "M7 18h1", key: "1neino" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fan.js
var Fan = createLucideIcon("FanIcon", [
  [
    "path",
    {
      d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
      key: "484a7f"
    }
  ],
  ["path", { d: "M12 12v.01", key: "u5ubse" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fast-forward.js
var FastForward = createLucideIcon("FastForwardIcon", [
  ["polygon", { points: "13 19 22 12 13 5 13 19", key: "587y9g" }],
  ["polygon", { points: "2 19 11 12 2 5 2 19", key: "3pweh0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/feather.js
var Feather = createLucideIcon("FeatherIcon", [
  ["path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z", key: "u4sw5n" }],
  ["line", { x1: "16", x2: "2", y1: "8", y2: "22", key: "1c47m2" }],
  ["line", { x1: "17.5", x2: "9", y1: "15", y2: "15", key: "2fj3pr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fence.js
var Fence = createLucideIcon("FenceIcon", [
  ["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "1n2rgs" }],
  ["path", { d: "M6 8h4", key: "utf9t1" }],
  ["path", { d: "M6 18h4", key: "12yh4b" }],
  ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "3ha7mj" }],
  ["path", { d: "M14 8h4", key: "1r8wg2" }],
  ["path", { d: "M14 18h4", key: "1t3kbu" }],
  ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "dfd4e2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ferris-wheel.js
var FerrisWheel = createLucideIcon("FerrisWheelIcon", [
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m6.8 15-3.5 2", key: "hjy98k" }],
  ["path", { d: "m20.7 7-3.5 2", key: "f08gto" }],
  ["path", { d: "M6.8 9 3.3 7", key: "1aevh4" }],
  ["path", { d: "m20.7 17-3.5-2", key: "1liqo3" }],
  ["path", { d: "m9 22 3-8 3 8", key: "wees03" }],
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M18 18.7a9 9 0 1 0-12 0", key: "dhzg4g" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/figma.js
var Figma = createLucideIcon("FigmaIcon", [
  ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z", key: "1340ok" }],
  ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z", key: "1hz3m3" }],
  ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z", key: "1oz8n2" }],
  ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z", key: "1ff65i" }],
  ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z", key: "pdip6e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-archive.js
var FileArchive = createLucideIcon("FileArchiveIcon", [
  [
    "path",
    {
      d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2",
      key: "1u864v"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "10", cy: "20", r: "2", key: "1xzdoj" }],
  ["path", { d: "M10 7V6", key: "dljcrl" }],
  ["path", { d: "M10 12v-1", key: "v7bkov" }],
  ["path", { d: "M10 18v-2", key: "1cjy8d" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-audio-2.js
var FileAudio2 = createLucideIcon("FileAudio2Icon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2", key: "fkyf72" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3", key: "1ggdre" }],
  ["circle", { cx: "9", cy: "17", r: "1", key: "bc1fq4" }],
  ["circle", { cx: "3", cy: "17", r: "1", key: "vo6nti" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-audio.js
var FileAudio = createLucideIcon("FileAudioIcon", [
  [
    "path",
    {
      d: "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
      key: "1013sb"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z", key: "gqt63y" }],
  ["path", { d: "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z", key: "cf7lqx" }],
  ["path", { d: "M2 19v-3a6 6 0 0 1 12 0v3", key: "1acxgf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-axis-3d.js
var FileAxis3d = createLucideIcon("FileAxis3dIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M8 10v8h8", key: "tlaukw" }],
  ["path", { d: "m8 18 4-4", key: "12zab0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-badge-2.js
var FileBadge2 = createLucideIcon("FileBadge2Icon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["path", { d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "13rien" }],
  ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5", key: "14xlky" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-badge.js
var FileBadge = createLucideIcon("FileBadgeIcon", [
  ["path", { d: "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6", key: "qtddq0" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "u0c8gj" }],
  ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5", key: "5gm2nr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-bar-chart-2.js
var FileBarChart2 = createLucideIcon("FileBarChart2Icon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "M8 18v-1", key: "zg0ygc" }],
  ["path", { d: "M16 18v-3", key: "j5jt4h" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-bar-chart.js
var FileBarChart = createLucideIcon("FileBarChartIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M12 18v-4", key: "q1q25u" }],
  ["path", { d: "M8 18v-2", key: "qcmpov" }],
  ["path", { d: "M16 18v-6", key: "15y0np" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-box.js
var FileBox = createLucideIcon("FileBoxIcon", [
  ["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "h7jej2" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    {
      d: "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",
      key: "f4a3oc"
    }
  ],
  ["path", { d: "m7 17-4.74-2.85", key: "etm6su" }],
  ["path", { d: "m7 17 4.74-2.85", key: "5xuooz" }],
  ["path", { d: "M7 17v5", key: "1yj1jh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-check-2.js
var FileCheck2 = createLucideIcon("FileCheck2Icon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-check.js
var FileCheck = createLucideIcon("FileCheckIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-clock.js
var FileClock = createLucideIcon("FileClockIcon", [
  [
    "path",
    {
      d: "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
      key: "9lo3o3"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "8", cy: "16", r: "6", key: "10v15b" }],
  ["path", { d: "M9.5 17.5 8 16.25V14", key: "1o80t2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-code-2.js
var FileCode2 = createLucideIcon("FileCode2Icon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }],
  ["path", { d: "m5 12-3 3 3 3", key: "oke12k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-code.js
var FileCode = createLucideIcon("FileCodeIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m10 13-2 2 2 2", key: "17smn8" }],
  ["path", { d: "m14 17 2-2-2-2", key: "14mezr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-cog.js
var FileCog = createLucideIcon("FileCogIcon", [
  ["circle", { cx: "6", cy: "13", r: "3", key: "1z65bp" }],
  ["path", { d: "m9.7 14.4-.9-.3", key: "o1luaq" }],
  ["path", { d: "m3.2 11.9-.9-.3", key: "qm3zk5" }],
  ["path", { d: "m4.6 16.7.3-.9", key: "1o0ect" }],
  ["path", { d: "m7.6 16.7-.4-1", key: "1ym8d1" }],
  ["path", { d: "m4.8 10.3-.4-1", key: "18q26g" }],
  ["path", { d: "m2.3 14.6 1-.4", key: "121m88" }],
  ["path", { d: "m8.7 11.8 1-.4", key: "9meqp2" }],
  ["path", { d: "m7.4 9.3-.3.9", key: "136qqn" }],
  ["path", { d: "M14 2v6h6", key: "1kof46" }],
  [
    "path",
    { d: "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5", key: "xwe04" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-diff.js
var FileDiff = createLucideIcon("FileDiffIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-digit.js
var FileDigit = createLucideIcon("FileDigitIcon", [
  ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2", key: "jm304g" }],
  ["path", { d: "M14 2v6h6", key: "1kof46" }],
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["path", { d: "M10 12h2v6", key: "12zw74" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-down.js
var FileDown = createLucideIcon("FileDownIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-edit.js
var FileEdit = createLucideIcon("FileEditIcon", [
  ["path", { d: "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5", key: "1bg6eb" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    { d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z", key: "1rgxu8" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-heart.js
var FileHeart = createLucideIcon("FileHeartIcon", [
  ["path", { d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "dba9qu" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    {
      d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
      key: "1c1fso"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-image.js
var FileImage = createLucideIcon("FileImageIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "10", cy: "13", r: "2", key: "6v46hv" }],
  ["path", { d: "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22", key: "17vly1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-input.js
var FileInput = createLucideIcon("FileInputIcon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M2 15h10", key: "jfw4w8" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-json-2.js
var FileJson2 = createLucideIcon("FileJson2Icon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "fq0c9t" }
  ],
  [
    "path",
    { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "4gibmv" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-json.js
var FileJson = createLucideIcon("FileJsonIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-key-2.js
var FileKey2 = createLucideIcon("FileKey2Icon", [
  ["path", { d: "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "1nw5t3" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
  ["path", { d: "m10 10-4.5 4.5", key: "7fwrp6" }],
  ["path", { d: "m9 11 1 1", key: "wa6s5q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-key.js
var FileKey = createLucideIcon("FileKeyIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["circle", { cx: "10", cy: "16", r: "2", key: "4ckbqe" }],
  ["path", { d: "m16 10-4.5 4.5", key: "7p3ebg" }],
  ["path", { d: "m15 11 1 1", key: "1bsyx3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-line-chart.js
var FileLineChart = createLucideIcon("FileLineChartIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m16 13-3.5 3.5-2-2L8 17", key: "zz7yod" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-lock-2.js
var FileLock2 = createLucideIcon("FileLock2Icon", [
  ["path", { d: "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "gwd2r9" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1", key: "10y5wo" }],
  ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2", key: "1pdxzg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-lock.js
var FileLock = createLucideIcon("FileLockIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1", key: "3yr8at" }],
  ["path", { d: "M15 12v-2a3 3 0 1 0-6 0v2", key: "1nqnhw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-minus-2.js
var FileMinus2 = createLucideIcon("FileMinus2Icon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M3 15h6", key: "4e2qda" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-minus.js
var FileMinus = createLucideIcon("FileMinusIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "15", key: "110plj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-music.js
var FileMusic = createLucideIcon("FileMusicIcon", [
  ["circle", { cx: "14", cy: "16", r: "2", key: "1bzzi3" }],
  ["circle", { cx: "6", cy: "18", r: "2", key: "1fncim" }],
  ["path", { d: "M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5", key: "skc018" }],
  ["path", { d: "M8 18v-7.7L16 9v7", key: "1oie6o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-output.js
var FileOutput = createLucideIcon("FileOutputIcon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M2 15h10", key: "jfw4w8" }],
  ["path", { d: "m5 12-3 3 3 3", key: "oke12k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-pie-chart.js
var FilePieChart = createLucideIcon("FilePieChartIcon", [
  ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3", key: "zhyrez" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29", key: "f1t5jc" }],
  ["path", { d: "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z", key: "7q54ec" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-plus-2.js
var FilePlus2 = createLucideIcon("FilePlus2Icon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M3 15h6", key: "4e2qda" }],
  ["path", { d: "M6 12v6", key: "1u72j0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-plus.js
var FilePlus = createLucideIcon("FilePlusIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "12", x2: "12", y1: "18", y2: "12", key: "1tsf04" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "15", key: "110plj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-question.js
var FileQuestion = createLucideIcon("FileQuestionIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  [
    "path",
    {
      d: "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
      key: "1umxtm"
    }
  ],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-scan.js
var FileScan = createLucideIcon("FileScanIcon", [
  ["path", { d: "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5", key: "uvikde" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M16 22a2 2 0 0 1-2-2", key: "1wqh5n" }],
  ["path", { d: "M20 22a2 2 0 0 0 2-2", key: "1l9q4k" }],
  ["path", { d: "M20 14a2 2 0 0 1 2 2", key: "1ny6zw" }],
  ["path", { d: "M16 14a2 2 0 0 0-2 2", key: "ceaadl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-search-2.js
var FileSearch2 = createLucideIcon("FileSearch2Icon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
  ["path", { d: "M13.25 16.25 15 18", key: "9eh8bj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-search.js
var FileSearch = createLucideIcon("FileSearchIcon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3", key: "am10z3" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "ychnub" }],
  ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-signature.js
var FileSignature = createLucideIcon("FileSignatureIcon", [
  [
    "path",
    { d: "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5", key: "kd5d3" }
  ],
  ["path", { d: "M8 18h1", key: "13wk12" }],
  [
    "path",
    { d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z", key: "johvi5" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-spreadsheet.js
var FileSpreadsheet = createLucideIcon("FileSpreadsheetIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-stack.js
var FileStack = createLucideIcon("FileStackIcon", [
  ["path", { d: "M16 2v5h5", key: "kt2in0" }],
  [
    "path",
    {
      d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z",
      key: "1km23n"
    }
  ],
  ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15", key: "16874u" }],
  ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11", key: "k2ox98" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-symlink.js
var FileSymlink = createLucideIcon("FileSymlinkIcon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7", key: "138uzh" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m10 18 3-3-3-3", key: "18f6ys" }],
  ["path", { d: "M4 18v-1a2 2 0 0 1 2-2h6", key: "5uz2rn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-terminal.js
var FileTerminal = createLucideIcon("FileTerminalIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m8 16 2-2-2-2", key: "10vzyd" }],
  ["path", { d: "M12 18h4", key: "1wd2n7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-text.js
var FileText = createLucideIcon("FileTextIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-type-2.js
var FileType2 = createLucideIcon("FileType2Icon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M2 13v-1h6v1", key: "1dh9dg" }],
  ["path", { d: "M4 18h2", key: "1xrofg" }],
  ["path", { d: "M5 12v6", key: "150t9c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-type.js
var FileType = createLucideIcon("FileTypeIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M9 13v-1h6v1", key: "1bb014" }],
  ["path", { d: "M11 18h2", key: "12mj7e" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-up.js
var FileUp = createLucideIcon("FileUpIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-video-2.js
var FileVideo2 = createLucideIcon("FileVideo2Icon", [
  ["path", { d: "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "1nti49" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5", key: "t7cp39" }],
  ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1", key: "1a6c1e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-video.js
var FileVideo = createLucideIcon("FileVideoIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m10 11 5 3-5 3v-6Z", key: "7ntvm4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-volume-2.js
var FileVolume2 = createLucideIcon("FileVolume2Icon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5", key: "joawwx" }],
  ["path", { d: "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3", key: "1f2wyw" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-volume.js
var FileVolume = createLucideIcon("FileVolumeIcon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3", key: "am10z3" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m7 10-3 2H2v4h2l3 2v-8Z", key: "tazg57" }],
  ["path", { d: "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3", key: "1yej3m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-warning.js
var FileWarning = createLucideIcon("FileWarningIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-x-2.js
var FileX2 = createLucideIcon("FileX2Icon", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["path", { d: "M14 2v6h6", key: "1kof46" }],
  ["path", { d: "m3 12.5 5 5", key: "1qls4r" }],
  ["path", { d: "m8 12.5-5 5", key: "b853mi" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file-x.js
var FileX = createLucideIcon("FileXIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "9.5", x2: "14.5", y1: "12.5", y2: "17.5", key: "izs6du" }],
  ["line", { x1: "14.5", x2: "9.5", y1: "12.5", y2: "17.5", key: "1lehlj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/file.js
var File = createLucideIcon("FileIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/files.js
var Files = createLucideIcon("FilesIcon", [
  [
    "path",
    {
      d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",
      key: "cennsq"
    }
  ],
  ["path", { d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8", key: "ms809a" }],
  ["path", { d: "M15 2v5h5", key: "qq6kwv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/film.js
var Film = createLucideIcon("FilmIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/filter-x.js
var FilterX = createLucideIcon("FilterXIcon", [
  ["path", { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055", key: "1fi1da" }],
  ["path", { d: "m22 3-5 5", key: "12jva0" }],
  ["path", { d: "m17 3 5 5", key: "k36vhe" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/filter.js
var Filter = createLucideIcon("FilterIcon", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fingerprint.js
var Fingerprint = createLucideIcon("FingerprintIcon", [
  ["path", { d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4", key: "1jc9o5" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2", key: "1mxgy1" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2", key: "1fgabc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fire-extinguisher.js
var FireExtinguisher = createLucideIcon("FireExtinguisherIcon", [
  ["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5", key: "sqyvz" }],
  ["path", { d: "M9 18h8", key: "i7pszb" }],
  ["path", { d: "M18 3h-3", key: "7idoqj" }],
  ["path", { d: "M11 3a6 6 0 0 0-6 6v11", key: "1v5je3" }],
  ["path", { d: "M5 13h4", key: "svpcxo" }],
  ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z", key: "vsjego" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fish-off.js
var FishOff = createLucideIcon("FishOffIcon", [
  [
    "path",
    {
      d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",
      key: "1j1hse"
    }
  ],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",
      key: "1q46z8"
    }
  ],
  [
    "path",
    {
      d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",
      key: "1407gh"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fish-symbol.js
var FishSymbol = createLucideIcon("FishSymbolIcon", [
  ["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8", key: "h4oh4o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fish.js
var Fish = createLucideIcon("FishIcon", [
  [
    "path",
    {
      d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
      key: "15baut"
    }
  ],
  ["path", { d: "M18 12v.5", key: "18hhni" }],
  ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
      key: "l9di03"
    }
  ],
  [
    "path",
    { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4", key: "1kjonw" }
  ],
  [
    "path",
    { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98", key: "1zlm23" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flag-off.js
var FlagOff = createLucideIcon("FlagOffIcon", [
  ["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11", key: "9rwyz9" }],
  ["path", { d: "M4 22V4", key: "1plyxx" }],
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2", key: "1myooe" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flag-triangle-left.js
var FlagTriangleLeft = createLucideIcon("FlagTriangleLeftIcon", [
  ["path", { d: "M17 22V2L7 7l10 5", key: "1rmf0r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flag-triangle-right.js
var FlagTriangleRight = createLucideIcon("FlagTriangleRightIcon", [
  ["path", { d: "M7 22V2l10 5-10 5", key: "17n18y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flag.js
var Flag = createLucideIcon("FlagIcon", [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flame-kindling.js
var FlameKindling = createLucideIcon("FlameKindlingIcon", [
  [
    "path",
    {
      d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",
      key: "1ir223"
    }
  ],
  ["path", { d: "m5 22 14-4", key: "1brv4h" }],
  ["path", { d: "m5 18 14 4", key: "lgyyje" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flame.js
var Flame = createLucideIcon("FlameIcon", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flashlight-off.js
var FlashlightOff = createLucideIcon("FlashlightOffIcon", [
  ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4", key: "1r120k" }],
  ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1", key: "dz1920" }],
  ["line", { x1: "11", x2: "18", y1: "6", y2: "6", key: "bi1vpe" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flashlight.js
var Flashlight = createLucideIcon("FlashlightIcon", [
  [
    "path",
    {
      d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",
      key: "1orkel"
    }
  ],
  ["line", { x1: "6", x2: "18", y1: "6", y2: "6", key: "1z11jq" }],
  ["line", { x1: "12", x2: "12", y1: "12", y2: "12", key: "1f4yc1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flask-conical-off.js
var FlaskConicalOff = createLucideIcon("FlaskConicalOffIcon", [
  [
    "path",
    {
      d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",
      key: "59ek9y"
    }
  ],
  ["path", { d: "M10 2v2.343", key: "15t272" }],
  ["path", { d: "M14 2v6.343", key: "sxr80q" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h9", key: "t5njau" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flask-conical.js
var FlaskConical = createLucideIcon("FlaskConicalIcon", [
  [
    "path",
    {
      d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
      key: "pzvekw"
    }
  ],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flask-round.js
var FlaskRound = createLucideIcon("FlaskRoundIcon", [
  ["path", { d: "M10 2v7.31", key: "5d1hyh" }],
  ["path", { d: "M14 9.3V1.99", key: "14k4l0" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14 9.3a6.5 6.5 0 1 1-4 0", key: "1r8fvy" }],
  ["path", { d: "M5.52 16h12.96", key: "46hh1i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flip-horizontal-2.js
var FlipHorizontal2 = createLucideIcon("FlipHorizontal2Icon", [
  ["path", { d: "m3 7 5 5-5 5V7", key: "couhi7" }],
  ["path", { d: "m21 7-5 5 5 5V7", key: "6ouia7" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 2v2", key: "tus03m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flip-horizontal.js
var FlipHorizontal = createLucideIcon("FlipHorizontalIcon", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3", key: "1i73f7" }],
  ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3", key: "saxlbk" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 2v2", key: "tus03m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flip-vertical-2.js
var FlipVertical2 = createLucideIcon("FlipVertical2Icon", [
  ["path", { d: "m17 3-5 5-5-5h10", key: "1ftt6x" }],
  ["path", { d: "m17 21-5-5-5 5h10", key: "1m0wmu" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flip-vertical.js
var FlipVertical = createLucideIcon("FlipVerticalIcon", [
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3", key: "14bfxa" }],
  ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3", key: "14rx03" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flower-2.js
var Flower2 = createLucideIcon("Flower2Icon", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      key: "3pnvol"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/flower.js
var Flower = createLucideIcon("FlowerIcon", [
  [
    "path",
    {
      d: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15",
      key: "51z86h"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m8 16 1.5-1.5", key: "ce6zph" }],
  ["path", { d: "M14.5 9.5 16 8", key: "1kzrzb" }],
  ["path", { d: "m8 8 1.5 1.5", key: "1yv88w" }],
  ["path", { d: "M14.5 14.5 16 16", key: "12xhjh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/focus.js
var Focus = createLucideIcon("FocusIcon", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fold-horizontal.js
var FoldHorizontal = createLucideIcon("FoldHorizontalIcon", [
  ["path", { d: "M2 12h6", key: "1wqiqv" }],
  ["path", { d: "M22 12h-6", key: "1eg9hc" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 9-3 3 3 3", key: "12ol22" }],
  ["path", { d: "m5 15 3-3-3-3", key: "1kdhjc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fold-vertical.js
var FoldVertical = createLucideIcon("FoldVerticalIcon", [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3-3-3 3", key: "e37ymu" }],
  ["path", { d: "m15 5-3 3-3-3", key: "19d6lf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-archive.js
var FolderArchive = createLucideIcon("FolderArchiveIcon", [
  ["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }],
  [
    "path",
    {
      d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
      key: "1jj40k"
    }
  ],
  ["path", { d: "M15 11v-1", key: "cntcp" }],
  ["path", { d: "M15 17v-2", key: "1279jj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-check.js
var FolderCheck = createLucideIcon("FolderCheckIcon", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-clock.js
var FolderClock = createLucideIcon("FolderClockIcon", [
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
  [
    "path",
    {
      d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",
      key: "1urifu"
    }
  ],
  ["path", { d: "M16 14v2l1 1", key: "xth2jh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-closed.js
var FolderClosed = createLucideIcon("FolderClosedIcon", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M2 10h20", key: "1ir3d8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-cog.js
var FolderCog = createLucideIcon("FolderCogIcon", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  [
    "path",
    {
      d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",
      key: "1k8050"
    }
  ],
  ["path", { d: "m21.7 19.4-.9-.3", key: "1qgwi9" }],
  ["path", { d: "m15.2 16.9-.9-.3", key: "1t7mvx" }],
  ["path", { d: "m16.6 21.7.3-.9", key: "1j67ps" }],
  ["path", { d: "m19.1 15.2.3-.9", key: "18r7jp" }],
  ["path", { d: "m19.6 21.7-.4-1", key: "z2vh2" }],
  ["path", { d: "m16.8 15.3-.4-1", key: "1ei7r6" }],
  ["path", { d: "m14.3 19.6 1-.4", key: "11sv9r" }],
  ["path", { d: "m20.7 16.8 1-.4", key: "19m87a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-dot.js
var FolderDot = createLucideIcon("FolderDotIcon", [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "1", key: "49l61u" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-down.js
var FolderDown = createLucideIcon("FolderDownIcon", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m15 13-3 3-3-3", key: "6j2sf0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-edit.js
var FolderEdit = createLucideIcon("FolderEditIcon", [
  ["path", { d: "M8.4 10.6a2.1 2.1 0 1 1 2.99 2.98L6 19l-4 1 1-3.9Z", key: "10ocjb" }],
  [
    "path",
    {
      d: "M2 11.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
      key: "1h3cz8"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-git-2.js
var FolderGit2 = createLucideIcon("FolderGit2Icon", [
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
      key: "1w6njk"
    }
  ],
  ["circle", { cx: "13", cy: "12", r: "2", key: "1j92g6" }],
  ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8", key: "pkpw2h" }],
  ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-git.js
var FolderGit = createLucideIcon("FolderGitIcon", [
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M14 13h3", key: "1dgedf" }],
  ["path", { d: "M7 13h3", key: "1pygq7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-heart.js
var FolderHeart = createLucideIcon("FolderHeartIcon", [
  [
    "path",
    {
      d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",
      key: "6hud8k"
    }
  ],
  [
    "path",
    {
      d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",
      key: "vgq86i"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-input.js
var FolderInput = createLucideIcon("FolderInputIcon", [
  [
    "path",
    {
      d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
      key: "fm4g5t"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-kanban.js
var FolderKanban = createLucideIcon("FolderKanbanIcon", [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M12 10v2", key: "hh53o1" }],
  ["path", { d: "M16 10v6", key: "1d6xys" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-key.js
var FolderKey = createLucideIcon("FolderKeyIcon", [
  ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
  [
    "path",
    {
      d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",
      key: "3hgo9p"
    }
  ],
  ["path", { d: "m22 14-4.5 4.5", key: "1ef6z8" }],
  ["path", { d: "m21 15 1 1", key: "1ejcpy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-lock.js
var FolderLock = createLucideIcon("FolderLockIcon", [
  ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1", key: "19aais" }],
  [
    "path",
    {
      d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",
      key: "1w6v7t"
    }
  ],
  ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-minus.js
var FolderMinus = createLucideIcon("FolderMinusIcon", [
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-open-dot.js
var FolderOpenDot = createLucideIcon("FolderOpenDotIcon", [
  [
    "path",
    {
      d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
      key: "1nmvlm"
    }
  ],
  ["circle", { cx: "14", cy: "15", r: "1", key: "1gm4qj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-open.js
var FolderOpen = createLucideIcon("FolderOpenIcon", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-output.js
var FolderOutput = createLucideIcon("FolderOutputIcon", [
  [
    "path",
    {
      d: "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
      key: "jm8npq"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m5 10-3 3 3 3", key: "1r8ie0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-plus.js
var FolderPlus = createLucideIcon("FolderPlusIcon", [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-root.js
var FolderRoot = createLucideIcon("FolderRootIcon", [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
  ["path", { d: "M12 15v5", key: "11xva1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-search-2.js
var FolderSearch2 = createLucideIcon("FolderSearch2Icon", [
  ["circle", { cx: "11.5", cy: "12.5", r: "2.5", key: "1ea5ju" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M13.3 14.3 15 16", key: "1y4v1n" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-search.js
var FolderSearch = createLucideIcon("FolderSearchIcon", [
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  [
    "path",
    {
      d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
      key: "1bw5m7"
    }
  ],
  ["path", { d: "m21 21-1.5-1.5", key: "3sg1j" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-symlink.js
var FolderSymlink = createLucideIcon("FolderSymlinkIcon", [
  [
    "path",
    {
      d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
      key: "1or2t8"
    }
  ],
  ["path", { d: "m8 16 3-3-3-3", key: "rlqrt1" }],
  ["path", { d: "M2 16v-1a2 2 0 0 1 2-2h6", key: "pgw8ln" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-sync.js
var FolderSync = createLucideIcon("FolderSyncIcon", [
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1",
      key: "1rkwto"
    }
  ],
  ["path", { d: "M12 10v4h4", key: "1czhmt" }],
  [
    "path",
    { d: "m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5", key: "25wejs" }
  ],
  ["path", { d: "M22 22v-4h-4", key: "1ewp4q" }],
  [
    "path",
    { d: "m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5", key: "vlp1j8" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-tree.js
var FolderTree = createLucideIcon("FolderTreeIcon", [
  [
    "path",
    {
      d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "hod4my"
    }
  ],
  [
    "path",
    {
      d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "w4yl2u"
    }
  ],
  ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }],
  ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-up.js
var FolderUp = createLucideIcon("FolderUpIcon", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m9 13 3-3 3 3", key: "1pxg3c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder-x.js
var FolderX = createLucideIcon("FolderXIcon", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "m9.5 10.5 5 5", key: "ra9qjz" }],
  ["path", { d: "m14.5 10.5-5 5", key: "l2rkpq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folder.js
var Folder = createLucideIcon("FolderIcon", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/folders.js
var Folders = createLucideIcon("FoldersIcon", [
  [
    "path",
    {
      d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",
      key: "4u7rpt"
    }
  ],
  ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14", key: "1eicx1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/footprints.js
var Footprints = createLucideIcon("FootprintsIcon", [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/forklift.js
var Forklift = createLucideIcon("ForkliftIcon", [
  ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5", key: "7zsz91" }],
  ["circle", { cx: "13", cy: "19", r: "2", key: "wjnkru" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5", key: "13bk1p" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/form-input.js
var FormInput = createLucideIcon("FormInputIcon", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/forward.js
var Forward = createLucideIcon("ForwardIcon", [
  ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/frame.js
var Frame = createLucideIcon("FrameIcon", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/framer.js
var Framer = createLucideIcon("FramerIcon", [
  ["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7", key: "1a2nng" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/frown.js
var Frown = createLucideIcon("FrownIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fuel.js
var Fuel = createLucideIcon("FuelIcon", [
  ["line", { x1: "3", x2: "15", y1: "22", y2: "22", key: "xegly4" }],
  ["line", { x1: "4", x2: "14", y1: "9", y2: "9", key: "xcnuvu" }],
  ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18", key: "16j0yd" }],
  [
    "path",
    {
      d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
      key: "8ur5zv"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/fullscreen.js
var Fullscreen = createLucideIcon("FullscreenIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1", key: "vys8me" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/function-square.js
var FunctionSquare = createLucideIcon("FunctionSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" }],
  ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gallery-horizontal-end.js
var GalleryHorizontalEnd = createLucideIcon("GalleryHorizontalEndIcon", [
  ["path", { d: "M2 7v10", key: "a2pl2d" }],
  ["path", { d: "M6 5v14", key: "1kq3d7" }],
  ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2", key: "13i7bc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gallery-horizontal.js
var GalleryHorizontal = createLucideIcon("GalleryHorizontalIcon", [
  ["path", { d: "M2 3v18", key: "pzttux" }],
  ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2", key: "btr8bg" }],
  ["path", { d: "M22 3v18", key: "6jf3v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gallery-thumbnails.js
var GalleryThumbnails = createLucideIcon("GalleryThumbnailsIcon", [
  ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2", key: "74y24f" }],
  ["path", { d: "M4 21h1", key: "16zlid" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M19 21h1", key: "edywat" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gallery-vertical-end.js
var GalleryVerticalEnd = createLucideIcon("GalleryVerticalEndIcon", [
  ["path", { d: "M7 2h10", key: "nczekb" }],
  ["path", { d: "M5 6h14", key: "u2x4p" }],
  ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2", key: "l0tzu3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gallery-vertical.js
var GalleryVertical = createLucideIcon("GalleryVerticalIcon", [
  ["path", { d: "M3 2h18", key: "15qxfx" }],
  ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2", key: "1439r6" }],
  ["path", { d: "M3 22h18", key: "8prr45" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gamepad-2.js
var Gamepad2 = createLucideIcon("Gamepad2Icon", [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gamepad.js
var Gamepad = createLucideIcon("GamepadIcon", [
  ["line", { x1: "6", x2: "10", y1: "12", y2: "12", key: "161bw2" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13", key: "dqpgro" }],
  ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11", key: "meh2c" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gantt-chart-square.js
var GanttChartSquare = createLucideIcon("GanttChartSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 8h7", key: "kbo1nt" }],
  ["path", { d: "M8 12h6", key: "ikassy" }],
  ["path", { d: "M11 16h5", key: "oq65wt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gantt-chart.js
var GanttChart = createLucideIcon("GanttChartIcon", [
  ["path", { d: "M8 6h10", key: "9lnwnk" }],
  ["path", { d: "M6 12h9", key: "1g9pqf" }],
  ["path", { d: "M11 18h7", key: "c8dzvl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gauge-circle.js
var GaugeCircle = createLucideIcon("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gauge.js
var Gauge = createLucideIcon("GaugeIcon", [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gavel.js
var Gavel = createLucideIcon("GavelIcon", [
  ["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8", key: "15492f" }],
  ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
  ["path", { d: "m8 8 6-6", key: "18bi4p" }],
  ["path", { d: "m9 7 8 8", key: "5jnvq1" }],
  ["path", { d: "m21 11-8-8", key: "z4y7zo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gem.js
var Gem = createLucideIcon("GemIcon", [
  ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
  ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ghost.js
var Ghost = createLucideIcon("GhostIcon", [
  ["path", { d: "M9 10h.01", key: "qbtxuw" }],
  ["path", { d: "M15 10h.01", key: "1qmjsl" }],
  [
    "path",
    {
      d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
      key: "uwwb07"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gift.js
var Gift = createLucideIcon("GiftIcon", [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-branch-plus.js
var GitBranchPlus = createLucideIcon("GitBranchPlusIcon", [
  ["path", { d: "M6 3v12", key: "qpgusn" }],
  ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "1d02ji" }],
  ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "chk6ph" }],
  ["path", { d: "M15 6a9 9 0 0 0-9 9", key: "or332x" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-branch.js
var GitBranch = createLucideIcon("GitBranchIcon", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-commit-horizontal.js
var GitCommitHorizontal = createLucideIcon("GitCommitHorizontalIcon", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
  ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-commit-vertical.js
var GitCommitVertical = createLucideIcon("GitCommitVerticalIcon", [
  ["path", { d: "M12 3v6", key: "1holv5" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M12 15v6", key: "a9ows0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-compare-arrows.js
var GitCompareArrows = createLucideIcon("GitCompareArrowsIcon", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
  ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-compare.js
var GitCompare = createLucideIcon("GitCompareIcon", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-fork.js
var GitFork = createLucideIcon("GitForkIcon", [
  ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }],
  ["path", { d: "M12 12v3", key: "158kv8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-graph.js
var GitGraph = createLucideIcon("GitGraphIcon", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v6", key: "158jrl" }],
  ["circle", { cx: "5", cy: "18", r: "3", key: "104gr9" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
  ["path", { d: "M16 15.7A9 9 0 0 0 19 9", key: "1e3vqb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-merge.js
var GitMerge = createLucideIcon("GitMergeIcon", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-pull-request-arrow.js
var GitPullRequestArrow = createLucideIcon("GitPullRequestArrowIcon", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-pull-request-closed.js
var GitPullRequestClosed = createLucideIcon("GitPullRequestClosedIcon", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 9v12", key: "1sc30k" }],
  ["path", { d: "m21 3-6 6", key: "16nqsk" }],
  ["path", { d: "m21 9-6-6", key: "9j17rh" }],
  ["path", { d: "M18 11.5V15", key: "65xf6f" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-pull-request-create-arrow.js
var GitPullRequestCreateArrow = createLucideIcon("GitPullRequestCreateArrowIcon", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3", key: "1rbwk6" }],
  ["path", { d: "M19 15v6", key: "10aioa" }],
  ["path", { d: "M22 18h-6", key: "1d5gi5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-pull-request-create.js
var GitPullRequestCreate = createLucideIcon("GitPullRequestCreateIcon", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 9v12", key: "1sc30k" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3", key: "1jb6z3" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-pull-request-draft.js
var GitPullRequestDraft = createLucideIcon("GitPullRequestDraftIcon", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M18 6V5", key: "1oao2s" }],
  ["path", { d: "M18 11v-1", key: "11c8tz" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/git-pull-request.js
var GitPullRequest = createLucideIcon("GitPullRequestIcon", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/github.js
var Github = createLucideIcon("GithubIcon", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/gitlab.js
var Gitlab = createLucideIcon("GitlabIcon", [
  [
    "path",
    {
      d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",
      key: "148pdi"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/glass-water.js
var GlassWater = createLucideIcon("GlassWaterIcon", [
  [
    "path",
    { d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z", key: "48rfw3" }
  ],
  ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/glasses.js
var Glasses = createLucideIcon("GlassesIcon", [
  ["circle", { cx: "6", cy: "15", r: "4", key: "vux9w4" }],
  ["circle", { cx: "18", cy: "15", r: "4", key: "18o8ve" }],
  ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2", key: "1ag4bs" }],
  ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2", key: "1hm1gs" }],
  ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2", key: "1r31ai" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/globe-2.js
var Globe2 = createLucideIcon("Globe2Icon", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",
      key: "1fi5u6"
    }
  ],
  [
    "path",
    { d: "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "xsiumc" }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/globe.js
var Globe = createLucideIcon("GlobeIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/goal.js
var Goal = createLucideIcon("GoalIcon", [
  ["path", { d: "M12 13V2l8 4-8 4", key: "5wlwwj" }],
  ["path", { d: "M20.55 10.23A9 9 0 1 1 8 4.94", key: "5988i3" }],
  ["path", { d: "M8 10a5 5 0 1 0 8.9 2.02", key: "1hq7ot" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/grab.js
var Grab = createLucideIcon("GrabIcon", [
  ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4", key: "n5nng" }],
  ["path", { d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "185i9d" }],
  ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5", key: "11pz95" }],
  ["path", { d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "16yk7l" }],
  [
    "path",
    { d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0", key: "nzvb1c" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/graduation-cap.js
var GraduationCap = createLucideIcon("GraduationCapIcon", [
  ["path", { d: "M22 10v6M2 10l10-5 10 5-10 5z", key: "1ef52a" }],
  ["path", { d: "M6 12v5c3 3 9 3 12 0v-5", key: "1f75yj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/grape.js
var Grape = createLucideIcon("GrapeIcon", [
  ["path", { d: "M22 5V2l-5.89 5.89", key: "1eenpo" }],
  ["circle", { cx: "16.6", cy: "15.89", r: "3", key: "xjtalx" }],
  ["circle", { cx: "8.11", cy: "7.4", r: "3", key: "u2fv6i" }],
  ["circle", { cx: "12.35", cy: "11.65", r: "3", key: "i6i8g7" }],
  ["circle", { cx: "13.91", cy: "5.85", r: "3", key: "6ye0dv" }],
  ["circle", { cx: "18.15", cy: "10.09", r: "3", key: "snx9no" }],
  ["circle", { cx: "6.56", cy: "13.2", r: "3", key: "17x4xg" }],
  ["circle", { cx: "10.8", cy: "17.44", r: "3", key: "1hogw9" }],
  ["circle", { cx: "5", cy: "19", r: "3", key: "1sn6vo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/grid-2x2.js
var Grid2x2 = createLucideIcon("Grid2x2Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/grid-3x3.js
var Grid3x3 = createLucideIcon("Grid3x3Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/grip-horizontal.js
var GripHorizontal = createLucideIcon("GripHorizontalIcon", [
  ["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }],
  ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }],
  ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }],
  ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }],
  ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }],
  ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/grip-vertical.js
var GripVertical = createLucideIcon("GripVerticalIcon", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/grip.js
var Grip = createLucideIcon("GripIcon", [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "19", cy: "5", r: "1", key: "w8mnmm" }],
  ["circle", { cx: "5", cy: "5", r: "1", key: "lttvr7" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
  ["circle", { cx: "19", cy: "19", r: "1", key: "shf9b7" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/group.js
var Group = createLucideIcon("GroupIcon", [
  ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }],
  ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }],
  ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }],
  ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }],
  ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" }],
  ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1", key: "1qlmkx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/guitar.js
var Guitar = createLucideIcon("GuitarIcon", [
  ["path", { d: "m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z", key: "15ixgv" }],
  ["path", { d: "m17 7-5.1 5.1", key: "l9guh7" }],
  ["circle", { cx: "11.5", cy: "12.5", r: ".5", key: "1evg0a" }],
  [
    "path",
    {
      d: "M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",
      key: "x9fguj"
    }
  ],
  ["path", { d: "m6 16 2 2", key: "16qmzd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hammer.js
var Hammer = createLucideIcon("HammerIcon", [
  [
    "path",
    { d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9", key: "1afvon" }
  ],
  ["path", { d: "M17.64 15 22 10.64", key: "zsji6s" }],
  [
    "path",
    {
      d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",
      key: "lehyy1"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hand-metal.js
var HandMetal = createLucideIcon("HandMetalIcon", [
  ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4", key: "7eki13" }],
  ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2", key: "94qvcw" }],
  ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9", key: "m1ah89" }],
  [
    "path",
    {
      d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
      key: "t1skq1"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hand.js
var Hand = createLucideIcon("HandIcon", [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "aigmz7" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "1n6bmn" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8", key: "a9iiix" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hard-drive-download.js
var HardDriveDownload = createLucideIcon("HardDriveDownloadIcon", [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 18h.01", key: "h775k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hard-drive-upload.js
var HardDriveUpload = createLucideIcon("HardDriveUploadIcon", [
  ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 18h.01", key: "h775k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hard-drive.js
var HardDrive = createLucideIcon("HardDriveIcon", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hard-hat.js
var HardHat = createLucideIcon("HardHatIcon", [
  [
    "path",
    {
      d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",
      key: "1dej2m"
    }
  ],
  ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" }],
  ["path", { d: "M4 15v-3a6 6 0 0 1 6-6h0", key: "1uc279" }],
  ["path", { d: "M14 6h0a6 6 0 0 1 6 6v3", key: "1j9mnm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hash.js
var Hash = createLucideIcon("HashIcon", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/haze.js
var Haze = createLucideIcon("HazeIcon", [
  ["path", { d: "m5.2 6.2 1.4 1.4", key: "17imol" }],
  ["path", { d: "M2 13h2", key: "13gyu8" }],
  ["path", { d: "M20 13h2", key: "16rner" }],
  ["path", { d: "m17.4 7.6 1.4-1.4", key: "t4xlah" }],
  ["path", { d: "M22 17H2", key: "1gtaj3" }],
  ["path", { d: "M22 21H2", key: "1gy6en" }],
  ["path", { d: "M16 13a4 4 0 0 0-8 0", key: "1dyczq" }],
  ["path", { d: "M12 5V2.5", key: "1vytko" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hdmi-port.js
var HdmiPort = createLucideIcon("HdmiPortIcon", [
  [
    "path",
    {
      d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",
      key: "2128wb"
    }
  ],
  ["path", { d: "M7.5 12h9", key: "1t0ckc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heading-1.js
var Heading1 = createLucideIcon("Heading1Icon", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heading-2.js
var Heading2 = createLucideIcon("Heading2Icon", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heading-3.js
var Heading3 = createLucideIcon("Heading3Icon", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heading-4.js
var Heading4 = createLucideIcon("Heading4Icon", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 10v4h4", key: "13sv97" }],
  ["path", { d: "M21 10v8", key: "1kdml4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heading-5.js
var Heading5 = createLucideIcon("Heading5Icon", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
  [
    "path",
    { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heading-6.js
var Heading6 = createLucideIcon("Heading6Icon", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
  ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heading.js
var Heading = createLucideIcon("HeadingIcon", [
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M6 20V4", key: "1w1bmo" }],
  ["path", { d: "M18 20V4", key: "o2hl4u" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/headphones.js
var Headphones = createLucideIcon("HeadphonesIcon", [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heart-crack.js
var HeartCrack = createLucideIcon("HeartCrackIcon", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "m12 13-1-1 2-2-3-3 2-2", key: "xjdxli" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heart-handshake.js
var HeartHandshake = createLucideIcon("HeartHandshakeIcon", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  [
    "path",
    {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
      key: "12sd6o"
    }
  ],
  ["path", { d: "m18 15-2-2", key: "60u0ii" }],
  ["path", { d: "m15 18-2-2", key: "6p76be" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heart-off.js
var HeartOff = createLucideIcon("HeartOffIcon", [
  ["line", { x1: "2", y1: "2", x2: "22", y2: "22", key: "1w4vcy" }],
  [
    "path",
    { d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35", key: "3mpagl" }
  ],
  [
    "path",
    {
      d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",
      key: "1gh3v3"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heart-pulse.js
var HeartPulse = createLucideIcon("HeartPulseIcon", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/heart.js
var Heart = createLucideIcon("HeartIcon", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/help-circle.js
var HelpCircle = createLucideIcon("HelpCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/helping-hand.js
var HelpingHand = createLucideIcon("HelpingHandIcon", [
  [
    "path",
    {
      d: "m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19",
      key: "nitrv7"
    }
  ],
  ["path", { d: "m2 14 6 6", key: "g6j1uo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hexagon.js
var Hexagon = createLucideIcon("HexagonIcon", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/highlighter.js
var Highlighter = createLucideIcon("HighlighterIcon", [
  ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
  ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/history.js
var History = createLucideIcon("HistoryIcon", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/home.js
var Home = createLucideIcon("HomeIcon", [
  ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }],
  ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hop-off.js
var HopOff = createLucideIcon("HopOffIcon", [
  ["path", { d: "M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226", key: "10j95a" }],
  ["path", { d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5", key: "1mqyjd" }],
  ["path", { d: "M17.5 17.5c-2.5 0-4 0-6-1", key: "11elt5" }],
  ["path", { d: "M20 11.5c1 1.5 2 3.5 2 4.5", key: "13ezvz" }],
  ["path", { d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5", key: "1ufrz1" }],
  ["path", { d: "M22 22c-2 0-3.5-.5-5.5-1.5", key: "1n8vbj" }],
  [
    "path",
    {
      d: "M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618",
      key: "1h85u8"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hop.js
var Hop = createLucideIcon("HopIcon", [
  ["path", { d: "M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1", key: "l0z2za" }],
  ["path", { d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5", key: "1mqyjd" }],
  ["path", { d: "M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1", key: "10xoad" }],
  ["path", { d: "M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5", key: "1a4gpx" }],
  ["path", { d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5", key: "1ufrz1" }],
  ["path", { d: "M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5", key: "1ok5d2" }],
  [
    "path",
    {
      d: "M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z",
      key: "8hlroy"
    }
  ],
  ["path", { d: "M4.5 4.5 3 3c-.184-.185-.184-.816 0-1", key: "q3aj97" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hotel.js
var Hotel = createLucideIcon("HotelIcon", [
  [
    "path",
    {
      d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",
      key: "p9z69c"
    }
  ],
  ["path", { d: "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16", key: "1bvcvh" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M10 22v-6.5m4 0V22", key: "16gs4s" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/hourglass.js
var Hourglass = createLucideIcon("HourglassIcon", [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  ["path", { d: "M5 2h14", key: "pdyrp9" }],
  [
    "path",
    {
      d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
      key: "1d314k"
    }
  ],
  [
    "path",
    { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ice-cream-2.js
var IceCream2 = createLucideIcon("IceCream2Icon", [
  [
    "path",
    {
      d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",
      key: "g86ewz"
    }
  ],
  ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0", key: "4k3m1s" }],
  ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0", key: "zmuahr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ice-cream.js
var IceCream = createLucideIcon("IceCreamIcon", [
  ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11", key: "1v6356" }],
  ["path", { d: "M17 7A5 5 0 0 0 7 7", key: "151p3v" }],
  ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4", key: "1sdaij" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/image-down.js
var ImageDown = createLucideIcon("ImageDownIcon", [
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8", key: "sqts6f" }],
  ["path", { d: "m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21", key: "1h47z9" }],
  ["path", { d: "m14 19.5 3 3v-6", key: "1x9jmo" }],
  ["path", { d: "m17 22.5 3-3", key: "xzuz0n" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/image-minus.js
var ImageMinus = createLucideIcon("ImageMinusIcon", [
  ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "m87ecr" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/image-off.js
var ImageOff = createLucideIcon("ImageOffIcon", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/image-plus.js
var ImagePlus = createLucideIcon("ImagePlusIcon", [
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/image.js
var Image = createLucideIcon("ImageIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/import.js
var Import = createLucideIcon("ImportIcon", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
  [
    "path",
    {
      d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
      key: "1ywtjm"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/inbox.js
var Inbox = createLucideIcon("InboxIcon", [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/indent.js
var Indent = createLucideIcon("IndentIcon", [
  ["polyline", { points: "3 8 7 12 3 16", key: "f3rxhf" }],
  ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
  ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
  ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/indian-rupee.js
var IndianRupee = createLucideIcon("IndianRupeeIcon", [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/infinity.js
var Infinity = createLucideIcon("InfinityIcon", [
  [
    "path",
    {
      d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",
      key: "1z0uae"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/info.js
var Info = createLucideIcon("InfoIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/inspection-panel.js
var InspectionPanel = createLucideIcon("InspectionPanelIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7h.01", key: "7u93v4" }],
  ["path", { d: "M17 7h.01", key: "14a9sn" }],
  ["path", { d: "M7 17h.01", key: "19xn7k" }],
  ["path", { d: "M17 17h.01", key: "1sd3ek" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/instagram.js
var Instagram = createLucideIcon("InstagramIcon", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/italic.js
var Italic = createLucideIcon("ItalicIcon", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/iteration-ccw.js
var IterationCcw = createLucideIcon("IterationCcwIcon", [
  ["path", { d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8", key: "4znkd0" }],
  ["polyline", { points: "16 14 20 18 16 22", key: "11njsm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/iteration-cw.js
var IterationCw = createLucideIcon("IterationCwIcon", [
  ["path", { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4", key: "tuf4su" }],
  ["polyline", { points: "8 22 4 18 8 14", key: "evkj9s" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/japanese-yen.js
var JapaneseYen = createLucideIcon("JapaneseYenIcon", [
  ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3", key: "2ej80x" }],
  ["path", { d: "M6 15h12", key: "1hwgt5" }],
  ["path", { d: "M6 11h12", key: "wf4gp6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/joystick.js
var Joystick = createLucideIcon("JoystickIcon", [
  [
    "path",
    {
      d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
      key: "jg2n2t"
    }
  ],
  ["path", { d: "M6 15v-2", key: "gd6mvg" }],
  ["path", { d: "M12 15V9", key: "8c7uyn" }],
  ["circle", { cx: "12", cy: "6", r: "3", key: "1gm2ql" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/kanban-square-dashed.js
var KanbanSquareDashed = createLucideIcon("KanbanSquareDashedIcon", [
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }],
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M21 14v1", key: "169vum" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/kanban-square.js
var KanbanSquare = createLucideIcon("KanbanSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/kanban.js
var Kanban = createLucideIcon("KanbanIcon", [
  ["path", { d: "M6 5v11", key: "mdvv1e" }],
  ["path", { d: "M12 5v6", key: "14ar3b" }],
  ["path", { d: "M18 5v14", key: "7ji314" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/key-round.js
var KeyRound = createLucideIcon("KeyRoundIcon", [
  ["path", { d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z", key: "167ctg" }],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", key: "1kog09" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/key-square.js
var KeySquare = createLucideIcon("KeySquareIcon", [
  [
    "path",
    {
      d: "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",
      key: "9li5bk"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4", key: "1ym3zm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/key.js
var Key = createLucideIcon("KeyIcon", [
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/keyboard-music.js
var KeyboardMusic = createLucideIcon("KeyboardMusicIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M6 8h4", key: "utf9t1" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M6 12v4", key: "dy92yo" }],
  ["path", { d: "M10 12v4", key: "1fxnav" }],
  ["path", { d: "M14 12v4", key: "1hft58" }],
  ["path", { d: "M18 12v4", key: "tjjnbz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/keyboard.js
var Keyboard = createLucideIcon("KeyboardIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", ry: "2", key: "15u882" }],
  ["path", { d: "M6 8h.001", key: "1ej0i3" }],
  ["path", { d: "M10 8h.001", key: "1x2st2" }],
  ["path", { d: "M14 8h.001", key: "1vkmyp" }],
  ["path", { d: "M18 8h.001", key: "kfsenl" }],
  ["path", { d: "M8 12h.001", key: "1sjpby" }],
  ["path", { d: "M12 12h.001", key: "al75ts" }],
  ["path", { d: "M16 12h.001", key: "931bgk" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lamp-ceiling.js
var LampCeiling = createLucideIcon("LampCeilingIcon", [
  ["path", { d: "M12 2v5", key: "nd4vlx" }],
  ["path", { d: "M6 7h12l4 9H2l4-9Z", key: "123d64" }],
  ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0", key: "1061mw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lamp-desk.js
var LampDesk = createLucideIcon("LampDeskIcon", [
  ["path", { d: "m14 5-3 3 2 7 8-8-7-2Z", key: "1b0msb" }],
  ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z", key: "1uemms" }],
  ["path", { d: "M9.5 6.5 4 12l3 6", key: "1bx08v" }],
  ["path", { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z", key: "wap775" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lamp-floor.js
var LampFloor = createLucideIcon("LampFloorIcon", [
  ["path", { d: "M9 2h6l3 7H6l3-7Z", key: "wcx6mj" }],
  ["path", { d: "M12 9v13", key: "3n1su1" }],
  ["path", { d: "M9 22h6", key: "1rlq3v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lamp-wall-down.js
var LampWallDown = createLucideIcon("LampWallDownIcon", [
  ["path", { d: "M11 13h6l3 7H8l3-7Z", key: "9n3qlo" }],
  ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8", key: "1hu4hb" }],
  ["path", { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z", key: "s053bc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lamp-wall-up.js
var LampWallUp = createLucideIcon("LampWallUpIcon", [
  ["path", { d: "M11 4h6l3 7H8l3-7Z", key: "11x1ee" }],
  ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8", key: "eutp5o" }],
  ["path", { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z", key: "1iuthr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lamp.js
var Lamp = createLucideIcon("LampIcon", [
  ["path", { d: "M8 2h8l4 10H4L8 2Z", key: "9dma5w" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z", key: "mwf4oh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/land-plot.js
var LandPlot = createLucideIcon("LandPlotIcon", [
  ["path", { d: "m12 8 6-3-6-3v10", key: "mvpnpy" }],
  [
    "path",
    {
      d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",
      key: "ek95tt"
    }
  ],
  ["path", { d: "m6.49 12.85 11.02 6.3", key: "1kt42w" }],
  ["path", { d: "M17.51 12.85 6.5 19.15", key: "v55bdg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/landmark.js
var Landmark = createLucideIcon("LandmarkIcon", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/languages.js
var Languages = createLucideIcon("LanguagesIcon", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/laptop-2.js
var Laptop2 = createLucideIcon("Laptop2Icon", [
  ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2", key: "1qhy41" }],
  ["line", { x1: "2", x2: "22", y1: "20", y2: "20", key: "ni3hll" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/laptop.js
var Laptop = createLucideIcon("LaptopIcon", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lasso-select.js
var LassoSelect = createLucideIcon("LassoSelectIcon", [
  ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
  ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91", key: "ybbtv3" }],
  [
    "path",
    {
      d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
      key: "gt5e1w"
    }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }],
  [
    "path",
    {
      d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",
      key: "1bawls"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lasso.js
var Lasso = createLucideIcon("LassoIcon", [
  ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
  [
    "path",
    {
      d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
      key: "146dds"
    }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/laugh.js
var Laugh = createLucideIcon("LaughIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z", key: "b2q4dd" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/layers-2.js
var Layers2 = createLucideIcon("Layers2Icon", [
  [
    "path",
    {
      d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",
      key: "1cuww1"
    }
  ],
  [
    "path",
    {
      d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",
      key: "pdlvxu"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/layers-3.js
var Layers3 = createLucideIcon("Layers3Icon", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  [
    "path",
    {
      d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1e5n1m"
    }
  ],
  [
    "path",
    {
      d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1iwflc"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/layers.js
var Layers = createLucideIcon("LayersIcon", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/layout-dashboard.js
var LayoutDashboard = createLucideIcon("LayoutDashboardIcon", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/layout-grid.js
var LayoutGrid = createLucideIcon("LayoutGridIcon", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/layout-list.js
var LayoutList = createLucideIcon("LayoutListIcon", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/layout-panel-left.js
var LayoutPanelLeft = createLucideIcon("LayoutPanelLeftIcon", [
  ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1", key: "2obqm" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/layout-panel-top.js
var LayoutPanelTop = createLucideIcon("LayoutPanelTopIcon", [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/layout-template.js
var LayoutTemplate = createLucideIcon("LayoutTemplateIcon", [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/leaf.js
var Leaf = createLucideIcon("LeafIcon", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/leafy-green.js
var LeafyGreen = createLucideIcon("LeafyGreenIcon", [
  [
    "path",
    {
      d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",
      key: "1134nt"
    }
  ],
  ["path", { d: "M2 22 17 7", key: "1q7jp2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/library-big.js
var LibraryBig = createLucideIcon("LibraryBigIcon", [
  ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1", key: "oynpb5" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  [
    "path",
    {
      d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
      key: "1qboyk"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/library-square.js
var LibrarySquare = createLucideIcon("LibrarySquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7v10", key: "d5nglc" }],
  ["path", { d: "M11 7v10", key: "pptsnr" }],
  ["path", { d: "m15 7 2 10", key: "1m7qm5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/library.js
var Library = createLucideIcon("LibraryIcon", [
  ["path", { d: "m16 6 4 14", key: "ji33uf" }],
  ["path", { d: "M12 6v14", key: "1n7gus" }],
  ["path", { d: "M8 8v12", key: "1gg7y9" }],
  ["path", { d: "M4 4v16", key: "6qkkli" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/life-buoy.js
var LifeBuoy = createLucideIcon("LifeBuoyIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
  ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
  ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
  ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ligature.js
var Ligature = createLucideIcon("LigatureIcon", [
  ["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2", key: "1rtphz" }],
  ["path", { d: "M6 12h4", key: "a4o3ry" }],
  ["path", { d: "M14 12h2v8", key: "c1fccl" }],
  ["path", { d: "M6 20h4", key: "1i6q5t" }],
  ["path", { d: "M14 20h4", key: "lzx1xo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lightbulb-off.js
var LightbulbOff = createLucideIcon("LightbulbOffIcon", [
  ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5", key: "1fkcox" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5", key: "10m8kw" }],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lightbulb.js
var Lightbulb = createLucideIcon("LightbulbIcon", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/line-chart.js
var LineChart = createLucideIcon("LineChartIcon", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/link-2-off.js
var Link2Off = createLucideIcon("Link2OffIcon", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
  ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
  ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/link-2.js
var Link2 = createLucideIcon("Link2Icon", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/link.js
var Link = createLucideIcon("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/linkedin.js
var Linkedin = createLucideIcon("LinkedinIcon", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-checks.js
var ListChecks = createLucideIcon("ListChecksIcon", [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-end.js
var ListEnd = createLucideIcon("ListEndIcon", [
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M10 18H3", key: "13769t" }],
  ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5", key: "ilrcs8" }],
  ["path", { d: "m16 16-2 2 2 2", key: "kkc6pm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-filter.js
var ListFilter = createLucideIcon("ListFilterIcon", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-minus.js
var ListMinus = createLucideIcon("ListMinusIcon", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M21 12h-6", key: "bt1uis" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-music.js
var ListMusic = createLucideIcon("ListMusicIcon", [
  ["path", { d: "M21 15V6", key: "h1cx4g" }],
  ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z", key: "8saifv" }],
  ["path", { d: "M12 12H3", key: "18klou" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M12 18H3", key: "11ftsu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-ordered.js
var ListOrdered = createLucideIcon("ListOrderedIcon", [
  ["line", { x1: "10", x2: "21", y1: "6", y2: "6", key: "76qw6h" }],
  ["line", { x1: "10", x2: "21", y1: "12", y2: "12", key: "16nom4" }],
  ["line", { x1: "10", x2: "21", y1: "18", y2: "18", key: "u3jurt" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-plus.js
var ListPlus = createLucideIcon("ListPlusIcon", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M18 9v6", key: "1twb98" }],
  ["path", { d: "M21 12h-6", key: "bt1uis" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-restart.js
var ListRestart = createLucideIcon("ListRestartIcon", [
  ["path", { d: "M21 6H3", key: "1jwq7v" }],
  ["path", { d: "M7 12H3", key: "13ou7f" }],
  ["path", { d: "M7 18H3", key: "1sijw9" }],
  [
    "path",
    {
      d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
      key: "qth677"
    }
  ],
  ["path", { d: "M11 10v4h4", key: "172dkj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-start.js
var ListStart = createLucideIcon("ListStartIcon", [
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M10 6H3", key: "lf8lx7" }],
  ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5", key: "1hghli" }],
  ["path", { d: "m16 8-2-2 2-2", key: "160uvd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-todo.js
var ListTodo = createLucideIcon("ListTodoIcon", [
  ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-tree.js
var ListTree = createLucideIcon("ListTreeIcon", [
  ["path", { d: "M21 12h-8", key: "1bmf0i" }],
  ["path", { d: "M21 6H8", key: "1pqkrb" }],
  ["path", { d: "M21 18h-8", key: "1tm79t" }],
  ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3", key: "1ywdgy" }],
  ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3", key: "2wc746" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-video.js
var ListVideo = createLucideIcon("ListVideoIcon", [
  ["path", { d: "M12 12H3", key: "18klou" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M12 18H3", key: "11ftsu" }],
  ["path", { d: "m16 12 5 3-5 3v-6Z", key: "zpskkp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list-x.js
var ListX = createLucideIcon("ListXIcon", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "m19 10-4 4", key: "1tz659" }],
  ["path", { d: "m15 10 4 4", key: "1n7nei" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/list.js
var List = createLucideIcon("ListIcon", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/loader-2.js
var Loader2 = createLucideIcon("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/loader.js
var Loader = createLucideIcon("LoaderIcon", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "6", key: "gza1u7" }],
  ["line", { x1: "12", x2: "12", y1: "18", y2: "22", key: "1qhbu9" }],
  ["line", { x1: "4.93", x2: "7.76", y1: "4.93", y2: "7.76", key: "xae44r" }],
  ["line", { x1: "16.24", x2: "19.07", y1: "16.24", y2: "19.07", key: "bxnmvf" }],
  ["line", { x1: "2", x2: "6", y1: "12", y2: "12", key: "89khin" }],
  ["line", { x1: "18", x2: "22", y1: "12", y2: "12", key: "pb8tfm" }],
  ["line", { x1: "4.93", x2: "7.76", y1: "19.07", y2: "16.24", key: "1uxjnu" }],
  ["line", { x1: "16.24", x2: "19.07", y1: "7.76", y2: "4.93", key: "6duxfx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/locate-fixed.js
var LocateFixed = createLucideIcon("LocateFixedIcon", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/locate-off.js
var LocateOff = createLucideIcon("LocateOffIcon", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  [
    "path",
    {
      d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",
      key: "1oh7ia"
    }
  ],
  [
    "path",
    {
      d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",
      key: "3qdecy"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/locate.js
var Locate = createLucideIcon("LocateIcon", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lock-keyhole.js
var LockKeyhole = createLucideIcon("LockKeyholeIcon", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lock.js
var Lock = createLucideIcon("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/log-in.js
var LogIn = createLucideIcon("LogInIcon", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/log-out.js
var LogOut = createLucideIcon("LogOutIcon", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/lollipop.js
var Lollipop = createLucideIcon("LollipopIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0", key: "107gwy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/luggage.js
var Luggage = createLucideIcon("LuggageIcon", [
  [
    "path",
    {
      d: "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",
      key: "1h5fkc"
    }
  ],
  ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", key: "1l99gc" }],
  ["path", { d: "M10 20h4", key: "ni2waw" }],
  ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
  ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/m-square.js
var MSquare = createLucideIcon("MSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 16V8l4 4 4-4v8", key: "141u4e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/magnet.js
var Magnet = createLucideIcon("MagnetIcon", [
  [
    "path",
    {
      d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
      key: "1i3lhw"
    }
  ],
  ["path", { d: "m5 8 4 4", key: "j6kj7e" }],
  ["path", { d: "m12 15 4 4", key: "lnac28" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mail-check.js
var MailCheck = createLucideIcon("MailCheckIcon", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mail-minus.js
var MailMinus = createLucideIcon("MailMinusIcon", [
  ["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "fuxbkv" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mail-open.js
var MailOpen = createLucideIcon("MailOpenIcon", [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mail-plus.js
var MailPlus = createLucideIcon("MailPlusIcon", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mail-question.js
var MailQuestion = createLucideIcon("MailQuestionIcon", [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  [
    "path",
    {
      d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
      key: "7z9rxb"
    }
  ],
  ["path", { d: "M20 22v.01", key: "12bgn6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mail-search.js
var MailSearch = createLucideIcon("MailSearchIcon", [
  ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5", key: "w80f2v" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z", key: "mgbru4" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mail-warning.js
var MailWarning = createLucideIcon("MailWarningIcon", [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M20 14v4", key: "1hm744" }],
  ["path", { d: "M20 22v.01", key: "12bgn6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mail-x.js
var MailX = createLucideIcon("MailXIcon", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9", key: "1j9vog" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m17 17 4 4", key: "1b3523" }],
  ["path", { d: "m21 17-4 4", key: "uinynz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mail.js
var Mail = createLucideIcon("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mailbox.js
var Mailbox = createLucideIcon("MailboxIcon", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",
      key: "1lbycx"
    }
  ],
  ["polyline", { points: "15,9 18,9 18,11", key: "1pm9c0" }],
  ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0", key: "n6nfvi" }],
  ["line", { x1: "6", x2: "7", y1: "10", y2: "10", key: "1e2scm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mails.js
var Mails = createLucideIcon("MailsIcon", [
  ["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2", key: "1drq3f" }],
  ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7", key: "xn252p" }],
  ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14", key: "n13cji" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/map-pin-off.js
var MapPinOff = createLucideIcon("MapPinOffIcon", [
  [
    "path",
    { d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5", key: "12a8pk" }
  ],
  [
    "path",
    {
      d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",
      key: "1r9f6y"
    }
  ],
  [
    "path",
    { d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13", key: "erynq7" }
  ],
  ["path", { d: "M14.9 9.25a3 3 0 0 0-2.15-2.16", key: "1hwwmx" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/map-pin.js
var MapPin = createLucideIcon("MapPinIcon", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/map-pinned.js
var MapPinned = createLucideIcon("MapPinnedIcon", [
  ["path", { d: "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0", key: "yrbn30" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "path",
    {
      d: "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",
      key: "112zkj"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/map.js
var Map2 = createLucideIcon("MapIcon", [
  ["polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21", key: "ok2ie8" }],
  ["line", { x1: "9", x2: "9", y1: "3", y2: "18", key: "w34qz5" }],
  ["line", { x1: "15", x2: "15", y1: "6", y2: "21", key: "volv9a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/martini.js
var Martini = createLucideIcon("MartiniIcon", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M12 11v11", key: "ur9y6a" }],
  ["path", { d: "m19 3-7 8-7-8Z", key: "1sgpiw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/maximize-2.js
var Maximize2 = createLucideIcon("Maximize2Icon", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/maximize.js
var Maximize = createLucideIcon("MaximizeIcon", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/medal.js
var Medal = createLucideIcon("MedalIcon", [
  [
    "path",
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      key: "143lza"
    }
  ],
  ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
  ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
  ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/megaphone-off.js
var MegaphoneOff = createLucideIcon("MegaphoneOffIcon", [
  ["path", { d: "M9.26 9.26 3 11v3l14.14 3.14", key: "3429n" }],
  ["path", { d: "M21 15.34V6l-7.31 2.03", key: "4o1dh8" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/megaphone.js
var Megaphone = createLucideIcon("MegaphoneIcon", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/meh.js
var Meh = createLucideIcon("MehIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "8", x2: "16", y1: "15", y2: "15", key: "1xb1d9" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/memory-stick.js
var MemoryStick = createLucideIcon("MemoryStickIcon", [
  ["path", { d: "M6 19v-3", key: "1nvgqn" }],
  ["path", { d: "M10 19v-3", key: "iu8nkm" }],
  ["path", { d: "M14 19v-3", key: "kcehxu" }],
  ["path", { d: "M18 19v-3", key: "1vh91z" }],
  ["path", { d: "M8 11V9", key: "63erz4" }],
  ["path", { d: "M16 11V9", key: "fru6f3" }],
  ["path", { d: "M12 11V9", key: "ha00sb" }],
  ["path", { d: "M2 15h20", key: "16ne18" }],
  [
    "path",
    {
      d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
      key: "lhddv3"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/menu-square.js
var MenuSquare = createLucideIcon("MenuSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 8h10", key: "1jw688" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/menu.js
var Menu = createLucideIcon("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/merge.js
var Merge = createLucideIcon("MergeIcon", [
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
  ["path", { d: "m20 22-5-5", key: "1m27yz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-code.js
var MessageCircleCode = createLucideIcon("MessageCircleCodeIcon", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
  ["path", { d: "m14 10 2 2-2 2", key: "1kkmpt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-dashed.js
var MessageCircleDashed = createLucideIcon("MessageCircleDashedIcon", [
  ["path", { d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1", key: "16ll65" }],
  ["path", { d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1", key: "1nq77a" }],
  ["path", { d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5", key: "1sf7wn" }],
  ["path", { d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1", key: "x1hs5g" }],
  ["path", { d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1", key: "19m18z" }],
  ["path", { d: "M3.5 17.5 2 22l4.5-1.5", key: "1f36qi" }],
  ["path", { d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5", key: "1vz3ju" }],
  ["path", { d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1", key: "19f9do" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-heart.js
var MessageCircleHeart = createLucideIcon("MessageCircleHeartIcon", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  [
    "path",
    {
      d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",
      key: "43lnbm"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-more.js
var MessageCircleMore = createLucideIcon("MessageCircleMoreIcon", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-off.js
var MessageCircleOff = createLucideIcon("MessageCircleOffIcon", [
  ["path", { d: "M20.5 14.9A9 9 0 0 0 9.1 3.5", key: "1iebmn" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7", key: "1ov8ce" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-plus.js
var MessageCirclePlus = createLucideIcon("MessageCirclePlusIcon", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-question.js
var MessageCircleQuestion = createLucideIcon("MessageCircleQuestionIcon", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-reply.js
var MessageCircleReply = createLucideIcon("MessageCircleReplyIcon", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }],
  ["path", { d: "M7 12h7a2 2 0 0 1 2 2v1", key: "1gheu4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-warning.js
var MessageCircleWarning = createLucideIcon("MessageCircleWarningIcon", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle-x.js
var MessageCircleX = createLucideIcon("MessageCircleXIcon", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-circle.js
var MessageCircle = createLucideIcon("MessageCircleIcon", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-code.js
var MessageSquareCode = createLucideIcon("MessageSquareCodeIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "m10 8-2 2 2 2", key: "19bv1o" }],
  ["path", { d: "m14 8 2 2-2 2", key: "1whylv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-dashed.js
var MessageSquareDashed = createLucideIcon("MessageSquareDashedIcon", [
  ["path", { d: "M3 6V5c0-1.1.9-2 2-2h2", key: "9usibi" }],
  ["path", { d: "M11 3h3", key: "1c3ji7" }],
  ["path", { d: "M18 3h1c1.1 0 2 .9 2 2", key: "19esxn" }],
  ["path", { d: "M21 9v2", key: "p14lih" }],
  ["path", { d: "M21 15c0 1.1-.9 2-2 2h-1", key: "1fo1j8" }],
  ["path", { d: "M14 17h-3", key: "1w4p2m" }],
  ["path", { d: "m7 17-4 4v-5", key: "ph9x1h" }],
  ["path", { d: "M3 12v-2", key: "856n1q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-diff.js
var MessageSquareDiff = createLucideIcon("MessageSquareDiffIcon", [
  ["path", { d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2", key: "1xuzuj" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-dot.js
var MessageSquareDot = createLucideIcon("MessageSquareDotIcon", [
  ["path", { d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7", key: "uodpkb" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-heart.js
var MessageSquareHeart = createLucideIcon("MessageSquareHeartIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  [
    "path",
    {
      d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",
      key: "1blaws"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-more.js
var MessageSquareMore = createLucideIcon("MessageSquareMoreIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-off.js
var MessageSquareOff = createLucideIcon("MessageSquareOffIcon", [
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10", key: "pwpm4a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-plus.js
var MessageSquarePlus = createLucideIcon("MessageSquarePlusIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-quote.js
var MessageSquareQuote = createLucideIcon("MessageSquareQuoteIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M8 12a2 2 0 0 0 2-2V8H8", key: "1jfesj" }],
  ["path", { d: "M14 12a2 2 0 0 0 2-2V8h-2", key: "1dq9mh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-reply.js
var MessageSquareReply = createLucideIcon("MessageSquareReplyIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "m10 7-3 3 3 3", key: "1eugdv" }],
  ["path", { d: "M17 13v-1a2 2 0 0 0-2-2H7", key: "ernfh3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-share.js
var MessageSquareShare = createLucideIcon("MessageSquareShareIcon", [
  ["path", { d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7", key: "tqtdkg" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "m16 8 5-5", key: "15mbrl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-text.js
var MessageSquareText = createLucideIcon("MessageSquareTextIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M13 8H7", key: "14i4kc" }],
  ["path", { d: "M17 12H7", key: "16if0g" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-warning.js
var MessageSquareWarning = createLucideIcon("MessageSquareWarningIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M12 7v2", key: "stiyo7" }],
  ["path", { d: "M12 13h.01", key: "y0uutt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square-x.js
var MessageSquareX = createLucideIcon("MessageSquareXIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
  ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/message-square.js
var MessageSquare = createLucideIcon("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/messages-square.js
var MessagesSquare = createLucideIcon("MessagesSquareIcon", [
  ["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z", key: "16vlm8" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1", key: "1cx29u" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mic-2.js
var Mic2 = createLucideIcon("Mic2Icon", [
  ["path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12", key: "zoua8r" }],
  ["circle", { cx: "17", cy: "7", r: "5", key: "1fomce" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mic-off.js
var MicOff = createLucideIcon("MicOffIcon", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mic.js
var Mic = createLucideIcon("MicIcon", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/microscope.js
var Microscope = createLucideIcon("MicroscopeIcon", [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/microwave.js
var Microwave = createLucideIcon("MicrowaveIcon", [
  ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2", key: "2no95f" }],
  ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1", key: "zh9wx" }],
  ["path", { d: "M18 8v7", key: "o5zi4n" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 19v2", key: "1dawf0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/milestone.js
var Milestone = createLucideIcon("MilestoneIcon", [
  ["path", { d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z", key: "1mp5s7" }],
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M12 3v3", key: "1n5kay" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/milk-off.js
var MilkOff = createLucideIcon("MilkOffIcon", [
  ["path", { d: "M8 2h8", key: "1ssgc1" }],
  [
    "path",
    {
      d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",
      key: "y0ejgx"
    }
  ],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435", key: "iaxqsy" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/milk.js
var Milk = createLucideIcon("MilkIcon", [
  ["path", { d: "M8 2h8", key: "1ssgc1" }],
  [
    "path",
    {
      d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
      key: "qtp12x"
    }
  ],
  ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "ygeh44" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/minimize-2.js
var Minimize2 = createLucideIcon("Minimize2Icon", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/minimize.js
var Minimize = createLucideIcon("MinimizeIcon", [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/minus-circle.js
var MinusCircle = createLucideIcon("MinusCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/minus-square.js
var MinusSquare = createLucideIcon("MinusSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/minus.js
var Minus = createLucideIcon("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-check.js
var MonitorCheck = createLucideIcon("MonitorCheckIcon", [
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-dot.js
var MonitorDot = createLucideIcon("MonitorDotIcon", [
  ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
  ["path", { d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9", key: "1fet9y" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-down.js
var MonitorDown = createLucideIcon("MonitorDownIcon", [
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m15 10-3 3-3-3", key: "lzhmyn" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-off.js
var MonitorOff = createLucideIcon("MonitorOffIcon", [
  ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2", key: "k0q8oc" }],
  ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9", key: "cp1ac0" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-pause.js
var MonitorPause = createLucideIcon("MonitorPauseIcon", [
  ["path", { d: "M10 13V7", key: "1u13u9" }],
  ["path", { d: "M14 13V7", key: "1vj9om" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-play.js
var MonitorPlay = createLucideIcon("MonitorPlayIcon", [
  ["path", { d: "m10 7 5 3-5 3Z", key: "29ljg6" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-smartphone.js
var MonitorSmartphone = createLucideIcon("MonitorSmartphoneIcon", [
  ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }],
  ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
  ["path", { d: "M7 19h5", key: "qswx4l" }],
  ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-speaker.js
var MonitorSpeaker = createLucideIcon("MonitorSpeakerIcon", [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-stop.js
var MonitorStop = createLucideIcon("MonitorStopIcon", [
  ["rect", { x: "9", y: "7", width: "6", height: "6", key: "4xvc6r" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-up.js
var MonitorUp = createLucideIcon("MonitorUpIcon", [
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor-x.js
var MonitorX = createLucideIcon("MonitorXIcon", [
  ["path", { d: "m14.5 12.5-5-5", key: "1jahn5" }],
  ["path", { d: "m9.5 12.5 5-5", key: "1k2t7b" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/monitor.js
var Monitor = createLucideIcon("MonitorIcon", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/moon-star.js
var MoonStar = createLucideIcon("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/moon.js
var Moon = createLucideIcon("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/more-horizontal.js
var MoreHorizontal = createLucideIcon("MoreHorizontalIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/more-vertical.js
var MoreVertical = createLucideIcon("MoreVerticalIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mountain-snow.js
var MountainSnow = createLucideIcon("MountainSnowIcon", [
  ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }],
  [
    "path",
    { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19", key: "1pvmmp" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mountain.js
var Mountain = createLucideIcon("MountainIcon", [
  ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mouse-pointer-2.js
var MousePointer2 = createLucideIcon("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mouse-pointer-click.js
var MousePointerClick = createLucideIcon("MousePointerClickIcon", [
  ["path", { d: "m9 9 5 12 1.8-5.2L21 14Z", key: "1b76lo" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mouse-pointer-square-dashed.js
var MousePointerSquareDashed = createLucideIcon("MousePointerSquareDashedIcon", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z", key: "64ilsv" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h2", key: "1qve2z" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v2", key: "p14lih" }],
  ["path", { d: "M3 14v1", key: "vnatye" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mouse-pointer-square.js
var MousePointerSquare = createLucideIcon("MousePointerSquareIcon", [
  ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "14rsvq" }],
  ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z", key: "64ilsv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mouse-pointer.js
var MousePointer = createLucideIcon("MousePointerIcon", [
  ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z", key: "y2ucgo" }],
  ["path", { d: "m13 13 6 6", key: "1nhxnf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/mouse.js
var Mouse = createLucideIcon("MouseIcon", [
  ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7", key: "11ol66" }],
  ["path", { d: "M12 6v4", key: "16clxf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-3d.js
var Move3d = createLucideIcon("Move3dIcon", [
  ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
  ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
  ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-diagonal-2.js
var MoveDiagonal2 = createLucideIcon("MoveDiagonal2Icon", [
  ["polyline", { points: "5 11 5 5 11 5", key: "ncfzxk" }],
  ["polyline", { points: "19 13 19 19 13 19", key: "1mk7hk" }],
  ["line", { x1: "5", x2: "19", y1: "5", y2: "19", key: "mcyte3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-diagonal.js
var MoveDiagonal = createLucideIcon("MoveDiagonalIcon", [
  ["polyline", { points: "13 5 19 5 19 11", key: "11219e" }],
  ["polyline", { points: "11 19 5 19 5 13", key: "sfq3wq" }],
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-down-left.js
var MoveDownLeft = createLucideIcon("MoveDownLeftIcon", [
  ["path", { d: "M11 19H5V13", key: "1akmht" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-down-right.js
var MoveDownRight = createLucideIcon("MoveDownRightIcon", [
  ["path", { d: "M19 13V19H13", key: "10vkzq" }],
  ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-down.js
var MoveDown = createLucideIcon("MoveDownIcon", [
  ["path", { d: "M8 18L12 22L16 18", key: "cskvfv" }],
  ["path", { d: "M12 2V22", key: "r89rzk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-horizontal.js
var MoveHorizontal = createLucideIcon("MoveHorizontalIcon", [
  ["polyline", { points: "18 8 22 12 18 16", key: "1hqrds" }],
  ["polyline", { points: "6 8 2 12 6 16", key: "f0ernq" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-left.js
var MoveLeft = createLucideIcon("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-right.js
var MoveRight = createLucideIcon("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-up-left.js
var MoveUpLeft = createLucideIcon("MoveUpLeftIcon", [
  ["path", { d: "M5 11V5H11", key: "3q78g9" }],
  ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-up-right.js
var MoveUpRight = createLucideIcon("MoveUpRightIcon", [
  ["path", { d: "M13 5H19V11", key: "1n1gyv" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-up.js
var MoveUp = createLucideIcon("MoveUpIcon", [
  ["path", { d: "M8 6L12 2L16 6", key: "1yvkyx" }],
  ["path", { d: "M12 2V22", key: "r89rzk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move-vertical.js
var MoveVertical = createLucideIcon("MoveVerticalIcon", [
  ["polyline", { points: "8 18 12 22 16 18", key: "1uutw3" }],
  ["polyline", { points: "8 6 12 2 16 6", key: "d60sxy" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/move.js
var Move = createLucideIcon("MoveIcon", [
  ["polyline", { points: "5 9 2 12 5 15", key: "1r5uj5" }],
  ["polyline", { points: "9 5 12 2 15 5", key: "5v383o" }],
  ["polyline", { points: "15 19 12 22 9 19", key: "g7qi8m" }],
  ["polyline", { points: "19 9 22 12 19 15", key: "tpp73q" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/music-2.js
var Music2 = createLucideIcon("Music2Icon", [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/music-3.js
var Music3 = createLucideIcon("Music3Icon", [
  ["circle", { cx: "12", cy: "18", r: "4", key: "m3r9ws" }],
  ["path", { d: "M16 18V2", key: "40x2m5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/music-4.js
var Music4 = createLucideIcon("Music4Icon", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["path", { d: "m9 9 12-2", key: "1e64n2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/music.js
var Music = createLucideIcon("MusicIcon", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/navigation-2-off.js
var Navigation2Off = createLucideIcon("Navigation2OffIcon", [
  ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17", key: "qoq2o2" }],
  ["path", { d: "M14.53 8.88 12 2l-1.17 3.17", key: "k3sjzy" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/navigation-2.js
var Navigation2 = createLucideIcon("Navigation2Icon", [
  ["polygon", { points: "12 2 19 21 12 17 5 21 12 2", key: "x8c0qg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/navigation-off.js
var NavigationOff = createLucideIcon("NavigationOffIcon", [
  ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43", key: "1vdtb7" }],
  ["path", { d: "M17.39 11.73 22 2l-9.73 4.61", key: "tya3r6" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/navigation.js
var Navigation = createLucideIcon("NavigationIcon", [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/network.js
var Network = createLucideIcon("NetworkIcon", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/newspaper.js
var Newspaper = createLucideIcon("NewspaperIcon", [
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
      key: "7pis2x"
    }
  ],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/nfc.js
var Nfc = createLucideIcon("NfcIcon", [
  ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36", key: "9iaqei" }],
  ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "1yha7l" }],
  ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "4iu2gk" }],
  ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20", key: "sap9u2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/nut-off.js
var NutOff = createLucideIcon("NutOffIcon", [
  ["path", { d: "M12 4V2", key: "1k5q1u" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",
      key: "1xcvy9"
    }
  ],
  ["path", { d: "M19 10v3.343", key: "163tfc" }],
  [
    "path",
    {
      d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",
      key: "17914v"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/nut.js
var Nut = createLucideIcon("NutIcon", [
  ["path", { d: "M12 4V2", key: "1k5q1u" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
      key: "1tgyif"
    }
  ],
  [
    "path",
    {
      d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
      key: "tnsqj"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/octagon.js
var Octagon = createLucideIcon("OctagonIcon", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/option.js
var Option = createLucideIcon("OptionIcon", [
  ["path", { d: "M3 3h6l6 18h6", key: "ph9rgk" }],
  ["path", { d: "M14 3h7", key: "16f0ms" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/orbit.js
var Orbit = createLucideIcon("OrbitIcon", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416", key: "eohfx2" }],
  ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416", key: "19pvbm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/outdent.js
var Outdent = createLucideIcon("OutdentIcon", [
  ["polyline", { points: "7 8 3 12 7 16", key: "2j60jr" }],
  ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
  ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
  ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/package-2.js
var Package2 = createLucideIcon("Package2Icon", [
  ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z", key: "1ront0" }],
  ["path", { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9", key: "19h2x1" }],
  ["path", { d: "M12 3v6", key: "1holv5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/package-check.js
var PackageCheck = createLucideIcon("PackageCheckIcon", [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/package-minus.js
var PackageMinus = createLucideIcon("PackageMinusIcon", [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/package-open.js
var PackageOpen = createLucideIcon("PackageOpenIcon", [
  [
    "path",
    {
      d: "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z",
      key: "1vy178"
    }
  ],
  [
    "path",
    {
      d: "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z",
      key: "s3bv25"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "13", key: "1o4xyi" }],
  [
    "path",
    {
      d: "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5",
      key: "1na2nq"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/package-plus.js
var PackagePlus = createLucideIcon("PackagePlusIcon", [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  ["path", { d: "M19 13v6", key: "85cyf1" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/package-search.js
var PackageSearch = createLucideIcon("PackageSearchIcon", [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
  ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/package-x.js
var PackageX = createLucideIcon("PackageXIcon", [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["path", { d: "m17 13 5 5m-5 0 5-5", key: "im3w4b" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/package.js
var Package = createLucideIcon("PackageIcon", [
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/paint-bucket.js
var PaintBucket = createLucideIcon("PaintBucketIcon", [
  [
    "path",
    { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z", key: "irua1i" }
  ],
  ["path", { d: "m5 2 5 5", key: "1lls2c" }],
  ["path", { d: "M2 13h15", key: "1hkzvu" }],
  ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z", key: "xk76lq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/paintbrush-2.js
var Paintbrush2 = createLucideIcon("Paintbrush2Icon", [
  [
    "path",
    { d: "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z", key: "1c8kta" }
  ],
  ["path", { d: "M6 12V2h12v10", key: "1esbnf" }],
  ["path", { d: "M14 2v4", key: "qmzblu" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/paintbrush.js
var Paintbrush = createLucideIcon("PaintbrushIcon", [
  [
    "path",
    {
      d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",
      key: "m6k5sh"
    }
  ],
  ["path", { d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7", key: "arzq70" }],
  ["path", { d: "M14.5 17.5 4.5 15", key: "s7fvrz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/palette.js
var Palette = createLucideIcon("PaletteIcon", [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", key: "1xcu5" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", key: "736e4u" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", key: "clrty" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", key: "1s4xz9" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/palmtree.js
var Palmtree = createLucideIcon("PalmtreeIcon", [
  ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4", key: "foxbe7" }],
  [
    "path",
    { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3", key: "18arnh" }
  ],
  [
    "path",
    {
      d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",
      key: "epoumf"
    }
  ],
  ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14", key: "ft0feo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-bottom-close.js
var PanelBottomClose = createLucideIcon("PanelBottomCloseIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-bottom-dashed.js
var PanelBottomDashed = createLucideIcon("PanelBottomDashedIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M14 15h1", key: "171nev" }],
  ["path", { d: "M19 15h2", key: "1vnucp" }],
  ["path", { d: "M3 15h2", key: "8bym0q" }],
  ["path", { d: "M9 15h1", key: "1tg3ks" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-bottom-open.js
var PanelBottomOpen = createLucideIcon("PanelBottomOpenIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-bottom.js
var PanelBottom = createLucideIcon("PanelBottomIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-left-close.js
var PanelLeftClose = createLucideIcon("PanelLeftCloseIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-left-dashed.js
var PanelLeftDashed = createLucideIcon("PanelLeftDashedIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 14v1", key: "askpd8" }],
  ["path", { d: "M9 19v2", key: "16tejx" }],
  ["path", { d: "M9 3v2", key: "1noubl" }],
  ["path", { d: "M9 9v1", key: "19ebxg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-left-open.js
var PanelLeftOpen = createLucideIcon("PanelLeftOpenIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-left.js
var PanelLeft = createLucideIcon("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-right-close.js
var PanelRightClose = createLucideIcon("PanelRightCloseIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-right-dashed.js
var PanelRightDashed = createLucideIcon("PanelRightDashedIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 14v1", key: "ilsfch" }],
  ["path", { d: "M15 19v2", key: "1fst2f" }],
  ["path", { d: "M15 3v2", key: "z204g4" }],
  ["path", { d: "M15 9v1", key: "z2a8b1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-right-open.js
var PanelRightOpen = createLucideIcon("PanelRightOpenIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-right.js
var PanelRight = createLucideIcon("PanelRightIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-top-close.js
var PanelTopClose = createLucideIcon("PanelTopCloseIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "m9 16 3-3 3 3", key: "1idcnm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-top-dashed.js
var PanelTopDashed = createLucideIcon("PanelTopDashedIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M14 9h1", key: "l0svgy" }],
  ["path", { d: "M19 9h2", key: "te2zfg" }],
  ["path", { d: "M3 9h2", key: "1h4ldw" }],
  ["path", { d: "M9 9h1", key: "15jzuz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-top-open.js
var PanelTopOpen = createLucideIcon("PanelTopOpenIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "m15 14-3 3-3-3", key: "g215vf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panel-top.js
var PanelTop = createLucideIcon("PanelTopIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panels-left-bottom.js
var PanelsLeftBottom = createLucideIcon("PanelsLeftBottomIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M9 15h12", key: "5ijen5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panels-right-bottom.js
var PanelsRightBottom = createLucideIcon("PanelsRightBottomIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h12", key: "1wkqb3" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/panels-top-left.js
var PanelsTopLeft = createLucideIcon("PanelsTopLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/paperclip.js
var Paperclip = createLucideIcon("PaperclipIcon", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/parentheses.js
var Parentheses = createLucideIcon("ParenthesesIcon", [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/parking-circle-off.js
var ParkingCircleOff = createLucideIcon("ParkingCircleOffIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m5 5 14 14", key: "11anup" }],
  ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
  ["path", { d: "M9 17v-2.34", key: "a9qo08" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/parking-circle.js
var ParkingCircle = createLucideIcon("ParkingCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/parking-meter.js
var ParkingMeter = createLucideIcon("ParkingMeterIcon", [
  ["path", { d: "M9 9a3 3 0 1 1 6 0", key: "jdoeu8" }],
  ["path", { d: "M12 12v3", key: "158kv8" }],
  ["path", { d: "M11 15h2", key: "199qp6" }],
  [
    "path",
    {
      d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",
      key: "1l50wn"
    }
  ],
  ["path", { d: "M12 19v3", key: "npa21l" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/parking-square-off.js
var ParkingSquareOff = createLucideIcon("ParkingSquareOffIcon", [
  ["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41", key: "9l1ft6" }],
  ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3", key: "17knke" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
  ["path", { d: "M9 17v-2.3", key: "1jxgo2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/parking-square.js
var ParkingSquare = createLucideIcon("ParkingSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/party-popper.js
var PartyPopper = createLucideIcon("PartyPopperIcon", [
  ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
  ["path", { d: "M4 3h.01", key: "1vcuye" }],
  ["path", { d: "M22 8h.01", key: "1mrtc2" }],
  ["path", { d: "M15 2h.01", key: "1cjtqr" }],
  ["path", { d: "M22 20h.01", key: "1mrys2" }],
  [
    "path",
    {
      d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
      key: "bpx1uq"
    }
  ],
  [
    "path",
    { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17", key: "1pd0s7" }
  ],
  [
    "path",
    { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7", key: "zq5xbz" }
  ],
  [
    "path",
    {
      d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
      key: "4kbmks"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pause-circle.js
var PauseCircle = createLucideIcon("PauseCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
  ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pause-octagon.js
var PauseOctagon = createLucideIcon("PauseOctagonIcon", [
  ["path", { d: "M10 15V9", key: "1lckn7" }],
  ["path", { d: "M14 15V9", key: "1muqhk" }],
  [
    "path",
    { d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z", key: "1m7qra" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pause.js
var Pause = createLucideIcon("PauseIcon", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/paw-print.js
var PawPrint = createLucideIcon("PawPrintIcon", [
  ["circle", { cx: "11", cy: "4", r: "2", key: "vol9p0" }],
  ["circle", { cx: "18", cy: "8", r: "2", key: "17gozi" }],
  ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }],
  [
    "path",
    {
      d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
      key: "1ydw1z"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pc-case.js
var PcCase = createLucideIcon("PcCaseIcon", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", key: "1uq1d7" }],
  ["path", { d: "M15 14h.01", key: "1kp3bh" }],
  ["path", { d: "M9 6h6", key: "dgm16u" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pen-line.js
var PenLine = createLucideIcon("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pen-square.js
var PenSquare = createLucideIcon("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pen-tool.js
var PenTool = createLucideIcon("PenToolIcon", [
  ["path", { d: "m12 19 7-7 3 3-7 7-3-3z", key: "rklqx2" }],
  ["path", { d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z", key: "1et58u" }],
  ["path", { d: "m2 2 7.586 7.586", key: "etlp93" }],
  ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pen.js
var Pen = createLucideIcon("PenIcon", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pencil-line.js
var PencilLine = createLucideIcon("PencilLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }],
  ["path", { d: "m15 5 3 3", key: "1w25hb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pencil-ruler.js
var PencilRuler = createLucideIcon("PencilRulerIcon", [
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  [
    "path",
    { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13", key: "orapub" }
  ],
  ["path", { d: "m8 6 2-2", key: "115y1s" }],
  ["path", { d: "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z", key: "hes763" }],
  ["path", { d: "m18 16 2-2", key: "ee94s4" }],
  [
    "path",
    {
      d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",
      key: "cfq27r"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pencil.js
var Pencil = createLucideIcon("PencilIcon", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pentagon.js
var Pentagon = createLucideIcon("PentagonIcon", [
  [
    "path",
    {
      d: "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",
      key: "hsj90r"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/percent-circle.js
var PercentCircle = createLucideIcon("PercentCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/percent-diamond.js
var PercentDiamond = createLucideIcon("PercentDiamondIcon", [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",
      key: "1tpxz2"
    }
  ],
  ["path", { d: "M9.2 9.2h.01", key: "1b7bvt" }],
  ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
  ["path", { d: "M14.7 14.8h.01", key: "17nsh4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/percent-square.js
var PercentSquare = createLucideIcon("PercentSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/percent.js
var Percent = createLucideIcon("PercentIcon", [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/person-standing.js
var PersonStanding = createLucideIcon("PersonStandingIcon", [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
  ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/phone-call.js
var PhoneCall = createLucideIcon("PhoneCallIcon", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ],
  ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
  ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/phone-forwarded.js
var PhoneForwarded = createLucideIcon("PhoneForwardedIcon", [
  ["polyline", { points: "18 2 22 6 18 10", key: "6vjanh" }],
  ["line", { x1: "14", x2: "22", y1: "6", y2: "6", key: "1jsywh" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/phone-incoming.js
var PhoneIncoming = createLucideIcon("PhoneIncomingIcon", [
  ["polyline", { points: "16 2 16 8 22 8", key: "1ygljm" }],
  ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/phone-missed.js
var PhoneMissed = createLucideIcon("PhoneMissedIcon", [
  ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
  ["line", { x1: "16", x2: "22", y1: "2", y2: "8", key: "13zxdn" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/phone-off.js
var PhoneOff = createLucideIcon("PhoneOffIcon", [
  [
    "path",
    {
      d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
      key: "z86iuo"
    }
  ],
  ["line", { x1: "22", x2: "2", y1: "2", y2: "22", key: "11kh81" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/phone-outgoing.js
var PhoneOutgoing = createLucideIcon("PhoneOutgoingIcon", [
  ["polyline", { points: "22 8 22 2 16 2", key: "1g204g" }],
  ["line", { x1: "16", x2: "22", y1: "8", y2: "2", key: "1ggias" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/phone.js
var Phone = createLucideIcon("PhoneIcon", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pi-square.js
var PiSquare = createLucideIcon("PiSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7h10", key: "udp07y" }],
  ["path", { d: "M10 7v10", key: "i1d9ee" }],
  ["path", { d: "M16 17a2 2 0 0 1-2-2V7", key: "ftwdc7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pi.js
var Pi = createLucideIcon("PiIcon", [
  ["line", { x1: "9", x2: "9", y1: "4", y2: "20", key: "ovs5a5" }],
  ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13", key: "10pag4" }],
  ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4", key: "1gaosr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/piano.js
var Piano = createLucideIcon("PianoIcon", [
  [
    "path",
    {
      d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",
      key: "lag0yf"
    }
  ],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M6 14v4", key: "9ng0ue" }],
  ["path", { d: "M10 14v4", key: "1v8uk5" }],
  ["path", { d: "M14 14v4", key: "1tqops" }],
  ["path", { d: "M18 14v4", key: "18uqwm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/picture-in-picture-2.js
var PictureInPicture2 = createLucideIcon("PictureInPicture2Icon", [
  ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4", key: "daa4of" }],
  ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2", key: "1nb8gs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/picture-in-picture.js
var PictureInPicture = createLucideIcon("PictureInPictureIcon", [
  [
    "path",
    {
      d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",
      key: "bcd8fb"
    }
  ],
  ["rect", { width: "10", height: "7", x: "12", y: "13.5", ry: "2", key: "136fx3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pie-chart.js
var PieChart = createLucideIcon("PieChartIcon", [
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
  ["path", { d: "M22 12A10 10 0 0 0 12 2v10z", key: "1rfc4y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/piggy-bank.js
var PiggyBank = createLucideIcon("PiggyBankIcon", [
  [
    "path",
    {
      d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",
      key: "uf6l00"
    }
  ],
  ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1", key: "nm575m" }],
  ["path", { d: "M16 11h0", key: "k2aug8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pilcrow-square.js
var PilcrowSquare = createLucideIcon("PilcrowSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17", key: "1l9586" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M16 7v10", key: "lavkr4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pilcrow.js
var Pilcrow = createLucideIcon("PilcrowIcon", [
  ["path", { d: "M13 4v16", key: "8vvj80" }],
  ["path", { d: "M17 4v16", key: "7dpous" }],
  ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13", key: "sh4n9v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pill.js
var Pill = createLucideIcon("PillIcon", [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pin-off.js
var PinOff = createLucideIcon("PinOffIcon", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
  ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12", key: "13x2n8" }],
  ["path", { d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89", key: "reo3ki" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pin.js
var Pin = createLucideIcon("PinIcon", [
  ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
  [
    "path",
    {
      d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",
      key: "13yl11"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pipette.js
var Pipette = createLucideIcon("PipetteIcon", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pizza.js
var Pizza = createLucideIcon("PizzaIcon", [
  ["path", { d: "M15 11h.01", key: "rns66s" }],
  ["path", { d: "M11 15h.01", key: "k85uqc" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16", key: "e4slt2" }],
  ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4", key: "rerf8f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plane-landing.js
var PlaneLanding = createLucideIcon("PlaneLandingIcon", [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",
      key: "1ma21e"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plane-takeoff.js
var PlaneTakeoff = createLucideIcon("PlaneTakeoffIcon", [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
      key: "fkigj9"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plane.js
var Plane = createLucideIcon("PlaneIcon", [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/play-circle.js
var PlayCircle = createLucideIcon("PlayCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/play-square.js
var PlaySquare = createLucideIcon("PlaySquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m9 8 6 4-6 4Z", key: "f1r3lt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/play.js
var Play = createLucideIcon("PlayIcon", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plug-2.js
var Plug2 = createLucideIcon("Plug2Icon", [
  ["path", { d: "M9 2v6", key: "17ngun" }],
  ["path", { d: "M15 2v6", key: "s7yy2p" }],
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0v0Z", key: "nd4hoy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plug-zap-2.js
var PlugZap2 = createLucideIcon("PlugZap2Icon", [
  ["path", { d: "m13 2-2 2.5h3L12 7", key: "1me98u" }],
  ["path", { d: "M10 14v-3", key: "1mllf3" }],
  ["path", { d: "M14 14v-3", key: "1l3fkq" }],
  ["path", { d: "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z", key: "jd5pat" }],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plug-zap.js
var PlugZap = createLucideIcon("PlugZapIcon", [
  [
    "path",
    { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
  ],
  ["path", { d: "m2 22 3-3", key: "19mgm9" }],
  ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
  ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
  ["path", { d: "m18 3-4 4h6l-4 4", key: "16psg9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plug.js
var Plug = createLucideIcon("PlugIcon", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M9 8V2", key: "14iosj" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plus-circle.js
var PlusCircle = createLucideIcon("PlusCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plus-square.js
var PlusSquare = createLucideIcon("PlusSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/plus.js
var Plus = createLucideIcon("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pocket-knife.js
var PocketKnife = createLucideIcon("PocketKnifeIcon", [
  ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2", key: "19w3oe" }],
  ["path", { d: "M18 6h.01", key: "1v4wsw" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z", key: "6fykxj" }],
  ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6", key: "1utzek" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pocket.js
var Pocket = createLucideIcon("PocketIcon", [
  [
    "path",
    {
      d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
      key: "1mz881"
    }
  ],
  ["polyline", { points: "8 10 12 14 16 10", key: "w4mbv5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/podcast.js
var Podcast = createLucideIcon("PodcastIcon", [
  ["circle", { cx: "12", cy: "11", r: "1", key: "1gvufo" }],
  [
    "path",
    {
      d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",
      key: "1n5fvv"
    }
  ],
  ["path", { d: "M8 14a5 5 0 1 1 8 0", key: "fc81rn" }],
  ["path", { d: "M17 18.5a9 9 0 1 0-10 0", key: "jqtxkf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pointer-off.js
var PointerOff = createLucideIcon("PointerOffIcon", [
  ["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957", key: "jsi14n" }],
  ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295", key: "hirc7f" }],
  [
    "path",
    { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158", key: "1jxb2e" }
  ],
  [
    "path",
    {
      d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",
      key: "10r7hm"
    }
  ],
  ["path", { d: "M6 6v8", key: "tv5xkp" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pointer.js
var Pointer = createLucideIcon("PointerIcon", [
  ["path", { d: "M22 14a8 8 0 0 1-8 8", key: "56vcr3" }],
  ["path", { d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "1pp0yd" }],
  ["path", { d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1", key: "u654g" }],
  ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10", key: "1e2dtv" }],
  [
    "path",
    {
      d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "g6ys72"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/popcorn.js
var Popcorn = createLucideIcon("PopcornIcon", [
  [
    "path",
    {
      d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
      key: "10td1f"
    }
  ],
  ["path", { d: "M10 22 9 8", key: "yjptiv" }],
  ["path", { d: "m14 22 1-14", key: "8jwc8b" }],
  [
    "path",
    {
      d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
      key: "1qo33t"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/popsicle.js
var Popsicle = createLucideIcon("PopsicleIcon", [
  [
    "path",
    {
      d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",
      key: "1o68ps"
    }
  ],
  ["path", { d: "m22 22-5.5-5.5", key: "17o70y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pound-sterling.js
var PoundSterling = createLucideIcon("PoundSterlingIcon", [
  ["path", { d: "M18 7c0-5.333-8-5.333-8 0", key: "1prm2n" }],
  ["path", { d: "M10 7v14", key: "18tmcs" }],
  ["path", { d: "M6 21h12", key: "4dkmi1" }],
  ["path", { d: "M6 13h10", key: "ybwr4a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/power-circle.js
var PowerCircle = createLucideIcon("PowerCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 12V6", key: "30zewn" }],
  ["path", { d: "M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5", key: "1r0tk2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/power-off.js
var PowerOff = createLucideIcon("PowerOffIcon", [
  ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }],
  ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/power-square.js
var PowerSquare = createLucideIcon("PowerSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 7v5", key: "ma6bk" }],
  ["path", { d: "M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8", key: "15eubv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/power.js
var Power = createLucideIcon("PowerIcon", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/presentation.js
var Presentation = createLucideIcon("PresentationIcon", [
  ["path", { d: "M2 3h20", key: "91anmk" }],
  ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
  ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/printer.js
var Printer = createLucideIcon("PrinterIcon", [
  ["polyline", { points: "6 9 6 2 18 2 18 9", key: "1306q4" }],
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["rect", { width: "12", height: "8", x: "6", y: "14", key: "5ipwut" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/projector.js
var Projector = createLucideIcon("ProjectorIcon", [
  ["path", { d: "M5 7 3 5", key: "1yys58" }],
  ["path", { d: "M9 6V3", key: "1ptz9u" }],
  ["path", { d: "m13 7 2-2", key: "1w3vmq" }],
  ["circle", { cx: "9", cy: "13", r: "3", key: "1mma13" }],
  [
    "path",
    {
      d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",
      key: "2frwzc"
    }
  ],
  ["path", { d: "M16 16h2", key: "dnq2od" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/puzzle.js
var Puzzle = createLucideIcon("PuzzleIcon", [
  [
    "path",
    {
      d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
      key: "i0oyt7"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/pyramid.js
var Pyramid = createLucideIcon("PyramidIcon", [
  [
    "path",
    {
      d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",
      key: "aenxs0"
    }
  ],
  ["path", { d: "M12 2v20", key: "t6zp3m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/qr-code.js
var QrCode = createLucideIcon("QrCodeIcon", [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/quote.js
var Quote = createLucideIcon("QuoteIcon", [
  [
    "path",
    {
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
      key: "4rm80e"
    }
  ],
  [
    "path",
    {
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
      key: "10za9r"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rabbit.js
var Rabbit = createLucideIcon("RabbitIcon", [
  ["path", { d: "M13 16a3 3 0 0 1 2.24 5", key: "1epib5" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }],
  [
    "path",
    {
      d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
      key: "ue9ozu"
    }
  ],
  ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3", key: "49iql8" }],
  ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3", key: "1e33i0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/radar.js
var Radar = createLucideIcon("RadarIcon", [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/radiation.js
var Radiation = createLucideIcon("RadiationIcon", [
  ["path", { d: "M12 12h0.01", key: "6ztbls" }],
  [
    "path",
    {
      d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",
      key: "wy49g3"
    }
  ],
  [
    "path",
    {
      d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",
      key: "vklnvr"
    }
  ],
  [
    "path",
    {
      d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",
      key: "wkdf1o"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/radio-receiver.js
var RadioReceiver = createLucideIcon("RadioReceiverIcon", [
  ["path", { d: "M5 16v2", key: "g5qcv5" }],
  ["path", { d: "M19 16v2", key: "1gbaio" }],
  ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2", key: "vjsjur" }],
  ["path", { d: "M18 12h0", key: "1ucjzd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/radio-tower.js
var RadioTower = createLucideIcon("RadioTowerIcon", [
  ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }],
  ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
  ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }],
  ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }],
  ["path", { d: "M9.5 18h5", key: "mfy3pd" }],
  ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/radio.js
var Radio = createLucideIcon("RadioIcon", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/radius.js
var Radius = createLucideIcon("RadiusIcon", [
  ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82", key: "fydyku" }],
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["path", { d: "m13.41 13.41 4.18 4.18", key: "1gqbwc" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rail-symbol.js
var RailSymbol = createLucideIcon("RailSymbolIcon", [
  ["path", { d: "M5 15h14", key: "m0yey3" }],
  ["path", { d: "M5 9h14", key: "7tsvo6" }],
  ["path", { d: "m14 20-5-5 6-6-5-5", key: "1jo42i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rainbow.js
var Rainbow = createLucideIcon("RainbowIcon", [
  ["path", { d: "M22 17a10 10 0 0 0-20 0", key: "ozegv" }],
  ["path", { d: "M6 17a6 6 0 0 1 12 0", key: "5giftw" }],
  ["path", { d: "M10 17a2 2 0 0 1 4 0", key: "gnsikk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rat.js
var Rat = createLucideIcon("RatIcon", [
  [
    "path",
    {
      d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",
      key: "16aj0u"
    }
  ],
  [
    "path",
    {
      d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",
      key: "1crdmb"
    }
  ],
  ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5", key: "1ol3lk" }],
  ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12", key: "bt3f23" }],
  ["path", { d: "M16 9h.01", key: "1bdo4e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ratio.js
var Ratio = createLucideIcon("RatioIcon", [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/receipt.js
var Receipt = createLucideIcon("ReceiptIcon", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
      key: "wqdwcb"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17V7", key: "pyj7ub" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rectangle-horizontal.js
var RectangleHorizontal = createLucideIcon("RectangleHorizontalIcon", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rectangle-vertical.js
var RectangleVertical = createLucideIcon("RectangleVerticalIcon", [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/recycle.js
var Recycle = createLucideIcon("RecycleIcon", [
  [
    "path",
    {
      d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
      key: "x6z5xu"
    }
  ],
  [
    "path",
    {
      d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
      key: "1x4zh5"
    }
  ],
  ["path", { d: "m14 16-3 3 3 3", key: "f6jyew" }],
  ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598", key: "wf1obh" }],
  [
    "path",
    {
      d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
      key: "9tzpgr"
    }
  ],
  ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096", key: "1oe83g" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/redo-2.js
var Redo2 = createLucideIcon("Redo2Icon", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13", key: "19mnr4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/redo-dot.js
var RedoDot = createLucideIcon("RedoDotIcon", [
  ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/redo.js
var Redo = createLucideIcon("RedoIcon", [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/refresh-ccw-dot.js
var RefreshCcwDot = createLucideIcon("RefreshCcwDotIcon", [
  ["path", { d: "M3 2v6h6", key: "18ldww" }],
  ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8", key: "1pbrqz" }],
  ["path", { d: "M21 22v-6h-6", key: "usdfbe" }],
  ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7", key: "1hosoe" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/refresh-ccw.js
var RefreshCcw = createLucideIcon("RefreshCcwIcon", [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/refresh-cw-off.js
var RefreshCwOff = createLucideIcon("RefreshCwOffIcon", [
  ["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", key: "1krf6h" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64", key: "ruvoct" }],
  ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", key: "19q130" }],
  ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87", key: "4w8emr" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M22 22 2 2", key: "1r8tn9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/refresh-cw.js
var RefreshCw = createLucideIcon("RefreshCwIcon", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/refrigerator.js
var Refrigerator = createLucideIcon("RefrigeratorIcon", [
  [
    "path",
    { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z", key: "fpq118" }
  ],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M15 7v6", key: "1nx30x" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/regex.js
var Regex = createLucideIcon("RegexIcon", [
  ["path", { d: "M17 3v10", key: "15fgeh" }],
  ["path", { d: "m12.67 5.5 8.66 5", key: "1gpheq" }],
  ["path", { d: "m12.67 10.5 8.66-5", key: "1dkfa6" }],
  [
    "path",
    { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z", key: "swwfx4" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/remove-formatting.js
var RemoveFormatting = createLucideIcon("RemoveFormattingIcon", [
  ["path", { d: "M4 7V4h16v3", key: "9msm58" }],
  ["path", { d: "M5 20h6", key: "1h6pxn" }],
  ["path", { d: "M13 4 8 20", key: "kqq6aj" }],
  ["path", { d: "m15 15 5 5", key: "me55sn" }],
  ["path", { d: "m20 15-5 5", key: "11p7ol" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/repeat-1.js
var Repeat1 = createLucideIcon("Repeat1Icon", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/repeat-2.js
var Repeat2 = createLucideIcon("Repeat2Icon", [
  ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
  ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
  ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
  ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/repeat.js
var Repeat = createLucideIcon("RepeatIcon", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/replace-all.js
var ReplaceAll = createLucideIcon("ReplaceAllIcon", [
  ["path", { d: "M14 4c0-1.1.9-2 2-2", key: "1mvvbw" }],
  ["path", { d: "M20 2c1.1 0 2 .9 2 2", key: "1mj6oe" }],
  ["path", { d: "M22 8c0 1.1-.9 2-2 2", key: "v1wql3" }],
  ["path", { d: "M16 10c-1.1 0-2-.9-2-2", key: "821ux0" }],
  ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
  ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1", key: "13af7h" }],
  ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2", key: "17ihk4" }],
  ["path", { d: "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "1w9p8c" }],
  ["path", { d: "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "m45eaa" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/replace.js
var Replace = createLucideIcon("ReplaceIcon", [
  ["path", { d: "M14 4c0-1.1.9-2 2-2", key: "1mvvbw" }],
  ["path", { d: "M20 2c1.1 0 2 .9 2 2", key: "1mj6oe" }],
  ["path", { d: "M22 8c0 1.1-.9 2-2 2", key: "v1wql3" }],
  ["path", { d: "M16 10c-1.1 0-2-.9-2-2", key: "821ux0" }],
  ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
  ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1", key: "13af7h" }],
  ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2", key: "17ihk4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/reply-all.js
var ReplyAll = createLucideIcon("ReplyAllIcon", [
  ["polyline", { points: "7 17 2 12 7 7", key: "t83bqg" }],
  ["polyline", { points: "12 17 7 12 12 7", key: "1g4ajm" }],
  ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7", key: "1fcyog" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/reply.js
var Reply = createLucideIcon("ReplyIcon", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rewind.js
var Rewind = createLucideIcon("RewindIcon", [
  ["polygon", { points: "11 19 2 12 11 5 11 19", key: "14yba5" }],
  ["polygon", { points: "22 19 13 12 22 5 22 19", key: "1pi1cj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ribbon.js
var Ribbon = createLucideIcon("RibbonIcon", [
  [
    "path",
    {
      d: "M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",
      key: "1njedg"
    }
  ],
  [
    "path",
    {
      d: "M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",
      key: "10len7"
    }
  ],
  ["path", { d: "m9.35 14.53 2.64-3.31", key: "1wfi09" }],
  ["path", { d: "m11.97 18.04 2.99 4 3.54-2.54-3.93-5", key: "1ezyge" }],
  ["path", { d: "M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0", key: "aw0zq5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rocket.js
var Rocket = createLucideIcon("RocketIcon", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rocking-chair.js
var RockingChair = createLucideIcon("RockingChairIcon", [
  ["polyline", { points: "3.5 2 6.5 12.5 18 12.5", key: "y3iy52" }],
  ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20", key: "19vg5i" }],
  ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20", key: "1inpmv" }],
  ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0", key: "1nquas" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/roller-coaster.js
var RollerCoaster = createLucideIcon("RollerCoasterIcon", [
  ["path", { d: "M6 19V5", key: "1r845m" }],
  ["path", { d: "M10 19V6.8", key: "9j2tfs" }],
  ["path", { d: "M14 19v-7.8", key: "10s8qv" }],
  ["path", { d: "M18 5v4", key: "1tajlv" }],
  ["path", { d: "M18 19v-6", key: "ielfq3" }],
  ["path", { d: "M22 19V9", key: "158nzp" }],
  ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65", key: "1930oh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rotate-3d.js
var Rotate3d = createLucideIcon("Rotate3dIcon", [
  [
    "path",
    {
      d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
      key: "10n0gc"
    }
  ],
  ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814", key: "16shm9" }],
  [
    "path",
    {
      d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
      key: "1lxi77"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rotate-ccw.js
var RotateCcw = createLucideIcon("RotateCcwIcon", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rotate-cw.js
var RotateCw = createLucideIcon("RotateCwIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/route-off.js
var RouteOff = createLucideIcon("RouteOffIcon", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2", key: "1effex" }],
  ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12", key: "k9y2ds" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3", key: "11nlu2" }],
  ["path", { d: "M15 5h-4.3", key: "6537je" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/route.js
var Route = createLucideIcon("RouteIcon", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/router.js
var Router = createLucideIcon("RouterIcon", [
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6.01 18H6", key: "19vcac" }],
  ["path", { d: "M10.01 18H10", key: "uamcmx" }],
  ["path", { d: "M15 10v4", key: "qjz1xs" }],
  ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", key: "1rif40" }],
  ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", key: "6a5xfq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rows-2.js
var Rows2 = createLucideIcon("Rows2Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rows-3.js
var Rows3 = createLucideIcon("Rows3Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rows-4.js
var Rows4 = createLucideIcon("Rows4Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 7.5H3", key: "1hm9pq" }],
  ["path", { d: "M21 12H3", key: "2avoz0" }],
  ["path", { d: "M21 16.5H3", key: "n7jzkj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/rss.js
var Rss = createLucideIcon("RssIcon", [
  ["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }],
  ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ruler.js
var Ruler = createLucideIcon("RulerIcon", [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/russian-ruble.js
var RussianRuble = createLucideIcon("RussianRubleIcon", [
  ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18", key: "18ai8t" }],
  ["path", { d: "M6 15h8", key: "1y8f6l" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sailboat.js
var Sailboat = createLucideIcon("SailboatIcon", [
  ["path", { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z", key: "1404fh" }],
  ["path", { d: "M21 14 10 2 3 14h18Z", key: "1nzg7v" }],
  ["path", { d: "M10 2v16", key: "1labyt" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/salad.js
var Salad = createLucideIcon("SaladIcon", [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  [
    "path",
    {
      d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
      key: "10xrj0"
    }
  ],
  ["path", { d: "m13 12 4-4", key: "1hckqy" }],
  ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2", key: "1p4srx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sandwich.js
var Sandwich = createLucideIcon("SandwichIcon", [
  ["path", { d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3", key: "34v9d7" }],
  [
    "path",
    {
      d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",
      key: "1k5vfb"
    }
  ],
  ["path", { d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z", key: "1oe7l6" }],
  ["path", { d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z", key: "1ts2ri" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/satellite-dish.js
var SatelliteDish = createLucideIcon("SatelliteDishIcon", [
  ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z", key: "1fzpp3" }],
  ["path", { d: "m9 15 3-3", key: "88sc13" }],
  ["path", { d: "M17 13a6 6 0 0 0-6-6", key: "15cc6u" }],
  ["path", { d: "M21 13A10 10 0 0 0 11 3", key: "11nf8s" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/satellite.js
var Satellite = createLucideIcon("SatelliteIcon", [
  ["path", { d: "M13 7 9 3 5 7l4 4", key: "vyckw6" }],
  ["path", { d: "m17 11 4 4-4 4-4-4", key: "rchckc" }],
  ["path", { d: "m8 12 4 4 6-6-4-4Z", key: "1sshf7" }],
  ["path", { d: "m16 8 3-3", key: "x428zp" }],
  ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/save-all.js
var SaveAll = createLucideIcon("SaveAllIcon", [
  ["path", { d: "M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z", key: "1unput" }],
  ["path", { d: "M10 2v4h6", key: "1p5sg6" }],
  ["path", { d: "M18 18v-7h-8v7", key: "1oniuk" }],
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/save.js
var Save = createLucideIcon("SaveIcon", [
  ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scale-3d.js
var Scale3d = createLucideIcon("Scale3dIcon", [
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
  ["path", { d: "M5 7v12h12", key: "vtaa4r" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scale.js
var Scale = createLucideIcon("ScaleIcon", [
  ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }],
  ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scaling.js
var Scaling = createLucideIcon("ScalingIcon", [
  ["path", { d: "M21 3 9 15", key: "15kdhq" }],
  ["path", { d: "M12 3H3v18h18v-9", key: "8suug0" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scan-barcode.js
var ScanBarcode = createLucideIcon("ScanBarcodeIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 7v10", key: "23sfjj" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M17 7v10", key: "578dap" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scan-eye.js
var ScanEye = createLucideIcon("ScanEyeIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["path", { d: "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5", key: "nhuolu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scan-face.js
var ScanFace = createLucideIcon("ScanFaceIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scan-line.js
var ScanLine = createLucideIcon("ScanLineIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scan-search.js
var ScanSearch = createLucideIcon("ScanSearchIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m16 16-1.9-1.9", key: "1dq9hf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scan-text.js
var ScanText = createLucideIcon("ScanTextIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 8h8", key: "1jbsf9" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M7 16h6", key: "1vyc9m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scan.js
var Scan = createLucideIcon("ScanIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scatter-chart.js
var ScatterChart = createLucideIcon("ScatterChartIcon", [
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", key: "1x97lo" }],
  ["circle", { cx: "18.5", cy: "5.5", r: ".5", key: "56iowl" }],
  ["circle", { cx: "11.5", cy: "11.5", r: ".5", key: "m9xkw9" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", key: "14ln9z" }],
  ["circle", { cx: "17.5", cy: "14.5", r: ".5", key: "14qxqt" }],
  ["path", { d: "M3 3v18h18", key: "1s2lah" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/school-2.js
var School2 = createLucideIcon("School2Icon", [
  ["circle", { cx: "12", cy: "10", r: "1", key: "1gnqs8" }],
  ["path", { d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z", key: "8z0lq4" }],
  ["path", { d: "M6 17v.01", key: "roodi6" }],
  ["path", { d: "M6 13v.01", key: "67c122" }],
  ["path", { d: "M18 17v.01", key: "12ktxm" }],
  ["path", { d: "M18 13v.01", key: "tn1rt1" }],
  ["path", { d: "M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5", key: "jfgdp0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/school.js
var School = createLucideIcon("SchoolIcon", [
  ["path", { d: "m4 6 8-4 8 4", key: "1q0ilc" }],
  ["path", { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2", key: "1vwozw" }],
  ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4", key: "cpkuc4" }],
  ["path", { d: "M18 5v17", key: "1sw6gf" }],
  ["path", { d: "M6 5v17", key: "1xfsm0" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scissors-line-dashed.js
var ScissorsLineDashed = createLucideIcon("ScissorsLineDashedIcon", [
  ["path", { d: "M5.42 9.42 8 12", key: "12pkuq" }],
  ["circle", { cx: "4", cy: "8", r: "2", key: "107mxr" }],
  ["path", { d: "m14 6-8.58 8.58", key: "gvzu5l" }],
  ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
  ["path", { d: "M10.8 14.8 14 18", key: "ax7m9r" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scissors-square-dashed-bottom.js
var ScissorsSquareDashedBottom = createLucideIcon("ScissorsSquareDashedBottomIcon", [
  [
    "path",
    { d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2", key: "1vzg26" }
  ],
  ["path", { d: "M10 22H8", key: "euku7a" }],
  ["path", { d: "M16 22h-2", key: "18d249" }],
  ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
  ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
  ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
  ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
  ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scissors-square.js
var ScissorsSquare = createLucideIcon("ScissorsSquareIcon", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2", key: "1btzen" }],
  ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
  ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
  ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
  ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
  ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scissors.js
var Scissors = createLucideIcon("ScissorsIcon", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/screen-share-off.js
var ScreenShareOff = createLucideIcon("ScreenShareOffIcon", [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m22 3-5 5", key: "12jva0" }],
  ["path", { d: "m17 3 5 5", key: "k36vhe" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/screen-share.js
var ScreenShare = createLucideIcon("ScreenShareIcon", [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m17 8 5-5", key: "fqif7o" }],
  ["path", { d: "M17 3h5v5", key: "1o3tu8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scroll-text.js
var ScrollText = createLucideIcon("ScrollTextIcon", [
  [
    "path",
    { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }
  ],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M15 12h-5", key: "r7krc0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/scroll.js
var Scroll = createLucideIcon("ScrollIcon", [
  [
    "path",
    { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }
  ],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/search-check.js
var SearchCheck = createLucideIcon("SearchCheckIcon", [
  ["path", { d: "m8 11 2 2 4-4", key: "1sed1v" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/search-code.js
var SearchCode = createLucideIcon("SearchCodeIcon", [
  ["path", { d: "m9 9-2 2 2 2", key: "17gsfh" }],
  ["path", { d: "m13 13 2-2-2-2", key: "186z8k" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/search-slash.js
var SearchSlash = createLucideIcon("SearchSlashIcon", [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/search-x.js
var SearchX = createLucideIcon("SearchXIcon", [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/search.js
var Search = createLucideIcon("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/send-horizontal.js
var SendHorizontal = createLucideIcon("SendHorizontalIcon", [
  ["path", { d: "m3 3 3 9-3 9 19-9Z", key: "1aobqy" }],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/send-to-back.js
var SendToBack = createLucideIcon("SendToBackIcon", [
  ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2", key: "1b0bso" }],
  ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2", key: "1x09vl" }],
  ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1", key: "pao6x6" }],
  ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1", key: "19tdru" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/send.js
var Send = createLucideIcon("SendIcon", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/separator-horizontal.js
var SeparatorHorizontal = createLucideIcon("SeparatorHorizontalIcon", [
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["polyline", { points: "8 8 12 4 16 8", key: "zo8t4w" }],
  ["polyline", { points: "16 16 12 20 8 16", key: "1oyrid" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/separator-vertical.js
var SeparatorVertical = createLucideIcon("SeparatorVerticalIcon", [
  ["line", { x1: "12", x2: "12", y1: "3", y2: "21", key: "1efggb" }],
  ["polyline", { points: "8 8 4 12 8 16", key: "bnfmv4" }],
  ["polyline", { points: "16 16 20 12 16 8", key: "u90052" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/server-cog.js
var ServerCog = createLucideIcon("ServerCogIcon", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  [
    "path",
    {
      d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
      key: "tn8das"
    }
  ],
  [
    "path",
    {
      d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
      key: "1g2pve"
    }
  ],
  ["path", { d: "M6 6h.01", key: "1utrut" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m15.7 13.4-.9-.3", key: "1jwmzr" }],
  ["path", { d: "m9.2 10.9-.9-.3", key: "qapnim" }],
  ["path", { d: "m10.6 15.7.3-.9", key: "quwk0k" }],
  ["path", { d: "m13.6 15.7-.4-1", key: "cb9xp7" }],
  ["path", { d: "m10.8 9.3-.4-1", key: "1uaiz5" }],
  ["path", { d: "m8.3 13.6 1-.4", key: "s6srou" }],
  ["path", { d: "m14.7 10.8 1-.4", key: "4d31cq" }],
  ["path", { d: "m13.4 8.3-.3.9", key: "1bm987" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/server-crash.js
var ServerCrash = createLucideIcon("ServerCrashIcon", [
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
      key: "4b9dqc"
    }
  ],
  [
    "path",
    {
      d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
      key: "22nnkd"
    }
  ],
  ["path", { d: "M6 6h.01", key: "1utrut" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m13 6-4 6h6l-4 6", key: "14hqih" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/server-off.js
var ServerOff = createLucideIcon("ServerOffIcon", [
  ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5", key: "bt2siv" }],
  ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z", key: "1hjrv1" }],
  ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1", key: "1iynyr" }],
  ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z", key: "161ggg" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/server.js
var Server = createLucideIcon("ServerIcon", [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/settings-2.js
var Settings2 = createLucideIcon("Settings2Icon", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/settings.js
var Settings = createLucideIcon("SettingsIcon", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shapes.js
var Shapes = createLucideIcon("ShapesIcon", [
  [
    "path",
    {
      d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
      key: "1bo67w"
    }
  ],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/share-2.js
var Share2 = createLucideIcon("Share2Icon", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/share.js
var Share = createLucideIcon("ShareIcon", [
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["polyline", { points: "16 6 12 2 8 6", key: "m901s6" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "15", key: "1p0rca" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sheet.js
var Sheet = createLucideIcon("SheetIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
  ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
  ["line", { x1: "9", x2: "9", y1: "9", y2: "21", key: "1ib60c" }],
  ["line", { x1: "15", x2: "15", y1: "9", y2: "21", key: "1n26ft" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shell.js
var Shell = createLucideIcon("ShellIcon", [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
      key: "1cn552"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-alert.js
var ShieldAlert = createLucideIcon("ShieldAlertIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-ban.js
var ShieldBan = createLucideIcon("ShieldBanIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m4 5 14 12", key: "1ta6nf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-check.js
var ShieldCheck = createLucideIcon("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-ellipsis.js
var ShieldEllipsis = createLucideIcon("ShieldEllipsisIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-half.js
var ShieldHalf = createLucideIcon("ShieldHalfIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M12 22V2", key: "zs6s6o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-minus.js
var ShieldMinus = createLucideIcon("ShieldMinusIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-off.js
var ShieldOff = createLucideIcon("ShieldOffIcon", [
  ["path", { d: "M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2", key: "342pvf" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38", key: "p0ycf4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-plus.js
var ShieldPlus = createLucideIcon("ShieldPlusIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }],
  ["path", { d: "M12 15V7", key: "1ycneb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-question.js
var ShieldQuestion = createLucideIcon("ShieldQuestionIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield-x.js
var ShieldX = createLucideIcon("ShieldXIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m14.5 9-5 5", key: "1m49dw" }],
  ["path", { d: "m9.5 9 5 5", key: "wyx7zg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shield.js
var Shield = createLucideIcon("ShieldIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ship-wheel.js
var ShipWheel = createLucideIcon("ShipWheelIcon", [
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
  ["path", { d: "M12 2v7.5", key: "1e5rl5" }],
  ["path", { d: "m19 5-5.23 5.23", key: "1ezxxf" }],
  ["path", { d: "M22 12h-7.5", key: "le1719" }],
  ["path", { d: "m19 19-5.23-5.23", key: "p3fmgn" }],
  ["path", { d: "M12 14.5V22", key: "dgcmos" }],
  ["path", { d: "M10.23 13.77 5 19", key: "qwopd4" }],
  ["path", { d: "M9.5 12H2", key: "r7bup8" }],
  ["path", { d: "M10.23 10.23 5 5", key: "k2y7lj" }],
  ["circle", { cx: "12", cy: "12", r: "2.5", key: "ix0uyj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ship.js
var Ship = createLucideIcon("ShipIcon", [
  [
    "path",
    {
      d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "iegodh"
    }
  ],
  [
    "path",
    { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76", key: "fp8vka" }
  ],
  ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6", key: "qpkstq" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }],
  ["path", { d: "M12 2v3", key: "qbqxhf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shirt.js
var Shirt = createLucideIcon("ShirtIcon", [
  [
    "path",
    {
      d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
      key: "1wgbhj"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shopping-bag.js
var ShoppingBag = createLucideIcon("ShoppingBagIcon", [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shopping-basket.js
var ShoppingBasket = createLucideIcon("ShoppingBasketIcon", [
  ["path", { d: "m5 11 4-7", key: "116ra9" }],
  ["path", { d: "m19 11-4-7", key: "cnml18" }],
  ["path", { d: "M2 11h20", key: "3eubbj" }],
  ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4", key: "1x2lvw" }],
  ["path", { d: "m9 11 1 9", key: "1ojof7" }],
  ["path", { d: "M4.5 15.5h15", key: "13mye1" }],
  ["path", { d: "m15 11-1 9", key: "5wnq3a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shopping-cart.js
var ShoppingCart = createLucideIcon("ShoppingCartIcon", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shovel.js
var Shovel = createLucideIcon("ShovelIcon", [
  ["path", { d: "M2 22v-5l5-5 5 5-5 5z", key: "1fh25c" }],
  ["path", { d: "M9.5 14.5 16 8", key: "1smz5x" }],
  [
    "path",
    { d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2", key: "1q8uv5" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shower-head.js
var ShowerHead = createLucideIcon("ShowerHeadIcon", [
  ["path", { d: "m4 4 2.5 2.5", key: "uv2vmf" }],
  ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7", key: "frdkwv" }],
  ["path", { d: "M15 5 5 15", key: "1ag8rq" }],
  ["path", { d: "M14 17v.01", key: "eokfpp" }],
  ["path", { d: "M10 16v.01", key: "14uyyl" }],
  ["path", { d: "M13 13v.01", key: "1v1k97" }],
  ["path", { d: "M16 10v.01", key: "5169yg" }],
  ["path", { d: "M11 20v.01", key: "cj92p8" }],
  ["path", { d: "M17 14v.01", key: "11cswd" }],
  ["path", { d: "M20 11v.01", key: "19e0od" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shrink.js
var Shrink = createLucideIcon("ShrinkIcon", [
  ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8", key: "17vawe" }],
  ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6", key: "chjx8e" }],
  ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6", key: "lav6yq" }],
  ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3", key: "1pxi2q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shrub.js
var Shrub = createLucideIcon("ShrubIcon", [
  ["path", { d: "M12 22v-7l-2-2", key: "eqv9mc" }],
  [
    "path",
    { d: "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z", key: "12jcau" }
  ],
  ["path", { d: "m14 14-2 2", key: "847xa2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/shuffle.js
var Shuffle = createLucideIcon("ShuffleIcon", [
  ["path", { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22", key: "1wmou1" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2", key: "10bdb2" }],
  ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8", key: "vgxac0" }],
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sigma-square.js
var SigmaSquare = createLucideIcon("SigmaSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9", key: "9nih0i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sigma.js
var Sigma = createLucideIcon("SigmaIcon", [
  ["path", { d: "M18 7V4H6l6 8-6 8h12v-3", key: "zis8ev" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/signal-high.js
var SignalHigh = createLucideIcon("SignalHighIcon", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/signal-low.js
var SignalLow = createLucideIcon("SignalLowIcon", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/signal-medium.js
var SignalMedium = createLucideIcon("SignalMediumIcon", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/signal-zero.js
var SignalZero = createLucideIcon("SignalZeroIcon", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/signal.js
var Signal = createLucideIcon("SignalIcon", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/signpost-big.js
var SignpostBig = createLucideIcon("SignpostBigIcon", [
  ["path", { d: "M10 9H4L2 7l2-2h6", key: "1hq7x2" }],
  ["path", { d: "M14 5h6l2 2-2 2h-6", key: "bv62ej" }],
  ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18", key: "eqpcf2" }],
  ["path", { d: "M8 22h8", key: "rmew8v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/signpost.js
var Signpost = createLucideIcon("SignpostIcon", [
  ["path", { d: "M12 3v3", key: "1n5kay" }],
  ["path", { d: "M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z", key: "27os56" }],
  ["path", { d: "M12 13v8", key: "1l5pq0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/siren.js
var Siren = createLucideIcon("SirenIcon", [
  ["path", { d: "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z", key: "rmc51c" }],
  ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z", key: "yyvmjy" }],
  ["path", { d: "M21 12h1", key: "jtio3y" }],
  ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/skip-back.js
var SkipBack = createLucideIcon("SkipBackIcon", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/skip-forward.js
var SkipForward = createLucideIcon("SkipForwardIcon", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/skull.js
var Skull = createLucideIcon("SkullIcon", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["path", { d: "M8 20v2h8v-2", key: "ded4og" }],
  ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
  ["path", { d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20", key: "xq9p5u" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/slack.js
var Slack = createLucideIcon("SlackIcon", [
  ["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5", key: "diqz80" }],
  ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5", key: "183iwg" }],
  ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5", key: "hqg7r1" }],
  ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5", key: "76g71w" }],
  ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5", key: "1kmz0a" }],
  ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5", key: "jc4sz0" }],
  ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5", key: "1omvl4" }],
  ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5", key: "16f3cl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/slash.js
var Slash = createLucideIcon("SlashIcon", [["path", { d: "M22 2 2 22", key: "y4kqgn" }]]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/slice.js
var Slice = createLucideIcon("SliceIcon", [
  ["path", { d: "m8 14-6 6h9v-3", key: "zo3j9a" }],
  ["path", { d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z", key: "1dzx0j" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sliders-horizontal.js
var SlidersHorizontal = createLucideIcon("SlidersHorizontalIcon", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sliders.js
var Sliders = createLucideIcon("SlidersIcon", [
  ["line", { x1: "4", x2: "4", y1: "21", y2: "14", key: "1p332r" }],
  ["line", { x1: "4", x2: "4", y1: "10", y2: "3", key: "gb41h5" }],
  ["line", { x1: "12", x2: "12", y1: "21", y2: "12", key: "hf2csr" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "3", key: "1kfi7u" }],
  ["line", { x1: "20", x2: "20", y1: "21", y2: "16", key: "1lhrwl" }],
  ["line", { x1: "20", x2: "20", y1: "12", y2: "3", key: "16vvfq" }],
  ["line", { x1: "2", x2: "6", y1: "14", y2: "14", key: "1uebub" }],
  ["line", { x1: "10", x2: "14", y1: "8", y2: "8", key: "1yglbp" }],
  ["line", { x1: "18", x2: "22", y1: "16", y2: "16", key: "1jxqpz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/smartphone-charging.js
var SmartphoneCharging = createLucideIcon("SmartphoneChargingIcon", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12.667 8 10 12h4l-2.667 4", key: "h9lk2d" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/smartphone-nfc.js
var SmartphoneNfc = createLucideIcon("SmartphoneNfcIcon", [
  ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1", key: "5nje8w" }],
  ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36", key: "1g306n" }],
  ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "uqvjvo" }],
  ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "ujntz3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/smartphone.js
var Smartphone = createLucideIcon("SmartphoneIcon", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/smile-plus.js
var SmilePlus = createLucideIcon("SmilePlusIcon", [
  ["path", { d: "M22 11v1a10 10 0 1 1-9-10", key: "ew0xw9" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/smile.js
var Smile = createLucideIcon("SmileIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/snail.js
var Snail = createLucideIcon("SnailIcon", [
  ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0", key: "hneq2s" }],
  ["circle", { cx: "10", cy: "13", r: "8", key: "194lz3" }],
  ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6", key: "ixqyt7" }],
  ["path", { d: "M18 3 19.1 5.2", key: "9tjm43" }],
  ["path", { d: "M22 3 20.9 5.2", key: "j3odrs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/snowflake.js
var Snowflake = createLucideIcon("SnowflakeIcon", [
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "m20 16-4-4 4-4", key: "rquw4f" }],
  ["path", { d: "m4 8 4 4-4 4", key: "12s3z9" }],
  ["path", { d: "m16 4-4 4-4-4", key: "1tumq1" }],
  ["path", { d: "m8 20 4-4 4 4", key: "9p200w" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sofa.js
var Sofa = createLucideIcon("SofaIcon", [
  ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }],
  [
    "path",
    {
      d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",
      key: "u5qfb7"
    }
  ],
  ["path", { d: "M4 18v2", key: "jwo5n2" }],
  ["path", { d: "M20 18v2", key: "1ar1qi" }],
  ["path", { d: "M12 4v9", key: "oqhhn3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/soup.js
var Soup = createLucideIcon("SoupIcon", [
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M19.5 12 22 6", key: "shfsr5" }],
  [
    "path",
    {
      d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",
      key: "rpc6vp"
    }
  ],
  [
    "path",
    {
      d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",
      key: "1lf63m"
    }
  ],
  [
    "path",
    { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62", key: "97tijn" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/space.js
var Space = createLucideIcon("SpaceIcon", [
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/spade.js
var Spade = createLucideIcon("SpadeIcon", [
  [
    "path",
    {
      d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",
      key: "40bo9n"
    }
  ],
  ["path", { d: "M12 18v4", key: "jadmvz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sparkle.js
var Sparkle = createLucideIcon("SparkleIcon", [
  [
    "path",
    {
      d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",
      key: "nraa5p"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sparkles.js
var Sparkles = createLucideIcon("SparklesIcon", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/speaker.js
var Speaker = createLucideIcon("SpeakerIcon", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/speech.js
var Speech = createLucideIcon("SpeechIcon", [
  [
    "path",
    {
      d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
      key: "11atix"
    }
  ],
  ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603", key: "yol142" }],
  ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975", key: "ssbmkc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/spell-check-2.js
var SpellCheck2 = createLucideIcon("SpellCheck2Icon", [
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  [
    "path",
    {
      d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",
      key: "8mdmtu"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/spell-check.js
var SpellCheck = createLucideIcon("SpellCheckIcon", [
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/spline.js
var Spline = createLucideIcon("SplineIcon", [
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/split-square-horizontal.js
var SplitSquareHorizontal = createLucideIcon("SplitSquareHorizontalIcon", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/split-square-vertical.js
var SplitSquareVertical = createLucideIcon("SplitSquareVerticalIcon", [
  ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3", key: "1pi83i" }],
  ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3", key: "ido5k7" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/split.js
var Split = createLucideIcon("SplitIcon", [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M8 3H3v5", key: "15dfkv" }],
  ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/spray-can.js
var SprayCan = createLucideIcon("SprayCanIcon", [
  ["path", { d: "M3 3h.01", key: "159qn6" }],
  ["path", { d: "M7 5h.01", key: "1hq22a" }],
  ["path", { d: "M11 7h.01", key: "1osv80" }],
  ["path", { d: "M3 7h.01", key: "1xzrh3" }],
  ["path", { d: "M7 9h.01", key: "19b3jx" }],
  ["path", { d: "M3 11h.01", key: "1eifu7" }],
  ["rect", { width: "4", height: "4", x: "15", y: "5", key: "mri9e4" }],
  ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2", key: "aib6hk" }],
  ["path", { d: "m13 14 8-2", key: "1d7bmk" }],
  ["path", { d: "m13 19 8-2", key: "1y2vml" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sprout.js
var Sprout = createLucideIcon("SproutIcon", [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd"
    }
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-asterisk.js
var SquareAsterisk = createLucideIcon("SquareAsteriskIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8.5 14 7-4", key: "12hpby" }],
  ["path", { d: "m8.5 10 7 4", key: "wwy2dy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-code.js
var SquareCode = createLucideIcon("SquareCodeIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
  ["path", { d: "m14 14 2-2-2-2", key: "m075q2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-dashed-bottom-code.js
var SquareDashedBottomCode = createLucideIcon("SquareDashedBottomCodeIcon", [
  ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
  ["path", { d: "m14 14 2-2-2-2", key: "m075q2" }],
  [
    "path",
    { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
  ],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-dashed-bottom.js
var SquareDashedBottom = createLucideIcon("SquareDashedBottomIcon", [
  [
    "path",
    { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
  ],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-dot.js
var SquareDot = createLucideIcon("SquareDotIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-equal.js
var SquareEqual = createLucideIcon("SquareEqualIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M7 14h10", key: "1mhdw3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-slash.js
var SquareSlash = createLucideIcon("SquareSlashIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-stack.js
var SquareStack = createLucideIcon("SquareStackIcon", [
  ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "4i38lg" }],
  ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "mlte4a" }],
  ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-user-round.js
var SquareUserRound = createLucideIcon("SquareUserRoundIcon", [
  ["path", { d: "M18 21a6 6 0 0 0-12 0", key: "kaz2du" }],
  ["circle", { cx: "12", cy: "11", r: "4", key: "1gt34v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square-user.js
var SquareUser = createLucideIcon("SquareUserIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1m6ac2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/square.js
var Square = createLucideIcon("SquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/squircle.js
var Squircle = createLucideIcon("SquircleIcon", [
  ["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9", key: "garfkc" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/squirrel.js
var Squirrel = createLucideIcon("SquirrelIcon", [
  ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5", key: "21bitc" }],
  ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4", key: "oh0fg0" }],
  ["path", { d: "M18 13h.01", key: "9veqaj" }],
  [
    "path",
    {
      d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",
      key: "980v8a"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/stamp.js
var Stamp = createLucideIcon("StampIcon", [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  [
    "path",
    {
      d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",
      key: "1sy9ra"
    }
  ],
  [
    "path",
    { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13", key: "cnxgux" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/star-half.js
var StarHalf = createLucideIcon("StarHalfIcon", [
  ["path", { d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2", key: "nare05" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/star-off.js
var StarOff = createLucideIcon("StarOffIcon", [
  ["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43", key: "16m0ql" }],
  ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91", key: "1vt8nq" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/star.js
var Star = createLucideIcon("StarIcon", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/step-back.js
var StepBack = createLucideIcon("StepBackIcon", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["polygon", { points: "14,20 4,12 14,4", key: "ypakod" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/step-forward.js
var StepForward = createLucideIcon("StepForwardIcon", [
  ["line", { x1: "6", x2: "6", y1: "4", y2: "20", key: "fy8qot" }],
  ["polygon", { points: "10,4 20,12 10,20", key: "1mc1pf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/stethoscope.js
var Stethoscope = createLucideIcon("StethoscopeIcon", [
  [
    "path",
    {
      d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
      key: "1jd90r"
    }
  ],
  ["path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4", key: "126ukv" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sticker.js
var Sticker = createLucideIcon("StickerIcon", [
  [
    "path",
    { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z", key: "1wis1t" }
  ],
  ["path", { d: "M15 3v6h6", key: "edgan2" }],
  ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1", key: "1vvgv3" }],
  ["path", { d: "M8 13h0", key: "jdup5h" }],
  ["path", { d: "M16 13h0", key: "l4i2ga" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sticky-note.js
var StickyNote = createLucideIcon("StickyNoteIcon", [
  [
    "path",
    { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z", key: "1wis1t" }
  ],
  ["path", { d: "M15 3v6h6", key: "edgan2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/stop-circle.js
var StopCircle = createLucideIcon("StopCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", key: "1wrtvo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/store.js
var Store = createLucideIcon("StoreIcon", [
  ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7", key: "ztvudi" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      key: "jon5kx"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/stretch-horizontal.js
var StretchHorizontal = createLucideIcon("StretchHorizontalIcon", [
  ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2", key: "qdearl" }],
  ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2", key: "1xrn6j" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/stretch-vertical.js
var StretchVertical = createLucideIcon("StretchVerticalIcon", [
  ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2", key: "19qu7m" }],
  ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2", key: "24v0nk" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/strikethrough.js
var Strikethrough = createLucideIcon("StrikethroughIcon", [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/subscript.js
var Subscript = createLucideIcon("SubscriptIcon", [
  ["path", { d: "m4 5 8 8", key: "1eunvl" }],
  ["path", { d: "m12 5-8 8", key: "1ah0jp" }],
  [
    "path",
    {
      d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
      key: "e8ta8j"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/subtitles.js
var Subtitles = createLucideIcon("SubtitlesIcon", [
  ["path", { d: "M7 13h4", key: "1m1xj0" }],
  ["path", { d: "M15 13h2", key: "vgjay3" }],
  ["path", { d: "M7 9h2", key: "1q072n" }],
  ["path", { d: "M13 9h4", key: "o7fxw0" }],
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z", key: "5somay" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sun-dim.js
var SunDim = createLucideIcon("SunDimIcon", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 4h.01", key: "1ujb9j" }],
  ["path", { d: "M20 12h.01", key: "1ykeid" }],
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M4 12h.01", key: "158zrr" }],
  ["path", { d: "M17.657 6.343h.01", key: "31pqzk" }],
  ["path", { d: "M17.657 17.657h.01", key: "jehnf4" }],
  ["path", { d: "M6.343 17.657h.01", key: "gdk6ow" }],
  ["path", { d: "M6.343 6.343h.01", key: "1uurf0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sun-medium.js
var SunMedium = createLucideIcon("SunMediumIcon", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 3v1", key: "1asbbs" }],
  ["path", { d: "M12 20v1", key: "1wcdkc" }],
  ["path", { d: "M3 12h1", key: "lp3yf2" }],
  ["path", { d: "M20 12h1", key: "1vloll" }],
  ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
  ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
  ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
  ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sun-moon.js
var SunMoon = createLucideIcon("SunMoonIcon", [
  ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4", key: "1fu5g2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.9 4.9 1.4 1.4", key: "b9915j" }],
  ["path", { d: "m17.7 17.7 1.4 1.4", key: "qc3ed3" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.3 17.7-1.4 1.4", key: "5gca6" }],
  ["path", { d: "m19.1 4.9-1.4 1.4", key: "wpu9u6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sun-snow.js
var SunSnow = createLucideIcon("SunSnowIcon", [
  ["path", { d: "M10 9a3 3 0 1 0 0 6", key: "6zmtdl" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M14 21V3", key: "1llu3z" }],
  ["path", { d: "M10 4V3", key: "pkzwkn" }],
  ["path", { d: "M10 21v-1", key: "1u8rkd" }],
  ["path", { d: "m3.64 18.36.7-.7", key: "105rm9" }],
  ["path", { d: "m4.34 6.34-.7-.7", key: "d3unjp" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "m17 4-3 3", key: "15jcng" }],
  ["path", { d: "m14 17 3 3", key: "6tlq38" }],
  ["path", { d: "m21 15-3-3 3-3", key: "1nlnje" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sun.js
var Sun = createLucideIcon("SunIcon", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sunrise.js
var Sunrise = createLucideIcon("SunriseIcon", [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sunset.js
var Sunset = createLucideIcon("SunsetIcon", [
  ["path", { d: "M12 10V2", key: "16sf7g" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/superscript.js
var Superscript = createLucideIcon("SuperscriptIcon", [
  ["path", { d: "m4 19 8-8", key: "hr47gm" }],
  ["path", { d: "m12 19-8-8", key: "1dhhmo" }],
  [
    "path",
    {
      d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
      key: "1dfcux"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/swiss-franc.js
var SwissFranc = createLucideIcon("SwissFrancIcon", [
  ["path", { d: "M10 21V3h8", key: "br2l0g" }],
  ["path", { d: "M6 16h9", key: "2py0wn" }],
  ["path", { d: "M10 9.5h7", key: "13dmhz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/switch-camera.js
var SwitchCamera = createLucideIcon("SwitchCameraIcon", [
  ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5", key: "mtk2lu" }],
  ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5", key: "120jsl" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m18 22-3-3 3-3", key: "kgdoj7" }],
  ["path", { d: "m6 2 3 3-3 3", key: "1fnbkv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/sword.js
var Sword = createLucideIcon("SwordIcon", [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/swords.js
var Swords = createLucideIcon("SwordsIcon", [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
  ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }],
  ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
  ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
  ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/syringe.js
var Syringe = createLucideIcon("SyringeIcon", [
  ["path", { d: "m18 2 4 4", key: "22kx64" }],
  ["path", { d: "m17 7 3-3", key: "1w1zoj" }],
  ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5", key: "1exhtz" }],
  ["path", { d: "m9 11 4 4", key: "rovt3i" }],
  ["path", { d: "m5 19-3 3", key: "59f2uf" }],
  ["path", { d: "m14 4 6 6", key: "yqp9t2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/table-2.js
var Table2 = createLucideIcon("Table2Icon", [
  [
    "path",
    {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/table-properties.js
var TableProperties = createLucideIcon("TablePropertiesIcon", [
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/table.js
var Table = createLucideIcon("TableIcon", [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tablet-smartphone.js
var TabletSmartphone = createLucideIcon("TabletSmartphoneIcon", [
  ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2", key: "1vrsiq" }],
  ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4", key: "1j4zmg" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tablet.js
var Tablet = createLucideIcon("TabletIcon", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tablets.js
var Tablets = createLucideIcon("TabletsIcon", [
  ["circle", { cx: "7", cy: "7", r: "5", key: "x29byf" }],
  ["circle", { cx: "17", cy: "17", r: "5", key: "1op1d2" }],
  ["path", { d: "M12 17h10", key: "ls21zv" }],
  ["path", { d: "m3.46 10.54 7.08-7.08", key: "1rehiu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tag.js
var Tag = createLucideIcon("TagIcon", [
  [
    "path",
    {
      d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",
      key: "14b2ls"
    }
  ],
  ["path", { d: "M7 7h.01", key: "7u93v4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tags.js
var Tags = createLucideIcon("TagsIcon", [
  [
    "path",
    {
      d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",
      key: "gt587u"
    }
  ],
  ["path", { d: "M6 9.01V9", key: "1flxpt" }],
  ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tally-1.js
var Tally1 = createLucideIcon("Tally1Icon", [["path", { d: "M4 4v16", key: "6qkkli" }]]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tally-2.js
var Tally2 = createLucideIcon("Tally2Icon", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tally-3.js
var Tally3 = createLucideIcon("Tally3Icon", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tally-4.js
var Tally4 = createLucideIcon("Tally4Icon", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }],
  ["path", { d: "M19 4v16", key: "8ij5ei" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tally-5.js
var Tally5 = createLucideIcon("Tally5Icon", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }],
  ["path", { d: "M19 4v16", key: "8ij5ei" }],
  ["path", { d: "M22 6 2 18", key: "h9moai" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tangent.js
var Tangent = createLucideIcon("TangentIcon", [
  ["circle", { cx: "17", cy: "4", r: "2", key: "y5j2s2" }],
  ["path", { d: "M15.59 5.41 5.41 15.59", key: "l0vprr" }],
  ["circle", { cx: "4", cy: "17", r: "2", key: "9p4efm" }],
  ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12", key: "1twk4o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/target.js
var Target = createLucideIcon("TargetIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tent-tree.js
var TentTree = createLucideIcon("TentTreeIcon", [
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ["path", { d: "m14 5 3-3 3 3", key: "1sorif" }],
  ["path", { d: "m14 10 3-3 3 3", key: "1jyi9h" }],
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  ["path", { d: "M17 14H7l-5 8h20Z", key: "13ar7p" }],
  ["path", { d: "M8 14v8", key: "1ghmqk" }],
  ["path", { d: "m9 14 5 8", key: "13pgi6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tent.js
var Tent = createLucideIcon("TentIcon", [
  ["path", { d: "M3.5 21 14 3", key: "1szst5" }],
  ["path", { d: "M20.5 21 10 3", key: "1310c3" }],
  ["path", { d: "M15.5 21 12 15l-3.5 6", key: "1ddtfw" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/terminal-square.js
var TerminalSquare = createLucideIcon("TerminalSquareIcon", [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/terminal.js
var Terminal = createLucideIcon("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/test-tube-2.js
var TestTube2 = createLucideIcon("TestTube2Icon", [
  [
    "path",
    { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3", key: "dg8b2p" }
  ],
  ["path", { d: "m16 2 6 6", key: "1gw87d" }],
  ["path", { d: "M12 16H4", key: "1cjfip" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/test-tube.js
var TestTube = createLucideIcon("TestTubeIcon", [
  ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2", key: "187lwq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14.5 16h-5", key: "1ox875" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/test-tubes.js
var TestTubes = createLucideIcon("TestTubesIcon", [
  ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2", key: "12z67u" }],
  ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2", key: "1q2nfy" }],
  ["path", { d: "M3 2h7", key: "7s29d5" }],
  ["path", { d: "M14 2h7", key: "7sicin" }],
  ["path", { d: "M9 16H4", key: "1bfye3" }],
  ["path", { d: "M20 16h-5", key: "ddnjpe" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/text-cursor-input.js
var TextCursorInput = createLucideIcon("TextCursorInputIcon", [
  ["path", { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1", key: "18xjzo" }],
  ["path", { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5", key: "fj48gi" }],
  ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" }],
  ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" }],
  ["path", { d: "M9 7v10", key: "1vc8ob" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/text-cursor.js
var TextCursor = createLucideIcon("TextCursorIcon", [
  ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1", key: "uvaxm9" }],
  ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1", key: "11xy8d" }],
  ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1", key: "1uw06m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/text-quote.js
var TextQuote = createLucideIcon("TextQuoteIcon", [
  ["path", { d: "M17 6H3", key: "16j9eg" }],
  ["path", { d: "M21 12H8", key: "scolzb" }],
  ["path", { d: "M21 18H8", key: "1wfozv" }],
  ["path", { d: "M3 12v6", key: "fv4c87" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/text-select.js
var TextSelect = createLucideIcon("TextSelectIcon", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M21 14v1", key: "169vum" }],
  ["line", { x1: "7", x2: "15", y1: "8", y2: "8", key: "1758g8" }],
  ["line", { x1: "7", x2: "17", y1: "12", y2: "12", key: "197423" }],
  ["line", { x1: "7", x2: "13", y1: "16", y2: "16", key: "37cgm6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/text.js
var Text = createLucideIcon("TextIcon", [
  ["path", { d: "M17 6.1H3", key: "wptmhv" }],
  ["path", { d: "M21 12.1H3", key: "1j38uz" }],
  ["path", { d: "M15.1 18H3", key: "1nb16a" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/theater.js
var Theater = createLucideIcon("TheaterIcon", [
  ["path", { d: "M2 10s3-3 3-8", key: "3xiif0" }],
  ["path", { d: "M22 10s-3-3-3-8", key: "ioaa5q" }],
  ["path", { d: "M10 2c0 4.4-3.6 8-8 8", key: "16fkpi" }],
  ["path", { d: "M14 2c0 4.4 3.6 8 8 8", key: "b9eulq" }],
  ["path", { d: "M2 10s2 2 2 5", key: "1au1lb" }],
  ["path", { d: "M22 10s-2 2-2 5", key: "qi2y5e" }],
  ["path", { d: "M8 15h8", key: "45n4r" }],
  ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "1vsc2m" }],
  ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "hrha4u" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/thermometer-snowflake.js
var ThermometerSnowflake = createLucideIcon("ThermometerSnowflakeIcon", [
  ["path", { d: "M2 12h10", key: "19562f" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "m3 9 3 3-3 3", key: "1sas0l" }],
  ["path", { d: "M12 6 9 9 6 6", key: "pfrgxu" }],
  ["path", { d: "m6 18 3-3 1.5 1.5", key: "1e277p" }],
  ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/thermometer-sun.js
var ThermometerSun = createLucideIcon("ThermometerSunIcon", [
  ["path", { d: "M12 9a4 4 0 0 0-2 7.5", key: "1jvsq6" }],
  ["path", { d: "M12 3v2", key: "1w22ol" }],
  ["path", { d: "m6.6 18.4-1.4 1.4", key: "w2yidj" }],
  ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" }],
  ["path", { d: "M4 13H2", key: "118le4" }],
  ["path", { d: "M6.34 7.34 4.93 5.93", key: "1brd51" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/thermometer.js
var Thermometer = createLucideIcon("ThermometerIcon", [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/thumbs-down.js
var ThumbsDown = createLucideIcon("ThumbsDownIcon", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/thumbs-up.js
var ThumbsUp = createLucideIcon("ThumbsUpIcon", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ticket.js
var Ticket = createLucideIcon("TicketIcon", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/timer-off.js
var TimerOff = createLucideIcon("TimerOffIcon", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7", key: "10he05" }],
  ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2", key: "15f7sh" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M12 12v-2", key: "fwoke6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/timer-reset.js
var TimerReset = createLucideIcon("TimerResetIcon", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  ["path", { d: "M12 14v-4", key: "1evpnu" }],
  ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6", key: "1ts96g" }],
  ["path", { d: "M9 17H4v5", key: "8t5av" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/timer.js
var Timer = createLucideIcon("TimerIcon", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/toggle-left.js
var ToggleLeft = createLucideIcon("ToggleLeftIcon", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6", key: "f2vt7d" }],
  ["circle", { cx: "8", cy: "12", r: "2", key: "1nvbw3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/toggle-right.js
var ToggleRight = createLucideIcon("ToggleRightIcon", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6", key: "f2vt7d" }],
  ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tornado.js
var Tornado = createLucideIcon("TornadoIcon", [
  ["path", { d: "M21 4H3", key: "1hwok0" }],
  ["path", { d: "M18 8H6", key: "41n648" }],
  ["path", { d: "M19 12H9", key: "1g4lpz" }],
  ["path", { d: "M16 16h-6", key: "1j5d54" }],
  ["path", { d: "M11 20H9", key: "39obr8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/torus.js
var Torus = createLucideIcon("TorusIcon", [
  ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2", key: "1b2qxu" }],
  ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5", key: "h8emeu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/touchpad-off.js
var TouchpadOff = createLucideIcon("TouchpadOffIcon", [
  ["path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16", key: "lnt0bk" }],
  ["path", { d: "M2 14h12", key: "d8icqz" }],
  ["path", { d: "M22 14h-2", key: "jrx26d" }],
  ["path", { d: "M12 20v-6", key: "1rm09r" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10", key: "11y8e4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/touchpad.js
var Touchpad = createLucideIcon("TouchpadIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M12 20v-6", key: "1rm09r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tower-control.js
var TowerControl = createLucideIcon("TowerControlIcon", [
  [
    "path",
    { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z", key: "1pledb" }
  ],
  ["path", { d: "M8 13v9", key: "hmv0ci" }],
  ["path", { d: "M16 22v-9", key: "ylnf1u" }],
  ["path", { d: "m9 6 1 7", key: "dpdgam" }],
  ["path", { d: "m15 6-1 7", key: "ls7zgu" }],
  ["path", { d: "M12 6V2", key: "1pj48d" }],
  ["path", { d: "M13 2h-2", key: "mj6ths" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/toy-brick.js
var ToyBrick = createLucideIcon("ToyBrickIcon", [
  ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }],
  ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }],
  ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tractor.js
var Tractor = createLucideIcon("TractorIcon", [
  ["path", { d: "M3 4h9l1 7", key: "1ftpo8" }],
  ["path", { d: "M4 11V4", key: "9ft8pt" }],
  ["path", { d: "M8 10V4", key: "1y5f7n" }],
  ["path", { d: "M18 5c-.6 0-1 .4-1 1v5.6", key: "10zbvr" }],
  ["path", { d: "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1", key: "2w242w" }],
  ["circle", { cx: "7", cy: "15", r: ".5", key: "fbsjqy" }],
  ["circle", { cx: "7", cy: "15", r: "5", key: "ddtuc" }],
  ["path", { d: "M16 18h-5", key: "bq60fd" }],
  ["circle", { cx: "18", cy: "18", r: "2", key: "1emm8v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/traffic-cone.js
var TrafficCone = createLucideIcon("TrafficConeIcon", [
  ["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0", key: "flyxqv" }],
  ["path", { d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3", key: "1nlxxg" }],
  [
    "path",
    {
      d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",
      key: "vz7x1l"
    }
  ],
  [
    "path",
    {
      d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",
      key: "1xfzlw"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/train-front-tunnel.js
var TrainFrontTunnel = createLucideIcon("TrainFrontTunnelIcon", [
  ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10", key: "o0fyp0" }],
  ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8", key: "m8q3n9" }],
  ["path", { d: "M10 15h.01", key: "44in9x" }],
  ["path", { d: "M14 15h.01", key: "5mohn5" }],
  ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z", key: "hckbmu" }],
  ["path", { d: "m9 19-2 3", key: "iij7hm" }],
  ["path", { d: "m15 19 2 3", key: "npx8sa" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/train-front.js
var TrainFront = createLucideIcon("TrainFrontIcon", [
  ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1", key: "1v71zp" }],
  ["path", { d: "m9 15-1-1", key: "1yrq24" }],
  ["path", { d: "m15 15 1-1", key: "1t0d6s" }],
  ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z", key: "1p0hjs" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m16 19 2 3", key: "xo31yx" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/train-track.js
var TrainTrack = createLucideIcon("TrainTrackIcon", [
  ["path", { d: "M2 17 17 2", key: "18b09t" }],
  ["path", { d: "m2 14 8 8", key: "1gv9hu" }],
  ["path", { d: "m5 11 8 8", key: "189pqp" }],
  ["path", { d: "m8 8 8 8", key: "1imecy" }],
  ["path", { d: "m11 5 8 8", key: "ummqn6" }],
  ["path", { d: "m14 2 8 8", key: "1vk7dn" }],
  ["path", { d: "M7 22 22 7", key: "15mb1i" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tram-front.js
var TramFront = createLucideIcon("TramFrontIcon", [
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M12 3v8", key: "1h2ygw" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m18 22-2-3", key: "1p0ohu" }],
  ["path", { d: "M8 15h0", key: "q9eq1f" }],
  ["path", { d: "M16 15h0", key: "pzrbjg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/trash-2.js
var Trash2 = createLucideIcon("Trash2Icon", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/trash.js
var Trash = createLucideIcon("TrashIcon", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tree-deciduous.js
var TreeDeciduous = createLucideIcon("TreeDeciduousIcon", [
  [
    "path",
    {
      d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
      key: "oadzkq"
    }
  ],
  ["path", { d: "M12 19v3", key: "npa21l" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tree-pine.js
var TreePine = createLucideIcon("TreePineIcon", [
  [
    "path",
    {
      d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
      key: "cpyugq"
    }
  ],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/trees.js
var Trees = createLucideIcon("TreesIcon", [
  [
    "path",
    { d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "yh07w9" }
  ],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/trello.js
var Trello = createLucideIcon("TrelloIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["rect", { width: "3", height: "9", x: "7", y: "7", key: "14n3xi" }],
  ["rect", { width: "3", height: "5", x: "14", y: "7", key: "s4azjd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/trending-down.js
var TrendingDown = createLucideIcon("TrendingDownIcon", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/trending-up.js
var TrendingUp = createLucideIcon("TrendingUpIcon", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/triangle-right.js
var TriangleRight = createLucideIcon("TriangleRightIcon", [
  [
    "path",
    {
      d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",
      key: "183wce"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/triangle.js
var Triangle = createLucideIcon("TriangleIcon", [
  [
    "path",
    { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/trophy.js
var Trophy = createLucideIcon("TrophyIcon", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/truck.js
var Truck = createLucideIcon("TruckIcon", [
  ["path", { d: "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11", key: "hs4xqm" }],
  ["path", { d: "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2", key: "11fp61" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/turtle.js
var Turtle = createLucideIcon("TurtleIcon", [
  [
    "path",
    {
      d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
      key: "1lbbv7"
    }
  ],
  ["path", { d: "M4.82 7.9 8 10", key: "m9wose" }],
  ["path", { d: "M15.18 7.9 12 10", key: "p8dp2u" }],
  ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2", key: "12nsm7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tv-2.js
var Tv2 = createLucideIcon("Tv2Icon", [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/tv.js
var Tv = createLucideIcon("TvIcon", [
  ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2", key: "10ag99" }],
  ["polyline", { points: "17 2 12 7 7 2", key: "11pgbg" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/twitch.js
var Twitch = createLucideIcon("TwitchIcon", [
  ["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7", key: "c0yzno" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/twitter.js
var Twitter = createLucideIcon("TwitterIcon", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/type.js
var Type = createLucideIcon("TypeIcon", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/umbrella-off.js
var UmbrellaOff = createLucideIcon("UmbrellaOffIcon", [
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575", key: "eki10q" }],
  ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455", key: "n2ayka" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/umbrella.js
var Umbrella = createLucideIcon("UmbrellaIcon", [
  ["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z", key: "1teyop" }],
  ["path", { d: "M12 12v8a2 2 0 0 0 4 0", key: "ulpmoc" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/underline.js
var Underline = createLucideIcon("UnderlineIcon", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/undo-2.js
var Undo2 = createLucideIcon("Undo2Icon", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/undo-dot.js
var UndoDot = createLucideIcon("UndoDotIcon", [
  ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/undo.js
var Undo = createLucideIcon("UndoIcon", [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/unfold-horizontal.js
var UnfoldHorizontal = createLucideIcon("UnfoldHorizontalIcon", [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/unfold-vertical.js
var UnfoldVertical = createLucideIcon("UnfoldVerticalIcon", [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/ungroup.js
var Ungroup = createLucideIcon("UngroupIcon", [
  ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1", key: "nzclkv" }],
  ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1", key: "4tytwb" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/unlink-2.js
var Unlink2 = createLucideIcon("Unlink2Icon", [
  ["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2", key: "1re2ne" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/unlink.js
var Unlink = createLucideIcon("UnlinkIcon", [
  [
    "path",
    {
      d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
      key: "yqzxt4"
    }
  ],
  [
    "path",
    {
      d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
      key: "4qinb0"
    }
  ],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "5", key: "1041cp" }],
  ["line", { x1: "2", x2: "5", y1: "8", y2: "8", key: "14m1p5" }],
  ["line", { x1: "16", x2: "16", y1: "19", y2: "22", key: "rzdirn" }],
  ["line", { x1: "19", x2: "22", y1: "16", y2: "16", key: "ox905f" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/unlock-keyhole.js
var UnlockKeyhole = createLucideIcon("UnlockKeyholeIcon", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5", key: "car5b7" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/unlock.js
var Unlock = createLucideIcon("UnlockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/unplug.js
var Unplug = createLucideIcon("UnplugIcon", [
  ["path", { d: "m19 5 3-3", key: "yk6iyv" }],
  ["path", { d: "m2 22 3-3", key: "19mgm9" }],
  [
    "path",
    { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
  ],
  ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
  ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
  [
    "path",
    { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z", key: "1snsnr" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/upload-cloud.js
var UploadCloud = createLucideIcon("UploadCloudIcon", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M12 12v9", key: "192myk" }],
  ["path", { d: "m16 16-4-4-4 4", key: "119tzi" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/upload.js
var Upload = createLucideIcon("UploadIcon", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/usb.js
var Usb = createLucideIcon("UsbIcon", [
  ["circle", { cx: "10", cy: "7", r: "1", key: "dypaad" }],
  ["circle", { cx: "4", cy: "20", r: "1", key: "22iqad" }],
  ["path", { d: "M4.7 19.3 19 5", key: "1enqfc" }],
  ["path", { d: "m21 3-3 1 2 2Z", key: "d3ov82" }],
  ["path", { d: "M9.26 7.68 5 12l2 5", key: "1esawj" }],
  ["path", { d: "m10 14 5 2 3.5-3.5", key: "v8oal5" }],
  ["path", { d: "m18 12 1-1 1 1-1 1Z", key: "1bh22v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-check.js
var UserCheck = createLucideIcon("UserCheckIcon", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-cog.js
var UserCog = createLucideIcon("UserCogIcon", [
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m21.7 16.4-.9-.3", key: "12j9ji" }],
  ["path", { d: "m15.2 13.9-.9-.3", key: "1fdjdi" }],
  ["path", { d: "m16.6 18.7.3-.9", key: "heedtr" }],
  ["path", { d: "m19.1 12.2.3-.9", key: "1af3ki" }],
  ["path", { d: "m19.6 18.7-.4-1", key: "1x9vze" }],
  ["path", { d: "m16.8 12.3-.4-1", key: "vqeiwj" }],
  ["path", { d: "m14.3 16.6 1-.4", key: "1qlj63" }],
  ["path", { d: "m20.7 13.8 1-.4", key: "1v5t8k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-minus.js
var UserMinus = createLucideIcon("UserMinusIcon", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-plus.js
var UserPlus = createLucideIcon("UserPlusIcon", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-round-check.js
var UserRoundCheck = createLucideIcon("UserRoundCheckIcon", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-round-cog.js
var UserRoundCog = createLucideIcon("UserRoundCogIcon", [
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m19.5 14.3-.4.9", key: "1eb35c" }],
  ["path", { d: "m16.9 20.8-.4.9", key: "dfjc4z" }],
  ["path", { d: "m21.7 19.5-.9-.4", key: "q4dx6b" }],
  ["path", { d: "m15.2 16.9-.9-.4", key: "1r0w5f" }],
  ["path", { d: "m21.7 16.5-.9.4", key: "1knoei" }],
  ["path", { d: "m15.2 19.1-.9.4", key: "j188fs" }],
  ["path", { d: "m19.5 21.7-.4-.9", key: "1tonu5" }],
  ["path", { d: "m16.9 15.2-.4-.9", key: "699xu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-round-minus.js
var UserRoundMinus = createLucideIcon("UserRoundMinusIcon", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 19h-6", key: "vcuq98" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-round-plus.js
var UserRoundPlus = createLucideIcon("UserRoundPlusIcon", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M22 19h-6", key: "vcuq98" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-round-search.js
var UserRoundSearch = createLucideIcon("UserRoundSearchIcon", [
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m22 22-1.9-1.9", key: "1e5ubv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-round-x.js
var UserRoundX = createLucideIcon("UserRoundXIcon", [
  ["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }],
  ["path", { d: "m22 17-5 5", key: "gqnmv0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-round.js
var UserRound = createLucideIcon("UserRoundIcon", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-search.js
var UserSearch = createLucideIcon("UserSearchIcon", [
  ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }],
  ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2", key: "3bnktk" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user-x.js
var UserX = createLucideIcon("UserXIcon", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/user.js
var User = createLucideIcon("UserIcon", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/users-round.js
var UsersRound = createLucideIcon("UsersRoundIcon", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/users.js
var Users = createLucideIcon("UsersIcon", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/utensils-crossed.js
var UtensilsCrossed = createLucideIcon("UtensilsCrossedIcon", [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
  [
    "path",
    { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/utensils.js
var Utensils = createLucideIcon("UtensilsIcon", [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "1ogz0v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/utility-pole.js
var UtilityPole = createLucideIcon("UtilityPoleIcon", [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "M2 5h20", key: "1fs1ex" }],
  ["path", { d: "M3 3v2", key: "9imdir" }],
  ["path", { d: "M7 3v2", key: "n0os7" }],
  ["path", { d: "M17 3v2", key: "1l2re6" }],
  ["path", { d: "M21 3v2", key: "1duuac" }],
  ["path", { d: "m19 5-7 7-7-7", key: "133zxf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/variable.js
var Variable = createLucideIcon("VariableIcon", [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/vegan.js
var Vegan = createLucideIcon("VeganIcon", [
  ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14", key: "qiv7li" }],
  ["path", { d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6", key: "n7eohy" }],
  ["path", { d: "M17.41 3.6a10 10 0 1 0 3 3", key: "1dion0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/venetian-mask.js
var VenetianMask = createLucideIcon("VenetianMaskIcon", [
  [
    "path",
    {
      d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",
      key: "1g6z3j"
    }
  ],
  ["path", { d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z", key: "c2lwnf" }],
  ["path", { d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z", key: "njd9zo" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/vibrate-off.js
var VibrateOff = createLucideIcon("VibrateOffIcon", [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
  ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2", key: "1hbad5" }],
  ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34", key: "1x5tf0" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/vibrate.js
var Vibrate = createLucideIcon("VibrateIcon", [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
  ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1", key: "1oyrl4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/video-off.js
var VideoOff = createLucideIcon("VideoOffIcon", [
  ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8", key: "ubwiq0" }],
  ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z", key: "1l10zd" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/video.js
var Video = createLucideIcon("VideoIcon", [
  ["path", { d: "m22 8-6 4 6 4V8Z", key: "50v9me" }],
  ["rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2", key: "1rqjg6" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/videotape.js
var Videotape = createLucideIcon("VideotapeIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["circle", { cx: "8", cy: "14", r: "2", key: "1k2qr5" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["circle", { cx: "16", cy: "14", r: "2", key: "14k7lr" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/view.js
var View = createLucideIcon("ViewIcon", [
  [
    "path",
    { d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z", key: "vptub8" }
  ],
  ["path", { d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", key: "10lhjs" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2", key: "mrq65r" }],
  ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2", key: "be3xqs" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/voicemail.js
var Voicemail = createLucideIcon("VoicemailIcon", [
  ["circle", { cx: "6", cy: "12", r: "4", key: "1ehtga" }],
  ["circle", { cx: "18", cy: "12", r: "4", key: "4vafl8" }],
  ["line", { x1: "6", x2: "18", y1: "16", y2: "16", key: "pmt8us" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/volume-1.js
var Volume1 = createLucideIcon("Volume1Icon", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/volume-2.js
var Volume2 = createLucideIcon("Volume2Icon", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/volume-x.js
var VolumeX = createLucideIcon("VolumeXIcon", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/volume.js
var Volume = createLucideIcon("VolumeIcon", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/vote.js
var Vote = createLucideIcon("VoteIcon", [
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z", key: "1ezoue" }],
  ["path", { d: "M22 19H2", key: "nuriw5" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wallet-2.js
var Wallet2 = createLucideIcon("Wallet2Icon", [
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  [
    "path",
    {
      d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",
      key: "u1rqew"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wallet-cards.js
var WalletCards = createLucideIcon("WalletCardsIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }],
  [
    "path",
    {
      d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
      key: "1dpki6"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wallet.js
var Wallet = createLucideIcon("WalletIcon", [
  ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
  ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wallpaper.js
var Wallpaper = createLucideIcon("WallpaperIcon", [
  ["circle", { cx: "8", cy: "9", r: "2", key: "gjzl9d" }],
  [
    "path",
    {
      d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",
      key: "69xh40"
    }
  ],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wand-2.js
var Wand2 = createLucideIcon("Wand2Icon", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wand.js
var Wand = createLucideIcon("WandIcon", [
  ["path", { d: "M15 4V2", key: "z1p9b7" }],
  ["path", { d: "M15 16v-2", key: "px0unx" }],
  ["path", { d: "M8 9h2", key: "1g203m" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M17.8 11.8 19 13", key: "yihg8r" }],
  ["path", { d: "M15 9h0", key: "kg5t1u" }],
  ["path", { d: "M17.8 6.2 19 5", key: "fd4us0" }],
  ["path", { d: "m3 21 9-9", key: "1jfql5" }],
  ["path", { d: "M12.2 6.2 11 5", key: "i3da3b" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/warehouse.js
var Warehouse = createLucideIcon("WarehouseIcon", [
  [
    "path",
    {
      d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
      key: "gksnxg"
    }
  ],
  ["path", { d: "M6 18h12", key: "9pbo8z" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }],
  ["rect", { width: "12", height: "12", x: "6", y: "10", key: "apd30q" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/watch.js
var Watch = createLucideIcon("WatchIcon", [
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["polyline", { points: "12 10 12 12 13 13", key: "19dquz" }],
  [
    "path",
    { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05", key: "18k57s" }
  ],
  ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05", key: "16ny36" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/waves.js
var Waves = createLucideIcon("WavesIcon", [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh"
    }
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc"
    }
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/waypoints.js
var Waypoints = createLucideIcon("WaypointsIcon", [
  ["circle", { cx: "12", cy: "4.5", r: "2.5", key: "r5ysbb" }],
  ["path", { d: "m10.2 6.3-3.9 3.9", key: "1nzqf6" }],
  ["circle", { cx: "4.5", cy: "12", r: "2.5", key: "jydg6v" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["circle", { cx: "19.5", cy: "12", r: "2.5", key: "1piiel" }],
  ["path", { d: "m13.8 17.7 3.9-3.9", key: "1wyg1y" }],
  ["circle", { cx: "12", cy: "19.5", r: "2.5", key: "13o1pw" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/webcam.js
var Webcam = createLucideIcon("WebcamIcon", [
  ["circle", { cx: "12", cy: "10", r: "8", key: "1gshiw" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 22h10", key: "10w4w3" }],
  ["path", { d: "M12 22v-4", key: "1utk9m" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/webhook.js
var Webhook = createLucideIcon("WebhookIcon", [
  [
    "path",
    {
      d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
      key: "q3hayz"
    }
  ],
  ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06", key: "1go1hn" }],
  ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8", key: "qlwsc0" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/weight.js
var Weight = createLucideIcon("WeightIcon", [
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
      key: "56o5sh"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wheat-off.js
var WheatOff = createLucideIcon("WheatOffIcon", [
  ["path", { d: "m2 22 10-10", key: "28ilpk" }],
  ["path", { d: "m16 8-1.17 1.17", key: "1qqm82" }],
  [
    "path",
    {
      d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1rdhi6"
    }
  ],
  [
    "path",
    { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97", key: "4wz8re" }
  ],
  [
    "path",
    { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62", key: "rves66" }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "tc8ph9"
    }
  ],
  [
    "path",
    {
      d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",
      key: "ak46r"
    }
  ],
  [
    "path",
    {
      d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",
      key: "1tw520"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wheat.js
var Wheat = createLucideIcon("WheatIcon", [
  ["path", { d: "M2 22 16 8", key: "60hf96" }],
  [
    "path",
    {
      d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1rdhi6"
    }
  ],
  [
    "path",
    {
      d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1sdzmb"
    }
  ],
  [
    "path",
    {
      d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "eoatbi"
    }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "tc8ph9"
    }
  ],
  [
    "path",
    {
      d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "2m8kc5"
    }
  ],
  [
    "path",
    {
      d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "vex3ng"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/whole-word.js
var WholeWord = createLucideIcon("WholeWordIcon", [
  ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
  ["path", { d: "M10 9v6", key: "17i7lo" }],
  ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
  ["path", { d: "M14 7v8", key: "dl84cr" }],
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wifi-off.js
var WifiOff = createLucideIcon("WifiOffIcon", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M8.5 16.5a5 5 0 0 1 7 0", key: "sej527" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.17-2.65", key: "11utq1" }],
  ["path", { d: "M10.66 5c4.01-.36 8.14.9 11.34 3.76", key: "hxefdu" }],
  ["path", { d: "M16.85 11.25a10 10 0 0 1 2.22 1.68", key: "q734kn" }],
  ["path", { d: "M5 13a10 10 0 0 1 5.24-2.76", key: "piq4yl" }],
  ["line", { x1: "12", x2: "12.01", y1: "20", y2: "20", key: "of4bc4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wifi.js
var Wifi = createLucideIcon("WifiIcon", [
  ["path", { d: "M5 13a10 10 0 0 1 14 0", key: "6v8j51" }],
  ["path", { d: "M8.5 16.5a5 5 0 0 1 7 0", key: "sej527" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["line", { x1: "12", x2: "12.01", y1: "20", y2: "20", key: "of4bc4" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wind.js
var Wind = createLucideIcon("WindIcon", [
  ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2", key: "1k4u03" }],
  ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2", key: "b7d0fd" }],
  ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2", key: "1p5cb3" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wine-off.js
var WineOff = createLucideIcon("WineOffIcon", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h3m7 0h-1.343", key: "v48bem" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    {
      d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",
      key: "1ymjlu"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wine.js
var Wine = createLucideIcon("WineIcon", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z", key: "10ffi3" }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/workflow.js
var Workflow = createLucideIcon("WorkflowIcon", [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wrap-text.js
var WrapText = createLucideIcon("WrapTextIcon", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4", key: "1cl7v7" }],
  ["polyline", { points: "16 16 14 18 16 20", key: "1jznyi" }],
  ["line", { x1: "3", x2: "10", y1: "18", y2: "18", key: "1h33wv" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/wrench.js
var Wrench = createLucideIcon("WrenchIcon", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/x-circle.js
var XCircle = createLucideIcon("XCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/x-octagon.js
var XOctagon = createLucideIcon("XOctagonIcon", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/x-square.js
var XSquare = createLucideIcon("XSquareIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/x.js
var X = createLucideIcon("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/youtube.js
var Youtube = createLucideIcon("YoutubeIcon", [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/zap-off.js
var ZapOff = createLucideIcon("ZapOffIcon", [
  ["polyline", { points: "12.41 6.75 13 2 10.57 4.92", key: "122m05" }],
  ["polyline", { points: "18.57 12.91 21 10 15.66 10", key: "16r43o" }],
  ["polyline", { points: "8 8 3 14 12 14 11 22 16 16", key: "tmh4bc" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/zap.js
var Zap = createLucideIcon("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/zoom-in.js
var ZoomIn = createLucideIcon("ZoomInIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// docs/node_modules/lucide-vue-next/dist/esm/icons/zoom-out.js
var ZoomOut = createLucideIcon("ZoomOutIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// docs/node_modules/@vexip-ui/config/dist/index.mjs
var C = "___vxp-provided-hover-delay";
var v = computed(() => 100);
function E(e, t) {
  return w(e) && !Number.isNaN(e) ? e : t;
}
function zt(e, t) {
  if (t) {
    const n = computed(() => {
      const r = unref(e);
      return E(r, v.value);
    });
    t.provide(C, n);
  } else {
    const n = inject(C, null), r = computed(() => {
      const a = unref(e);
      return E(
        a,
        n ? E(n.value, v.value) : v.value
      );
    });
    provide(C, r);
  }
}
function Ot() {
  return getCurrentInstance() ? inject(C, v) : v;
}
function Nt(e) {
  return e;
}
function It(e) {
  return e;
}
function dt() {
  return {
    locale: "zh-CN",
    wordSpace: false,
    calendar: {
      year: "年",
      month: "月",
      month1: "01月",
      month2: "02月",
      month3: "03月",
      month4: "04月",
      month5: "05月",
      month6: "06月",
      month7: "07月",
      month8: "08月",
      month9: "09月",
      month10: "10月",
      month11: "11月",
      month12: "12月",
      week1: "一",
      week2: "二",
      week3: "三",
      week4: "四",
      week5: "五",
      week6: "六",
      week7: "日"
    },
    captcha: {
      slideEnd: "请滑动到最后",
      slide: "请滑动到适当的位置",
      success: "验证成功",
      fail: "验证失败，请重试",
      doCaptcha: "请完成下面的验证",
      pointInOrder: "请按顺序点击",
      trigger: "点击进行验证",
      completed: "已完成验证"
    },
    checkbox: {
      all: "全选"
    },
    colorPicker: {
      confirm: "确定",
      cancel: "重置"
    },
    confirm: {
      confirm: "确认",
      cancel: "取消"
    },
    datePicker: {
      confirm: "确认",
      cancel: "取消",
      placeholder: {
        year: "年份",
        month: "月份",
        date: "日期",
        datetime: "日期时间",
        start: "开始",
        end: "结束",
        select: "请选择"
      },
      startTime: "开始时间",
      endTime: "结束时间"
    },
    drawer: {
      confirm: "确认",
      cancel: "取消"
    },
    form: {
      submit: "提交",
      reset: "重置",
      notNullable: "不可为空",
      validateFail: "验证未通过"
    },
    image: {
      placeholder: "加载中...",
      error: "加载失败"
    },
    input: {
      placeholder: "请输入"
    },
    layout: {
      signOut: "注销",
      signType: "导航模式",
      majorColor: "主题颜色",
      themeMode: "主题模式"
    },
    modal: {
      confirm: "确认",
      cancel: "取消"
    },
    numberInput: {
      placeholder: "请输入数字",
      outOfRange: "超出范围"
    },
    pagination: {
      page: "页",
      perPage: "条/页",
      prevPage: "上一页",
      nextPage: "下一页",
      prev: "向前",
      next: "向后",
      total: "共",
      jumpTo: "跳转",
      itemUnit: "条"
    },
    select: {
      placeholder: "请选择",
      empty: "暂无数据"
    },
    table: {
      empty: "暂无数据",
      filterConfirm: "筛选",
      filterReset: "重置",
      filterAll: "全部"
    },
    timeAgo: {
      ago: "前",
      late: "后",
      justNow: "刚刚",
      second: "秒",
      minute: "分钟",
      hour: "小时",
      yesterday: "昨天",
      days: "天",
      lastMonth: "上个月",
      months: "个月",
      lastYear: "去年",
      years: "年"
    },
    timePicker: {
      confirm: "确认",
      cancel: "取消",
      placeholder: {
        time: "时间",
        start: "开始",
        end: "结束",
        select: "请选择"
      }
    },
    tour: {
      prev: "上一步",
      next: "下一步",
      done: "完成",
      stepCount: "第 {n} 步"
    },
    transfer: {
      source: "源",
      target: "目标",
      empty: "暂无数据",
      reverse: "反选",
      search: "搜索 (Ctrl + F)"
    },
    tree: {
      empty: "暂无数据"
    },
    upload: {
      upload: "上传文件",
      uploading: "上传中",
      dragOrClick: "将文件拖到此处, 或点击上传"
    },
    video: {
      play: "播放",
      pause: "暂停",
      playPrev: "上一个",
      playNext: "下一个",
      refresh: "刷新",
      flip: "镜像翻转",
      requestPip: "进入画中画",
      exitPip: "退出画中画",
      fullWindow: "进入网页全屏",
      fullWindowExit: "退出网页全屏",
      fullScreen: "进入全屏",
      fullScreenExit: "退出全屏",
      chapterCount: "第 {n} 章"
    },
    viewer: {
      rotateRight: "向右旋转",
      rotateLeft: "向左旋转",
      flipHorizontal: "横向翻转",
      flipVertical: "纵向翻转",
      zoomIn: "放大",
      zoomOut: "缩小",
      fullScreen: "进入全屏",
      fullScreenExit: "退出全屏",
      reset: "重置"
    }
  };
}
function Et() {
  return {
    locale: "ar-EG",
    wordSpace: true,
    calendar: {
      year: "",
      month: "",
      month1: "Jan",
      month2: "Feb",
      month3: "Mar",
      month4: "Apr",
      month5: "May",
      month6: "Jun",
      month7: "Jul",
      month8: "Aug",
      month9: "Sep",
      month10: "Oct",
      month11: "Nov",
      month12: "Dec",
      week1: "Mo",
      week2: "Tu",
      week3: "We",
      week4: "Th",
      week5: "Fr",
      week6: "Sa",
      week7: "Su"
    },
    captcha: {
      slideEnd: "يرجى الانزلاق إلى النهاية",
      slide: "يرجى الانزلاق إلى وضع مناسب",
      success: "تم الاختبار بنجاح",
      fail: "فشل الاختبار، يرجى إعادة المحاولة",
      doCaptcha: "يرجى إكمال كلمة التحقق أدناه",
      pointInOrder: "يرجى الإشارة بالترتيب",
      trigger: "انقر لتشغيل كلمة التحقق",
      completed: "تم الانتهاء من التحقق"
    },
    checkbox: {
      all: "الكل"
    },
    colorPicker: {
      confirm: "موافق",
      cancel: "الغاء"
    },
    confirm: {
      confirm: "موافق",
      cancel: "الغاء"
    },
    datePicker: {
      confirm: "موافق",
      cancel: "الغاء",
      placeholder: {
        year: "سنة",
        month: "شهر",
        date: "يوم",
        datetime: "تاريخ",
        start: "يبدأ بـ",
        end: "ينتهى بـ",
        select: "اختر"
      },
      startTime: "وقت البدء",
      endTime: "وقت الانتهاء"
    },
    drawer: {
      confirm: "موافق",
      cancel: "الغاء"
    },
    form: {
      submit: "ارسال",
      reset: "اعادة",
      notNullable: "مطلوب",
      validateFail: "قيم خاطئة"
    },
    image: {
      placeholder: "جار التحميل...",
      error: "خطأ فى التحميل"
    },
    input: {
      placeholder: "ادخل بيانات"
    },
    layout: {
      signOut: "تسجيل خروج",
      signType: "نوع الانتقال",
      majorColor: "اللون الاساسى",
      themeMode: "وضع اللون"
    },
    modal: {
      confirm: "موافق",
      cancel: "الغاء"
    },
    numberInput: {
      placeholder: "ادخل قيم رقمية",
      outOfRange: "خارج النطاق"
    },
    pagination: {
      page: "صفحة | صفحات",
      perPage: "/ صفحة",
      prevPage: "صفحة سابقة",
      nextPage: "صفحة تالية",
      prev: "السابق",
      next: "التالى",
      total: "الاجمالى",
      jumpTo: "انتقال الى",
      itemUnit: "عنصر | عناصر"
    },
    select: {
      placeholder: "اختر",
      empty: "لا توجد بيانات"
    },
    table: {
      empty: "لا توجد بيانات",
      filterConfirm: "موافق",
      filterReset: "اعادة",
      filterAll: "الكل"
    },
    timeAgo: {
      ago: "منذ",
      late: "مؤخراً",
      justNow: "الآن",
      second: "ثانية | ثوانى",
      minute: "دقيقة | دقائق",
      hour: "ساعة | ساعات",
      yesterday: "امس",
      days: "ايام",
      lastMonth: "الشهر الماضى",
      months: "شهور",
      lastYear: "السنة الماضية",
      years: "سنوات"
    },
    timePicker: {
      confirm: "موافق",
      cancel: "الغاء",
      placeholder: {
        time: "وقت",
        start: "يبدأ بـ",
        end: "ينتهى بـ",
        select: "اختر"
      }
    },
    tour: {
      prev: "السابق",
      next: "التالى",
      done: "اكتمل",
      stepCount: "خطوة {n}"
    },
    transfer: {
      source: "مصدر",
      target: "وجهة",
      empty: "لا توجد بيانات",
      reverse: "عكس الاختيار",
      search: "بحث (Ctrl + F)"
    },
    tree: {
      empty: "لا توجد بيانات"
    },
    upload: {
      upload: "تحميل ملفات",
      uploading: "جار التحميل",
      dragOrClick: "اسحب وضع الملقات هنا, او اضغط تحميل ملفات"
    },
    video: {
      play: "لعب",
      pause: "تورع",
      playPrev: "السابق",
      playNext: "مقبل",
      refresh: "تحديث",
      flip: "الوجه",
      requestPip: "أدخل صورة داخل صورة",
      exitPip: "الخروج من اللوحة",
      fullWindow: "صفحة ويب ملء الشاشة",
      fullWindowExit: "يتم إنهاء صفحة الويب في وضع ملء الشاشة",
      fullScreen: "شاشة كاملة",
      fullScreenExit: "خروج من شاشة كاملة",
      chapterCount: "{n} الفصل"
    },
    viewer: {
      rotateRight: "تدوير لليمين",
      rotateLeft: "تدوير لليسار",
      flipHorizontal: "قلب اتجاه افقى",
      flipVertical: "قلب اتجاه رأسى",
      zoomIn: "تكبير",
      zoomOut: "تصغير",
      fullScreen: "شاشة كاملة",
      fullScreenExit: "خروج من شاشة كاملة",
      reset: "اعادة"
    }
  };
}
function Tt() {
  return {
    locale: "de-DE",
    wordSpace: true,
    calendar: {
      year: "",
      month: "",
      month1: "Jan",
      month2: "Feb",
      month3: "Mär",
      month4: "Apr",
      month5: "Mai",
      month6: "Jun",
      month7: "Jul",
      month8: "Aug",
      month9: "Sep",
      month10: "Okt",
      month11: "Nov",
      month12: "Dez",
      week1: "Mo",
      week2: "Di",
      week3: "Mi",
      week4: "Do",
      week5: "Fr",
      week6: "Sa",
      week7: "So"
    },
    captcha: {
      slideEnd: "Bitte zum Ende schieben",
      slide: "Bitte in eine geeignete Position schieben",
      success: "Test erfolgreich",
      fail: "Test fehlgeschlagen, bitte wiederholen",
      doCaptcha: "Bitte füllen Sie das folgende Captcha aus",
      pointInOrder: "Bitte zeigen Sie in der Reihenfolge",
      trigger: "Klicken Sie auf das Captcha",
      completed: "Captcha abgeschlossen"
    },
    checkbox: {
      all: "Alle"
    },
    colorPicker: {
      confirm: "Bestätigen",
      cancel: "Abbrechen"
    },
    confirm: {
      confirm: "Bestätigen",
      cancel: "Abbrechen"
    },
    datePicker: {
      confirm: "Bestätigen",
      cancel: "Abbrechen",
      placeholder: {
        year: "Jahr",
        month: "Monat",
        date: "Datum",
        datetime: "Datum/Zeit",
        start: "Start",
        end: "Ende",
        select: "Bitte auswählen"
      },
      startTime: "Start Zeit",
      endTime: "Ende Zeit"
    },
    drawer: {
      confirm: "Bestätigen",
      cancel: "Abbrechen"
    },
    form: {
      submit: "Senden",
      reset: "Zurücksetzen",
      notNullable: "Darf nicht leer sein",
      validateFail: "Überprüfung fehlgeschlagen"
    },
    image: {
      placeholder: "Lade...",
      error: "Laden fehlgeschlagen"
    },
    input: {
      placeholder: "Platzhalter"
    },
    layout: {
      signOut: "Abmelden",
      signType: "Navigationsart",
      majorColor: "Hauptfarbe",
      themeMode: "Themeart"
    },
    modal: {
      confirm: "Bestätigen",
      cancel: "Abbrechen"
    },
    numberInput: {
      placeholder: "Bitte Nummer eingeben",
      outOfRange: "Außerhalb des definierten Bereichs"
    },
    pagination: {
      page: "Seite | Seiten",
      perPage: "/ Seite",
      prevPage: "Vorherige Seite",
      nextPage: "Nächste Seite",
      prev: "Vorherige",
      next: "Nächste",
      total: "Total",
      jumpTo: "Springe zu",
      itemUnit: "Item | Items"
    },
    select: {
      placeholder: "Bitte auswählen",
      empty: "Keine Daten"
    },
    table: {
      empty: "Keien Daten",
      filterConfirm: "Filtern",
      filterReset: "Zurücksetzen",
      filterAll: "Alle"
    },
    timeAgo: {
      ago: "Vor",
      late: "Später",
      justNow: "Jetzt",
      second: "Sekunde | Sekunden",
      minute: "Minute | Minuten",
      hour: "Stunde | Stunden",
      yesterday: "Gestern",
      days: "Tage",
      lastMonth: "Letzter Monat",
      months: "Monate",
      lastYear: "Letztes Jahr",
      years: "Jahre"
    },
    timePicker: {
      confirm: "Bestätigen",
      cancel: "Abbrechen",
      placeholder: {
        time: "Zeit",
        start: "Start",
        end: "Ende",
        select: "Bitte auswählen"
      }
    },
    tour: {
      prev: "Voherige",
      next: "Nächste",
      done: "Fertig",
      stepCount: "Schritt {n}"
    },
    transfer: {
      source: "Quelle",
      target: "Ziel",
      empty: "Keine Daten",
      reverse: "Auswahl umkehren",
      search: "Suche (Strg + F)"
    },
    tree: {
      empty: "Keine Daten"
    },
    upload: {
      upload: "Dateiupload",
      uploading: "Hochladen",
      dragOrClick: "Ziehen Sie Dateien hierher oder klicken Sie zum Hochladen"
    },
    video: {
      play: "Spielen",
      pause: "Pause",
      playPrev: "Zurück",
      playNext: "Nächster",
      refresh: "Auffrischen",
      flip: "Schnipsen",
      requestPip: "Hier kommt PIP ins Spiel",
      exitPip: "PIP beenden",
      fullWindow: "Volles Fenster",
      fullWindowExit: "Volles Fenster beenden",
      fullScreen: "Vollbild",
      fullScreenExit: "Vollbild beenden",
      chapterCount: "Kapitel {n}"
    },
    viewer: {
      rotateRight: "Nach rechst drehen",
      rotateLeft: "Nach links drehen",
      flipHorizontal: "Horizontal spiegeln",
      flipVertical: "Vertikal spiegeln",
      zoomIn: "Hineinzoomen",
      zoomOut: "Hinauszoomen",
      fullScreen: "Vollbild",
      fullScreenExit: "Vollbild beenden",
      reset: "Zurücksetzen"
    }
  };
}
function At() {
  return {
    locale: "en-US",
    wordSpace: true,
    calendar: {
      year: "",
      month: "",
      month1: "Jan",
      month2: "Feb",
      month3: "Mar",
      month4: "Apr",
      month5: "May",
      month6: "Jun",
      month7: "Jul",
      month8: "Aug",
      month9: "Sep",
      month10: "Oct",
      month11: "Nov",
      month12: "Dec",
      week1: "Mo",
      week2: "Tu",
      week3: "We",
      week4: "Th",
      week5: "Fr",
      week6: "Sa",
      week7: "Su"
    },
    captcha: {
      slideEnd: "Please slide to the end",
      slide: "Please slide to a suitable position",
      success: "Test successful",
      fail: "Test failed, please retry",
      doCaptcha: "Please complete the captcha below",
      pointInOrder: "Please point in order",
      trigger: "Click to trigger captcha",
      completed: "Captcha completed"
    },
    checkbox: {
      all: "All"
    },
    colorPicker: {
      confirm: "Confirm",
      cancel: "Cancel"
    },
    confirm: {
      confirm: "Confirm",
      cancel: "Cancel"
    },
    datePicker: {
      confirm: "Confirm",
      cancel: "Cancel",
      placeholder: {
        year: "year",
        month: "month",
        date: "date",
        datetime: "datetime",
        start: "Start",
        end: "End",
        select: "Please select"
      },
      startTime: "Start Time",
      endTime: "End Time"
    },
    drawer: {
      confirm: "Confirm",
      cancel: "Cancel"
    },
    form: {
      submit: "Submit",
      reset: "Reset",
      notNullable: "must not be null",
      validateFail: "Validate failed"
    },
    image: {
      placeholder: "Loading...",
      error: "Loading fail"
    },
    input: {
      placeholder: "Please input"
    },
    layout: {
      signOut: "Sign out",
      signType: "Navigation Type",
      majorColor: "Major Color",
      themeMode: "Theme Mode"
    },
    modal: {
      confirm: "Confirm",
      cancel: "Cancel"
    },
    numberInput: {
      placeholder: "Please input number",
      outOfRange: "Out of range"
    },
    pagination: {
      page: "Page | Pages",
      perPage: "/ Page",
      prevPage: "Prev Page",
      nextPage: "Next Page",
      prev: "Prev",
      next: "Next",
      total: "Total",
      jumpTo: "Jump to",
      itemUnit: "Item | Items"
    },
    select: {
      placeholder: "Please select",
      empty: "No data"
    },
    table: {
      empty: "No data",
      filterConfirm: "Filter",
      filterReset: "Reset",
      filterAll: "All"
    },
    timeAgo: {
      ago: "Ago",
      late: "Late",
      justNow: "Now",
      second: "Second | Seconds",
      minute: "Minute | Minutes",
      hour: "Hour | Hours",
      yesterday: "Yesterday",
      days: "Days",
      lastMonth: "Last month",
      months: "Months",
      lastYear: "Last year",
      years: "Years"
    },
    timePicker: {
      confirm: "Confirm",
      cancel: "Cancel",
      placeholder: {
        time: "time",
        start: "Start",
        end: "End",
        select: "Please select"
      }
    },
    tour: {
      prev: "Prev",
      next: "Next",
      done: "Done",
      stepCount: "Step {n}"
    },
    transfer: {
      source: "Source",
      target: "Target",
      empty: "No data",
      reverse: "Reverse selection",
      search: "Search (Ctrl + F)"
    },
    tree: {
      empty: "No data"
    },
    upload: {
      upload: "Upload files",
      uploading: "Uploading",
      dragOrClick: "Drag files here, or click to upload"
    },
    video: {
      play: "Play",
      pause: "Pause",
      playPrev: "Prev",
      playNext: "Next",
      refresh: "Refresh",
      flip: "Flip",
      requestPip: "Enter PIP",
      exitPip: "Exit PIP",
      fullWindow: "Full window",
      fullWindowExit: "Full window exit",
      fullScreen: "Full screen",
      fullScreenExit: "Full screen exit",
      chapterCount: "Chapter {n}"
    },
    viewer: {
      rotateRight: "Rotate right",
      rotateLeft: "Rotate left",
      flipHorizontal: "Flip horizontal",
      flipVertical: "Flip vertical",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      fullScreen: "Full screen",
      fullScreenExit: "Full screen exit",
      reset: "Reset"
    }
  };
}
function Ft2() {
  return {
    locale: "fr-FR",
    wordSpace: true,
    calendar: {
      year: "",
      month: "",
      month1: "Jan",
      month2: "Fev",
      month3: "Mar",
      month4: "Avr",
      month5: "Mai",
      month6: "Juin",
      month7: "Juil",
      month8: "Août",
      month9: "Sept",
      month10: "Oct",
      month11: "Nov",
      month12: "Déc",
      week1: "Lun",
      week2: "Mar",
      week3: "Mer",
      week4: "Jeu",
      week5: "Ven",
      week6: "Sam",
      week7: "Dim"
    },
    captcha: {
      slideEnd: "Veuillez faire défiler jusqu'à la fin",
      slide: "Veuillez faire définer jusqu'à une position appropriée",
      success: "Test réussi",
      fail: "Test échoué, veuillez recommencer",
      doCaptcha: "Veuillez compléter le captcha ci-dessous",
      pointInOrder: "Veuillez indiquer dans l'ordre",
      trigger: "Cliquer pour déclencher le captcha",
      completed: "Captcha complété"
    },
    checkbox: {
      all: "Tous"
    },
    colorPicker: {
      confirm: "Confirmer",
      cancel: "Annuler"
    },
    confirm: {
      confirm: "Confirmer",
      cancel: "Annuler"
    },
    datePicker: {
      confirm: "Confirmer",
      cancel: "Annuler",
      placeholder: {
        year: "année",
        month: "mois",
        date: "journée",
        datetime: "date & heure",
        start: "Début",
        end: "Fin",
        select: "Sélectionner une"
      },
      startTime: "Heure de début",
      endTime: "Heure de fin"
    },
    drawer: {
      confirm: "Confirmer",
      cancel: "Annuler"
    },
    form: {
      submit: "Soumettre",
      reset: "Réinitialiser",
      notNullable: "Ne doit pas être vide",
      validateFail: "Echec de la validation"
    },
    image: {
      placeholder: "Chargement...",
      error: "Echec du chargement"
    },
    input: {
      placeholder: "Veuillez saisir"
    },
    layout: {
      signOut: "Se déconnecter",
      signType: "Type de navigation",
      majorColor: "Couleur principale",
      themeMode: "Thème de couleur"
    },
    modal: {
      confirm: "Confirmer",
      cancel: "Annuler"
    },
    numberInput: {
      placeholder: "Veuillez saisir le numéro",
      outOfRange: "En dehors de la zone définie"
    },
    pagination: {
      page: "Page | Pages",
      perPage: "/ Page",
      prevPage: "Page précédente",
      nextPage: "Page suivante",
      prev: "Précédent",
      next: "Suivant",
      total: "Total",
      jumpTo: "Sauter vers",
      itemUnit: "Objet | Objets"
    },
    select: {
      placeholder: "Veuillez sélectionner",
      empty: "Pas de données"
    },
    table: {
      empty: "Pas de données",
      filterConfirm: "Filtrer",
      filterReset: "Effacer les filtres",
      filterAll: "Tous"
    },
    timeAgo: {
      ago: "Avant",
      late: "Plus tard",
      justNow: "Maintenant",
      second: "Seconde | Secondes",
      minute: "Minute | Minutes",
      hour: "Heure | Heures",
      yesterday: "Hier",
      days: "Jour",
      lastMonth: "Le mois dernier",
      months: "Mois",
      lastYear: "L'année dernière",
      years: "Années"
    },
    timePicker: {
      confirm: "Confirmer",
      cancel: "Annuler",
      placeholder: {
        time: "heure",
        start: "Début",
        end: "Fin",
        select: "Veuillez sélectionner"
      }
    },
    tour: {
      prev: "Précédent",
      next: "Suivant",
      done: "Prêt",
      stepCount: "Étape {n}"
    },
    transfer: {
      source: "Source",
      target: "Cible",
      empty: "Pas de données",
      reverse: "Inverser la sélection",
      search: "Rechercher (Ctrl + F)"
    },
    tree: {
      empty: "Pas de données"
    },
    upload: {
      upload: "Télécharger des fichiers",
      uploading: "Téléchargement",
      dragOrClick: "Faites glisser les fichiers ici, ou cliquez pour les télécharger"
    },
    video: {
      play: "Jouer",
      pause: "Pause",
      playPrev: "Précédent",
      playNext: "Suivant",
      refresh: "Rafraîchir",
      flip: "Retourner",
      requestPip: "Entrer dans PIP",
      exitPip: "Quitter PIP",
      fullWindow: "Fenêtre pleine",
      fullWindowExit: "Quitter la fenêtre pleine",
      fullScreen: "Plein écran",
      fullScreenExit: "Quitter le plein écran",
      chapterCount: "Chapitre {n}"
    },
    viewer: {
      rotateRight: "Tourner vers la droite",
      rotateLeft: "Tourner vers la gauche",
      flipHorizontal: "Retourner horizontalement",
      flipVertical: "Retourner verticalement",
      zoomIn: "Zoomer avant",
      zoomOut: "Zoom arrière",
      fullScreen: "Plein écran",
      fullScreenExit: "Quitter le plein écran",
      reset: "Réinitialiser"
    }
  };
}
function Rt() {
  return {
    locale: "ta-IN",
    wordSpace: true,
    calendar: {
      year: "",
      month: "",
      month1: "ஜனவரி",
      month2: "பிப்ரவரி",
      month3: "மார்ச்",
      month4: "ஏப்ரல்",
      month5: "மே",
      month6: "ஜூன்",
      month7: "ஜூலை",
      month8: "ஆகஸ்ட்",
      month9: "செப்டம்பர்",
      month10: "அக்டோபர்",
      month11: "நவம்பர்",
      month12: "டிசம்பர்",
      week1: "திங்கள்",
      week2: "செவ்வாய்",
      week3: "புதன்",
      week4: "வியாழன்",
      week5: "வெள்ளி",
      week6: "சனி",
      week7: "ஞாயிறு"
    },
    captcha: {
      slideEnd: "இறுதிக்கு ஸ்லைடு",
      slide: "சரியான நிலைக்கு ஸ்லைடு செய்யவும்",
      success: "சோதனை வெற்றி",
      fail: "சோதனை தோல்வி",
      doCaptcha: "கீழே உள்ள கேப்ட்சாவை முடிக்கவும்",
      pointInOrder: "வரிசையில் புள்ளி",
      trigger: "கேப்ட்சா கிளிக் செய்யவும்",
      completed: "கேப்ட்சா முடிந்தது"
    },
    checkbox: {
      all: "அனைத்தும்"
    },
    colorPicker: {
      confirm: "உறுதிபடுத்து",
      cancel: "நிராகரி"
    },
    confirm: {
      confirm: "உறுதிபடுத்து",
      cancel: "நிராகரி"
    },
    datePicker: {
      confirm: "உறுதிபடுத்து",
      cancel: "நிராகரி",
      placeholder: {
        year: "வருடம்",
        month: "மாதம்",
        date: "தேதி",
        datetime: "தேதி நேரம்",
        start: "தொடக்கம்",
        end: "முடிவு",
        select: "தயவுசெய்து தேர்ந்தெடுக்கவும்"
      },
      startTime: "தொடக்கம் நேரம்",
      endTime: "முடிவு நேரம்"
    },
    drawer: {
      confirm: "உறுதிபடுத்து",
      cancel: "நிராகரி"
    },
    form: {
      submit: "ஒப்படை",
      reset: "மீள் துவக்கு",
      notNullable: "வெற்றிடமாக இருக்க கூடாது",
      validateFail: "சரிபார்த்தல் தோல்வியுற்றது"
    },
    image: {
      placeholder: "ஏற்றுகிறது...",
      error: "ஏற்றுதல் தோல்வியுற்றது"
    },
    input: {
      placeholder: "தயவுசெய்து உள்ளிடவும்"
    },
    layout: {
      signOut: "வெளியேறு",
      signType: "வழியமைப்பு முறை",
      majorColor: "முதன்மை வண்ணம்",
      themeMode: "நிறமுறை"
    },
    modal: {
      confirm: "உறுதிபடுத்து",
      cancel: "நிராகரி"
    },
    numberInput: {
      placeholder: "தயவுசெய்து எண் உள்ளிடவும்",
      outOfRange: "வரம்புக்கு வெளியே"
    },
    pagination: {
      page: "பக்கம் | பக்கங்கள்",
      perPage: "/ பக்கம்",
      prevPage: "முந்தய பக்கம்",
      nextPage: "அடுத்த பக்கம்",
      prev: "முன்னால்",
      next: "அடுத்து ",
      total: "மொத்தம்",
      jumpTo: "இதற்கு தாவு",
      itemUnit: "உருப்படி | உருப்படிகள்"
    },
    select: {
      placeholder: "தயவுசெய்து தேர்ந்தெடுகக்கவும்",
      empty: "தரவு இல்லை"
    },
    table: {
      empty: "தரவு இல்லை",
      filterConfirm: "வடிகட்டு",
      filterReset: "மீள் துவக்கு",
      filterAll: "அனைத்தும்"
    },
    timeAgo: {
      ago: "முன்",
      late: "தாமதம்",
      justNow: "தற்போது",
      second: "வினாடி | வினாடிகள்",
      minute: "நிமிடம் | நிமிடங்கள்",
      hour: "மணித்துளி | மணித்துளிகள்",
      yesterday: "நேற்று",
      days: "நாட்கள்",
      lastMonth: "கடந்த மாதம்",
      months: "மாதம்",
      lastYear: "கடந்த வருடம்",
      years: "வருடங்கள்"
    },
    timePicker: {
      confirm: "உறுதிப்படுத்து",
      cancel: "நிராகரி",
      placeholder: {
        time: "நேரம்",
        start: "தொடக்கம்",
        end: "முடிவு",
        select: "தயவுசெய்து தேர்ந்தெடுக்கவும்"
      }
    },
    tour: {
      prev: "முன்",
      next: "அடுத்தவர்",
      done: "முடிந்த",
      stepCount: "படிமுறை {n}"
    },
    transfer: {
      source: "மூலம்",
      target: "இலக்கு",
      empty: "தரவு இல்லை",
      reverse: "மீள் தேர்வு",
      search: "தேடு"
    },
    tree: {
      empty: "தரவு இல்லை"
    },
    upload: {
      upload: "கோப்புகளை பதிவேற்று",
      uploading: "பதிவேற்றுகிறது...",
      dragOrClick: "கோப்புகளை இங்கே விடவும் அல்லது பதிவேற்ற அழுத்தவும்"
    },
    video: {
      play: "விளையாட்டு",
      pause: "இடை ஓய்வு",
      playPrev: "முன்",
      playNext: "அடுத்தவர்",
      refresh: "புதுக்கிளர்ச்சியூட்டு",
      flip: "விரல் நொடி",
      requestPip: "PIP ஐ உள்ளிடவும்",
      exitPip: "PIP இலிருந்து வெளியேறவும்",
      fullWindow: "முழு ஜன்னல்",
      fullWindowExit: "முழு சாளர வெளியேற்றம்",
      fullScreen: "முழுத் திரை",
      fullScreenExit: "முழுத்திரை வெளியேறு",
      chapterCount: "அத்தியாயம் {n}"
    },
    viewer: {
      rotateRight: "வலப்புறம் சுற்றவும்",
      rotateLeft: "இடப்புறம் சுற்றவும்",
      flipHorizontal: "கிடைமட்டத்தை புரட்டவும்",
      flipVertical: "செங்குத்தாக புரட்டவும்",
      zoomIn: "பெரிதாக்கு",
      zoomOut: "சிறிதாக்கு",
      fullScreen: "முழுத்திரை",
      fullScreenExit: "முழுத்திரயிலிருந்து வெளியேறு",
      reset: "மீள்துவக்கு "
    }
  };
}
function Mt() {
  return {
    locale: "zh-CN",
    wordSpace: false,
    calendar: {
      year: "年",
      month: "月",
      month1: "01月",
      month2: "02月",
      month3: "03月",
      month4: "04月",
      month5: "05月",
      month6: "06月",
      month7: "07月",
      month8: "08月",
      month9: "09月",
      month10: "10月",
      month11: "11月",
      month12: "12月",
      week1: "一",
      week2: "二",
      week3: "三",
      week4: "四",
      week5: "五",
      week6: "六",
      week7: "日"
    },
    captcha: {
      slideEnd: "請滑動到最後",
      slide: "請滑動到適當的位置",
      success: "驗證成功",
      fail: "驗證失敗，請重試",
      doCaptcha: "請完成下面的驗證",
      pointInOrder: "請按順序點擊",
      trigger: "點擊進行驗證",
      completed: "已完成驗證"
    },
    checkbox: {
      all: "全選"
    },
    colorPicker: {
      confirm: "確定",
      cancel: "重置"
    },
    confirm: {
      confirm: "確認",
      cancel: "取消"
    },
    datePicker: {
      confirm: "確認",
      cancel: "取消",
      placeholder: {
        year: "年份",
        month: "月份",
        date: "日期",
        datetime: "日期時間",
        start: "開始",
        end: "結束",
        select: "請選擇"
      },
      startTime: "開始時間",
      endTime: "結束時間"
    },
    drawer: {
      confirm: "確認",
      cancel: "取消"
    },
    form: {
      submit: "提交",
      reset: "重置",
      notNullable: "不可為空",
      validateFail: "驗證未通過"
    },
    image: {
      placeholder: "加載中...",
      error: "加載失敗"
    },
    input: {
      placeholder: "請輸入"
    },
    layout: {
      signOut: "註銷",
      signType: "導航模式",
      majorColor: "主題顏色",
      themeMode: "主題模式"
    },
    modal: {
      confirm: "確認",
      cancel: "取消"
    },
    numberInput: {
      placeholder: "請輸入數字",
      outOfRange: "超出範圍"
    },
    pagination: {
      page: "頁",
      perPage: "條/頁",
      prevPage: "上一頁",
      nextPage: "下一頁",
      prev: "向前",
      next: "向後",
      total: "共",
      jumpTo: "跳轉",
      itemUnit: "條"
    },
    select: {
      placeholder: "請選擇",
      empty: "暫無數據"
    },
    table: {
      empty: "暫無數據",
      filterConfirm: "篩選",
      filterReset: "重置",
      filterAll: "全部"
    },
    timeAgo: {
      ago: "前",
      late: "後",
      justNow: "剛剛",
      second: "秒",
      minute: "分鐘",
      hour: "小時",
      yesterday: "昨天",
      days: "天",
      lastMonth: "上個月",
      months: "個月",
      lastYear: "去年",
      years: "年"
    },
    timePicker: {
      confirm: "確認",
      cancel: "取消",
      placeholder: {
        time: "時間",
        start: "開始",
        end: "結束",
        select: "請選擇"
      }
    },
    tour: {
      prev: "上一步",
      next: "下一步",
      done: "完成",
      stepCount: "第 {n} 步"
    },
    transfer: {
      source: "源",
      target: "目標",
      empty: "暫無數據",
      reverse: "反選",
      search: "搜索 (Ctrl + F)"
    },
    tree: {
      empty: "暫無數據"
    },
    upload: {
      upload: "上傳文件",
      uploading: "上傳中",
      dragOrClick: "將文件拖到此處, 或點擊上傳"
    },
    video: {
      play: "播放",
      pause: "暫停",
      playPrev: "上一個",
      playNext: "下一個",
      refresh: "刷新",
      flip: "鏡像翻轉",
      requestPip: "進入畫中畫",
      exitPip: "退出畫中畫",
      fullWindow: "進入網頁全屏",
      fullWindowExit: "退出網頁全屏",
      fullScreen: "進入全屏",
      fullScreenExit: "退出全屏",
      chapterCount: "第 {n} 章"
    },
    viewer: {
      rotateRight: "向右旋轉",
      rotateLeft: "向左旋轉",
      flipHorizontal: "橫向翻轉",
      flipVertical: "縱向翻轉",
      zoomIn: "放大",
      zoomOut: "縮小",
      fullScreen: "全屏",
      fullScreenExit: "退出全屏",
      reset: "重置"
    }
  };
}
function Vt() {
  return {
    locale: "zh-CN",
    wordSpace: false,
    calendar: {
      year: "年",
      month: "月",
      month1: "01月",
      month2: "02月",
      month3: "03月",
      month4: "04月",
      month5: "05月",
      month6: "06月",
      month7: "07月",
      month8: "08月",
      month9: "09月",
      month10: "10月",
      month11: "11月",
      month12: "12月",
      week1: "一",
      week2: "二",
      week3: "三",
      week4: "四",
      week5: "五",
      week6: "六",
      week7: "日"
    },
    captcha: {
      slideEnd: "請滑動到最後",
      slide: "請滑動到適當的位置",
      success: "驗證成功",
      fail: "驗證失敗，請重試",
      doCaptcha: "請完成下面的驗證",
      pointInOrder: "請按順序點選",
      trigger: "點選進行驗證",
      completed: "已完成驗證"
    },
    checkbox: {
      all: "全選"
    },
    colorPicker: {
      confirm: "確定",
      cancel: "重置"
    },
    confirm: {
      confirm: "確認",
      cancel: "取消"
    },
    datePicker: {
      confirm: "確認",
      cancel: "取消",
      placeholder: {
        year: "年份",
        month: "月份",
        date: "日期",
        datetime: "日期時間",
        start: "開始",
        end: "結束",
        select: "請選擇"
      },
      startTime: "開始時間",
      endTime: "結束時間"
    },
    drawer: {
      confirm: "確認",
      cancel: "取消"
    },
    form: {
      submit: "提交",
      reset: "重置",
      notNullable: "不可為空",
      validateFail: "驗證未透過"
    },
    image: {
      placeholder: "載入中...",
      error: "載入失敗"
    },
    input: {
      placeholder: "請輸入"
    },
    layout: {
      signOut: "登出",
      signType: "導航模式",
      majorColor: "主題顏色",
      themeMode: "主題模式"
    },
    modal: {
      confirm: "確認",
      cancel: "取消"
    },
    numberInput: {
      placeholder: "請輸入數字",
      outOfRange: "超出範圍"
    },
    pagination: {
      page: "頁",
      perPage: "條/頁",
      prevPage: "上一頁",
      nextPage: "下一頁",
      prev: "向前",
      next: "向後",
      total: "共",
      jumpTo: "跳轉",
      itemUnit: "條"
    },
    select: {
      placeholder: "請選擇",
      empty: "暫無資料"
    },
    table: {
      empty: "暫無資料",
      filterConfirm: "篩選",
      filterReset: "重置",
      filterAll: "全部"
    },
    timeAgo: {
      ago: "前",
      late: "後",
      justNow: "剛剛",
      second: "秒",
      minute: "分鐘",
      hour: "小時",
      yesterday: "昨天",
      days: "天",
      lastMonth: "上個月",
      months: "個月",
      lastYear: "去年",
      years: "年"
    },
    timePicker: {
      confirm: "確認",
      cancel: "取消",
      placeholder: {
        time: "時間",
        start: "開始",
        end: "結束",
        select: "請選擇"
      }
    },
    tour: {
      prev: "上一步",
      next: "下一步",
      done: "完成",
      stepCount: "第 {n} 步"
    },
    transfer: {
      source: "源",
      target: "目標",
      empty: "暫無資料",
      reverse: "反選",
      search: "搜尋 (Ctrl + F)"
    },
    tree: {
      empty: "暫無資料"
    },
    upload: {
      upload: "上傳檔案",
      uploading: "上傳中",
      dragOrClick: "將檔案拖到此處, 或點選上傳"
    },
    video: {
      play: "播放",
      pause: "暫停",
      playPrev: "上一個",
      playNext: "下一個",
      refresh: "重新整理",
      flip: "映象翻轉",
      requestPip: "進入畫中畫",
      exitPip: "退出畫中畫",
      fullWindow: "進入網頁全屏",
      fullWindowExit: "退出網頁全屏",
      fullScreen: "進入全屏",
      fullScreenExit: "退出全屏",
      chapterCount: "第 {n} 章"
    },
    viewer: {
      rotateRight: "向右旋轉",
      rotateLeft: "向左旋轉",
      flipHorizontal: "橫向翻轉",
      flipVertical: "縱向翻轉",
      zoomIn: "放大",
      zoomOut: "縮小",
      fullScreen: "全屏",
      fullScreenExit: "退出全屏",
      reset: "重置"
    }
  };
}
var P = "__vxp-provided-locale";
var S = computed(() => dt());
var J = /* @__PURE__ */ new Map();
function W(e) {
  return e && J.get(e) || S.value;
}
function Dt(e) {
  e.locale && J.set(e.locale, e);
}
function jt(e, t) {
  if (t) {
    const n = computed(() => {
      const r = unref(e);
      return go(W(r.locale), r);
    });
    t.provide(P, n);
  } else {
    const n = inject(P, null), r = computed(() => {
      const a = unref(e);
      return n != null && n.value ? go(n.value, a) : go(W(a.locale), a);
    });
    provide(P, r);
  }
}
function Lt(e, t) {
  const n = inject(P, S);
  return e ? t ? computed(() => {
    var r;
    return { ...((r = n.value) == null ? void 0 : r[e]) ?? {}, ...unref(t) ?? {} };
  }) : computed(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r[e]) ?? {};
  }) : n;
}
function Ht() {
  const e = inject(P, S);
  return computed(() => e.value.wordSpace ?? false);
}
function Wt(e, t) {
  const n = e.split("|");
  return n.length === 1 ? `${t} ${e}` : `${t} ${t > 1 ? n[1].trim() : n[0].trim()}`;
}
function Zt(e, t) {
  const n = e.split("|");
  return n.length === 1 ? e : t > 1 ? n[1].trim() : n[0].trim();
}
function Bt(e, t = S.value.wordSpace ?? false) {
  return t ? e : e.replace(/\s+/g, "");
}
function _t(e, t) {
  return e.replace(/{n}/g, `${t}`);
}
var b = "__vxp-provided-icons";
var U = {
  loading: [Loader2, { effect: "spin-in" }],
  clear: XCircle,
  close: X,
  calendar: Calendar,
  clock: Clock,
  exchange: ArrowLeftRight,
  angleUp: ChevronUp,
  angleRight: ChevronRight,
  angleDown: ChevronDown,
  angleLeft: ChevronLeft,
  anglesRight: ChevronsRight,
  anglesLeft: ChevronsLeft,
  retweet: Repeat2,
  refresh: RefreshCw,
  filter: Filter,
  ellipsis: MoreHorizontal,
  upload: Upload,
  uploadCloud: UploadCloud,
  check: Check,
  help: HelpCircle,
  alert: Siren,
  question: MessageCircleQuestion,
  info: Info,
  success: CheckCircle2,
  warning: AlertCircle,
  error: XCircle,
  delete: Trash2,
  preview: Eye,
  image: Image,
  plus: Plus,
  minus: Minus,
  plusSquare: PlusSquare,
  minusSquare: MinusSquare,
  cipherText: EyeOff,
  plainText: Eye,
  user: UserRound,
  light: Sun,
  dark: Moon,
  signOut: LogOut,
  indent: Indent,
  outdent: Outdent,
  search: Search,
  rotateRight: RotateCw,
  rotateLeft: RotateCcw,
  flipX: FlipHorizontal,
  flipY: FlipVertical,
  zoomIn: ZoomIn,
  zoonOut: ZoomOut,
  fullScreen: Maximize,
  resetScreen: Minimize,
  dragger: GripVertical,
  file: File,
  fileText: FileText,
  fileCode: FileCode,
  fileImage: FileImage,
  fileAudio: FileMusic,
  fileVideo: FileVideo,
  fileZip: FileArchive,
  volume: Volume2,
  volumeLow: Volume1,
  volumeMute: VolumeX,
  play: Play,
  pause: Pause,
  fullWindow: Fullscreen,
  pip: PictureInPicture,
  playState: Play,
  pauseState: Pause,
  playPrev: SkipBack,
  playNext: SkipForward
};
var Y2 = Object.freeze(Object.keys(U));
var A = computed(() => {
  const e = {};
  for (const t of Y2) {
    const [n, r = {}] = to(U[t]);
    e[t] = { ...r, icon: n };
  }
  return e;
});
function qt(e, t) {
  const n = t || !getCurrentScope() ? A : inject(b, null), r = computed(() => {
    const a = {}, s = unref(e);
    for (const d of Y2) {
      const m = s[d];
      if (!m)
        a[d] = (n == null ? void 0 : n.value[d]) || A.value[d];
      else {
        const [o, p = {}] = to(m), u = typeof o == "function" ? o : markRaw(o);
        a[d] = { ...p, icon: u };
      }
    }
    return a;
  });
  t ? t.provide(b, r) : provide(b, r);
}
function Jt() {
  return inject(b, A);
}
var k = "__vxp-provided-namespace";
var F = computed(() => "vxp");
function Ut(e, t) {
  if (t) {
    const n = computed(() => unref(e) || F.value);
    t.provide(k, n);
  } else {
    const n = inject(k, null), r = computed(() => unref(e) || (n == null ? void 0 : n.value) || F.value);
    provide(k, r);
  }
}
function mt() {
  return inject(k, F);
}
function Yt(e, t = mt()) {
  return c(e, (n) => n ? "vxp" : unref(t));
}
var x = "__vxp-provided-props";
var pt = /^on[A-Z]/;
function $t(e, t) {
  if (t)
    t.provide(
      x,
      computed(() => unref(e))
    );
  else {
    const n = inject(x, null), r = computed(() => n != null && n.value ? go(n.value, unref(e)) : unref(e));
    provide(x, r);
  }
}
function Kt(e, t, n = {}) {
  const r = inject(
    x,
    null
  ), a = computed(() => {
    var o;
    return ((o = r == null ? void 0 : r.value) == null ? void 0 : o.default) ?? {};
  }), s = computed(() => {
    var o;
    return ((o = r == null ? void 0 : r.value) == null ? void 0 : o[e]) ?? {};
  }), d = Object.keys(t), m = {};
  return d.forEach((o) => {
    const p = n[o], u = Y(p) && pn(p, "default") ? p : { default: p }, O = Ft(u.validator) ? u.validator : null, N = u.default, R = ne(u.isFunc) ? pt.test(String(o)) : u.isFunc, M = (f) => !R && Ft(f) ? f() : f, V = () => !R && Ft(N) ? N() : N;
    (u.required || O) && watch(
      () => t[o],
      (f) => {
        if (ne(f)) {
          u.required && console.warn(`${Z(e)}: '${o}' prop is required but not set`);
          return;
        } else if (!O)
          return;
        O(f) === false && console.warn(
          `${Z(e)}: an invalid value is set to '${o}' prop`
        );
      },
      { immediate: true }
    ), u.static ? m[o] = computed(() => t[o] ?? V()) : m[o] = computed(() => ne(t[o]) ? ne(s.value[o]) ? ne(a.value[o]) ? V() : M(a.value[o]) : M(s.value[o]) : t[o]);
  }), reactive(m);
}
function Z(e) {
  return `[vexip-ui:${e.charAt(0).toLocaleUpperCase() + e.substring(1)}]`;
}
var ft = {
  type: Boolean,
  default: null
};
var Qt = {
  type: [Boolean, String],
  default: null
};
var Xt = {
  type: [Boolean, Number],
  default: null
};
function Gt(e) {
  return Object.freeze(e);
}
function en(e) {
  return Object.freeze({ ...{
    inherit: ft
  }, ...e });
}
function tn(e, t, n) {
  const r = new Set(t);
  return Object.freeze(
    Object.assign(
      Object.keys(e).reduce((a, s) => (r.has(s) || (a[s] = e[s]), a), {}),
      n || {}
    )
  );
}
var nn = String;
var ht = ["small", "default", "large"];
var gt = (e) => ht.includes(e);
function rn(e = "default") {
  return {
    default: () => unref(e),
    validator: gt
  };
}
var on = String;
var vt = ["default", "success", "error", "warning"];
var Pt = (e) => vt.includes(e);
function ln(e = "default") {
  return {
    default: () => unref(e),
    validator: Pt
  };
}
var an = [String, Object, Array];
var cn = [String, Object, Array];
var yt = [Function, Array];
function un() {
  return yt;
}
function sn(e, ...t) {
  if (Array.isArray(e))
    for (let n = 0, r = e.length; n < r; ++n) {
      const a = e[n];
      typeof a == "function" && a(...t);
    }
  else
    typeof e == "function" && e(...t);
}
function dn(e) {
  return Object;
}
var mn = {
  type: [String, Number, Boolean],
  default: null
};
var pn2 = {
  type: [String, Number, Boolean, Array],
  default: null
};
var fn = [Object, Function];
function hn(e = null) {
  return {
    isFunc: true,
    default: e
  };
}
var z = "___vxp-provided-z-index";
var St = 0;
var $ = 2e3;
if (y) {
  const e = getComputedStyle(document.documentElement), t = parseFloat(e.getPropertyValue("--vxp-z-index-popup").trim());
  Number.isNaN(t) || ($ = t);
}
var y2 = computed(() => $);
function T(e, t) {
  return w(e) && !Number.isNaN(e) ? e : t;
}
function gn(e, t) {
  if (t) {
    const n = computed(() => {
      const r = unref(e);
      return T(r, y2.value);
    });
    t.provide(z, n);
  } else {
    const n = inject(z, null), r = computed(() => {
      const a = unref(e);
      return T(
        a,
        n ? T(n.value, y2.value) : y2.value
      );
    });
    provide(z, r);
  }
}
function vn() {
  const e = getCurrentInstance() ? inject(z, y2) : y2;
  return () => e.value + St++;
}

export {
  C,
  v,
  zt,
  Ot,
  Nt,
  It,
  dt,
  Et,
  Tt,
  At,
  Ft2 as Ft,
  Rt,
  Mt,
  Vt,
  P,
  S,
  W,
  Dt,
  jt,
  Lt,
  Ht,
  Wt,
  Zt,
  Bt,
  _t,
  b,
  Y2 as Y,
  A,
  qt,
  Jt,
  k,
  F,
  Ut,
  mt,
  Yt,
  x,
  $t,
  Kt,
  ft,
  Qt,
  Xt,
  Gt,
  en,
  tn,
  nn,
  rn,
  on,
  ln,
  an,
  cn,
  un,
  sn,
  dn,
  mn,
  pn2 as pn,
  fn,
  hn,
  z,
  y2 as y,
  gn,
  vn
};
/*! Bundled license information:

lucide-vue-next/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/a-arrow-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/a-arrow-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/a-large-small.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/accessibility.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/activity-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/activity.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/air-vent.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/airplay.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/alarm-clock-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/alarm-clock-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/alarm-clock-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/alarm-clock-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/alarm-clock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/alarm-smoke.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/album.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/alert-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/alert-octagon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/alert-triangle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-center-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-center-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-center.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-end-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-end-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-horizontal-distribute-center.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-horizontal-distribute-end.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-horizontal-distribute-start.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-horizontal-justify-center.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-horizontal-justify-end.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-horizontal-justify-start.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-horizontal-space-around.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-horizontal-space-between.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-justify.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-start-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-start-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-vertical-distribute-center.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-vertical-distribute-end.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-vertical-distribute-start.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-vertical-justify-center.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-vertical-justify-end.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-vertical-justify-start.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-vertical-space-around.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/align-vertical-space-between.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ampersand.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ampersands.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/anchor.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/angry.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/annoyed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/antenna.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/anvil.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/aperture.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/app-window.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/apple.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/archive-restore.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/archive-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/archive.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/area-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/armchair.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-big-down-dash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-big-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-big-left-dash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-big-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-big-right-dash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-big-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-big-up-dash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-big-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-0-1.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-1-0.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-a-z.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-from-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-left-from-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-left-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-narrow-wide.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-right-from-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-right-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-to-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-to-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-wide-narrow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down-z-a.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-left-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-left-from-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-left-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-left-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-left-to-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-right-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-right-from-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-right-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-right-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-right-to-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-0-1.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-1-0.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-a-z.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-from-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-from-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-left-from-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-left-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-narrow-wide.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-right-from-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-right-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-to-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-wide-narrow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up-z-a.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrow-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/arrows-up-from-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/asterisk.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/at-sign.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/atom.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/audio-lines.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/audio-waveform.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/award.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/axe.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/axis-3d.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/baby.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/backpack.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-alert.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-cent.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-dollar-sign.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-euro.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-help.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-indian-rupee.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-info.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-japanese-yen.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-percent.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-pound-sterling.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-russian-ruble.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-swiss-franc.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/badge.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/baggage-claim.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ban.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/banana.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/banknote.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bar-chart-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bar-chart-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bar-chart-4.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bar-chart-big.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bar-chart-horizontal-big.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bar-chart-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bar-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/barcode.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/baseline.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bath.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/battery-charging.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/battery-full.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/battery-low.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/battery-medium.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/battery-warning.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/battery.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/beaker.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bean-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bean.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bed-double.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bed-single.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/beef.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/beer.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bell-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bell-electric.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bell-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bell-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bell-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bell-ring.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bell.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bike.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/binary.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/biohazard.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bird.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bitcoin.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/blinds.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/blocks.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bluetooth-connected.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bluetooth-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bluetooth-searching.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bluetooth.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bold.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bomb.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bone.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-a.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-audio.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-copy.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-headphones.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-heart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-image.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-key.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-lock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-marked.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-open-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-open-text.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-open.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-text.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-type.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-up-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-user.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/book.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bookmark-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bookmark-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bookmark-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bookmark-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bookmark.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/boom-box.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/box-select.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/box.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/boxes.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/braces.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/brackets.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/brain-circuit.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/brain-cog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/brain.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/brick-wall.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/briefcase.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bring-to-front.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/brush.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bug-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bug-play.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bug.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/building-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/building.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bus-front.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/bus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cable-car.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cable.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cake-slice.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cake.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calculator.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-check-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-clock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-days.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-heart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-range.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-search.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-x-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/calendar.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/camera-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/camera.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/candlestick-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/candy-cane.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/candy-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/candy.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/car-front.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/car-taxi-front.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/car.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/caravan.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/carrot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/case-lower.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/case-sensitive.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/case-upper.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cassette-tape.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cast.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/castle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cat.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cctv.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/check-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/check-circle-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/check-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/check-square-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/check-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chef-hat.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cherry.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-down-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-down-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-first.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-last.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-left-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-left-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-right-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-right-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-up-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-up-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevron-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevrons-down-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevrons-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevrons-left-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevrons-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevrons-right-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevrons-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevrons-up-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chevrons-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/chrome.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/church.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cigarette-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cigarette.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-dollar-sign.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-dot-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-ellipsis.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-equal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-slash-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-slash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-user-round.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle-user.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/circuit-board.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/citrus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clapperboard.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clipboard-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clipboard-copy.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clipboard-edit.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clipboard-list.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clipboard-paste.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clipboard-signature.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clipboard-type.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clipboard-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clipboard.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-1.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-10.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-11.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-12.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-4.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-5.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-6.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-7.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-8.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock-9.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-cog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-drizzle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-fog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-hail.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-lightning.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-moon-rain.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-moon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-rain-wind.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-rain.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-snow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-sun-rain.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud-sun.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloud.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cloudy.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/clover.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/club.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/code-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/code.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/codepen.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/codesandbox.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/coffee.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/coins.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/columns-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/columns-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/columns-4.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/combine.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/command.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/compass.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/component.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/computer.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/concierge-bell.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cone.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/construction.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/contact-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/contact.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/container.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/contrast.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cookie.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cooking-pot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/copy-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/copy-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/copy-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/copy-slash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/copy-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/copy.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/copyleft.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/copyright.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/corner-down-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/corner-down-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/corner-left-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/corner-left-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/corner-right-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/corner-right-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/corner-up-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/corner-up-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cpu.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/creative-commons.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/credit-card.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/croissant.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/crop.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cross.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/crosshair.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/crown.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cuboid.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cup-soda.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/currency.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/cylinder.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/database-backup.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/database-zap.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/database.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/delete.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dessert.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/diameter.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/diamond.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dice-1.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dice-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dice-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dice-4.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dice-5.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dice-6.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dices.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/diff.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/disc-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/disc-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/disc-album.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/disc.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/divide-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/divide-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/divide.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dna-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dna.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dollar-sign.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/donut.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/door-closed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/door-open.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/download-cloud.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/download.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/drafting-compass.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/drama.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dribbble.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/droplet.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/droplets.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/drum.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/drumstick.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/dumbbell.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ear-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ear.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/egg-fried.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/egg-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/egg.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/equal-not.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/equal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/eraser.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/euro.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/expand.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/external-link.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/eye-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/eye.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/facebook.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/factory.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fan.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fast-forward.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/feather.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fence.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ferris-wheel.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/figma.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-archive.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-audio-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-audio.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-axis-3d.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-badge-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-badge.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-bar-chart-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-bar-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-box.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-check-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-clock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-code-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-code.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-cog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-diff.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-digit.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-edit.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-heart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-image.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-input.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-json-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-json.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-key-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-key.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-line-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-lock-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-lock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-minus-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-music.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-output.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-pie-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-plus-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-question.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-scan.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-search-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-search.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-signature.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-spreadsheet.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-stack.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-symlink.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-terminal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-text.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-type-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-type.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-video-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-video.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-volume-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-volume.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-warning.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-x-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/file.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/files.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/film.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/filter-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/filter.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fingerprint.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fire-extinguisher.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fish-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fish-symbol.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fish.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flag-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flag-triangle-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flag-triangle-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flag.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flame-kindling.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flame.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flashlight-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flashlight.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flask-conical-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flask-conical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flask-round.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flip-horizontal-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flip-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flip-vertical-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flip-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flower-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/flower.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/focus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fold-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fold-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-archive.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-clock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-closed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-cog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-edit.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-git-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-git.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-heart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-input.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-kanban.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-key.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-lock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-open-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-open.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-output.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-root.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-search-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-search.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-symlink.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-sync.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-tree.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folder.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/folders.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/footprints.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/forklift.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/form-input.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/forward.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/frame.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/framer.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/frown.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fuel.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/fullscreen.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/function-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gallery-horizontal-end.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gallery-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gallery-thumbnails.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gallery-vertical-end.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gallery-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gamepad-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gamepad.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gantt-chart-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gantt-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gauge-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gauge.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gavel.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gem.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ghost.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gift.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-branch-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-branch.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-commit-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-commit-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-compare-arrows.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-compare.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-fork.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-graph.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-merge.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-pull-request-arrow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-pull-request-closed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-pull-request-create-arrow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-pull-request-create.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-pull-request-draft.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/git-pull-request.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/github.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/gitlab.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/glass-water.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/glasses.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/globe-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/globe.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/goal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/grab.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/graduation-cap.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/grape.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/grid-2x2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/grid-3x3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/grip-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/grip-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/grip.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/group.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/guitar.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hammer.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hand-metal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hand.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hard-drive-download.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hard-drive-upload.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hard-drive.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hard-hat.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/haze.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hdmi-port.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heading-1.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heading-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heading-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heading-4.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heading-5.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heading-6.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heading.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/headphones.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heart-crack.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heart-handshake.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heart-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heart-pulse.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/heart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/help-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/helping-hand.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hexagon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/highlighter.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/history.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/home.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hop-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hop.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hotel.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/hourglass.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ice-cream-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ice-cream.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/image-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/image-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/image-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/image-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/image.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/import.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/inbox.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/indent.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/indian-rupee.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/infinity.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/info.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/inspection-panel.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/instagram.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/italic.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/iteration-ccw.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/iteration-cw.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/japanese-yen.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/joystick.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/kanban-square-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/kanban-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/kanban.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/key-round.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/key-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/key.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/keyboard-music.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/keyboard.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lamp-ceiling.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lamp-desk.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lamp-floor.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lamp-wall-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lamp-wall-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lamp.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/land-plot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/landmark.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/languages.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/laptop-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/laptop.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lasso-select.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lasso.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/laugh.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/layers-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/layers-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/layers.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/layout-dashboard.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/layout-grid.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/layout-list.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/layout-panel-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/layout-panel-top.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/layout-template.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/leaf.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/leafy-green.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/library-big.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/library-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/library.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/life-buoy.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ligature.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lightbulb-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lightbulb.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/line-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/link-2-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/link-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/link.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/linkedin.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-checks.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-end.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-filter.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-music.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-ordered.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-restart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-start.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-todo.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-tree.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-video.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/list.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/loader-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/loader.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/locate-fixed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/locate-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/locate.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lock-keyhole.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/log-in.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/log-out.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/lollipop.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/luggage.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/m-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/magnet.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mail-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mail-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mail-open.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mail-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mail-question.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mail-search.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mail-warning.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mail-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mail.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mailbox.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mails.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/map-pin-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/map-pin.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/map-pinned.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/map.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/martini.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/maximize-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/maximize.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/medal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/megaphone-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/megaphone.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/meh.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/memory-stick.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/menu-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/menu.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/merge.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-code.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-heart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-more.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-question.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-reply.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-warning.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-code.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-diff.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-heart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-more.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-quote.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-reply.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-share.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-text.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-warning.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/message-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/messages-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mic-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mic-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mic.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/microscope.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/microwave.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/milestone.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/milk-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/milk.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/minimize-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/minimize.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/minus-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/minus-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-pause.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-play.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-smartphone.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-speaker.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-stop.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/monitor.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/moon-star.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/moon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/more-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/more-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mountain-snow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mountain.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mouse-pointer-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mouse-pointer-click.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mouse-pointer-square-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mouse-pointer-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mouse-pointer.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/mouse.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-3d.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-diagonal-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-diagonal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-down-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-down-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-up-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-up-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/move.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/music-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/music-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/music-4.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/music.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/navigation-2-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/navigation-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/navigation-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/navigation.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/network.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/newspaper.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/nfc.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/nut-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/nut.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/octagon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/option.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/orbit.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/outdent.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/package-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/package-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/package-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/package-open.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/package-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/package-search.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/package-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/package.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/paint-bucket.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/paintbrush-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/paintbrush.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/palette.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/palmtree.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-bottom-close.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-bottom-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-bottom-open.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-bottom.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-left-close.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-left-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-left-open.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-right-close.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-right-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-right-open.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-top-close.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-top-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-top-open.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panel-top.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panels-left-bottom.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panels-right-bottom.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/panels-top-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/paperclip.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/parentheses.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/parking-circle-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/parking-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/parking-meter.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/parking-square-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/parking-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/party-popper.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pause-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pause-octagon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pause.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/paw-print.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pc-case.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pen-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pen-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pen-tool.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pen.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pencil-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pencil-ruler.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pencil.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pentagon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/percent-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/percent-diamond.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/percent-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/percent.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/person-standing.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/phone-call.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/phone-forwarded.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/phone-incoming.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/phone-missed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/phone-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/phone-outgoing.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/phone.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pi-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pi.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/piano.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/picture-in-picture-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/picture-in-picture.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pie-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/piggy-bank.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pilcrow-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pilcrow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pill.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pin-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pin.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pipette.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pizza.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plane-landing.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plane-takeoff.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plane.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/play-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/play-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/play.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plug-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plug-zap-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plug-zap.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plug.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plus-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plus-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pocket-knife.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pocket.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/podcast.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pointer-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pointer.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/popcorn.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/popsicle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pound-sterling.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/power-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/power-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/power-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/power.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/presentation.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/printer.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/projector.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/puzzle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/pyramid.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/qr-code.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/quote.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rabbit.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/radar.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/radiation.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/radio-receiver.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/radio-tower.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/radio.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/radius.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rail-symbol.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rainbow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rat.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ratio.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/receipt.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rectangle-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rectangle-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/recycle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/redo-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/redo-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/redo.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/refresh-ccw-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/refresh-ccw.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/refresh-cw-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/refresh-cw.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/refrigerator.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/regex.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/remove-formatting.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/repeat-1.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/repeat-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/repeat.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/replace-all.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/replace.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/reply-all.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/reply.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rewind.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ribbon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rocket.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rocking-chair.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/roller-coaster.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rotate-3d.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rotate-ccw.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rotate-cw.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/route-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/route.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/router.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rows-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rows-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rows-4.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/rss.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ruler.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/russian-ruble.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sailboat.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/salad.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sandwich.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/satellite-dish.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/satellite.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/save-all.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/save.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scale-3d.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scale.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scaling.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scan-barcode.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scan-eye.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scan-face.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scan-line.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scan-search.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scan-text.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scan.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scatter-chart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/school-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/school.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scissors-line-dashed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scissors-square-dashed-bottom.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scissors-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scissors.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/screen-share-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/screen-share.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scroll-text.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/scroll.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/search-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/search-code.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/search-slash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/search-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/search.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/send-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/send-to-back.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/send.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/separator-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/separator-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/server-cog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/server-crash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/server-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/server.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/settings-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/settings.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shapes.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/share-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/share.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sheet.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shell.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-alert.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-ban.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-ellipsis.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-half.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-question.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shield.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ship-wheel.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ship.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shirt.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shopping-bag.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shopping-basket.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shopping-cart.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shovel.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shower-head.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shrink.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shrub.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/shuffle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sigma-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sigma.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/signal-high.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/signal-low.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/signal-medium.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/signal-zero.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/signal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/signpost-big.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/signpost.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/siren.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/skip-back.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/skip-forward.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/skull.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/slack.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/slash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/slice.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sliders-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sliders.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/smartphone-charging.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/smartphone-nfc.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/smartphone.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/smile-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/smile.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/snail.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/snowflake.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sofa.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/soup.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/space.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/spade.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sparkle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sparkles.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/speaker.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/speech.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/spell-check-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/spell-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/spline.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/split-square-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/split-square-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/split.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/spray-can.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sprout.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-asterisk.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-code.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-dashed-bottom-code.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-dashed-bottom.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-equal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-slash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-stack.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-user-round.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square-user.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/squircle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/squirrel.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/stamp.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/star-half.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/star-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/star.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/step-back.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/step-forward.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/stethoscope.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sticker.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sticky-note.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/stop-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/store.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/stretch-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/stretch-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/strikethrough.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/subscript.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/subtitles.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sun-dim.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sun-medium.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sun-moon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sun-snow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sun.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sunrise.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sunset.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/superscript.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/swiss-franc.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/switch-camera.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/sword.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/swords.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/syringe.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/table-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/table-properties.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/table.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tablet-smartphone.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tablet.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tablets.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tag.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tags.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tally-1.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tally-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tally-3.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tally-4.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tally-5.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tangent.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/target.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tent-tree.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tent.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/terminal-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/terminal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/test-tube-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/test-tube.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/test-tubes.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/text-cursor-input.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/text-cursor.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/text-quote.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/text-select.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/text.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/theater.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/thermometer-snowflake.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/thermometer-sun.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/thermometer.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/thumbs-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/thumbs-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ticket.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/timer-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/timer-reset.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/timer.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/toggle-left.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/toggle-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tornado.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/torus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/touchpad-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/touchpad.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tower-control.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/toy-brick.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tractor.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/traffic-cone.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/train-front-tunnel.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/train-front.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/train-track.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tram-front.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/trash-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/trash.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tree-deciduous.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tree-pine.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/trees.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/trello.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/trending-down.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/trending-up.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/triangle-right.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/triangle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/trophy.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/truck.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/turtle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tv-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/tv.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/twitch.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/twitter.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/type.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/umbrella-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/umbrella.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/underline.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/undo-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/undo-dot.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/undo.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/unfold-horizontal.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/unfold-vertical.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/ungroup.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/unlink-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/unlink.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/unlock-keyhole.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/unlock.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/unplug.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/upload-cloud.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/upload.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/usb.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-cog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-round-check.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-round-cog.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-round-minus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-round-plus.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-round-search.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-round-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-round.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-search.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/user.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/users-round.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/users.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/utensils-crossed.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/utensils.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/utility-pole.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/variable.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/vegan.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/venetian-mask.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/vibrate-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/vibrate.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/video-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/video.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/videotape.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/view.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/voicemail.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/volume-1.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/volume-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/volume-x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/volume.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/vote.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wallet-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wallet-cards.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wallet.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wallpaper.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wand-2.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wand.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/warehouse.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/watch.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/waves.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/waypoints.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/webcam.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/webhook.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/weight.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wheat-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wheat.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/whole-word.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wifi-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wifi.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wind.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wine-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wine.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/workflow.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wrap-text.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/wrench.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/x-circle.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/x-octagon.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/x-square.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/x.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/youtube.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/zap-off.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/zap.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/zoom-in.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/zoom-out.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/icons/index.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-vue-next/dist/esm/lucide-vue-next.js:
  (**
   * @license lucide-vue-next v0.303.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-FRKFMZA6.js.map
