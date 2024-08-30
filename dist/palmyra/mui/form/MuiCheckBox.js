import { jsx as l, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as i, useImperativeHandle as b } from "react";
import { FormControlLabel as g, Checkbox as F } from "@mui/material";
import { useFieldManager as k, getFieldHandler as O, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
const V = h(function(e, o) {
  const n = k(e.attribute, e), { getValue: s, setValue: u, mutateOptions: d } = n, m = o || i(null), f = s() == !0, a = i(null);
  b(m, () => ({
    ...O(n),
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
  }, /* @__PURE__ */ l(C, { children: !d.visible && /* @__PURE__ */ l(
    x,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        g,
        {
          control: /* @__PURE__ */ l(
            F,
            {
              ...r,
              checked: f,
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
  V as MuiCheckBox
};
