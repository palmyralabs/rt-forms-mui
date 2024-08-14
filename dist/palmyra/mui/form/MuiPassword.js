import { jsx as t, Fragment as F } from "react/jsx-runtime";
import { forwardRef as v, useRef as d, useState as x, useImperativeHandle as M } from "react";
import { TextField as y, IconButton as O } from "@mui/material";
import { useFieldManager as R, getFieldHandler as V } from "@palmyralabs/rt-forms";
import { generateOptions as I, getFieldLabel as L } from "./util.js";
import H from "./FieldDecorator.js";
import { Visibility as S, VisibilityOff as T } from "@mui/icons-material";
const z = v(function(e, r) {
  var c;
  const n = R(e.attribute, e), { getError: m, getValue: f, setValue: b, mutateOptions: s } = n, g = r || d(null), o = m(), [i, h] = x(!1), u = d(null), C = ((c = e == null ? void 0 : e.muiProps) == null ? void 0 : c.variant) || "standard";
  M(g, () => ({
    ...V(n),
    focus() {
      u.current.focus();
    }
  }), [n]);
  var l = I(e, s, f());
  delete l.muiProps, l.onChange = (a) => {
    e.readOnly || b(a.target.value);
  };
  const P = {
    endAdornment: /* @__PURE__ */ t(O, { onClick: () => h((a) => !a), children: i ? /* @__PURE__ */ t(S, {}) : /* @__PURE__ */ t(T, {}) })
  }, w = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ t(F, { children: !s.visible && /* @__PURE__ */ t(
    H,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        y,
        {
          ...l,
          InputProps: P,
          ...e.muiProps,
          type: i ? "text" : "password",
          label: w,
          variant: C,
          fullWidth: !0,
          inputRef: u,
          error: o.status,
          helperText: o.message
        }
      )
    }
  ) });
});
export {
  z as MuiPassword
};
