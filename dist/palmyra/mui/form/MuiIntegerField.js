import { jsx as l, Fragment as h } from "react/jsx-runtime";
import { forwardRef as b, useRef as s, useImperativeHandle as v } from "react";
import { TextField as x } from "@mui/material";
import { useFieldManager as M, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as I } from "./util.js";
import L from "./FieldDecorator.js";
const y = b(function(e, n) {
  const t = M(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f } = t, g = n || s(null), r = c(), i = s(null), C = (e == null ? void 0 : e.variant) || "standard";
  v(g, () => ({
    ...R(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  var o = t.getFieldProps();
  return o.onChange = (a) => {
    if (!e.readOnly) {
      const F = a.target.value, u = a.target.value.replace(/\D/g, "");
      F != u && (m(u), e.onChange && e.onChange(a));
    }
  }, /* @__PURE__ */ l(h, { children: !f.visible && /* @__PURE__ */ l(
    L,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        x,
        {
          label: e.label,
          variant: C,
          fullWidth: !0,
          inputRef: i,
          ...o,
          value: d(),
          error: r.status,
          helperText: r.message
        }
      )
    }
  ) });
});
export {
  y as MuiIntegerField
};
