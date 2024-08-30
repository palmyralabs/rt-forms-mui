import { jsx as n, Fragment as b } from "react/jsx-runtime";
import { forwardRef as h, useRef as s, useImperativeHandle as v } from "react";
import { TextField as x } from "@mui/material";
import { useFieldManager as M, getFieldHandler as R, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { getFieldLabel as H } from "./util.js";
const w = h(function(e, r) {
  const t = M(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f } = t, g = r || s(null), i = c(), u = s(null), C = (e == null ? void 0 : e.variant) || "standard";
  v(g, () => ({
    ...R(t),
    focus() {
      u.current.focus();
    }
  }), [t]);
  var l = t.getFieldProps();
  return delete l.muiProps, l.onChange = (a) => {
    if (!e.readOnly) {
      const F = a.target.value, o = a.target.value.replace(/[^\d\.\+\-]/g, "");
      F == o && (m(o), e.onChange && e.onChange(a));
    }
  }, /* @__PURE__ */ n(b, { children: !f.visible && /* @__PURE__ */ n(
    L,
    {
      label: H(e),
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
          inputRef: u,
          ...l,
          value: d(),
          error: i.status,
          helperText: i.message
        }
      )
    }
  ) });
});
export {
  w as MuiNumberField
};
