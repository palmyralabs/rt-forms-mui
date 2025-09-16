import { jsx as l, Fragment as h } from "react/jsx-runtime";
import { forwardRef as v, useRef as u, useImperativeHandle as x } from "react";
import { TextField as M } from "@mui/material";
import { useFieldManager as O, getFieldHandler as R, FieldDecorator as y } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
const j = v(function(e, n) {
  const t = O(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f, refreshError: g } = t, C = n || u(null), o = c(), i = u(null), F = e?.variant || "standard";
  x(C, () => ({
    ...R(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  var a = t.getFieldProps();
  return a.onChange = (r) => {
    if (!e.readOnly) {
      const b = r.target.value, s = r.target.value.replace(/[^\d\.\+\-]/g, "");
      b == s && (m(s), e.onChange && e.onChange(r));
    }
  }, a.onBlur = g, /* @__PURE__ */ l(h, { children: !f.visible && /* @__PURE__ */ l(
    y,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        M,
        {
          label: e.label,
          variant: F,
          fullWidth: !0,
          inputProps: { readOnly: a.readOnly },
          inputRef: i,
          ...a,
          value: d(),
          error: o.status,
          helperText: o.message
        }
      )
    }
  ) });
});
export {
  j as MuiNumberField
};
