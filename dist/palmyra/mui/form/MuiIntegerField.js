import { jsx as l, Fragment as h } from "react/jsx-runtime";
import { forwardRef as b, useRef as s, useImperativeHandle as v } from "react";
import { TextField as x } from "@mui/material";
import { useFieldManager as M, getFieldHandler as R, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
const w = b(function(e, n) {
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
      F == u && (m(u), e.onChange && e.onChange(a));
    }
  }, /* @__PURE__ */ l(h, { children: !f.visible && /* @__PURE__ */ l(
    I,
    {
      label: L(e),
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
  w as MuiIntegerField
};
