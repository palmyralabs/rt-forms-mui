import { jsx as l, Fragment as h } from "react/jsx-runtime";
import { forwardRef as b, useRef as i, useImperativeHandle as g } from "react";
import { FormControlLabel as F, Checkbox as k } from "@mui/material";
import { useFieldManager as O, getFieldHandler as x, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as v } from "./util.js";
const j = b(function(e, o) {
  const n = O(e.attribute, e), { getValue: s, setValue: u, mutateOptions: d, refreshError: m } = n, f = o || i(null), C = s() == !0, a = i(null);
  g(f, () => ({
    ...x(n),
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    setOptions(c) {
    },
    getOptions() {
    }
  }), [n]);
  var r = n.getFieldProps();
  return r.onChange = (t, c) => {
    e.readOnly || (u(t.target.checked), e.onChange && e.onChange(t, c));
  }, r.onBlur = m, /* @__PURE__ */ l(h, { children: !d.visible && /* @__PURE__ */ l(
    R,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        F,
        {
          control: /* @__PURE__ */ l(
            k,
            {
              ...r,
              checked: C,
              disabled: e.disabled,
              readOnly: e.readOnly,
              inputRef: (t) => {
                a.current = t;
              }
            }
          ),
          label: e.label
        }
      )
    }
  ) });
});
export {
  j as MuiCheckBox
};
