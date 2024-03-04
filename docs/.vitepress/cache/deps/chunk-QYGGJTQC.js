import {
  Jt,
  Kt,
  Ot,
  Qt,
  Yt,
  an,
  cn,
  en,
  fn,
  ft,
  hn,
  sn,
  un,
  vn
} from "./chunk-FRKFMZA6.js";
import {
  _n,
  eo,
  me
} from "./chunk-CPGSQ24Y.js";
import {
  $r,
  Fr,
  ao,
  co,
  jr,
  q
} from "./chunk-UAOUAQDO.js";
import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineAsyncComponent,
  defineComponent,
  h,
  inject,
  isVNode,
  mergeProps,
  nextTick,
  onBeforeUnmount,
  onMounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderSlot,
  resolveComponent,
  shallowReadonly,
  toRef,
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-IMLQGPPH.js";

// docs/node_modules/vexip-ui/es/components/collapse/props.mjs
var l = en({
  expanded: [String, Number, Array],
  card: ft,
  accordion: ft,
  arrowType: String,
  ghost: ft,
  onChange: un()
});
var i = en({
  label: [String, Number],
  title: String,
  disabled: ft,
  contentStyle: cn,
  expanded: ft,
  card: ft,
  arrowType: String,
  icon: fn,
  ghost: ft,
  onToggle: un()
});
var p = en({
  appear: ft,
  mode: String,
  horizontal: ft,
  duration: Number,
  timing: String,
  fadeEffect: ft,
  /**
   * Internal prop for Tree, reverse the enter transition
   *
   * @internal
   */
  reverse: ft,
  disabled: ft,
  onBeforeEnter: un(),
  onEnter: un(),
  onAfterEnter: un(),
  onEnterCancelled: un(),
  onBeforeLeave: un(),
  onLeave: un(),
  onAfterLeave: un(),
  onLeaveCancelled: un()
});

// docs/node_modules/vexip-ui/es/components/collapse/collapse-transition.mjs
var L = defineComponent({
  name: "CollapseTransition",
  props: p,
  emits: [],
  setup(x, { slots: u }) {
    const n2 = Kt("collapseTransition", x, {
      appear: false,
      mode: {
        default: "default",
        validator: (l2) => ["in-out", "out-in", "default"].includes(l2)
      },
      horizontal: false,
      duration: {
        default: 250,
        validator: (l2) => l2 >= 200
      },
      timing: null,
      fadeEffect: false,
      reverse: false
    });
    let m = null, g = null;
    return () => {
      if (n2.disabled)
        return renderSlot(u, "default");
      const l2 = n2.duration, a2 = n2.timing || "ease-in-out";
      let s2 = "maxHeight", r = "paddingTop", y = "paddingBottom", d = "marginTop", f = "marginBottom", c2 = "scrollHeight", v = `
        max-height ${l2}ms ${a2},
        padding-top ${l2}ms ${a2},
        padding-bottom ${l2}ms ${a2},
        margin-top ${l2}ms ${a2},
        margin-bottom ${l2}ms ${a2}
      `;
      n2.horizontal && (s2 = "maxWidth", r = "paddingLeft", y = "paddingRight", d = "marginLeft", f = "marginRight", c2 = "scrollWidth", v = `
          max-width ${l2}ms ${a2},
          padding-inline-start ${l2}ms ${a2},
          padding-inline-end ${l2}ms ${a2},
          margin-inline-start ${l2}ms ${a2},
          margin-inline-end ${l2}ms ${a2}
        `), n2.fadeEffect && (v = `
          ${v},
          opacity ${l2}ms ease
        `);
      const i2 = {}, e = {};
      return h(
        Transition,
        {
          appear: n2.appear,
          mode: n2.mode,
          onBeforeEnter(o) {
            if (m)
              return;
            m = "before";
            const t2 = o;
            i2.paddingTop = t2.style[r], i2.paddingBottom = t2.style[y], i2.marginTop = t2.style[d], i2.marginBottom = t2.style[f], i2.transition = t2.style.transition, i2.boxSizing = t2.style.boxSizing, i2.opacity = t2.style.opacity, t2.style.transition = v, n2.reverse || (t2.style[s2] = "0", t2.style[r] = "0", t2.style[y] = "0", t2.style[d] = "0", t2.style[f] = "0", t2.style.boxSizing = "content-box", n2.fadeEffect && (t2.style.opacity = "0")), sn(n2.onBeforeEnter, o);
          },
          onEnter(o) {
            if (m === "in")
              return;
            m = "in";
            const t2 = o;
            i2.overflow = t2.style.overflow, t2.style.overflow = "hidden", t2[c2] !== 0 ? t2.style[s2] = `${t2[c2]}px` : t2.style[s2] = "", t2.style[r] = i2.paddingTop, t2.style[y] = i2.paddingBottom, t2.style[d] = i2.marginTop, t2.style[f] = i2.marginBottom, n2.reverse ? (t2[c2], t2.style[s2] = "0", t2.style[r] = "0", t2.style[y] = "0", t2.style[d] = "0", t2.style[f] = "0", t2.style.boxSizing = "content-box", n2.fadeEffect && (t2.style.opacity = "0")) : n2.fadeEffect && (t2.style.opacity = i2.opacity), sn(n2.onEnter, o);
          },
          onAfterEnter(o) {
            const t2 = o;
            t2.style.transition = i2.transition || "", n2.reverse || (t2.style[s2] = "", t2.style.overflow = i2.overflow, t2.style.boxSizing = i2.boxSizing), m = null, sn(n2.onAfterEnter, o);
          },
          onEnterCancelled(o) {
            const t2 = o;
            t2.style.transition = i2.transition || "", t2.style[s2] = "", t2.style.overflow = i2.overflow, t2.style.boxSizing = i2.boxSizing, m = null, sn(n2.onEnterCancelled, o);
          },
          onBeforeLeave(o) {
            if (g)
              return;
            g = "before";
            const t2 = o;
            e.paddingTop = t2.style[r], e.paddingBottom = t2.style[y], e.marginTop = t2.style[d], e.marginBottom = t2.style[f], e.overflow = t2.style.overflow, e.boxSizing = t2.style.boxSizing, e.opacity = t2.style.opacity, t2.style[s2] = `${t2[c2]}px`, t2.style.overflow = "hidden", sn(n2.onBeforeLeave, o);
          },
          onLeave(o) {
            if (g === "in")
              return;
            g = "in";
            const t2 = o;
            t2[c2] !== 0 && (e.transition = t2.style.transition, t2.style.transition = v, t2.style[s2] = "0", t2.style[r] = "0", t2.style[y] = "0", t2.style[d] = "0", t2.style[f] = "0", n2.fadeEffect && (t2.style.opacity = "0")), sn(n2.onLeave, o);
          },
          onAfterLeave(o) {
            const t2 = o;
            t2.style[s2] = "", t2.style[r] = e.paddingTop, t2.style[y] = e.paddingBottom, t2.style[d] = e.marginTop, t2.style[f] = e.marginBottom, t2.style.overflow = e.overflow, t2.style.transition = e.transition || "", t2.style.boxSizing = e.boxSizing, t2.style.opacity = e.opacity, g = null, sn(n2.onAfterLeave, o);
          },
          onLeaveCancelled(o) {
            const t2 = o;
            t2.style[s2] = "", t2.style[r] = e.paddingTop, t2.style[y] = e.paddingBottom, t2.style[d] = e.marginTop, t2.style[f] = e.marginBottom, t2.style.overflow = e.overflow, t2.style.transition = e.transition || "", t2.style.boxSizing = e.boxSizing, t2.style.opacity = e.opacity, g = null, sn(n2.onLeaveCancelled, o);
          }
        },
        u
      );
    };
  }
});

// docs/node_modules/vexip-ui/es/components/icon/props.mjs
var n = en({
  icon: fn,
  scale: [Number, String],
  title: String,
  label: String,
  flip: String,
  effect: String,
  size: String,
  color: String,
  rotate: [Number, String],
  renderer: Function
});

// docs/node_modules/vexip-ui/es/components/icon/icon.mjs
var N = Object.freeze(["spin-in", "spin-out", "pulse-in", "pulse-out"]);
var S = /(^\s*[+-]?\d*\.?\d+\s*)(deg|grad|turn|rad)?\s*/i;
var P = defineComponent({
  name: "Icon",
  props: n,
  setup(p4, {
    attrs: u,
    slots: i2
  }) {
    const e = Kt("icon", p4, {
      icon: {
        isFunc: true,
        default: null,
        static: true
      },
      scale: 1,
      title: null,
      label: null,
      flip: {
        default: null,
        validator: (t2) => ["horizontal", "vertical", "both"].includes(t2)
      },
      effect: null,
      size: null,
      color: null,
      rotate: null,
      renderer: {
        default: null,
        isFunc: true
      }
    }), n2 = Yt("icon"), m = computed(() => {
      let t2 = "";
      return e.effect && (t2 = N.includes(e.effect) ? n2.bm(e.effect) : e.effect), {
        [n2.b()]: true,
        [n2.bm(`flip-${e.flip}`)]: e.flip,
        [t2]: t2
      };
    }), c2 = computed(() => me(e.scale) || 1), a2 = computed(() => {
      var s2;
      if (typeof e.rotate == "number")
        return `${e.rotate % 4 / 4}turn`;
      const t2 = (s2 = e.rotate) == null ? void 0 : s2.match(S);
      if (!t2)
        return null;
      const o = me(t2[1]);
      return t2[2] ? o ? `${o}${t2[2]}` : null : `${o % 4 / 4}turn`;
    }), b2 = computed(() => {
      const t2 = {
        color: e.color
      };
      return e.size ? t2.fontSize = e.size : c2.value !== 1 && (t2.fontSize = `${c2.value}em`), a2.value && (t2[n2.cv("rotate")] = a2.value), t2;
    });
    function f() {
      const t2 = {
        class: m.value,
        style: b2.value,
        title: e.title,
        role: u.role || (e.label || e.title ? "img" : void 0),
        "aria-label": e.label,
        "aria-hidden": !(e.label || e.title)
      };
      return i2.default ? createVNode("i", t2, [createVNode("g", null, [renderSlot(i2, "default")])]) : e.icon ? createVNode("i", t2, [createVNode("g", null, [h(e.icon)])]) : createVNode("i", t2, null);
    }
    return () => typeof e.renderer == "function" ? e.renderer(e, u, f) : f();
  }
});

// docs/node_modules/vexip-ui/es/components/portal/portal.vue2.mjs
var b = defineComponent({
  name: "Portal",
  __name: "portal",
  props: {
    to: {
      type: String,
      default: ""
    }
  },
  setup(o) {
    const n2 = o, s2 = false, e = ref(false), t2 = computed(() => !e.value || !n2.to);
    return onMounted(() => {
      nextTick(() => {
        e.value = true;
      });
    }), (a2, m) => (s2 ? !t2.value : e.value) ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: t2.value ? void 0 : o.to || void 0,
      disabled: t2.value
    }, [
      renderSlot(a2.$slots, "default")
    ], 8, ["to", "disabled"])) : renderSlot(a2.$slots, "default", { key: 1 });
  }
});

// docs/node_modules/vexip-ui/es/components/popper/props.mjs
var t = en({
  visible: ft,
  alive: ft,
  to: String,
  transition: String,
  appear: ft,
  onBeforeEnter: un(),
  onEnter: un(),
  onAfterEnter: un(),
  onEnterCancelled: un(),
  onBeforeLeave: un(),
  onLeave: un(),
  onAfterLeave: un(),
  onLeaveCancelled: un()
});

// docs/node_modules/vexip-ui/es/components/popper/popper.vue2.mjs
var _ = defineComponent({
  name: "Popper",
  components: {
    Portal: b
  },
  inheritAttrs: false,
  props: t,
  emits: [],
  setup(p4) {
    const n2 = Yt("popper"), e = Kt("collapseTransition", p4, {
      visible: false,
      alive: false,
      to: "",
      transition: () => n2.ns("drop"),
      appear: false
    }), i2 = vn(), t2 = ref(10), c2 = ref();
    watch(
      () => e.visible,
      (a2) => {
        e.to && a2 && (t2.value = i2());
      },
      { immediate: true }
    );
    function m(a2, o) {
      switch (a2) {
        case "be":
          sn(e.onBeforeEnter, o);
          break;
        case "e":
          sn(e.onEnter, o);
          break;
        case "ae":
          sn(e.onAfterEnter, o);
          break;
        case "ec":
          sn(e.onEnterCancelled, o);
          break;
        case "bl":
          sn(e.onBeforeLeave, o);
          break;
        case "l":
          sn(e.onLeave, o);
          break;
        case "al":
          sn(e.onAfterLeave, o);
          break;
        case "lc":
          sn(e.onLeaveCancelled, o);
          break;
      }
    }
    return {
      nh: n2,
      props: e,
      zIndex: t2,
      wrapper: c2,
      emitHookEvent: m
    };
  }
});

// docs/node_modules/vexip-ui/es/_virtual/_plugin-vue_export-helper.mjs
var s = (t2, e) => {
  const o = t2.__vccOpts || t2;
  for (const [r, c2] of e)
    o[r] = c2;
  return o;
};

// docs/node_modules/vexip-ui/es/components/popper/popper.vue.mjs
function H(e, o, $, B, C, w) {
  const p4 = resolveComponent("Portal");
  return openBlock(), createBlock(p4, {
    to: e.props.to
  }, {
    default: withCtx(() => [
      createVNode(Transition, {
        name: e.props.transition,
        appear: e.props.appear,
        onBeforeEnter: o[0] || (o[0] = (r) => e.emitHookEvent("be", r)),
        onEnter: o[1] || (o[1] = (r) => e.emitHookEvent("e", r)),
        onAfterEnter: o[2] || (o[2] = (r) => e.emitHookEvent("ae", r)),
        onEnterCancelled: o[3] || (o[3] = (r) => e.emitHookEvent("ec", r)),
        onBeforeLeave: o[4] || (o[4] = (r) => e.emitHookEvent("bl", r)),
        onLeave: o[5] || (o[5] = (r) => e.emitHookEvent("l", r)),
        onAfterLeave: o[6] || (o[6] = (r) => e.emitHookEvent("al", r)),
        onLeaveCancelled: o[7] || (o[7] = (r) => e.emitHookEvent("lc", r))
      }, {
        default: withCtx(() => [
          e.props.alive || e.props.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({ key: 0 }, e.$attrs, {
            ref: "wrapper",
            class: [e.nh.b(), e.props.to !== "body" && e.nh.bm("inherit")],
            style: { zIndex: e.props.to && e.props.visible ? e.zIndex : void 0 }
          }), [
            renderSlot(e.$slots, "default")
          ], 16)), [
            [vShow, !e.props.alive || e.props.visible]
          ]) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name", "appear"])
    ]),
    _: 3
  }, 8, ["to"]);
}
var z = s(_, [["render", H]]);

// docs/node_modules/vexip-ui/es/components/tooltip/props.mjs
var p2 = en({
  trigger: [String, Array],
  wrapper: Qt,
  noArrow: ft,
  transitionName: String,
  visible: ft,
  placement: String,
  outsideClose: ft,
  noHover: ft,
  tipClass: an,
  tipStyle: cn,
  transfer: Qt,
  disabled: ft,
  raw: ft,
  delay: [Number, Array],
  tipAlive: ft,
  reverse: ft,
  width: [String, Number],
  virtual: Object,
  shift: {
    type: [Boolean, String],
    default: null
  },
  onToggle: un(),
  onTipEnter: un(),
  onTipLeave: un(),
  onClickOutside: un(),
  onOutsideClose: un()
});

// docs/node_modules/vexip-ui/es/components/tooltip/tooltip.mjs
function me2(d) {
  return typeof d == "function" || Object.prototype.toString.call(d) === "[object Object]" && !isVNode(d);
}
var he = createTextVNode("").type;
var ke = defineComponent({
  name: "Tooltip",
  inheritAttrs: true,
  props: p2,
  emits: ["clickoutside", "update:visible"],
  setup(d, {
    attrs: w,
    slots: m,
    emit: _3,
    expose: z2
  }) {
    const t2 = Yt("tooltip"), e = Kt("tooltip", d, {
      trigger: {
        default: "hover",
        validator: (r) => ["hover", "click", "focus", "hover-focus", "custom"].includes(r)
      },
      wrapper: false,
      noArrow: false,
      transitionName: () => t2.ns("fade"),
      visible: false,
      placement: {
        default: "top",
        validator: (r) => co.includes(r)
      },
      outsideClose: true,
      noHover: false,
      tipClass: null,
      tipStyle: null,
      transfer: false,
      disabled: false,
      raw: false,
      delay: 250,
      tipAlive: false,
      reverse: false,
      width: "auto",
      virtual: null,
      shift: false
    }), E2 = Ot(), {
      timer: h2
    } = $r(), X = toRef(e, "placement"), o = ref(e.visible), v = ref(e.visible), q2 = toRef(e, "transfer"), P2 = ref(100);
    let x = false, A = false;
    const C = computed(() => e.trigger === "hover" || e.trigger === "hover-focus"), S2 = computed(() => e.trigger === "focus" || e.trigger === "hover-focus"), s2 = ref(), k = computed(() => {
      var l2;
      const r = ((l2 = e.virtual) == null ? void 0 : l2.$el) ?? e.virtual;
      if (r) {
        if ("getBoundingClientRect" in r)
          return r;
        if ("x" in r && "y" in r)
          return {
            getBoundingClientRect: () => ({
              x: r.x,
              y: r.y,
              left: r.x,
              top: r.y,
              width: 0,
              height: 0
            })
          };
      }
      return s2.value;
    }), n2 = computed(() => _n(k.value) ? k.value : null), N2 = computed(() => typeof e.delay == "number" ? new Array(2).fill(Math.max(e.delay, 0)) : e.delay.map((r) => Math.max(r, 0))), O = ref(), b2 = computed(() => {
      var r;
      return (r = O.value) == null ? void 0 : r.wrapper;
    }), V = ref(), G = computed(() => e.shift ? e.shift === true || e.shift === "both" ? {
      crossAxis: true
    } : e.shift === "horizontal" ? {
      mainAxis: false,
      crossAxis: true
    } : {} : {
      mainAxis: false
    }), {
      transferTo: I2,
      updatePopper: y
    } = ao({
      placement: X,
      transfer: q2,
      arrow: V,
      reference: k,
      shift: G,
      wrapper: s2,
      popper: b2
    });
    jr(W, s2), jr(() => {
      o.value && !s2.value && W();
    }, b2);
    const J = computed(() => e.width === "auto" ? e.tipStyle : e.width === "trigger" ? [{
      width: `${P2.value}px`
    }, e.tipStyle] : [{
      width: `${e.width}px`
    }, e.tipStyle]), R = shallowReadonly({
      toggleVisible: i2,
      updatePopper: y
    });
    q(n2, "mouseenter", H2), q(n2, "mouseleave", L2), q(n2, "click", Q), q(n2, "focus", U), q(n2, "blur", Y), q(b2, "mouseenter", H2), q(b2, "mouseleave", L2), watch(() => e.visible, (r) => {
      o.value = r, r && (v.value = true, y());
    }), watch(() => e.disabled, (r) => {
      r && i2(false);
    }), z2({
      rendering: v,
      trigger: n2,
      toggleVisible: i2,
      updatePopper: y
    });
    function i2(r = !o.value) {
      o.value !== r && (o.value = r, r && (K(), v.value = true, y()), _3("update:visible", r), sn(e.onToggle, r));
    }
    function K() {
      n2.value && (P2.value = n2.value.offsetWidth);
    }
    function T2() {
      return C.value && x || S2.value && A;
    }
    function H2() {
      e.disabled || (C.value && (clearTimeout(h2.hover), h2.hover = setTimeout(() => {
        x = true, i2(T2());
      }, N2.value[0] ?? E2.value)), sn(e.onTipEnter));
    }
    function L2() {
      e.disabled || (C.value && (clearTimeout(h2.hover), h2.hover = setTimeout(() => {
        x = false, i2(T2());
      }, N2.value[1] ?? E2.value)), sn(e.onTipLeave));
    }
    function Q() {
      e.disabled || e.trigger === "click" && i2();
    }
    function U() {
      e.disabled || S2.value && (A = true, i2(T2()));
    }
    function Y() {
      e.disabled || S2.value && (A = false, i2(T2()));
    }
    function W() {
      e.disabled || (sn(e.onClickOutside), e.outsideClose && e.trigger !== "custom" && o.value && (i2(false), sn(e.onOutsideClose)));
    }
    function Z(r) {
      r ? s2.value = r.nextElementSibling : s2.value = void 0;
    }
    function j() {
      v.value = o.value;
    }
    function ee(r) {
      r.stopPropagation();
    }
    return () => {
      var B;
      const r = e.wrapper ? e.wrapper === true ? "span" : e.wrapper : null, l2 = (B = m.trigger) == null ? void 0 : B.call(m, R), a2 = l2 ? l2[0] : null;
      return [a2 && (r ? createVNode(r, mergeProps(w, {
        ref: s2,
        class: [t2.b(), t2.bs("vars"), e.inherit && t2.bm("inherit")]
      }), me2(l2) ? l2 : {
        default: () => [l2]
      }) : createVNode(Fragment, {
        ref: Z
      }, [a2 ? a2.type === he ? r ? createVNode("span", null, [a2]) : createVNode("span", w, [a2]) : (r || (a2.props = mergeProps(a2.props || {}, w)), a2) : null])), !e.disabled && (e.tipAlive || v.value) && createVNode(z, {
        ref: O,
        class: {
          [t2.be("popper")]: true,
          [t2.bs("vars")]: true,
          [t2.bem("popper", e.reverse ? "dark" : "light")]: true,
          [t2.bem("popper", "no-hover")]: e.noHover,
          [t2.bem("popper", "no-arrow")]: e.noArrow
        },
        appear: true,
        visible: o.value,
        alive: e.tipAlive,
        to: I2.value,
        transition: e.transitionName,
        role: "tooltip",
        tabindex: -1,
        onClick: ee,
        onAnimationend: j,
        onTransitionend: j
      }, {
        default: () => [createVNode("div", {
          class: [!e.raw && t2.be("tip"), e.tipClass],
          style: J.value
        }, [renderSlot(m, "default", R)]), !e.raw && !e.noArrow && createVNode("div", {
          ref: V,
          class: t2.be("arrow")
        }, null)]
      })];
    };
  }
});

// docs/node_modules/vexip-ui/es/components/menu/props.mjs
var a = en({
  active: String,
  accordion: ft,
  markerType: String,
  reduced: ft,
  horizontal: ft,
  transfer: Qt,
  trigger: String,
  groupType: String,
  tooltipReverse: ft,
  options: Array,
  router: Object,
  manualRoute: ft,
  indent: [String, Number],
  onSelect: un(),
  onExpand: un(),
  onReduce: un()
});
var c = en({
  label: String,
  icon: fn,
  iconProps: Object,
  disabled: ft,
  transfer: Qt,
  trigger: String,
  transitionName: String,
  meta: Object,
  children: Array,
  route: [String, Object],
  onSelect: un()
});
var p3 = en({
  label: String,
  children: Array
});

// docs/node_modules/vexip-ui/es/components/menu/symbol.mjs
var E = Symbol("MENU_ITEM_STATE");
var T = Symbol("MENU_GROUP_STATE");
var _2 = Symbol("MENU_STATE");

// docs/node_modules/vexip-ui/es/components/menu/menu-item.mjs
var ze = defineAsyncComponent(() => import("./menu-group-U2HI7RZ4.js"));
var _e = defineComponent({
  name: "MenuItem",
  props: c,
  emits: [],
  setup(X, {
    slots: c2,
    expose: Y
  }) {
    const r = Kt("menuItem", X, {
      label: {
        default: null,
        static: true
      },
      icon: hn(),
      iconProps: null,
      disabled: false,
      transfer: null,
      trigger: null,
      transitionName: null,
      meta: null,
      children: {
        default: () => [],
        static: true
      },
      route: null
    }), e = inject(_2, null), l2 = inject(E, null), U = inject(T, null), a2 = Yt("menu"), Z = Jt(), D = Ot(), {
      isRtl: N2
    } = Fr(), p4 = a2.be("item"), L2 = ref(N2.value ? "left-start" : "right-start"), i2 = ref(false), T2 = ref(false), R = ref(false), v = ref(false), z2 = computed(() => ((l2 == null ? void 0 : l2.indent) ?? 0) + 1), _3 = computed(() => r.transfer ?? (e == null ? void 0 : e.transfer) ?? false), F = computed(() => l2 ? l2.transfer : false), I2 = computed(() => !F.value && _3.value), S2 = computed(() => (e == null ? void 0 : e.markerType) || "right"), A = jr(se), H2 = ref(), {
      reference: ee,
      transferTo: O,
      updatePopper: le
    } = ao({
      placement: L2,
      transfer: I2,
      wrapper: A,
      popper: computed(() => {
        var o;
        return (o = H2.value) == null ? void 0 : o.wrapper;
      }),
      shift: {
        crossAxis: true
      }
    }), d = computed(() => {
      var o;
      return !!(c2.group || (o = r.children) != null && o.length);
    }), b2 = computed(() => d.value && i2.value), oe = computed(() => ({
      [p4]: true,
      [`${p4}--disabled`]: r.disabled,
      [`${p4}--group-visible`]: b2.value,
      [`${p4}--selected`]: T2.value,
      [`${p4}--no-icon`]: !r.icon,
      [`${p4}--son-selected`]: R.value
    })), re = computed(() => {
      if (e != null && e.horizontal || l2 != null && l2.isUsePopper)
        return {};
      const o = a2.gcv("indent-width"), s2 = z2.value + (e != null && e.isReduced ? 0 : (U == null ? void 0 : U.indent) ?? 0) * 0.25;
      return {
        paddingInlineStart: l2 && l2.isUsePopper ? void 0 : `calc(${o} * ${s2})`
      };
    }), f = computed(() => e && (e.horizontal || e.groupType === "dropdown") || d.value && (e == null ? void 0 : e.isReduced) && !l2 || !!(l2 != null && l2.isUsePopper)), ne = computed(() => d.value || !!(l2 != null && l2.isUsePopper || e && !e.isReduced)), ae = computed(() => !!(e != null && e.tooltipReverse)), y = computed(() => (e == null ? void 0 : e.horizontal) && !l2), ue = computed(() => r.transitionName ?? y.value ? a2.ns("drop") : a2.ns("zoom")), P2 = computed(() => r.trigger || (e == null ? void 0 : e.trigger) || "hover"), C = reactive({
      el: A,
      label: toRef(r, "label"),
      indent: z2,
      groupExpanded: i2,
      showGroup: b2,
      isUsePopper: f,
      parentState: l2,
      transfer: computed(() => F.value || _3.value),
      cachedExpanded: i2.value,
      updateSonSelected: ie,
      toggleGroupExpanded: K,
      handleMouseEnter: k,
      handleMouseLeave: x
    });
    provide(E, C), watch(b2, (o) => {
      o && f.value && (v.value = true, le());
    }, {
      immediate: true
    }), watch(T2, (o) => {
      o && sn(r.onSelect), e == null || e.doForEachItem((s2) => s2.updateSonSelected(false, false)), o && nextTick(() => {
        l2 == null || l2.updateSonSelected(o);
      });
    }), watch(i2, (o) => {
      typeof (e == null ? void 0 : e.handleExpand) == "function" && e.handleExpand(r.label, o, r.meta || {});
    }), watch(y, (o) => {
      L2.value = o ? "bottom" : N2.value ? "left-start" : "right-start";
    }, {
      immediate: true
    }), e && (watch([() => r.label, () => e.currentActive], () => {
      T2.value = r.label === e.currentActive;
    }, {
      immediate: true
    }), typeof e.increaseItem == "function" && e.increaseItem(C)), onBeforeUnmount(() => {
      typeof (e == null ? void 0 : e.decreaseItem) == "function" && e.decreaseItem(C);
    }), Y({
      groupExpanded: i2,
      isGroup: d,
      showGroup: b2,
      isUsePopper: f,
      handleSelect: M,
      handleMouseEnter: k,
      handleMouseLeave: x
    });
    function ie(o, s2 = true) {
      R.value = o, s2 && (l2 == null || l2.updateSonSelected(o));
    }
    const {
      timer: h2
    } = $r();
    function M() {
      if (clearTimeout(h2.hover), !r.disabled)
        if (d.value) {
          if (f.value && P2.value !== "click")
            return;
          e == null || e.doForEachItem((o) => {
            e.accordion && (o.groupExpanded = false);
          }), i2.value = !i2.value;
        } else
          f.value && K(false, true), e && e.handleSelect(r.label, r.meta || {}, r.route), T2.value = true;
    }
    function K(o, s2 = false) {
      clearTimeout(h2.hover), e == null || e.doForEachItem((n2) => {
        e.accordion && (n2.groupExpanded = false);
      }), i2.value = o, s2 && typeof (l2 == null ? void 0 : l2.toggleGroupExpanded) == "function" && l2.toggleGroupExpanded(o, s2);
    }
    let w = false, $ = false;
    function k() {
      if (clearTimeout(h2.hover), !(w || !f.value || P2.value !== "hover")) {
        if (!i2.value && v.value) {
          $ = true;
          return;
        }
        typeof (l2 == null ? void 0 : l2.handleMouseEnter) == "function" && l2.handleMouseEnter(), !(r.disabled || !d.value) && (h2.hover = setTimeout(() => {
          i2.value = true;
        }, D.value));
      }
    }
    function x() {
      clearTimeout(h2.hover), !(w || !v.value || !f.value || P2.value !== "hover") && (typeof (l2 == null ? void 0 : l2.handleMouseLeave) == "function" && l2.handleMouseLeave(), !(r.disabled || !d.value) && (h2.hover = setTimeout(() => {
        i2.value = false;
      }, D.value)));
    }
    function se() {
      f.value && P2.value === "click" && nextTick(() => {
        i2.value = false;
      });
    }
    function te() {
      if (v.value = false, i2.value = false, $) {
        if ($ = false, typeof (l2 == null ? void 0 : l2.handleMouseEnter) == "function" && l2.handleMouseEnter(), r.disabled || !d.value)
          return;
        i2.value = true;
      }
    }
    function ce(o) {
      const s2 = o.code || o.key;
      s2 === "Enter" || s2 === "NumpadEnter" ? (o.stopPropagation(), M()) : s2 === "Space" && (o.stopPropagation(), o.preventDefault(), M());
    }
    function j() {
      var s2;
      if (!((s2 = r.children) != null && s2.length))
        return null;
      const o = (n2) => createVNode(_e, {
        label: n2.label,
        icon: n2.icon,
        "icon-props": n2.iconProps,
        disabled: n2.disabled,
        children: n2.children,
        route: n2.route,
        meta: n2.meta
      }, {
        default: () => [n2.name ? eo(n2.name) : n2.label]
      });
      return r.children.map((n2) => n2.group ? createVNode(ze, {
        key: n2.label,
        label: n2.name ? eo(n2.name) : n2.label
      }, {
        default: () => {
          var B;
          return [(B = n2.children) == null ? void 0 : B.map(o)];
        }
      }) : o(n2));
    }
    function de() {
      return createVNode(ke, {
        placement: N2.value ? "left" : "right",
        reverse: ae.value,
        shift: true,
        transfer: true,
        disabled: ne.value
      }, {
        trigger: () => createVNode("div", {
          ref: ee,
          class: {
            [a2.be("label")]: true,
            [a2.bem("label", `marker-${S2.value}`)]: true,
            [a2.bem("label", "in-popper")]: l2 == null ? void 0 : l2.isUsePopper
          },
          role: "menuitem",
          tabindex: 0,
          "aria-disabled": r.disabled ? "true" : void 0,
          style: re.value,
          onClick: M,
          onKeydown: ce,
          onMouseenter: k,
          onMouseleave: x
        }, [(c2.icon || r.icon) && createVNode("div", {
          class: a2.be("icon")
        }, [c2.icon ? renderSlot(c2, "icon") : createVNode(P, mergeProps(r.iconProps, {
          icon: r.icon
        }), null)]), createVNode("span", {
          class: {
            [a2.be("title")]: true,
            [a2.bem("title", "in-group")]: !y.value && d.value
          }
        }, [c2.default ? renderSlot(c2, "default") : r.label]), d.value && createVNode(P, mergeProps(Z.value.angleDown, {
          class: {
            [a2.be("arrow")]: true,
            [a2.bem("arrow", "visible")]: i2.value,
            [a2.bem("arrow", "")]: R.value
          }
        }), null)]),
        default: () => createVNode("span", {
          class: a2.be("tooltip-title")
        }, [c2.default ? renderSlot(c2, "default") : r.label])
      });
    }
    return () => createVNode("li", {
      ref: A,
      class: oe.value,
      role: "none"
    }, [de(), createVNode(L, {
      appear: true
    }, {
      default: () => [d.value && !f.value && withDirectives(createVNode("ul", {
        class: a2.be("list")
      }, [c2.group ? renderSlot(c2, "group") : j()]), [[vShow, b2.value]])]
    }), d.value && f.value && createVNode(z, {
      ref: H2,
      class: [a2.be("popper"), a2.bs("vars"), y.value && a2.bem("popper", "drop")],
      visible: v.value && b2.value,
      alive: !O.value || v.value,
      to: O.value,
      transition: ue.value,
      onAfterLeave: te,
      onMouseenter: () => (w = true, k()),
      onMouseleave: () => (w = false, x())
    }, {
      default: () => [createVNode("ul", {
        class: a2.be("list")
      }, [c2.group ? renderSlot(c2, "group") : j()])]
    })]);
  }
});

// docs/node_modules/vexip-ui/es/components/menu/menu-group.mjs
var I = defineComponent({
  name: "MenuGroup",
  props: {
    label: String,
    children: Array
  },
  setup(m, {
    slots: n2
  }) {
    const u = Kt("menuGroup", m, {
      label: {
        default: "",
        static: true
      },
      children: {
        default: () => [],
        static: true
      }
    }), o = inject(_2, null), r = inject(E, null), a2 = Yt("menu-group"), h2 = Yt("menu"), c2 = ref(1);
    r && (c2.value = r.indent + 1);
    const v = computed(() => ({
      paddingLeft: r != null && r.isUsePopper ? void 0 : `calc(${h2.gcv("indent-width")} * ${c2.value})`
    })), E2 = computed(() => (o == null ? void 0 : o.horizontal) && !r);
    provide(T, reactive({
      indent: c2
    }));
    function M() {
      return renderSlot(n2, "default", {}, () => {
        var i2;
        if (!((i2 = u.children) != null && i2.length))
          return [];
        const t2 = (e) => createVNode(_e, {
          label: e.label,
          icon: e.icon,
          "icon-props": e.iconProps,
          disabled: e.disabled,
          children: e.children,
          route: e.route,
          meta: e.meta
        }, {
          default: () => [e.name ? eo(e.name) : e.label]
        });
        return u.children.map((e) => e.group ? createVNode(I, {
          key: e.label,
          label: e.name ? eo(e.name) : e.label
        }, {
          default: () => {
            var p4;
            return [(p4 = e.children) == null ? void 0 : p4.map(t2)];
          }
        }) : t2(e));
      });
    }
    return () => {
      var t2;
      return E2.value ? (t2 = n2.default) == null ? void 0 : t2.call(n2) : createVNode("li", {
        class: a2.b()
      }, [createVNode("div", {
        class: a2.be("label")
      }, [createVNode("span", {
        class: a2.be("title"),
        style: v.value
      }, [n2.label ? n2.label() : u.label])]), createVNode("ul", {
        class: a2.be("list")
      }, [M()])]);
    };
  }
});

export {
  n,
  P,
  s,
  l,
  i,
  p,
  L,
  b,
  t,
  z,
  p2,
  ke,
  a,
  c,
  p3,
  E,
  _2 as _,
  I,
  _e
};
//# sourceMappingURL=chunk-QYGGJTQC.js.map
