import { jsx as r, Fragment as h } from "react/jsx-runtime";
import { forwardRef as y, useRef as d, useImperativeHandle as Y } from "react";
import { LocalizationProvider as v, DatePicker as O } from "@mui/x-date-pickers";
import { generateOptions as x, getFieldLabel as L } from "./util.js";
import R from "./FieldDecorator.js";
import u from "dayjs";
import { useFieldManager as V, getFieldHandler as j } from "@palmyralabs/rt-forms";
import { A as k } from "../../../chunks/AdapterDayjs.js";
const B = y(function(e, n) {
  const l = e.serverPattern || e.displayPattern || "YYYY-MM-DD", m = e.displayPattern || e.serverPattern || "YYYY-MM-DD", f = (t) => t ? u(t, l) : u(void 0), P = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(l);
  }, a = V(e.attribute, e, { format: P, parse: f }), { getError: g, getValue: C, setValue: b, mutateOptions: i } = a, D = n || d(null), o = g(), s = d(null), F = e.variant || "standard";
  Y(D, () => ({
    ...j(a),
    focus() {
      s.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var c = x(e, i, C());
  c.onChange = (t) => {
    e.readOnly || b(t);
  };
  const M = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ r(h, { children: !i.visible && /* @__PURE__ */ r(
    R,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(v, { dateAdapter: k, children: /* @__PURE__ */ r(
        O,
        {
          ...c,
          readOnly: e.readOnly,
          ...e.muiProps,
          format: m,
          label: M,
          slotProps: {
            textField: {
              error: o.status,
              helperText: o.message,
              variant: F,
              fullWidth: !0,
              inputRef: s
            }
          }
        }
      ) })
    }
  ) });
});
export {
  B as MuiDatePicker
};
