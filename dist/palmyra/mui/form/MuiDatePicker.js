import { jsx as a, Fragment as h } from "react/jsx-runtime";
import { forwardRef as v, useRef as d, useImperativeHandle as y } from "react";
import { LocalizationProvider as Y, DatePicker as x } from "@mui/x-date-pickers";
import { getFieldLabel as L } from "./util.js";
import O from "./FieldDecorator.js";
import u from "dayjs";
import { useFieldManager as R, getFieldHandler as V } from "@palmyralabs/rt-forms";
import { A as j } from "../../../chunks/AdapterDayjs.js";
const w = v(function(e, l) {
  const n = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", m = (t) => t ? u(t, n) : u(void 0), f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(n);
  }, r = R(e.attribute, e, { format: f, parse: m }), { getError: P, getValue: g, setValue: C, mutateOptions: F } = r, b = l || d(null), i = P(), o = d(null), D = e.variant || "standard";
  y(b, () => ({
    ...V(r),
    focus() {
      o.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var s = r.getFieldProps();
  s.onChange = (t) => {
    e.readOnly || C(t);
  };
  const M = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ a(h, { children: !F.visible && /* @__PURE__ */ a(
    O,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(Y, { dateAdapter: j, children: /* @__PURE__ */ a(
        x,
        {
          readOnly: e.readOnly,
          ...e.muiProps,
          format: c,
          label: M,
          slotProps: {
            textField: {
              error: i.status,
              helperText: i.message,
              variant: D,
              fullWidth: !0,
              inputRef: o
            }
          },
          ...s,
          value: g()
        }
      ) })
    }
  ) });
});
export {
  w as MuiDatePicker
};
