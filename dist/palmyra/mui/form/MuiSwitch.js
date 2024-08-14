import { jsx as n, Fragment as x, jsxs as I } from "react/jsx-runtime";
import { forwardRef as y, useRef as S, useMemo as L, useState as R, useEffect as b, useImperativeHandle as H } from "react";
import { FormControl as j, FormControlLabel as A, FormHelperText as E, Switch as T } from "@mui/material";
import U from "./FieldDecorator.js";
import { useFieldManager as D, getFieldHandler as N } from "@palmyralabs/rt-forms";
import { getFieldLabel as P } from "./util.js";
import q from "./options/OptionsParser.js";
import { IOSSwitch as z, Android12Switch as B, MaterialUISwitch as G } from "./options/SwitchTypes.js";
const p = y(function(e, d) {
  const c = D(e.attribute, e), { getError: k, getValue: a, setValue: O, mutateOptions: F } = c, v = d || S(null), m = k(), i = e.switch, o = L(
    () => q(e.options, e.label),
    [e.options, e.label]
  ), h = (t, w) => {
    var C = o.checked.value;
    return t != null && t != null ? C == t : C == w;
  }, [r, f] = R(h(a(), e.defaultValue)), s = S(null);
  b(() => {
    f(h(a(), e.defaultValue));
  }, [a()]), H(v, () => ({
    ...N(c),
    focus() {
      s.current.checked = !0, s.current.focus();
    },
    getOptions() {
    },
    setOptions(w) {
    }
  }), [c]);
  const M = () => {
    f(!r);
  };
  b(() => {
    u.onChange = () => g();
  }, [r]);
  const g = () => {
    var t = r ? "checked" : "unchecked";
    return o[t].title;
  }, V = () => {
    var t = r ? "checked" : "unchecked";
    return o[t].value;
  };
  let l;
  i == "IOSSwitch" ? l = z : i == "Android12Switch" ? l = B : i == "MaterialUISwitch" ? l = G : l = T;
  var u = c.getFieldProps();
  return u.onChange = (t) => {
    e.readOnly || O(t.target.checked);
  }, /* @__PURE__ */ n(x, { children: !F.visible && /* @__PURE__ */ n(
    U,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ I(j, { error: m.status, ...u, value: a(), children: [
        /* @__PURE__ */ n(
          A,
          {
            value: V(),
            inputRef: (t) => {
              s.current = t;
            },
            control: /* @__PURE__ */ n(
              l,
              {
                sx: { m: 1 },
                checked: r,
                onClick: M,
                disabled: e.readOnly
              }
            ),
            label: g()
          }
        ),
        /* @__PURE__ */ n(E, { className: "form-error-text", children: m.message })
      ] })
    }
  ) });
});
export {
  p as MuiSwitch
};
