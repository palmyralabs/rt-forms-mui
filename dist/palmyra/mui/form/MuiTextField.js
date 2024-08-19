import { jsx as l, Fragment as C } from "react/jsx-runtime";
import { forwardRef as F, useRef as s, useImperativeHandle as h } from "react";
import { TextField as b } from "@mui/material";
import { useFieldManager as v, getFieldHandler as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import R from "./FieldDecorator.js";
const y = F(function(e, n) {
  const t = v(e.attribute, e), { getError: u, getValue: c, setValue: d, mutateOptions: m } = t, f = n || s(null), r = u(), i = s(null), g = e.variant || "standard";
  h(f, () => ({
    ...x(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  var o = t.getFieldProps();
  return o.onChange = (a) => {
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
  y as MuiTextField
};
