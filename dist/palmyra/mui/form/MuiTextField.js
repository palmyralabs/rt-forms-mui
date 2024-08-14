import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as C, useRef as s, useImperativeHandle as h } from "react";
import { TextField as v } from "@mui/material";
import { useFieldManager as x, getFieldHandler as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import T from "./FieldDecorator.js";
const D = C(function(e, a) {
  const t = x(e.attribute, e), { getError: u, getValue: c, setValue: d, mutateOptions: m } = t, f = a || s(null), r = u(), n = s(null), g = e.variant || "standard";
  h(f, () => ({
    ...M(t),
    focus() {
      n.current.focus();
    }
  }), [t]);
  var o = t.getFieldProps();
  o.onChange = (i) => {
    e.readOnly || d(i.target.value);
  };
  const F = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ l(b, { children: !m.visible && /* @__PURE__ */ l(
    T,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        v,
        {
          label: F,
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
  D as MuiTextField
};
