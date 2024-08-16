import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { forwardRef as F, useRef as i, useImperativeHandle as b } from "react";
import { TextField as h } from "@mui/material";
import { useFieldManager as v, getFieldHandler as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import M from "./FieldDecorator.js";
const j = F(function(e, r) {
  const t = v(e.attribute, e), { getError: u, getValue: m, setValue: c, mutateOptions: d } = t, f = r || i(null), l = u(), n = i(null), g = e.variant || "standard";
  b(f, () => ({
    ...x(t),
    focus() {
      n.current.focus();
    }
  }), [t]);
  var o = t.getFieldProps();
  return o.onChange = (s) => {
    e.readOnly || c(s.target.value);
  }, /* @__PURE__ */ a(C, { children: !d.visible && /* @__PURE__ */ a(
    M,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        h,
        {
          variant: g,
          label: e.label,
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          inputRef: n,
          ...o,
          value: m(),
          error: l.status,
          helperText: l.message
        }
      )
    }
  ) });
});
export {
  j as MuiTextArea
};
