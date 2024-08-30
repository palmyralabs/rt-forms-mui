import { jsx as c, Fragment as x, jsxs as I } from "react/jsx-runtime";
import { forwardRef as y, useRef as w, useMemo as L, useState as R, useEffect as S, useImperativeHandle as H } from "react";
import { FormControl as j, FormControlLabel as A, FormHelperText as E, Switch as T } from "@mui/material";
import { useFieldManager as U, getFieldHandler as D, FieldDecorator as N } from "@palmyralabs/rt-forms";
import { getFieldLabel as P } from "./util.js";
import q from "./options/OptionsParser.js";
import { IOSSwitch as z, Android12Switch as B, MaterialUISwitch as G } from "./options/SwitchTypes.js";
const $ = y(function(e, h) {
  const r = U(e.attribute, e), { getError: b, getValue: a, setValue: O, mutateOptions: F } = r, M = h || w(null), m = b(), i = e.switch, o = L(
    () => q(e.options, e.label),
    [e.options, e.label]
  ), f = (t, d) => {
    var k = o.checked.value;
    return t != null && t != null ? k == t : k == d;
  }, [n, g] = R(f(a(), e.defaultValue)), s = w(null);
  S(() => {
    g(f(a(), e.defaultValue));
  }, [a()]), H(M, () => ({
    ...D(r),
    focus() {
      s.current.checked = !0, s.current.focus();
    },
    getOptions() {
    },
    setOptions(d) {
    }
  }), [r]);
  const v = () => {
    g(!n);
  };
  S(() => {
    u.onChange = () => C();
  }, [n]);
  const C = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].title;
  }, V = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].value;
  };
  let l;
  i == "IOSSwitch" ? l = z : i == "Android12Switch" ? l = B : i == "MaterialUISwitch" ? l = G : l = T;
  var u = r.getFieldProps();
  return u.onChange = (t, d) => {
    e.readOnly || (O(t.target.checked), e.onChange && e.onChange(t, t.target.checked));
  }, /* @__PURE__ */ c(x, { children: !F.visible && /* @__PURE__ */ c(
    N,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ I(j, { error: m.status, ...u, value: a(), children: [
        /* @__PURE__ */ c(
          A,
          {
            value: V(),
            inputRef: (t) => {
              s.current = t;
            },
            control: /* @__PURE__ */ c(
              l,
              {
                sx: { m: 1 },
                checked: n,
                onClick: v,
                disabled: e.readOnly
              }
            ),
            label: C()
          }
        ),
        /* @__PURE__ */ c(E, { className: "form-error-text", children: m.message })
      ] })
    }
  ) });
});
export {
  $ as MuiSwitch
};
