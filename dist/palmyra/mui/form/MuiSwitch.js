import { jsx as l, Fragment as x, jsxs as I } from "react/jsx-runtime";
import { forwardRef as y, useRef as S, useMemo as L, useState as R, useEffect as b, useImperativeHandle as H } from "react";
import { FormControl as j, FormControlLabel as A, FormHelperText as E, Switch as P } from "@mui/material";
import T from "./FieldDecorator.js";
import { useFieldManager as U, getFieldHandler as D } from "@palmyralabs/rt-forms";
import { generateOptions as N, getFieldLabel as q } from "./util.js";
import z from "./options/OptionsParser.js";
import { IOSSwitch as B, Android12Switch as G, MaterialUISwitch as J } from "./options/SwitchTypes.js";
const ee = y(function(e, d) {
  const a = U(e.attribute, e), { getError: k, getValue: i, setValue: F, mutateOptions: m } = a, v = d || S(null), h = k(), o = e.switch, s = L(
    () => z(e.options, e.label),
    [e.options, e.label]
  ), f = (t, C) => {
    var O = s.checked.value;
    return t != null && t != null ? O == t : O == C;
  }, [n, g] = R(f(i(), e.defaultValue)), u = S(null);
  b(() => {
    g(f(i(), e.defaultValue));
  }, [i()]), H(v, () => ({
    ...D(a),
    focus() {
      u.current.checked = !0, u.current.focus();
    },
    getOptions() {
    },
    setOptions(C) {
    }
  }), [a]);
  const M = () => {
    g(!n);
  };
  b(() => {
    c.onChange = () => w();
  }, [n]);
  const w = () => {
    var t = n ? "checked" : "unchecked";
    return s[t].title;
  }, V = () => {
    var t = n ? "checked" : "unchecked";
    return s[t].value;
  };
  let r;
  o == "IOSSwitch" ? r = B : o == "Android12Switch" ? r = G : o == "MaterialUISwitch" ? r = J : r = P;
  var c = N(e, m, i());
  return delete c.muiProps, c.onChange = (t) => {
    e.readOnly || F(t.target.checked);
  }, /* @__PURE__ */ l(x, { children: !m.visible && /* @__PURE__ */ l(
    T,
    {
      label: q(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ I(j, { error: h.status, ...c, ...e.muiProps, children: [
        /* @__PURE__ */ l(
          A,
          {
            value: V(),
            inputRef: (t) => {
              u.current = t;
            },
            control: /* @__PURE__ */ l(
              r,
              {
                sx: { m: 1 },
                checked: n,
                onClick: M,
                disabled: e.readOnly
              }
            ),
            label: w()
          }
        ),
        /* @__PURE__ */ l(E, { className: "form-error-text", children: h.message })
      ] })
    }
  ) });
});
export {
  ee as MuiSwitch
};
