import { jsx as t, Fragment as F } from "react/jsx-runtime";
import { forwardRef as w, useRef as u, useState as P, useImperativeHandle as v } from "react";
import { TextField as x, IconButton as y } from "@mui/material";
import { useFieldManager as M, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import I from "./FieldDecorator.js";
import { Visibility as L, VisibilityOff as O } from "@mui/icons-material";
const E = w(function(e, l) {
  const n = M(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f } = n, g = l || u(null), r = c(), [o, h] = P(!1), s = u(null), C = (e == null ? void 0 : e.variant) || "standard";
  v(g, () => ({
    ...R(n),
    focus() {
      s.current.focus();
    }
  }), [n]);
  var i = n.getFieldProps();
  i.onChange = (a) => {
    e.readOnly || (m(a.target.value), e.onChange && e.onChange(a));
  };
  const b = {
    endAdornment: /* @__PURE__ */ t(y, { onClick: () => h((a) => !a), children: o ? /* @__PURE__ */ t(L, {}) : /* @__PURE__ */ t(O, {}) })
  };
  return /* @__PURE__ */ t(F, { children: !f.visible && /* @__PURE__ */ t(
    I,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        x,
        {
          InputProps: b,
          type: o ? "text" : "password",
          label: e.label,
          variant: C,
          fullWidth: !0,
          inputRef: s,
          ...i,
          value: d(),
          error: r.status,
          helperText: r.message
        }
      )
    }
  ) });
});
export {
  E as MuiPassword
};
