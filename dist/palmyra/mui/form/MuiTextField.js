import { jsx as l, Fragment as F } from "react/jsx-runtime";
import { forwardRef as C, useRef as s, useImperativeHandle as b } from "react";
import { TextField as h } from "@mui/material";
import { useFieldManager as v, getFieldHandler as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import R from "./FieldDecorator.js";
const y = C(function(e, a) {
  const t = v(e.attribute, e), { getError: u, getValue: c, setValue: d, mutateOptions: m } = t, f = a || s(null), r = u(), n = s(null), g = e.variant || "standard";
  b(f, () => ({
    ...x(t),
    focus() {
      n.current.focus();
    }
  }), [t]);
  var o = t.getFieldProps();
  return o.onChange = (i) => {
    e.readOnly || d(i.target.value);
  }, /* @__PURE__ */ l(F, { children: !m.visible && /* @__PURE__ */ l(
    R,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        h,
        {
          label: e.label,
          variant: g,
          fullWidth: !0,
          inputRef: n,
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
