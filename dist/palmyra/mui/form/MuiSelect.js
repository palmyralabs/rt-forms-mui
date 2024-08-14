import { jsx as t, Fragment as c, jsxs as v } from "react/jsx-runtime";
import { forwardRef as C, useRef as u, useImperativeHandle as F } from "react";
import { FormControl as M, InputLabel as O, Select as x, MenuItem as R, FormHelperText as L } from "@mui/material";
import j from "./FieldDecorator.js";
import { useFieldManager as y, getFieldHandler as H } from "@palmyralabs/rt-forms";
import { getFieldLabel as I } from "./util.js";
const T = C(function(e, i) {
  const n = y(e.attribute, e), { getError: d, getValue: m, setValue: f, mutateOptions: g } = n, h = i || u(null), o = d(), a = u(null), b = e.variant || "standard";
  F(h, () => ({
    ...H(n),
    focus() {
      a && a.current.focus();
    },
    setOptions(s) {
    },
    getOptions() {
    }
  }), [n]);
  var r = n.getFieldProps();
  return e.readOnly && (r.inputProps = { readOnly: !0 }), r.onChange = (l) => {
    e.readOnly || f(l.target.value);
  }, /* @__PURE__ */ t(c, { children: !g.visible && /* @__PURE__ */ t(
    j,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v(M, { variant: b, fullWidth: !0, error: o.status, children: [
        e.label ? /* @__PURE__ */ t(O, { required: r.required, children: e.label }) : /* @__PURE__ */ t(c, {}),
        /* @__PURE__ */ t(x, { sx: {
          m: 0
        }, ...r, value: m(), inputRef: (l) => {
          a.current = l;
        }, children: r ? Object.keys(r).map(
          (l, s) => /* @__PURE__ */ t(R, { value: l, children: r[l] }, s)
        ) : e.children ? e.children : /* @__PURE__ */ t("div", { children: "No options provided" }) }),
        /* @__PURE__ */ t(L, { className: "form-error-text", children: o.message })
      ] })
    }
  ) });
});
export {
  T as MuiSelect
};
