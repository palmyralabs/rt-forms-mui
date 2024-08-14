import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as m, useImperativeHandle as v } from "react";
import { TextField as M } from "@mui/material";
import { useFieldManager as x, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { generateOptions as L, getFieldLabel as O } from "./util.js";
import P from "./FieldDecorator.js";
const D = h(function(e, r) {
  var u;
  const t = x(e.attribute, e), { getError: c, getValue: d, setValue: f, mutateOptions: n } = t, g = r || m(null), i = c(), o = m(null), b = ((u = e == null ? void 0 : e.muiProps) == null ? void 0 : u.variant) || "standard";
  v(g, () => ({
    ...R(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var l = L(e, n, d());
  delete l.muiProps, l.onChange = (s) => {
    e.readOnly || f(s.target.value.replace(/[^\d\.\+\-]/g, ""));
  };
  const F = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ a(C, { children: !n.visible && /* @__PURE__ */ a(
    P,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        M,
        {
          ...l,
          ...e.muiProps,
          label: F,
          variant: b,
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
  D as MuiNumberField
};
