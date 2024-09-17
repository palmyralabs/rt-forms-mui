import { jsx as n, Fragment as b } from "react/jsx-runtime";
import { forwardRef as v, useRef as s, useImperativeHandle as x } from "react";
import { TextField as M } from "@mui/material";
import { useFieldManager as R, getFieldHandler as I, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { getFieldLabel as D } from "./util.js";
const w = v(function(e, r) {
  const t = R(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f, refreshError: g } = t, C = r || s(null), i = c(), o = s(null), F = (e == null ? void 0 : e.variant) || "standard";
  x(C, () => ({
    ...I(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var l = t.getFieldProps();
  return l.onChange = (a) => {
    if (!e.readOnly) {
      const h = a.target.value, u = a.target.value.replace(/\D/g, "");
      h == u && (m(u), e.onChange && e.onChange(a));
    }
  }, l.onBlur = g, /* @__PURE__ */ n(b, { children: !f.visible && /* @__PURE__ */ n(
    L,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        M,
        {
          label: e.label,
          variant: F,
          fullWidth: !0,
          inputRef: o,
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
  w as MuiIntegerField
};
