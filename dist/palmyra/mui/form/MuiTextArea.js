import { jsx as l, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as s, useImperativeHandle as b } from "react";
import { TextField as x } from "@mui/material";
import { useFieldManager as v, getFieldHandler as R, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as T } from "./util.js";
const V = F(function(e, n) {
  const t = v(e.attribute, e), { getError: u, getValue: c, setValue: m, mutateOptions: d, refreshError: f } = t, g = n || s(null), o = u(), i = s(null), C = e.variant || "standard";
  b(g, () => ({
    ...R(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  var a = t.getFieldProps();
  return a.onChange = (r) => {
    e.readOnly || (m(r.target.value), e.onChange && e.onChange(r));
  }, a.onBlur = f, /* @__PURE__ */ l(h, { children: !d.visible && /* @__PURE__ */ l(
    M,
    {
      label: T(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        x,
        {
          variant: C,
          label: e.label,
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          inputRef: i,
          ...a,
          value: c(),
          error: o.status,
          helperText: o.message
        }
      )
    }
  ) });
});
export {
  V as MuiTextArea
};
