import { jsx as l, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as s, useImperativeHandle as F } from "react";
import { TextField as b } from "@mui/material";
import { useFieldManager as v, getFieldHandler as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import R from "./FieldDecorator.js";
const y = h(function(e, n) {
  const t = v(e.attribute, e), { getError: u, getValue: c, setValue: d, mutateOptions: m } = t, f = n || s(null), r = u(), o = s(null), g = e.variant || "standard";
  F(f, () => ({
    ...x(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var i = t.getFieldProps();
  return i.onChange = (a) => {
    e.readOnly || (d(a.target.value), e.onChange && e.onChange(a));
  }, /* @__PURE__ */ l(C, { children: !m.visible && /* @__PURE__ */ l(
    R,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        b,
        {
          label: e.label,
          variant: g,
          fullWidth: !0,
          inputRef: o,
          ...i,
          onChange: e.onChange,
          value: c(),
          error: r.status,
          helperText: r.message
        }
      )
    }
  ) });
});
export {
  y as MuiTextField
};
