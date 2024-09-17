import { jsx as l, Fragment as I, jsxs as y } from "react/jsx-runtime";
import { forwardRef as L, useRef as w, useMemo as R, useState as E, useEffect as S, useImperativeHandle as H } from "react";
import { FormControl as j, FormControlLabel as A, FormHelperText as T, Switch as U } from "@mui/material";
import { useFieldManager as B, getFieldHandler as D, FieldDecorator as N } from "@palmyralabs/rt-forms";
import { getFieldLabel as P } from "./util.js";
import q from "./options/OptionsParser.js";
import { IOSSwitch as z, Android12Switch as G, MaterialUISwitch as J } from "./options/SwitchTypes.js";
const p = L(function(e, h) {
  const c = B(e.attribute, e), { getError: b, getValue: a, setValue: O, mutateOptions: F, refreshError: M } = c, v = h || w(null), m = b(), o = e.switch, s = R(
    () => q(e.options, e.label),
    [e.options, e.label]
  ), f = (t, d) => {
    var k = s.checked.value;
    return t != null && t != null ? k == t : k == d;
  }, [r, g] = E(f(a(), e.defaultValue)), u = w(null);
  S(() => {
    g(f(a(), e.defaultValue));
  }, [a()]), H(v, () => ({
    ...D(c),
    focus() {
      u.current.checked = !0, u.current.focus();
    },
    getOptions() {
    },
    setOptions(d) {
    }
  }), [c]);
  const V = () => {
    g(!r);
  };
  S(() => {
    i.onChange = () => C();
  }, [r]);
  const C = () => {
    var t = r ? "checked" : "unchecked";
    return s[t].title;
  }, x = () => {
    var t = r ? "checked" : "unchecked";
    return s[t].value;
  };
  let n;
  o == "IOSSwitch" ? n = z : o == "Android12Switch" ? n = G : o == "MaterialUISwitch" ? n = J : n = U;
  var i = c.getFieldProps();
  return i.onChange = (t, d) => {
    e.readOnly || (O(t.target.checked), e.onChange && e.onChange(t, t.target.checked));
  }, i.onBlur = M, /* @__PURE__ */ l(I, { children: !F.visible && /* @__PURE__ */ l(
    N,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ y(j, { error: m.status, ...i, value: a(), children: [
        /* @__PURE__ */ l(
          A,
          {
            value: x(),
            inputRef: (t) => {
              u.current = t;
            },
            control: /* @__PURE__ */ l(
              n,
              {
                sx: { m: 1 },
                checked: r,
                onClick: V,
                disabled: e.readOnly
              }
            ),
            label: C()
          }
        ),
        /* @__PURE__ */ l(T, { className: "form-error-text", children: m.message })
      ] })
    }
  ) });
});
export {
  p as MuiSwitch
};
