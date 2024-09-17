import { jsx as n, Fragment as u, jsxs as F } from "react/jsx-runtime";
import { forwardRef as v, useRef as c, useImperativeHandle as M } from "react";
import { FormControl as O, InputLabel as x, Select as R, MenuItem as L, FormHelperText as j } from "@mui/material";
import { useFieldManager as y, getFieldHandler as H, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { getFieldLabel as S } from "./util.js";
const D = v(function(e, o) {
  const l = y(e.attribute, e), { getError: d, getValue: m, setValue: f, mutateOptions: h, refreshError: g } = l, C = o || c(null), s = d(), a = c(null), b = e.variant || "standard";
  M(C, () => ({
    ...H(l),
    focus() {
      a && a.current.focus();
    },
    setOptions(i) {
    },
    getOptions() {
    }
  }), [l]);
  var t = l.getFieldProps();
  return e.readOnly && (t.inputProps = { readOnly: !0 }), t.onChange = (r, i) => {
    e.readOnly || (f(r.target.value), e.onChange && e.onChange(r, i));
  }, t.onBlur = g, /* @__PURE__ */ n(u, { children: !h.visible && /* @__PURE__ */ n(
    I,
    {
      label: S(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ F(O, { variant: b, fullWidth: !0, error: s.status, children: [
        e.label ? /* @__PURE__ */ n(x, { required: t.required, children: e.label }) : /* @__PURE__ */ n(u, {}),
        /* @__PURE__ */ n(R, { sx: {
          m: 0
        }, ...t, value: m(), inputRef: (r) => {
          a.current = r;
        }, children: t.options ? Object.keys(t.options).map(
          (r, i) => /* @__PURE__ */ n(L, { value: r, children: t.options[r] }, i)
        ) : e.children ? e.children : /* @__PURE__ */ n("div", { children: "No options provided" }) }),
        /* @__PURE__ */ n(j, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  D as MuiSelect
};
