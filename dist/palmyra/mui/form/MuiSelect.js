import { jsx as n, Fragment as u, jsxs as v } from "react/jsx-runtime";
import { forwardRef as M, useRef as d, useImperativeHandle as O } from "react";
import { FormControl as x, InputLabel as R, Select as L, MenuItem as j, FormHelperText as y } from "@mui/material";
import { useFieldManager as H, getFieldHandler as I, FieldDecorator as P } from "@palmyralabs/rt-forms";
import { getFieldLabel as S } from "./util.js";
const D = M(function(e, o) {
  const l = H(e.attribute, e), { getError: m, getValue: f, setValue: h, mutateOptions: g, refreshError: C } = l, b = o || d(null), s = m(), c = e?.fieldProps?.size, a = d(null), F = e.variant || "standard";
  O(b, () => ({
    ...I(l),
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
    e.readOnly || (h(r.target.value), e.onChange && e.onChange(r, i));
  }, t.onBlur = C, /* @__PURE__ */ n(u, { children: !g.visible && /* @__PURE__ */ n(
    P,
    {
      label: S(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v(x, { variant: F, fullWidth: !0, error: s.status, size: c, children: [
        e.label ? /* @__PURE__ */ n(R, { required: t.required, size: c, children: e.label }) : /* @__PURE__ */ n(u, {}),
        /* @__PURE__ */ n(L, { sx: {
          m: 0
        }, ...t, value: f(), inputRef: (r) => {
          a.current = r;
        }, children: t.options ? Object.keys(t.options).map(
          (r, i) => /* @__PURE__ */ n(j, { value: r, children: t.options[r] }, i)
        ) : e.children ? e.children : /* @__PURE__ */ n("div", { children: "No options provided" }) }),
        /* @__PURE__ */ n(y, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  D as MuiSelect
};
