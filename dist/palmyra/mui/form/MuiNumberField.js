import { jsx as n, Fragment as b } from "react/jsx-runtime";
import { forwardRef as h, useRef as s, useImperativeHandle as v } from "react";
import { TextField as x } from "@mui/material";
import { useFieldManager as M, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import H from "./FieldDecorator.js";
const y = h(function(e, r) {
  const t = M(e.attribute, e), { getError: c, getValue: m, setValue: d, mutateOptions: f } = t, g = r || s(null), i = c(), o = s(null), C = (e == null ? void 0 : e.variant) || "standard";
  v(g, () => ({
    ...R(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var l = t.getFieldProps();
  return delete l.muiProps, l.onChange = (a) => {
    if (!e.readOnly) {
      const F = a.target.value, u = a.target.value.replace(/[^\d\.\+\-]/g, "");
      F == u && (d(u), e.onChange && e.onChange(a));
    }
  }, /* @__PURE__ */ n(b, { children: !f.visible && /* @__PURE__ */ n(
    H,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        x,
        {
          label: e.label,
          variant: C,
          fullWidth: !0,
          inputRef: o,
          ...l,
          value: m(),
          error: i.status,
          helperText: i.message
        }
      )
    }
  ) });
});
export {
  y as MuiNumberField
};
