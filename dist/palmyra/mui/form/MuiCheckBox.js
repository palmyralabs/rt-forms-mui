import { jsx as t, Fragment as C } from "react/jsx-runtime";
import { forwardRef as b, useRef as s, useImperativeHandle as k } from "react";
import { FormControl as g, FormControlLabel as F, Checkbox as O } from "@mui/material";
import R from "./FieldDecorator.js";
import { useFieldManager as x, getFieldHandler as I } from "@palmyralabs/rt-forms";
import { generateOptions as v, getFieldLabel as L } from "./util.js";
import { b as M, c as y } from "../../../chunks/index3.js";
const D = b(function(e, a) {
  const o = x(e.attribute, e), { getValue: r, setValue: u, mutateOptions: i } = o, d = a || s(null), m = e.icon || M, f = e.checkedIcon || y, h = r() == !0, c = s(null);
  k(d, () => ({
    ...I(o),
    focus() {
      c.current.checked = !0, c.current.focus();
    },
    setOptions(B) {
    },
    getOptions() {
    }
  }), [o]);
  var l = v(e, i, r());
  return delete l.muiProps, l.onChange = (n) => {
    e.readOnly || u(n.target.checked);
  }, /* @__PURE__ */ t(C, { children: !i.visible && /* @__PURE__ */ t(
    R,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(g, { ...l, ...e.muiProps, children: /* @__PURE__ */ t(
        F,
        {
          control: /* @__PURE__ */ t(
            O,
            {
              className: "customCheckbox",
              icon: /* @__PURE__ */ t(m, {}),
              checkedIcon: /* @__PURE__ */ t(f, {}),
              checked: h,
              disabled: e.disabled,
              readOnly: e.readOnly,
              inputRef: (n) => {
                c.current = n;
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
