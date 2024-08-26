import { jsx as n, Fragment as c, jsxs as b } from "react/jsx-runtime";
import { forwardRef as F, useRef as u, useImperativeHandle as v } from "react";
import { FormControl as M, InputLabel as O, Select as x, MenuItem as R, FormHelperText as L } from "@mui/material";
import j from "./FieldDecorator.js";
import { useFieldManager as y, getFieldHandler as H } from "@palmyralabs/rt-forms";
import { getFieldLabel as I } from "./util.js";
const T = F(function(e, o) {
  const l = y(e.attribute, e), { getError: d, getValue: m, setValue: f, mutateOptions: g } = l, h = o || u(null), s = d(), a = u(null), C = e.variant || "standard";
  v(h, () => ({
    ...H(l),
    focus() {
      a && a.current.focus();
    },
    setOptions(i) {
    },
    getOptions() {
    }
  }), [l]);
  var r = l.getFieldProps();
  return e.readOnly && (r.inputProps = { readOnly: !0 }), r.onChange = (t, i) => {
    e.readOnly || (f(t.target.value), e.onChange && e.onChange(t, i));
  }, /* @__PURE__ */ n(c, { children: !g.visible && /* @__PURE__ */ n(
    j,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ b(M, { variant: C, fullWidth: !0, error: s.status, children: [
        e.label ? /* @__PURE__ */ n(O, { required: r.required, children: e.label }) : /* @__PURE__ */ n(c, {}),
        /* @__PURE__ */ n(x, { sx: {
          m: 0
        }, ...r, value: m(), inputRef: (t) => {
          a.current = t;
        }, children: r.options ? Object.keys(r.options).map(
          (t, i) => /* @__PURE__ */ n(R, { value: t, children: r.options[t] }, i)
        ) : e.children ? e.children : /* @__PURE__ */ n("div", { children: "No options provided" }) }),
        /* @__PURE__ */ n(L, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  T as MuiSelect
};
