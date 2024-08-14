import { jsx as a, Fragment as F } from "react/jsx-runtime";
import { forwardRef as C, useRef as u, useImperativeHandle as h } from "react";
import { TextField as v } from "@mui/material";
import { useFieldManager as M, getFieldHandler as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import L from "./FieldDecorator.js";
const w = C(function(e, r) {
  const t = M(e.attribute, e), { getError: s, getValue: c, setValue: d, mutateOptions: m } = t, f = r || u(null), n = s(), i = u(null), g = (e == null ? void 0 : e.variant) || "standard";
  h(f, () => ({
    ...x(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  var l = t.getFieldProps();
  delete l.muiProps, l.onChange = (o) => {
    e.readOnly || d(o.target.value.replace(/[^\d\.\+\-]/g, ""));
  };
  const b = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ a(F, { children: !m.visible && /* @__PURE__ */ a(
    L,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        v,
        {
          label: b,
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
  w as MuiNumberField
};
