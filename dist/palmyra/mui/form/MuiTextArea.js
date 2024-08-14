import { jsx as l, Fragment as C } from "react/jsx-runtime";
import { forwardRef as F, useRef as u, useImperativeHandle as h } from "react";
import { TextField as x } from "@mui/material";
import { useFieldManager as v, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { generateOptions as M, getFieldLabel as T } from "./util.js";
import w from "./FieldDecorator.js";
const y = F(function(e, r) {
  const t = v(e.attribute, e), { getError: m, getValue: c, setValue: d, mutateOptions: n } = t, f = r || u(null), i = m(), o = u(null), g = e.muiProps.variant || "standard";
  h(f, () => ({
    ...R(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var a = M(e, n, c());
  delete a.muiProps, a.onChange = (s) => {
    e.readOnly || d(s.target.value);
  };
  const b = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ l(C, { children: !n.visible && /* @__PURE__ */ l(
    w,
    {
      label: T(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        x,
        {
          ...a,
          ...e.muiProps,
          variant: g,
          label: b,
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          inputRef: o,
          error: i.status,
          helperText: i.message
        }
      )
    }
  ) });
});
export {
  y as MuiTextArea
};
