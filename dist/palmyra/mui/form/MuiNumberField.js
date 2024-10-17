import { jsx as r, Fragment as h } from "react/jsx-runtime";
import { forwardRef as v, useRef as s, useImperativeHandle as x } from "react";
import { TextField as M } from "@mui/material";
import { useFieldManager as O, getFieldHandler as R, FieldDecorator as y } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
const j = v(function(e, n) {
  const t = O(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f, refreshError: g } = t, C = n || s(null), i = c(), u = s(null), F = (e == null ? void 0 : e.variant) || "standard";
  x(C, () => ({
    ...R(t),
    focus() {
      u.current.focus();
    }
  }), [t]);
  var a = t.getFieldProps();
  return a.onChange = (l) => {
    if (!e.readOnly) {
      const b = l.target.value, o = l.target.value.replace(/[^\d\.\+\-]/g, "");
      b == o && (m(o), e.onChange && e.onChange(l));
    }
  }, a.onBlur = g, /* @__PURE__ */ r(h, { children: !f.visible && /* @__PURE__ */ r(
    y,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        M,
        {
          label: e.label,
          variant: F,
          fullWidth: !0,
          inputProps: { readOnly: a.readOnly },
          inputRef: u,
          ...a,
          value: d(),
          error: i.status,
          helperText: i.message
        }
      )
    }
  ) });
});
export {
  j as MuiNumberField
};
