import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { forwardRef as F, useRef as s, useImperativeHandle as h } from "react";
import { TextField as v } from "@mui/material";
import { useFieldManager as x, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import T from "./FieldDecorator.js";
const y = F(function(e, l) {
  const t = x(e.attribute, e), { getError: u, getValue: c, setValue: m, mutateOptions: d } = t, f = l || s(null), r = u(), n = s(null), g = e.variant || "standard";
  h(f, () => ({
    ...R(t),
    focus() {
      n.current.focus();
    }
  }), [t]);
  var o = t.getFieldProps();
  o.onChange = (i) => {
    e.readOnly || m(i.target.value);
  };
  const b = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ a(C, { children: !d.visible && /* @__PURE__ */ a(
    T,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        v,
        {
          variant: g,
          label: b,
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
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
  y as MuiTextArea
};
