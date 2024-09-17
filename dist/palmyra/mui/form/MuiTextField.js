import { jsx as r, Fragment as F } from "react/jsx-runtime";
import { forwardRef as h, useRef as s, useImperativeHandle as b } from "react";
import { TextField as v } from "@mui/material";
import { useFieldManager as x, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as T } from "./util.js";
const w = h(function(e, n) {
  const t = x(e.attribute, e), { getError: u, getValue: c, setValue: d, mutateOptions: m, refreshError: f } = t, g = n || s(null), o = u(), i = s(null), C = e.variant || "standard";
  b(g, () => ({
    ...M(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  var a = t.getFieldProps();
  return a.onChange = (l) => {
    e.readOnly || (d(l.target.value), e.onChange && e.onChange(l));
  }, a.onBlur = f, /* @__PURE__ */ r(F, { children: !m.visible && /* @__PURE__ */ r(
    R,
    {
      label: T(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        v,
        {
          label: e.label,
          variant: C,
          fullWidth: !0,
          inputRef: i,
          ...a,
          value: c(),
          error: o.status,
          helperText: o.message
        }
      )
    }
  ) });
});
export {
  w as MuiTextField
};
