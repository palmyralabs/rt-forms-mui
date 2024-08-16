import { jsx as a, Fragment as h } from "react/jsx-runtime";
import { forwardRef as v, useRef as u, useImperativeHandle as y } from "react";
import { LocalizationProvider as M, DatePicker as Y } from "@mui/x-date-pickers";
import { getFieldLabel as x } from "./util.js";
import L from "./FieldDecorator.js";
import d from "dayjs";
import { useFieldManager as O, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { A as V } from "../../../chunks/AdapterDayjs.js";
const q = v(function(e, n) {
  const l = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", m = (t) => t ? d(t, l) : d(void 0), f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(l);
  }, r = O(e.attribute, e, { format: f, parse: m }), { getError: P, getValue: g, setValue: C, mutateOptions: F } = r, D = n || u(null), i = P(), o = u(null), b = e.variant || "standard";
  y(D, () => ({
    ...R(r),
    focus() {
      o.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var s = r.getFieldProps();
  return s.onChange = (t) => {
    e.readOnly || C(t);
  }, /* @__PURE__ */ a(h, { children: !F.visible && /* @__PURE__ */ a(
    L,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(M, { dateAdapter: V, children: /* @__PURE__ */ a(
        Y,
        {
          readOnly: e.readOnly,
          ...e.muiProps,
          format: c,
          label: e.label,
          slotProps: {
            textField: {
              error: i.status,
              helperText: i.message,
              variant: b,
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
  q as MuiDatePicker
};
