import { jsx as r, Fragment as h } from "react/jsx-runtime";
import { forwardRef as v, useRef as s, useImperativeHandle as x } from "react";
import { TextField as M } from "@mui/material";
import { useFieldManager as R, getFieldHandler as L, FieldDecorator as E } from "@palmyralabs/rt-forms";
import { getFieldLabel as H } from "./util.js";
const y = v(function(e, n) {
  const t = R(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f, refreshError: g } = t, C = n || s(null), i = c(), u = s(null), F = (e == null ? void 0 : e.variant) || "standard";
  x(C, () => ({
    ...L(t),
    focus() {
      u.current.focus();
    }
  }), [t]);
  var l = t.getFieldProps();
  return l.onChange = (a) => {
    if (!e.readOnly) {
      const b = a.target.value, o = a.target.value.replace(/[^\d\.\+\-]/g, "");
      b == o && (m(o), e.onChange && e.onChange(a));
    }
  }, l.onBlur = g, /* @__PURE__ */ r(h, { children: !f.visible && /* @__PURE__ */ r(
    E,
    {
      label: H(e),
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
  y as MuiNumberField
};
