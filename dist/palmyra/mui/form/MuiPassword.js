import { jsx as t, Fragment as w } from "react/jsx-runtime";
import { forwardRef as P, useRef as c, useState as v, useImperativeHandle as x } from "react";
import { TextField as y, IconButton as M } from "@mui/material";
import { useFieldManager as R, getFieldHandler as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as I } from "./util.js";
import L from "./FieldDecorator.js";
import { Visibility as O, VisibilityOff as H } from "@mui/icons-material";
const W = P(function(e, s) {
  var u;
  const a = R(e.attribute, e), { getError: d, getValue: m, setValue: f, mutateOptions: g } = a, b = s || c(null), n = d(), [l, h] = v(!1), o = c(null), C = ((u = e == null ? void 0 : e.muiProps) == null ? void 0 : u.variant) || "standard";
  x(b, () => ({
    ...V(a),
    focus() {
      o.current.focus();
    }
  }), [a]);
  var i = a.getFieldProps();
  i.onChange = (r) => {
    e.readOnly || f(r.target.value);
  };
  const F = {
    endAdornment: /* @__PURE__ */ t(M, { onClick: () => h((r) => !r), children: l ? /* @__PURE__ */ t(O, {}) : /* @__PURE__ */ t(H, {}) })
  };
  return /* @__PURE__ */ t(w, { children: !g.visible && /* @__PURE__ */ t(
    L,
    {
      label: I(e),
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
          variant: C,
          fullWidth: !0,
          inputRef: o,
          ...i,
          value: m(),
          error: n.status,
          helperText: n.message
        }
      )
    }
  ) });
});
export {
  W as MuiPassword
};
