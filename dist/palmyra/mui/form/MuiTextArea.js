import { jsx as l, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as s, useImperativeHandle as F } from "react";
import { TextField as b } from "@mui/material";
import { useFieldManager as x, getFieldHandler as v, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
const V = h(function(e, n) {
  const t = x(e.attribute, e), { getError: u, getValue: c, setValue: m, mutateOptions: d } = t, f = n || s(null), r = u(), i = s(null), g = e.variant || "standard";
  F(f, () => ({
    ...v(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  var o = t.getFieldProps();
  return o.onChange = (a) => {
    e.readOnly || (m(a.target.value), e.onChange && e.onChange(a));
  }, /* @__PURE__ */ l(C, { children: !d.visible && /* @__PURE__ */ l(
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
          variant: g,
          label: e.label,
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          inputRef: i,
          ...o,
          value: c(),
          error: r.status,
          helperText: r.message
        }
      )
    }
  ) });
});
export {
  V as MuiTextArea
};
