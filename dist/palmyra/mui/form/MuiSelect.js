import { jsx as t, Fragment as c, jsxs as b } from "react/jsx-runtime";
import { forwardRef as C, useRef as d, useImperativeHandle as F } from "react";
import { FormControl as v, InputLabel as M, Select as O, MenuItem as x, FormHelperText as R } from "@mui/material";
import L from "./FieldDecorator.js";
import { useFieldManager as j, getFieldHandler as y } from "@palmyralabs/rt-forms";
import { getFieldLabel as H } from "./util.js";
const T = C(function(e, a) {
  const l = j(e.attribute, e), { getError: u, setValue: m, mutateOptions: f } = l, h = a || d(null), o = u(), i = d(null), g = e.variant || "standard";
  F(h, () => ({
    ...y(l),
    focus() {
      i && i.current.focus();
    },
    setOptions(s) {
    },
    getOptions() {
    }
  }), [l]);
  const r = l.getFieldProps();
  return e.readOnly && (r.inputProps = { readOnly: !0 }), r.onChange = (n) => {
    e.readOnly || m(n.target.value);
  }, /* @__PURE__ */ t(c, { children: !f.visible && /* @__PURE__ */ t(
    L,
    {
      label: H(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ b(v, { variant: g, fullWidth: !0, error: o.status, children: [
        e.label ? /* @__PURE__ */ t(M, { required: r.required, children: e.label }) : /* @__PURE__ */ t(c, {}),
        /* @__PURE__ */ t(O, { sx: {
          m: 0
        }, ...r, inputRef: (n) => {
          i.current = n;
        }, children: r ? Object.keys(r).map(
          (n, s) => /* @__PURE__ */ t(x, { value: n, children: r[n] }, s)
        ) : e.children ? e.children : /* @__PURE__ */ t("div", { children: "No options provided" }) }),
        /* @__PURE__ */ t(R, { className: "form-error-text", children: o.message })
      ] })
    }
  ) });
});
export {
  T as MuiSelect
};
