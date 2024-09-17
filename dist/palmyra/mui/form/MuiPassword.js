import { jsx as t, Fragment as w } from "react/jsx-runtime";
import { forwardRef as P, useRef as u, useState as v, useImperativeHandle as x } from "react";
import { TextField as y, IconButton as M } from "@mui/material";
import { useFieldManager as R, getFieldHandler as V, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import { Visibility as O, VisibilityOff as B } from "@mui/icons-material";
const D = P(function(e, l) {
  const n = R(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f, refreshError: g } = n, h = l || u(null), s = c(), [o, C] = v(!1), i = u(null), b = (e == null ? void 0 : e.variant) || "standard";
  x(h, () => ({
    ...V(n),
    focus() {
      i.current.focus();
    }
  }), [n]);
  var r = n.getFieldProps();
  r.onChange = (a) => {
    e.readOnly || (m(a.target.value), e.onChange && e.onChange(a));
  }, r.onBlur = g;
  const F = {
    endAdornment: /* @__PURE__ */ t(M, { onClick: () => C((a) => !a), children: o ? /* @__PURE__ */ t(O, {}) : /* @__PURE__ */ t(B, {}) })
  };
  return /* @__PURE__ */ t(w, { children: !f.visible && /* @__PURE__ */ t(
    I,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        y,
        {
          InputProps: F,
          type: o ? "text" : "password",
          label: e.label,
          variant: b,
          fullWidth: !0,
          inputRef: i,
          ...r,
          value: d(),
          error: s.status,
          helperText: s.message
        }
      )
    }
  ) });
});
export {
  D as MuiPassword
};
