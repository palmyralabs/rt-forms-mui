import { jsx as t, Fragment as C } from "react/jsx-runtime";
import { forwardRef as b, useRef as i, useImperativeHandle as k } from "react";
import { FormControl as F, FormControlLabel as g, Checkbox as R } from "@mui/material";
import x from "./FieldDecorator.js";
import { useFieldManager as O, getFieldHandler as v } from "@palmyralabs/rt-forms";
import { getFieldLabel as I } from "./util.js";
import { b as L, c as M } from "../../../chunks/index3.js";
const D = b(function(e, l) {
  const n = O(e.attribute, e), { getValue: a, setValue: s, mutateOptions: u } = n, d = l || i(null), m = e.icon || L, f = e.checkedIcon || M, h = a() == !0, c = i(null);
  k(d, () => ({
    ...v(n),
    focus() {
      c.current.checked = !0, c.current.focus();
    },
    setOptions(q) {
    },
    getOptions() {
    }
  }), [n]);
  var r = n.getFieldProps();
  return r.onChange = (o) => {
    e.readOnly || s(o.target.checked);
  }, /* @__PURE__ */ t(C, { children: !u.visible && /* @__PURE__ */ t(
    x,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(F, { ...r, value: a(), children: /* @__PURE__ */ t(
        g,
        {
          control: /* @__PURE__ */ t(
            R,
            {
              className: "customCheckbox",
              icon: /* @__PURE__ */ t(m, {}),
              checkedIcon: /* @__PURE__ */ t(f, {}),
              checked: h,
              disabled: e.disabled,
              readOnly: e.readOnly,
              inputRef: (o) => {
                c.current = o;
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
