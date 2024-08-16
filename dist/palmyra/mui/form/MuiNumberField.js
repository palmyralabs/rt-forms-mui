import { jsx as a, Fragment as F } from "react/jsx-runtime";
import { forwardRef as b, useRef as u, useImperativeHandle as C } from "react";
import { TextField as h } from "@mui/material";
import { useFieldManager as v, getFieldHandler as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import R from "./FieldDecorator.js";
const j = b(function(e, r) {
  const t = v(e.attribute, e), { getError: s, getValue: c, setValue: m, mutateOptions: d } = t, f = r || u(null), n = s(), i = u(null), g = (e == null ? void 0 : e.variant) || "standard";
  C(f, () => ({
    ...x(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  var l = t.getFieldProps();
  return delete l.muiProps, l.onChange = (o) => {
    e.readOnly || m(o.target.value.replace(/[^\d\.\+\-]/g, ""));
  }, /* @__PURE__ */ a(F, { children: !d.visible && /* @__PURE__ */ a(
    R,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        h,
        {
          label: e.label,
          variant: g,
          fullWidth: !0,
          inputRef: i,
          ...l,
          value: c(),
          error: n.status,
          helperText: n.message
        }
      )
    }
  ) });
});
export {
  j as MuiNumberField
};
