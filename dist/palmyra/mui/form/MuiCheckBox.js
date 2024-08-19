import { jsx as n, Fragment as b } from "react/jsx-runtime";
import { forwardRef as g, useRef as u, useImperativeHandle as k } from "react";
import { FormControl as F, FormControlLabel as R, Checkbox as x } from "@mui/material";
import O from "./FieldDecorator.js";
import { useFieldManager as v, getFieldHandler as I } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import { T as M, a as y } from "../../../chunks/index3.js";
const D = g(function(e, l) {
  const o = v(e.attribute, e), { getValue: a, setValue: s, mutateOptions: d } = o, m = l || u(null), h = e.icon || M, C = e.checkedIcon || y, f = a() == !0, c = u(null);
  k(m, () => ({
    ...I(o),
    focus() {
      c.current.checked = !0, c.current.focus();
    },
    setOptions(i) {
    },
    getOptions() {
    }
  }), [o]);
  var r = o.getFieldProps();
  return r.onChange = (t, i) => {
    e.readOnly || (s(t.target.checked), e.onChange && e.onChange(t, i));
  }, /* @__PURE__ */ n(b, { children: !d.visible && /* @__PURE__ */ n(
    O,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(F, { ...r, value: a(), children: /* @__PURE__ */ n(
        R,
        {
          control: /* @__PURE__ */ n(
            x,
            {
              className: "customCheckbox",
              icon: /* @__PURE__ */ n(h, {}),
              checkedIcon: /* @__PURE__ */ n(C, {}),
              checked: f,
              disabled: e.disabled,
              readOnly: e.readOnly,
              inputRef: (t) => {
                c.current = t;
              }
            }
          ),
          label: e.label
        }
      ) })
    }
  ) });
});
export {
  D as MuiCheckBox
};
