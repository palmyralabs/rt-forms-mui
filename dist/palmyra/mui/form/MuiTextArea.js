import { jsx as l, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as s, useImperativeHandle as F } from "react";
import { TextField as b } from "@mui/material";
import { useFieldManager as x, getFieldHandler as v } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import M from "./FieldDecorator.js";
const j = h(function(e, r) {
  const t = x(e.attribute, e), { getError: u, getValue: m, setValue: c, mutateOptions: d } = t, f = r || s(null), n = u(), o = s(null), g = e.variant || "standard";
  F(f, () => ({
    ...v(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var i = t.getFieldProps();
  return i.onChange = (a) => {
    e.readOnly || (c(a.target.value), e.onChange && e.onChange(a));
  }, /* @__PURE__ */ l(C, { children: !d.visible && /* @__PURE__ */ l(
    M,
    {
      label: R(e),
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
  j as MuiTextArea
};
