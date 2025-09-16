import { jsx as l, Fragment as v } from "react/jsx-runtime";
import { forwardRef as D, useRef as d, useImperativeHandle as M } from "react";
import { LocalizationProvider as Y, DatePicker as V } from "@mui/x-date-pickers";
import { getFieldLabel as y } from "./util.js";
import x from "dayjs";
import { useFieldManager as L, getFieldHandler as R, FieldDecorator as j } from "@palmyralabs/rt-forms";
import { A as k } from "../../../chunks/AdapterDayjs.js";
const T = D(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", o = (t) => {
    if (t)
      return x(t, i);
  }, f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, a = L(e.attribute, e, { format: f, parse: o }), { getError: m, getValue: g, setValue: h, mutateOptions: C, refreshError: P } = a, F = n || d(null), s = m(), u = d(null);
  M(F, () => ({
    ...R(a),
    focus() {
      u.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var r = a.getFieldProps();
  return r.defaultValue && (r.defaultValue = o(r.defaultValue)), r.onChange = (t, b) => {
    e.readOnly || (h(t), e.onChange && e.onChange(t, b));
  }, r.onBlur = P, /* @__PURE__ */ l(v, { children: !C.visible && /* @__PURE__ */ l(
    j,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(Y, { dateAdapter: k, children: /* @__PURE__ */ l(
        V,
        {
          format: c,
          label: e.label,
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
              variant: e.variant || "standard",
              fullWidth: e.fullWidth || !0,
              inputRef: u
            }
          },
          ...r,
          value: g()
        }
      ) })
    }
  ) });
});
export {
  T as MuiDatePicker
};
