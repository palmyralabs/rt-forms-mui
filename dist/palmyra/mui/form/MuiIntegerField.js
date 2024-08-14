import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as c, useImperativeHandle as v } from "react";
import { TextField as M } from "@mui/material";
import { useFieldManager as x, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { generateOptions as I, getFieldLabel as L } from "./util.js";
import O from "./FieldDecorator.js";
const y = h(function(e, n) {
  var s;
  const t = x(e.attribute, e), { getError: m, getValue: d, setValue: f, mutateOptions: r } = t, g = n || c(null), i = m(), o = c(null), F = ((s = e == null ? void 0 : e.muiProps) == null ? void 0 : s.variant) || "standard";
  v(g, () => ({
    ...R(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var l = I(e, r, d());
  delete l.muiProps, l.onChange = (u) => {
    e.readOnly || f(u.target.value.replace(/\D/g, ""));
  };
  const b = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ a(C, { children: !r.visible && /* @__PURE__ */ a(
    O,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        M,
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
  y as MuiIntegerField
};
