import { jsx as r, Fragment as c, jsxs as b } from "react/jsx-runtime";
import { forwardRef as F, useRef as u, useImperativeHandle as v } from "react";
import { FormControl as M, InputLabel as O, Select as x, MenuItem as R, FormHelperText as L } from "@mui/material";
import j from "./FieldDecorator.js";
import { useFieldManager as y, getFieldHandler as H } from "@palmyralabs/rt-forms";
import { getFieldLabel as I } from "./util.js";
const T = F(function(e, o) {
  const l = y(e.attribute, e), { getError: d, getValue: m, setValue: f, mutateOptions: g } = l, h = o || u(null), s = d(), i = u(null), C = e.variant || "standard";
  v(h, () => ({
    ...H(l),
    focus() {
      i && i.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [l]);
  var n = l.getFieldProps();
  return e.readOnly && (n.inputProps = { readOnly: !0 }), n.onChange = (t, a) => {
    e.readOnly || (f(t.target.value), e.onChange && e.onChange(t, a));
  }, /* @__PURE__ */ r(c, { children: !g.visible && /* @__PURE__ */ r(
    j,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ b(M, { variant: C, fullWidth: !0, error: s.status, children: [
        e.label ? /* @__PURE__ */ r(O, { required: n.required, children: e.label }) : /* @__PURE__ */ r(c, {}),
        /* @__PURE__ */ r(x, { sx: {
          m: 0
        }, ...n, value: m(), inputRef: (t) => {
          i.current = t;
        }, children: n ? Object.keys(n).map(
          (t, a) => /* @__PURE__ */ r(R, { value: t, children: n[t] }, a)
        ) : e.children ? e.children : /* @__PURE__ */ r("div", { children: "No options provided" }) }),
        /* @__PURE__ */ r(L, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  T as MuiSelect
};
