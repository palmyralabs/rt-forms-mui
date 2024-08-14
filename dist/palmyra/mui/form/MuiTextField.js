import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as c, useImperativeHandle as v } from "react";
import { TextField as x } from "@mui/material";
import { useFieldManager as M, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { generateOptions as T, getFieldLabel as L } from "./util.js";
import O from "./FieldDecorator.js";
const E = h(function(e, r) {
  var s;
  const t = M(e.attribute, e), { getError: m, getValue: d, setValue: f, mutateOptions: n } = t, g = r || c(null), i = m(), o = c(null), F = ((s = e.muiProps) == null ? void 0 : s.variant) || "standard";
  v(g, () => ({
    ...R(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var l = T(e, n, d());
  delete l.muiProps, l.onChange = (u) => {
    e.readOnly || f(u.target.value);
  };
  const b = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ a(C, { children: !n.visible && /* @__PURE__ */ a(
    O,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        x,
        {
          ...l,
          ...e.muiProps,
          label: b,
          variant: F,
          fullWidth: !0,
          inputRef: o,
          error: i.status,
          helperText: i.message
        }
      )
    }
  ) });
});
export {
  E as MuiTextField
};
