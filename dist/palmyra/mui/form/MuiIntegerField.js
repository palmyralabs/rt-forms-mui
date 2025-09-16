import { jsx as n, Fragment as b } from "react/jsx-runtime";
import { forwardRef as x, useRef as u, useImperativeHandle as I } from "react";
import { TextField as M } from "@mui/material";
import { useFieldManager as R, getFieldHandler as L, FieldDecorator as E } from "@palmyralabs/rt-forms";
import { getFieldLabel as H } from "./util.js";
const P = x(function(e, a) {
  const c = (t) => {
    if (t != null && t != null)
      return parseInt(t);
  }, l = R(e.attribute, e, { format: c }), { getError: d, getValue: m, setValue: f, mutateOptions: g, refreshError: C } = l, F = a || u(null), o = d(), i = u(null), h = e?.variant || "standard";
  I(F, () => ({
    ...L(l),
    focus() {
      i.current.focus();
    }
  }), [l]);
  var r = l.getFieldProps();
  return r.onChange = (t) => {
    if (!e.readOnly) {
      const v = t.target.value, s = t.target.value.replace(/\D/g, "");
      v == s && (f(s), e.onChange && e.onChange(t));
    }
  }, r.onBlur = C, /* @__PURE__ */ n(b, { children: !g.visible && /* @__PURE__ */ n(
    E,
    {
      label: H(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        M,
        {
          label: e.label,
          variant: h,
          fullWidth: !0,
          inputRef: i,
          ...r,
          value: m(),
          error: o.status,
          helperText: o.message
        }
      )
    }
  ) });
});
export {
  P as MuiIntegerField
};
