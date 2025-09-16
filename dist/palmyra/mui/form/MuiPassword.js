import { jsx as t, Fragment as w } from "react/jsx-runtime";
import { forwardRef as P, useRef as u, useState as v, useImperativeHandle as x } from "react";
import { TextField as y, IconButton as M } from "@mui/material";
import { useFieldManager as R, getFieldHandler as V, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import { Visibility as O, VisibilityOff as B } from "@mui/icons-material";
const D = P(function(e, s) {
  const a = R(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f, refreshError: g } = a, h = s || u(null), o = c(), [l, C] = v(!1), i = u(null), b = e?.variant || "standard";
  x(h, () => ({
    ...V(a),
    focus() {
      i.current.focus();
    }
  }), [a]);
  var n = a.getFieldProps();
  n.onChange = (r) => {
    e.readOnly || (m(r.target.value), e.onChange && e.onChange(r));
  }, n.onBlur = g;
  const F = {
    endAdornment: /* @__PURE__ */ t(M, { onClick: () => C((r) => !r), children: l ? /* @__PURE__ */ t(O, {}) : /* @__PURE__ */ t(B, {}) })
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
          type: l ? "text" : "password",
          label: e.label,
          variant: b,
          fullWidth: !0,
          inputRef: i,
          ...n,
          value: d(),
          error: o.status,
          helperText: o.message
        }
      )
    }
  ) });
});
export {
  D as MuiPassword
};
