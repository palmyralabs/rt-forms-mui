import { jsx as t, Fragment as P } from "react/jsx-runtime";
import { forwardRef as v, useRef as c, useState as x, useImperativeHandle as M } from "react";
import { TextField as y, IconButton as R } from "@mui/material";
import { useFieldManager as V, getFieldHandler as I } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import O from "./FieldDecorator.js";
import { Visibility as H, VisibilityOff as S } from "@mui/icons-material";
const q = v(function(e, n) {
  var u;
  const a = V(e.attribute, e), { getError: d, getValue: m, setValue: f, mutateOptions: b } = a, g = n || c(null), r = d(), [s, h] = x(!1), o = c(null), C = ((u = e == null ? void 0 : e.muiProps) == null ? void 0 : u.variant) || "standard";
  M(g, () => ({
    ...I(a),
    focus() {
      o.current.focus();
    }
  }), [a]);
  var i = a.getFieldProps();
  i.onChange = (l) => {
    e.readOnly || f(l.target.value);
  };
  const F = {
    endAdornment: /* @__PURE__ */ t(R, { onClick: () => h((l) => !l), children: s ? /* @__PURE__ */ t(H, {}) : /* @__PURE__ */ t(S, {}) })
  }, w = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ t(P, { children: !b.visible && /* @__PURE__ */ t(
    O,
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
          type: s ? "text" : "password",
          label: w,
          variant: C,
          fullWidth: !0,
          inputRef: o,
          ...i,
          value: m(),
          error: r.status,
          helperText: r.message
        }
      )
    }
  ) });
});
export {
  q as MuiPassword
};
