import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as C, useRef as s, useImperativeHandle as h } from "react";
import { TextField as v } from "@mui/material";
import { useFieldManager as M, getFieldHandler as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import I from "./FieldDecorator.js";
const w = C(function(e, a) {
  const t = M(e.attribute, e), { getError: u, getValue: c, setValue: d, mutateOptions: m } = t, f = a || s(null), n = u(), r = s(null), g = (e == null ? void 0 : e.variant) || "standard";
  h(f, () => ({
    ...x(t),
    focus() {
      r.current.focus();
    }
  }), [t]);
  var i = t.getFieldProps();
  i.onChange = (o) => {
    e.readOnly || d(o.target.value.replace(/\D/g, ""));
  };
  const F = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ l(b, { children: !m.visible && /* @__PURE__ */ l(
    I,
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
          inputRef: r,
          ...i,
          value: c(),
          error: n.status,
          helperText: n.message
        }
      )
    }
  ) });
});
export {
  w as MuiIntegerField
};
