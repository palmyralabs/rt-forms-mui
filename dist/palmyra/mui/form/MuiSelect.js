import { jsx as t, Fragment as d, jsxs as v } from "react/jsx-runtime";
import { forwardRef as F, useRef as m, useImperativeHandle as O } from "react";
import { FormControl as M, InputLabel as x, Select as P, MenuItem as R, FormHelperText as L } from "@mui/material";
import j from "./FieldDecorator.js";
import { useFieldManager as y, getFieldHandler as H } from "@palmyralabs/rt-forms";
import { generateOptions as I, getFieldLabel as S } from "./util.js";
const k = F(function(e, o) {
  const l = y(e.attribute, e), { getError: f, getValue: g, setValue: h, mutateOptions: s } = l, b = o || m(null), u = f(), i = m(null), C = e.muiProps.variant || "standard";
  O(b, () => ({
    ...H(l),
    focus() {
      i && i.current.focus();
    },
    setOptions(c) {
    },
    getOptions() {
    }
  }), [l]);
  const a = e.options;
  var n = I(e, s, g());
  return e.readOnly && (n.inputProps = { readOnly: !0 }), n.onChange = (r) => {
    e.readOnly || h(r.target.value);
  }, /* @__PURE__ */ t(d, { children: !s.visible && /* @__PURE__ */ t(
    j,
    {
      label: S(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v(M, { variant: C, fullWidth: !0, error: u.status, children: [
        e.label ? /* @__PURE__ */ t(x, { required: n.required, children: e.label }) : /* @__PURE__ */ t(d, {}),
        /* @__PURE__ */ t(P, { sx: {
          m: 0
        }, ...n, inputRef: (r) => {
          i.current = r;
        }, children: a ? Object.keys(a).map(
          (r, c) => /* @__PURE__ */ t(R, { value: r, children: a[r] }, c)
        ) : e.muiProps.children ? e.muiProps.children : /* @__PURE__ */ t("div", { children: "No options provided" }) }),
        /* @__PURE__ */ t(L, { className: "form-error-text", children: u.message })
      ] })
    }
  ) });
});
export {
  k as MuiSelect
};
