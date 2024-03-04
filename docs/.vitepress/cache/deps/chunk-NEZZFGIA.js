// docs/node_modules/@vexip-ui/bem-helper/dist/index.mjs
var u = (e) => `--${e}`;
var _ = (e) => `var(--${e})`;
var f = (e, r) => `--${e}: ${r};`;
function c(e, r) {
  if (!r)
    return {
      b: () => `${e}`,
      be: ($) => `${e}__${$}`,
      bm: ($) => `${e}--${$}`,
      bem: ($, t) => `${e}__${$}--${t}`,
      bs: ($) => `${e}-${$}`,
      cb: () => `.${e}`,
      cbe: ($) => `.${e}__${$}`,
      cbm: ($) => `.${e}--${$}`,
      cbem: ($, t) => `.${e}__${$}--${t}`,
      cbs: ($) => `.${e}-${$}`,
      cv: ($) => u(`${e}-${$}`),
      cvm: ($, t = {}) => {
        for (const s of Object.keys($))
          t[u(`${e}-${s}`)] = $[s];
        return t;
      },
      gcv: ($) => _(`${e}-${$}`),
      scv: ($, t) => f(`${e}-${$}`, t)
    };
  const n = ($) => typeof r == "function" ? r($) : r;
  return {
    b: () => `${n()}-${e}`,
    be: ($) => `${n()}-${e}__${$}`,
    bm: ($) => `${n()}-${e}--${$}`,
    bem: ($, t) => `${n()}-${e}__${$}--${t}`,
    bs: ($) => `${n()}-${e}-${$}`,
    ns: ($) => `${n()}-${$}`,
    cb: () => `.${n()}-${e}`,
    cbe: ($) => `.${n()}-${e}__${$}`,
    cbm: ($) => `.${n()}-${e}--${$}`,
    cbem: ($, t) => `.${n()}-${e}__${$}--${t}`,
    cbs: ($) => `.${n()}-${e}-${$}`,
    cns: ($) => `.${n()}-${$}`,
    cv: ($) => u(`${n(true)}-${e}-${$}`),
    cvm: ($, t = {}) => {
      const s = n(true);
      for (const v of Object.keys($))
        t[u(`${s}-${e}-${v}`)] = $[v];
      return t;
    },
    gcv: ($) => _(`${n(true)}-${e}-${$}`),
    scv: ($, t) => f(`${n(true)}-${e}-${$}`, t),
    nv: ($) => u(`${n(true)}-${$}`),
    nvm: ($, t = {}) => {
      const s = n(true);
      for (const v of Object.keys($))
        t[u(`${s}-${v}`)] = $[v];
      return t;
    },
    gnv: ($) => _(`${n(true)}-${$}`),
    snv: ($, t) => f(`${n(true)}-${$}`, t)
  };
}

export {
  u,
  _,
  f,
  c
};
//# sourceMappingURL=chunk-NEZZFGIA.js.map
